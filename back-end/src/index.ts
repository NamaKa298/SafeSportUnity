import 'module-alias/register';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin, { ServiceAccount } from 'firebase-admin';
import Anthropic from "@anthropic-ai/sdk";



// Initialiser Firebase Admin
import * as serviceAccount from '../../front-end/src/config/safesportunity-5bfeb-firebase-adminsdk-2t1jm-13635aa67a.json';
// Chemin vers ta clé privée Firebase Admin

dotenv.config();
console.clear();
const anthropic = new Anthropic();
// Initialiser Firebase Admin avec les bonnes configurations
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
});

const firestore = admin.firestore(); 0
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// // Fonction pour récupérer les données de userTrainingData
// const getUserTrainingData = async (userId: string) => {
//     try {
//         const userTrainingCollectionRef = firestore.collection(`/users/${userId}/userTrainingData`);
//         const querySnapshot = await userTrainingCollectionRef.get(); // Utilisation de la méthode 'get()' avec firebase-admin
//         const trainingData = querySnapshot.docs.map(doc => doc.data());
//         return trainingData;
//     } catch (error) {
//         console.error("Erreur lors de la récupération des données d'entraînement:", error);
//         throw new Error('Impossible de récupérer les données utilisateur');
//     }
// };


// Fonction pour stocker le plan d'entraînement dans Firebase
const storeTrainingPlan = async (userId: string, trainingPlan: any, sport: string, goalDistance: number) => {
    try {
        const trainingPlanRef = firestore.collection(`users/${userId}/UserTrainingPlans`);
        const newTrainingPlan = {
            date: new Date().toISOString(),
            plan: trainingPlan,
            sport: sport,
            goalDistance: goalDistance
        };
        await trainingPlanRef.add(newTrainingPlan);
        console.log('Plan d\'entraînement sauvegardé avec succès.');
    } catch (error) {
        console.error("Erreur lors de la sauvegarde du plan d'entraînement:", error);
        throw new Error('Impossible de sauvegarder le plan d\'entraînement');
    }
};


// Endpoint pour générer le plan d'entraînement
app.post('/generate-plan', async (req, res) => {
    const { age, goalDistance, goalPace, goalTime, goalType, height, longRunDays, pace, sex, speed, sport, trainingDays, uid, weeklyDistance, weight } = req.body;

    try {
        
        const trainingDaysSafe = Array.isArray(trainingDays) ? trainingDays : [];
        const longRunDaysSafe = Array.isArray(longRunDays) ? longRunDays : [];

        const userPrompt = `
        L'utilisateur est un/une : ${sex}.
        Il/elle a : ${age} ans.
        Il/elle mesure : ${height} cm et pèse : ${weight} kg.
        L'utilisateur souhaite faire du : ${sport}.
        il fait actuellement : ${weeklyDistance} km par semaine a une vitesse moyenne de : ${speed} km/h ou une allure de : ${pace} min/km.
        Objectif de l'utilisateur :
            ${goalType === 'finisher' ? `L'utilisateur souhaite simplement parvenir à terminer ${goalDistance}, sans objectif de temps, de vitesse moyenne, ni d'allure moyenne.` : ''}
            ${goalType === 'finisher with a time goal' ? `L'utilisateur souhaite terminer ${goalDistance} avec un objectif de temps de ${goalTime} ou avec un objectif de vitesse/allure moyenne de ${goalPace}.` : ''}

        Il peut s'entraîner ${trainingDaysSafe.join(', ')} par semaine et souhaite un plan d'entrainement sur 3 mois.
        les jours de préférence dans la semaine pour un entrainement supérieur à 1 heure sont : ${longRunDaysSafe.join(', ')}.
        fait une synthèse de l'utilisateur et de son objectif.
        Propose un plan d'entraînement détaillé jour par jour pendant 3 mois pour atteindre cet objectif.
        prend bien en compte le poids, la taille, l'âge de l'utilisateur et sa distance de course actuelle dans le plan d'entraînement.
        Si tu penses que l'objectif est trop ambitieux, suggère et propose un objectif plus réaliste.
        Attention au clacul des vitesses et des allures moyennes dans le plan d'entraînement par rapport à la distance de course.
        formate le texte en markdown titre en gras, double saut de ligne entre les titres, sous-titre en italique et liste à puce.
        `;

        // Envoi du prompt à l'API ChatGPT

        const msg = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 1000,
            temperature: 1.0,
            system: "Respond as a fitness coach, detailing the different exercises to perform each week and each day planned for training.",
            messages: [
                {
                "role": "user",
                "content": [
                    {
                    "type": "text",
                    "text": userPrompt
                    }
                ]
                }
            ]
            });
            // console.log(msg);
        
            // console.log('Plan d\'entraînement généré avec succès:', (msg.content[0] as any)?.text);
            console.log('Plan d\'entraînement généré avec succès:', (msg.content[0] as any)?.text);
         // Stocker le plan dans Firestore
         await storeTrainingPlan(uid, (msg.content[0] as any)?.text, sport, goalDistance);
        
        // Retourner le plan généré au frontend
        res.json({ success: true, trainingPlan: (msg.content[0] as any)?.text });
    } catch (error: any) {
        console.error("Erreur lors de la génération du plan d'entraînement:", error.message);
        res.status(500).json({ error: 'Une erreur est survenue lors de la génération du plan d\'entraînement.' });
    }
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
