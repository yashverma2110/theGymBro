import _ from "lodash";
import WORKOUT_ACTION_TYPES from "./workout-actionTypes";

const initialState = {
  loading: false,
  error: null,
  newWorkout: null,
  exercises: [],
};

const workoutReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WORKOUT_ACTION_TYPES.CREATE_WORKOUT + "_PENDING":
      return {
        ...state,
        loading: true,
      };
    case WORKOUT_ACTION_TYPES.CREATE_WORKOUT + "_FULFILLED":
      return {
        ...state,
        loading: false,
        newWorkout: _.get(action, "payload.data.exercise", null),
      };
    case WORKOUT_ACTION_TYPES.CREATE_WORKOUT + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case WORKOUT_ACTION_TYPES.GET_ALL_EXERCISES + "_PENDING":
      return {
        ...state,
        loading: true,
      };
    case WORKOUT_ACTION_TYPES.GET_ALL_EXERCISES + "_FULFILLED":
      return {
        ...state,
        loading: false,
        exercises: _.get(action, "payload.data.exercises", []),
      };
    case WORKOUT_ACTION_TYPES.GET_ALL_EXERCISES + "_REJECTED":
      return {
        ...state,
        loading: false,
        error: action?.payload,
      };
    default:
      return state;
  }
};

export default workoutReducer;
