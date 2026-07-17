import { RequirementReader } from "../../domain/contracts/RequirementReader";
import { PromptBuilder } from "../PromptBuilder";
import { LLMService } from "../../domain/contracts/LLMSerivice";

export class GenerateTestCasesUseCase{
    constructor(
        private readonly requirementReader: RequirementReader,
        private readonly promtBuilder: PromptBuilder,
        private readonly llmSerive: LLMService
    ){}

    async execute(): Promise<string>{
        const requirement = await this.requirementReader.read();
        const prompt = await this.promtBuilder.build(requirement);
        const response = await this.llmSerive.generate(prompt);
        return response;
    }
}