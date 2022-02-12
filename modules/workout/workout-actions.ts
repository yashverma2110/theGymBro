import apiService from "../../utils/apiService";
import WORKOUT_ACTION_TYPES from "./workout-actionTypes";

interface createWorkoutPayload {
  name: string;
  description: string;
  equipment: string;
  bodyPart: string;
  target: string;
  gif: string;
}
const createWorkout = (payload: createWorkoutPayload, token: string) => {
  return {
    type: WORKOUT_ACTION_TYPES.CREATE_WORKOUT,
    payload: apiService.post("/workout/exercise", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  };
};

const getAllExercises = (token: string) => {
  return {
    type: WORKOUT_ACTION_TYPES.GET_ALL_EXERCISES,
    payload: apiService.get("/workout/exercise", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  };
};

export { createWorkout, getAllExercises };
