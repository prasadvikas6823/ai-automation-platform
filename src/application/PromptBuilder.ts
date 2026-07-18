import { readFile } from "fs/promises";
import { Requirement } from "../domain/models/Requirement";

export class PromptBuilder {
  constructor(private readonly templatePath: string) {}

  async build(requirement: Requirement): Promise<string> {
    let template = await readFile(this.templatePath, "utf-8");

    template = template.replace("{{requirement}}", requirement.description);
    template = template.replace("{{testCaseCount}}", "2");

    return template;
  }
}
