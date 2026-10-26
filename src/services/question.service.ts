import connectToDB from "@/configs/db";
import { IGetQuestions, IPaginatedResponse, IQuestion } from "@/libs/types";
import Question from "@/models/Question";
import { createPagination, normalizeData } from "@/utils/helper";

export const getAllQuestions = async (): Promise<IQuestion[]> => {
  try {
    await connectToDB();
    const questions = await Question.find({}).lean();

    return normalizeData(questions);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getQuestions = async ({
  page = 1,
  limit = 10,
  search = "",
  status,
}: IGetQuestions): Promise<IPaginatedResponse<IQuestion>> => {
  try {
    await connectToDB();
    let filters: any = {};

    const count = await Question.countDocuments({});

    if (search) {
      filters.question = { $regex: search };
    }

    if (status?.length > 0) {
      filters.status = status;
    }
    const questions = await Question.find(filters)
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    return {
      data: normalizeData(questions),
      pagination: createPagination({ page, limit, count }),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
