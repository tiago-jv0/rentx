import { Category } from "../../models/Category";

export type ICreateCategoryDTO = {
  name: string;
  description: string;
};

export interface ICategoryRepository {
  findByName(name: string): Category | undefined;
  list(): Array<Category>;
  create({ name, description }: ICreateCategoryDTO): void;
}
