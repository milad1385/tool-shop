import connectToDB from "@/configs/db";
import Question from "@/models/Question";
import { normalizeData } from "@/utils/helper";

export const getAllQuestions = async () => {
  try {
    await connectToDB();
    const questions = await Question.find({}).lean();

    return normalizeData(questions);
  } catch (error) {
    throw new Error(error.message);
  }
};
