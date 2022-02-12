import * as yup from "yup";

const createWorkoutSchema = yup.object({
  name: yup.string().required().min(5).max(20),
  description: yup.string().min(10).max(36),
  bodyPart: yup.string().required(),
  target: yup.string().required(),
  equipment: yup.string().required(),
});

export { createWorkoutSchema };
