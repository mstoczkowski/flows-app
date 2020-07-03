import { Flow } from "@entities/Flow";

export interface Category {
  title: string;
  flows: Flow[];
}
