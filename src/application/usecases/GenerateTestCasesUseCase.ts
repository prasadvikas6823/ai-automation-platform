import { RequirementReader } from "../../domain/contracts/RequirementReader";
import { PromptBuilder } from "../PromptBuilder";
import { LLMService } from "../../domain/contracts/LLMSerivice";
import { ResponseParser } from "../../infrastructure/parser/ResponseParser";
import { TestCase } from "../../domain/models/TestCase";

export class GenerateTestCasesUseCase{
    constructor(
        private readonly requirementReader: RequirementReader,
        private readonly promptBuilder: PromptBuilder,
        private readonly llmService: LLMService,
        private readonly responseParser: ResponseParser,
    ){}

    async execute(): Promise<TestCase[]>{
        const requirement = await this.requirementReader.read();
        const prompt = await this.promptBuilder.build(requirement);
        const response = await this.llmService.generate(prompt);
        const testCases = this.responseParser.parse(response);
        return testCases;
    }
}