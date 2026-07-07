import { readFile } from "fs/promises";

import { Requirement } from "../../domain/models/Requirement";
import { RequirementReader } from "../../domain/contracts/RequirementReader";
import { RequirementNotFoundException } from "../../domain/exceptions/RequirementNotFoundException";

export class TextFileRequirementReader implements RequirementReader {
  constructor(private readonly filePath: string) {}

  async read(): Promise<Requirement> {
    try {
      const content = await readFile(this.filePath, "utf-8");

      //structural typing for Requirement interface
      return {
        title: "Untitled Requirement",
        description: content,
        acceptanceCriteria: [],
      };
    } catch (error) {
        throw new RequirementNotFoundException(this.filePath);
    }
  }
}
