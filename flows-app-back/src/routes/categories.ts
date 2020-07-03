import { Request, Response, Router } from "express";
import {
  createCategoryFlow,
  getAll,
} from "../categories/categories.controller";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { flowExist } from "../categories/categories.service";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(OK).send(await getAll());
});

router.post("/:category/flow", async (req: Request, res: Response) => {
  const categoryTitle = req.params.category;

  if (!categoryTitle) {
    return res.status(BAD_REQUEST).json({
      error: "Category is required",
    });
  }

  if (!(req.body.name || req.body.code)) {
    return res.status(BAD_REQUEST).json({
      error: "You need to provide name and code",
    });
  }

  const exist = await flowExist(categoryTitle, req.body.code);

  if (exist) {
    return res.status(BAD_REQUEST).json({
      error: "Flow already exist",
    });
  }

  await createCategoryFlow(categoryTitle, req.body);

  res.status(CREATED).send();
});

export default router;
