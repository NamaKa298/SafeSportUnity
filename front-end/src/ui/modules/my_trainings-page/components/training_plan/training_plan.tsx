import { useEffect, useState } from "react";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography";
import { getFirestore, collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const TrainingView = () => {
  interface TrainingPlan {
    id: string;
    plan: string;
    date: string;
  }

  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrainingPlans = async () => {
      try {
        const auth = getAuth();
        const userId = auth.currentUser?.uid;
        const db = getFirestore();
        const trainingPlanRef = query(
          collection(db, `users/${userId}/UserTrainingPlans`),
          orderBy("date", "desc")
        );
        const querySnapshot = await getDocs(trainingPlanRef);
        const plans = querySnapshot.docs.map(doc => ({ id: doc.id, plan: doc.data().plan, date: doc.data().date }));
        setTrainingPlans(plans);
        if (plans.length > 0) {
          setSelectedPlan(typeof plans[0].plan === 'string' ? plans[0].plan : JSON.stringify(plans[0].plan));
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des plans d'entraînement:", error);
      }
    };

    fetchTrainingPlans();
  }, []);

  const handleDelete = async (planId: string) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser?.uid;
      const db = getFirestore();
      await deleteDoc(doc(db, `users/${userId}/UserTrainingPlans`, planId));
      setTrainingPlans(trainingPlans.filter(plan => plan.id !== planId));
      if (selectedPlan === planId) {
        setSelectedPlan(null);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du plan d'entraînement:", error);
    }
  };

  return (
    <Container className="flex justify-between w-full max-w-screen-xl mx-auto mb-8">
      <div className="flex flex-col w-1/3 space-y-5">
        <Typography variant="h2" component="h2">
          Liste des Plans d'Entraînement
        </Typography>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainingPlans.map(plan => (
              <tr key={plan.id} className="border-t">
                <td className="py-2 cursor-pointer" onClick={() => setSelectedPlan(typeof plan.plan === 'string' ? plan.plan : JSON.stringify(plan.plan))}>
                  {new Date(plan.date).toLocaleDateString()}
                </td>
                <td className="py-2">
                  <button onClick={() => handleDelete(plan.id)} className="text-red-500">Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-center w-2/3 space-y-5">
        <Typography variant="h2" component="h2">
          Plan d'Entraînement
        </Typography>
        {selectedPlan ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPlan}</ReactMarkdown>
        ) : (
          <Typography variant="body-lg">Sélectionnez un plan d'entraînement pour l'afficher.</Typography>
        )}
      </div>
    </Container>
  );
};