import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint pour générer le plan d'entraînement
app.post('/generate-plan', async (req, res) => {
    const { objectif, duree_mois, age, niveau } = req.body;

    // Construction du prompt
    const userPrompt = `
    L'utilisateur veut atteindre l'objectif suivant : ${objectif}.
    Il peut s'entraîner 3 fois par semaine, sur une période de ${duree_mois} mois.
    Il s'agit d'un(e) ${age} ans, avec un niveau ${niveau}.
    Propose un plan d'entraînement détaillé pour atteindre cet objectif.
    `;

    try {
        const response = await axios.post('https://api-inference.huggingface.co/models/nom_du_modele_llama-3.1-8b-instruct', 
        {
            inputs: userPrompt,
            options: { use_cache: false }
        }, 
        {
            headers: {
                Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`
            }
        });

        const trainingPlan = response.data;
        res.json(trainingPlan);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Une erreur est survenue lors de la génération du plan d\'entraînement.' });
    }
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
