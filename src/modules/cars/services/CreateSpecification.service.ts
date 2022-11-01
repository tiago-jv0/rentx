import { ISpecificationRepository } from "../repositories/protocols/Specifications.protocol";

type IRequest = {
  name: string;
  description: string;
};

export class CreateSpecificationService {
  constructor(
    private readonly specificationsRepository: ISpecificationRepository
  ) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }
}
