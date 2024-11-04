// import { Button } from "@/components/ui/button";
import { Button } from "@/ui/design-system/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Typography } from '@/ui/design-system/typography';
import { useAuth } from "@/context/AuthUserContext";
import React, { useState } from 'react';
import { saveUserData } from "@/api/saveUserData";
import axios from 'axios';
import { Spinner } from "@/ui/design-system/spinner/spinner";

type page = 'none'
  | 'user-info'
  | 'sport'
  | 'weekly-routine'
  | 'user-speed'
  | 'distance'
  | 'goal-type'
  | 'days-selection'
  | 'selection'
  | 'long-days-selection'

export const NewTrainingView = () => {
  const { authUser } = useAuth();
  const [currentPage, setCurrentPage] = useState<page>('user-info');
  const [sport, setSport] = useState<string | null>(null);
  const [weeklyDistance, setWeeklyDistance] = useState<string | null>(null);
  const [pace, setPace] = useState<string | null>(null); // Pace en tant que string
  const [speed, setSpeed] = useState<string | null>(null); // Speed en tant que string
  const [goalDistance, setGoalDistance] = useState<string | null>(null);
  const [goalType, setGoalType] = useState<string | null>(null);
  const [goalTime, setGoalTime] = useState<string | null>(null);
  const [goalPace, setGoalPace] = useState<string | null>(null); // Peut être soit goal pace, soit goal speed
  const [weight, setWeight] = useState<string | null>(null); // Add weight state
  const [age, setAge] = useState<string | null>(null); // Add age state
  const [sex, setSex] = useState<string | null>(null); // Add sex state
  const [height, setHeight] = useState<string | null>(null); // Add height state

  const [trainingDays, setTrainingDays] = useState<string[]>([]);
  const [longRunDays, setLongRunDays] = useState<string[]>([]);
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const sendUserData = async () => {
    if (!authUser) {
      console.error("User is not authenticated");
      return;
    }

    const users = {
      age,
      sex,
      height,
      weight,
      sport,
      weeklyDistance,
      pace,
      speed,
      goalDistance,
      goalType,
      goalTime,
      goalPace,
      trainingDays,
      longRunDays,
      uid: authUser.uid,
    };

    const result = await saveUserData(authUser.uid, users, users);
    if (result.error) {
      console.error("Erreur lors de l'enregistrement des données utilisateur :", result.error);
    } else {
      console.log("Données enregistrées avec succès");
    }

  };

  const renderUserInfo = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            Tell us more about yourself :
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="age">Your Age</Label>
            <Input
              className="bg-primary-300 placeholder-gray mt-2"
              id="age"
              type="number"
              min="0"
              placeholder="Enter your age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="sex">Your Sex</Label>
            <Select onValueChange={(value: string) => setSex(value)}>
              <SelectTrigger className="bg-primary-300 mt-2">
                <SelectValue placeholder="Select your sex" />
              </SelectTrigger>
              <SelectContent className="bg-primary-300">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="height">Your Height (in cm)</Label>
            <Input
              className="bg-primary-300 placeholder-gray mt-2"
              id="height"
              type="number"
              min="0"
              placeholder="Enter your height"
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="weight">Your Weight (in kg)</Label>
            <Input
              className="bg-primary-300 placeholder-gray mt-2"
              id="weight"
              type="number"
              min="0"
              placeholder="Enter your weight"
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <Button
          action={() => {
            if (!age || !sex || !height || !weight) {
              alert("Please fill out all fields.");
              return;
            };
            setCurrentPage('sport');
          }}
          size="small"
          style={{ paddingTop: 15 }}>Next</Button>
      </CardContent>
    </Card>
  );


  const renderSportSelection = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            What sport do you want to establish a training plan for ?
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={(value: string) => setSport(value)}>
          <SelectTrigger className="bg-primary-300">
            <SelectValue placeholder="Sport select" />
          </SelectTrigger>
          <SelectContent className="bg-primary-300">
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="cycling">Cycling</SelectItem>
          </SelectContent>
        </Select>
        <Button size="small" action={() => {
          setCurrentPage('weekly-routine');
        }} style={{ paddingTop: 15 }}>Next</Button>
      </CardContent>
    </Card>
  );

  const renderWeeklyRoutine = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            Tell us about your weekly {sport} routine :
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor="weeklyDistance">How many kilometers per week ?</Label>
        <Input
          className="bg-primary-300 placeholder-gray mt-2"
          id="weeklyDistance"
          type="number"
          step="0.01"
          min="0"
          placeholder="Enter distance in km"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value)) {
              setWeeklyDistance(value.toFixed(2));
            }
          }}
        />
        <Button size="small" action={() => {
          setCurrentPage('user-speed');
        }} style={{ paddingTop: 15 }}>Next</Button>
      </CardContent>
    </Card>
  );

  const renderPaceOrSpeed = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            {sport === 'running' ? 'What is your average pace (min/km)?' : 'What is your average speed (km/h)?'}
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {sport === 'running' ? (
          <div>
            <Label htmlFor="pace">Average Pace (min/km)</Label>
            <Input
              className="bg-primary-300 placeholder-gray mt-2"
              id="pace"
              type="text"
              pattern="[0-9]{1,2}:[0-5][0-9]"
              placeholder="Enter pace (e.g., 5:30 for 5 min 30 sec per km)"
              onChange={(e) => {
                setPace(e.target.value); // Assigner directement la valeur entrée par l'utilisateur
              }}
            />
          </div>
        ) : (
          <div>
            <Label htmlFor="speed">Average Speed (km/h)</Label>
            <Input
              className="bg-primary-300 placeholder-gray mt-2"
              id="speed"
              type="number"
              step="0.1"
              min="0"
              placeholder="Enter speed in km/h"
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  setSpeed(value.toFixed(1));
                }
              }}
            />
          </div>
        )}
        <Button size="small" action={() => {
          setCurrentPage('distance');
        }} style={{ paddingTop: 15 }}>Next</Button>
      </CardContent>
    </Card>
  );

  const renderGoalDistance = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            What distance do you want to train for ?
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={(value: string) => setGoalDistance(value)}>
          <SelectTrigger className="bg-primary-300">
            <SelectValue placeholder="Goals select" />
          </SelectTrigger>
          <SelectContent className="bg-primary-300">
            {sport === 'running' ? (
              <>
                <SelectItem value="5 km">5 km</SelectItem>
                <SelectItem value="10 km">10 km</SelectItem>
                <SelectItem value="21 km">21 km</SelectItem>
                <SelectItem value="42 km">42 km</SelectItem>
              </>
            ) : (
              <>
                <SelectItem value="50 km">50 km</SelectItem>
                <SelectItem value="100 km">100 km</SelectItem>
                <SelectItem value="150 km">150 km</SelectItem>
                <SelectItem value="200 km">200 km</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
        <Button size="small" action={() => {
          setCurrentPage('goal-type');
        }} style={{ paddingTop: 15 }}>Next</Button>
      </CardContent>
    </Card>
  );

  const renderGoalType = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            What is your goal for your objectives?
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Select onValueChange={(value: string) => setGoalType(value)}>
          <SelectTrigger className="bg-primary-300">
            <SelectValue placeholder="Goals objectives select" />
          </SelectTrigger>
          <SelectContent className="bg-primary-300">
            <SelectItem value="finisher">Finisher</SelectItem>
            <SelectItem value="finisher with a time goal">Finisher with a time goal</SelectItem>
          </SelectContent>
        </Select>
        <Button size="small" action={() => {
          switch (goalType) {
            case 'finisher':
              setCurrentPage('days-selection');
              break;
            case 'finisher with a time goal':
              setCurrentPage('selection');
              break;
          };
        }} style={{ paddingTop: 15 }}>Next</Button>
      </CardContent>
    </Card>
  );

  // Si l'utilisateur a choisi "finisher with a time goal", il peut remplir l'un ou l'autre champ
  const renderGoalTimeOrPace = () => (<Card className="bg-gray-500">
    <CardHeader>
      <CardTitle>
        <Typography variant="h5" theme="black">
          {sport === 'running' ? 'Choose your goal time or pace' : 'Choose your goal time or speed'}
        </Typography>
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div>
        <Label htmlFor="goalTime">Goal Finish Time (hh:mm:ss)</Label>
        <Input
          className="bg-primary-300 placeholder-gray"
          id="goalTime"
          type="time"
          step="1"
          onChange={(e) => {
            setGoalTime(e.target.value);
          }}
        />
      </div>
      <div>
        <Label htmlFor="goalPace">
          {sport === 'running' ? 'Goal Average Pace (min/km)' : 'Goal Average Speed (km/h)'}
        </Label>
        <Input
          className="bg-primary-300 placeholder-gray"
          id="goalPace"
          type="text"
          pattern="[0-9]{1,2}:[0-5][0-9]"
          placeholder="Enter pace (e.g., 5:30 for 5 min 30 sec per km)"
          onChange={(e) => {
            setGoalPace(e.target.value)
          }} // Assigner directement la valeur
        />
      </div>
      <Button size="small" action={() => {
        if (!goalPace && !goalTime) {
          alert("Please enter either a goal finish time or a goal average pace/speed.");
          return;
        };
        setCurrentPage('days-selection');
      }} style={{ paddingTop: 15 }}>Next</Button> {/* Utilise la fonction de validation ici */}
    </CardContent>
  </Card>
  );

  const renderTrainingDaysSelection = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            Which days of the week can you train?
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {daysOfWeek.map((day) => (
          <div key={day} className="flex items-center space-x-2 pb-4">
            <Checkbox
              id={`training-day-${day}`}
              checked={trainingDays.includes(day)}
              onCheckedChange={() => handleDaySelection(day, true)}
            />
            <Label htmlFor={`training-day-${day}`}>{day}</Label>
          </div>
        ))}
        <Button size="small" action={() => {
          setCurrentPage('long-days-selection');
        }} style={{ paddingTop: 15 }}>Next</Button>
      </CardContent>
    </Card>
  );

  const renderLongRunDaysSelection = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            Which days are preferable for long training sessions ?
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {daysOfWeek.map((day) => (
          <div key={day} className="flex items-center space-x-2 pb-4">
            <Checkbox
              id={`long-run-day-${day}`}
              checked={longRunDays.includes(day)}
              onCheckedChange={() => handleDaySelection(day, false)}
            />
            <Label htmlFor={`long-run-day-${day}`}>{day}</Label>
          </div>
        ))}
        <Button size="small" action={() => {
          setCurrentPage('none');
          sendUserData(); // Envoyer les données après la validation
        }} style={{ paddingTop: 15 }}>Summary</Button>
      </CardContent>
    </Card>
  );

  const validateLongRunDays = () => {
    if (longRunDays.length < 1) {
      alert("Please select at least one day for long runs.");
    } else {
      setCurrentPage('none');
    }
  };

  const handleDaySelection = (day: string, isTraining: boolean) => {
    if (isTraining) {
      setTrainingDays(prev =>
        prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
      );
    } else {
      setLongRunDays(prev =>
        prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
      );
    }
  };

  const generateTrainingPlan = async () => {
    if (!authUser) {
      console.error("User is not authenticated");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/generate-plan', {
        age,
        goalDistance,
        goalPace,
        goalTime,
        goalType,
        height,
        longRunDays,
        pace,
        sex,
        speed,
        sport,
        trainingDays,
        uid: authUser.uid,
        weeklyDistance,
        weight
      });

      if (response.data.success) {
        console.log("Plan d'entraînement généré avec succès:", response.data.trainingPlan);
        window.location.href = '/my_trainings';
      } else {
        console.error("Erreur lors de la génération du plan d'entraînement:", response.data.error);
      }
    } catch (error) {
      console.error("Erreur lors de la génération du plan d'entraînement:", error);
    }
  };

  const renderSummary = () => (
    <Card className="bg-primary-200 border-primary-200 shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            Summary of your choices
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Typography variant="caption1">
          Your personnal profile :
        </Typography>
        <p><strong>Age :</strong> {age}</p>
        <p><strong>Sex :</strong> {sex}</p>
        <p><strong>Height :</strong> {height} cm</p>
        <p><strong>Weight :</strong> {weight} kg</p>
        <br />
        <Typography variant="caption1">
          Your current <strong>{sport}</strong> level :
        </Typography>
        <p><strong>Weekly distance :</strong> {weeklyDistance} km</p>
        {sport === 'running' ? (
          <p><strong>Average pace :</strong> {pace} min/km</p>
        ) : (
          <p><strong>Average speed :</strong> {speed} km/h</p>
        )}

        <hr className="my-4" />
        <Typography variant="caption1">
          Your personnal goals :
        </Typography>
        <p><strong>distance :</strong> {goalDistance}</p>
        <p><strong>type :</strong> {goalType}</p>
        {goalType === 'finisher with a time goal' && (
          <>
            <p><strong>Goal finish time :</strong> {goalTime}</p>
            {sport === 'running' ? (
              <p><strong>Goal average pace :</strong> {goalPace} min/km</p>
            ) : (
              <p><strong>Goal average speed :</strong> {goalPace} km/h</p>
            )}
          </>
        )}
        <p><strong>Training days :</strong> {trainingDays.join(', ')}</p>
        <p><strong>Preferred long run days :</strong> {longRunDays.join(', ')}</p>
        <Button size="small" action={() => {
          validateLongRunDays();
          generateTrainingPlan();
        }} style={{ paddingTop: 15 }}>Generate Plan</Button>
      </CardContent>
    </Card>
  );

  const renderCurrent = () => {
    switch (currentPage) {
      case 'user-info':
        return renderUserInfo();
      case 'sport':
        return renderSportSelection();
      case 'weekly-routine':
        return renderWeeklyRoutine();
      case 'user-speed':
        return renderPaceOrSpeed();
      case 'distance':
        return renderGoalDistance();
      case 'goal-type':
        return renderGoalType();
      case 'days-selection':
        return renderTrainingDaysSelection();
      case 'selection':
        return renderGoalTimeOrPace();
      case 'long-days-selection':
        return renderLongRunDaysSelection();
      case 'none':
        return renderSummary();
      default:
        setCurrentPage('user-info');
        break;
    };
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {renderCurrent()}
    </div>
  );

};

