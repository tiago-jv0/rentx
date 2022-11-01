import { v4 as uuidV4 } from "uuid";

export class Category {
  id?: string;
  name = "";
  description = "";
  created_at: Date = new Date();

  constructor() {
    const alreadyExists = this.id;

    if (!alreadyExists) {
      this.id = uuidV4();
    }
  }
}
