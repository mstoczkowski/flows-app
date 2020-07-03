import { createFlow, getAllCategories } from "./categories.service";
import { Category } from "@entities/Category";
import { Flow } from "@entities/Flow";

export const getAll = async (): Promise<Category[]> => {
  return await getAllCategories();
};

export const createCategoryFlow = async (
  category: string,
  flow: Flow
): Promise<Flow> => {
  return await createFlow(category, flow);
};
