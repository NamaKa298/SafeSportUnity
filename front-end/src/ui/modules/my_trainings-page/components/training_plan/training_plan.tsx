import { useEffect, useState } from "react";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { getFirestore, collection, query, orderBy, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/ui/design-system/button/button";

export const TrainingView = () => {
  interface TrainingPlan {
    id: string;
    plan: string;
    date: string;
    sport: string;
    goal: string;
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
        const plans = querySnapshot.docs.map(doc => ({
          id: doc.id,
          plan: doc.data().plan,
          date: doc.data().date,
          sport: doc.data().sport,
          goal: doc.data().goalDistance
        }));
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
    <Container className="flex flex-col space-y-8 w-full max-w-screen-xl mx-auto mb-8 px-8">
      <div className="flex flex-col w-full p-4 bg-primary-300 rounded-lg space-y-5 items-center">
        <Typography variant="h4" component="h4">
          Training Plan History
        </Typography>
        <table className="w-full bg-primary-200 rounded">
          <thead>
            <tr>
              <th className="text-center">Created Date</th>
              <th className="text-center">Sport</th>
              <th className="text-center">Goal Distance</th>
            </tr>
          </thead>
          <tbody>
            {trainingPlans.map(plan => (
              <tr key={plan.id} className="border-t">
                <td className="text-center cursor-pointer" onClick={() => setSelectedPlan(typeof plan.plan === 'string' ? plan.plan : JSON.stringify(plan.plan))}>
                  {new Date(plan.date).toLocaleDateString()}
                </td>
                <td className="text-center">{plan.sport}</td>
                <td className="text-center">{plan.goal}</td>
                <td className="py-2 px-4 text-right">
                  <Button variant="danger" size="small" action={() => handleDelete(plan.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col w-full p-4 bg-primary-400 rounded-lg space-y-5 items-center">
        <Typography variant="h3" component="h2">
         Training Plan
        </Typography>
        </div>
        <div className="flex flex-col w-full p-4 bg-primary-300 rounded-lg space-y-5">
        {selectedPlan ? (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{selectedPlan}</ReactMarkdown>
        ) : (
          <Typography variant="body-lg">Go to generate a training plan</Typography>
        )}
      </div>
    </Container>
  );
};