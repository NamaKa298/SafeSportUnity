import { useEffect, useState } from "react";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography";
import Image from "next/image";
import { getFirestore, collection, query, orderBy, limit, getDocs } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";


export const TrainingView = () => {
  const [trainingPlan, setTrainingPlan] = useState<string | null>(null);
 
  useEffect(() => {
    const fetchTrainingPlan = async () => {
      try {
        const auth = getAuth();
        const userId = auth.currentUser?.uid;
        const db = getFirestore();
        const trainingPlanRef = query(
          collection(db, `users/${userId}/UserTrainingPlans`),
          orderBy("date", "desc"),
          limit(1)
        );
        const querySnapshot = await getDocs(trainingPlanRef);
        if (!querySnapshot.empty) {
          const latestPlan = querySnapshot.docs[0].data().plan;
          setTrainingPlan(typeof latestPlan === 'string' ? latestPlan : JSON.stringify(latestPlan));
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du plan d'entraînement:", error);
      }
    };

    fetchTrainingPlan();
  }, []);

  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <Typography variant="h2" component="h2">
          Plan d'entraînement
        </Typography>
        {trainingPlan ? (
          <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
            {trainingPlan}
          </Typography>
        ) : (
          <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
            Chargement du plan d'entraînement...
          </Typography>
        )}
      </div>
      <div className="relative w-[600px] h-[600px]">
        <Image
          sizes="50%"
          fill
          src={"/assets/images/icone_training.jpg"}
          alt="logo SafeSportUnity"
        />
      </div>
    </Container>
  );
};