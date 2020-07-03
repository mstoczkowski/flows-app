import { Flow } from "@entities/Flow";

const low = require("lowdb");
import adapter from "../db";
import { Category } from "@entities/Category";

export const getAllCategories = async (): Promise<Category[]> => {
  const db = await low(adapter);

  return db.get("categories");
};

export const createFlow = async (
  category: string,
  flow: Flow
): Promise<Flow> => {
  const db = await low(adapter);

  db.get("categories")
    .find({ title: category })
    .get("flows")
    .push(flow)
    .write();

  return flow;
};

export const flowExist = async (
  category: string,
  code: string
): Promise<boolean> => {
  const db = await low(adapter);

  return !!db
    .get("categories")
    .find({ title: category })
    .get("flows")
    .find({ code: code })
    .value();
};

export const getFlowByCode = async (
  category: string,
  code: string
): Promise<Flow> => {
  const db = await low(adapter);

  return db
    .get("categories")
    .find({ title: category })
    .get("flows")
    .find({ code: code })
    .value();
};
