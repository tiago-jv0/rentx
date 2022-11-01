import { ICategoryRepository } from "../repositories/protocols/Categories.protocol";

type IRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  constructor(private readonly categoriesRepository: ICategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}
