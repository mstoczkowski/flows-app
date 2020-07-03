import api from './api';
import { AxiosResponse } from 'axios';
import { Category } from '../@types/category';
import { Flow } from '../@types/flow';

export type AxiosTypedPromise<T> = Promise<AxiosResponse<T>>;

export const categoriesApi = {
  getCategories(): AxiosTypedPromise<Category[]> {
    return api.get('/categories');
  },
  createFlow(category: string, flow: Flow): AxiosTypedPromise<Flow> {
    return api.post(`/categories/${category}/flow`, flow);
  }
};
