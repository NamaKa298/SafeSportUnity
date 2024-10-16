import { useState, KeyboardEvent } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Typography } from '@/ui/design-system/typography';
import { Button } from "@/components/ui/button";

export const NewTrainingView = () => {

  const [sport, setSport] = useState<string | undefined>()
  const [weeklyDistance, setWeeklyDistance] = useState<string | undefined>()
  const [pace, setPace] = useState<string | undefined>() // Pace en tant que string
  const [speed, setSpeed] = useState<string | undefined>() // Speed en tant que string
  const [goalDistance, setGoalDistance] = useState<string | undefined>()
  const [goalType, setGoalType] = useState<string | undefined>()
  const [goalTime, setGoalTime] = useState<string | undefined>()
  const [goalPace, setGoalPace] = useState<string | undefined>() // Peut être soit goal pace, soit goal speed

  const [stepSportValidated, setStepSportValidated] = useState(false)
  const [stepRoutineValidated, setStepRoutineValidated] = useState(false)
  const [stepPaceOrSpeedValidated, setStepPaceOrSpeedValidated] = useState(false)
  const [stepGoalDistanceValidated, setStepGoalDistanceValidated] = useState(false)
  const [stepGoalTypeValidated, setStepGoalTypeValidated] = useState(false)

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>, validationFunction: () => void) => {
    if (event.key === 'Enter') {
      validationFunction()
    }
  }

  // Format the user's input for pace (min/km) to mm:ss format
  const formatPace = (value: string | undefined): string => {
    if (!value || isNaN(parseFloat(value))) return ''; // Handle undefined or invalid input
    const numValue = parseFloat(value);
    const minutes = Math.floor(numValue);
    const seconds = Math.round((numValue - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  const renderSportSelection = () => (
    <Card className="bg-gray-500">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            What sport do you want to establish a training plan for?
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
        <Button onClick={() => setStepSportValidated(true)}>Next</Button>
      </CardContent>
    </Card>
  )

  const renderWeeklyRoutine = () => (
    <Card className="bg-gray-500">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            Tell us about your weekly {sport} routine:
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent >
        <Label htmlFor="weeklyDistance" >How many kilometers per week?</Label>
        <Input
          className="bg-primary-300 placeholder-gray"
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
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleEnterKey(e, () => { })}
        />
        <Button onClick={() => setStepRoutineValidated(true)} className="mt-4">Next</Button>
      </CardContent>
    </Card>
  )

  const renderPaceOrSpeed = () => (
    <Card className="bg-gray-500">
      <CardHeader>
        <CardTitle >
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
              className="bg-primary-300 placeholder-gray"
              id="pace"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter pace (e.g., 5.50 for 5:30 min/km)"
              onChange={(e) => {
                setPace(e.target.value); // Assigner directement la valeur entrée par l'utilisateur
              }}
              onKeyDown={(e) => handleEnterKey(e, () => { })}
            />
          </div>
        ) : (
          <div>
            <Label htmlFor="speed">Average Speed (km/h)</Label>
            <Input
              className="bg-primary-300 placeholder-gray"
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
              onKeyDown={(e) => handleEnterKey(e, () => { })}
            />
          </div>
        )}
        <Button onClick={() => setStepPaceOrSpeedValidated(true)} className="mt-4">Next</Button>
      </CardContent>
    </Card>
  )

  const renderGoalDistance = () => (
    <Card className="bg-gray-500">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            What distance do you want to train for?
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
        <Button onClick={() => setStepGoalDistanceValidated(true)} className="mt-4">Next</Button>
      </CardContent>
    </Card>
  )

  const renderGoalType = () => (
    <Card className="bg-gray-500">
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
        <Button onClick={() => setStepGoalTypeValidated(true)} className="mt-4">Next</Button>
      </CardContent>
    </Card>
  )

  // Si l'utilisateur a choisi "finisher with a time goal", il peut remplir l'un ou l'autre champ
  const renderGoalTimeOrPace = () => (
    <Card className="bg-gray-500">
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
            onChange={(e) => setGoalTime(e.target.value)}
            onKeyDown={(e) => handleEnterKey(e, () => { })}
          />
        </div>
        <div>
          <Label htmlFor="goalPace">
            {sport === 'running' ? 'Goal Average Pace (min/km)' : 'Goal Average Speed (km/h)'}
          </Label>
          <Input
            className="bg-primary-300 placeholder-gray"
            id="goalPace"
            type="number"
            step={sport === 'running' ? '0.01' : '0.1'}
            min="0"
            placeholder={sport === 'running' ? 'Enter pace (e.g., 5.50 for 5:30 min/km)' : 'Enter speed in km/h'}
            onChange={(e) => setGoalPace(e.target.value)} // Assigner directement la valeur
            onKeyDown={(e) => handleEnterKey(e, () => { })}
          />
        </div>
        <Button onClick={() => { }} className="mt-4">Submit</Button>
      </CardContent>
    </Card>
  )

  const renderSummary = () => (
    <Card className="bg-gray-500">
      <CardHeader>
        <CardTitle>
          <Typography variant="h5" theme="black">
            Summary of your choices
          </Typography>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Sport: {sport === 'running' ? 'Running' : 'Cycling'}</p>
        <p>Weekly distance: {weeklyDistance} km</p>
        {sport === 'running' ? (
          <p>Average pace: {pace ? formatPace(pace) : ''} min/km</p>  // Correction ici pour pace
        ) : (
          <p>Average speed: {speed} km/h</p>
        )}
        <p>Goal distance: {goalDistance}</p>
        <p>Goal type: {goalType}</p>
        {goalType === 'finisher with a time goal' && (
          <>
            <p>Goal finish time: {goalTime}</p>
            {sport === 'running' ? (
              <p>Goal average pace: {goalPace ? formatPace(goalPace) : ''} min/km</p>  // Afficher le goal pace
            ) : (
              <p>Goal average speed: {goalPace} km/h</p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {!stepSportValidated && renderSportSelection()}
      {stepSportValidated && !stepRoutineValidated && renderWeeklyRoutine()}
      {stepRoutineValidated && !stepPaceOrSpeedValidated && renderPaceOrSpeed()}
      {stepPaceOrSpeedValidated && !stepGoalDistanceValidated && renderGoalDistance()}
      {stepGoalDistanceValidated && !stepGoalTypeValidated && renderGoalType()}
      {stepGoalTypeValidated && (goalType === 'finisher with a time goal') && renderGoalTimeOrPace()}
      {((goalType === 'finisher') || (goalType === 'finisher with a time goal' && (goalTime || goalPace))) && renderSummary()}
    </div>
  )
};
