import { Specification } from "../models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "./protocols/Specifications.protocol";

export class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Array<Specification>;

  constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
  list(): Array<Specification> {
    return this.specifications;
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specifications.push(specification);
  }
}
