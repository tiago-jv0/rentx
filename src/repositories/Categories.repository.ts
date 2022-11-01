import { Category } from "../models/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "./protocols/Categories.protocol";

export class CategoriesRepository implements ICategoryRepository {
  private categories: Array<Category>;

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }

  list(): Array<Category> {
    return this.categories;
  }
}
