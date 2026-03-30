const EXERCISES = [
  "Squats",
  "Lunges",
  "Deadlifts",
  "Glute Bridges",
  "Leg Presses",
  "Push-ups",
  "Overhead Presses",
  "Bent-over Rows",
  "Lat Pulldowns",
  "Cable Crossovers",
  "Planks",
  "Side Planks",
  "Dead Bugs",
  "Russian Twists",
  "Mountain Climbers",
  "Burpees",
  "High Knees",
  "Skaters",
  "Jumping Jacks",
  "Plank to Downward Dogs"
];
const REPS_MAX = 20;
const SETS_MAX = 5;

let excercise = EXERCISES[Math.floor(Math.random() * EXERCISES.length)];
let reps = Math.floor(Math.random * REPS_MAX) + 1;
let sets = Math.floor(Math.random * SETS_MAX) + 1;
