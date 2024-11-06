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
        The user is: ${sex}.
        They are: ${age} years old.
        Their height is: ${height} cm and weight is: ${weight} kg.
        The user wants to practice: ${sport}.
        They currently run: ${weeklyDistance} km per week at an average speed of: ${speed} km/h or a pace of: ${pace} min/km.
        User's goal:
            ${goalType === 'finisher' ? `The user simply wants to complete ${goalDistance}, without a specific goal for time, average speed, or average pace.` : ''}
            ${goalType === 'finisher with a time goal' ? `The user wants to finish ${goalDistance} with a time goal of ${goalTime} or an average speed/pace goal of ${goalPace}.` : ''}

        They can train ${trainingDaysSafe.join(', ')} per week and desire a 3-month training plan.
        Preferred days of the week for training sessions over 1 hour are: ${longRunDaysSafe.join(', ')}.
        Summarize the user's profile and goal.
        Propose a detailed day-by-day training plan over 3 months to achieve this goal.
        Take into account the user's weight, height, age, and current running distance in the training plan.
        If the goal seems too ambitious, suggest and propose a more realistic goal.
        Pay attention to the calculation of average speeds and paces in the training plan relative to the race distance.
        Format the text in markdown with bold titles, double line breaks between titles, italicized subtitles, and bullet-point lists.
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
