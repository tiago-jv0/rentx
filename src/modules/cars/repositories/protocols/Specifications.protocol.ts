import { Specification } from "../../models/Specification";

export type ICreateSpecificationDTO = {
  name: string;
  description: string;
};

export interface ISpecificationRepository {
  findByName(name: string): Specification | undefined;
  list(): Array<Specification>;
  create({ name, description }: ICreateSpecificationDTO): void;
}
