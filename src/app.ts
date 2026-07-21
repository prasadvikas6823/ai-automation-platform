import { TextFileRequirementReader } from "./infrastructure/readers/TextFileRequirementReader"
import { PromptBuilder } from "./application/PromptBuilder"; 
import { OllamaService } from "./infrastructure/llm/OllamaService";
import { ResponseParser } from "./infrastructure/parser/ResponseParser";
import { GenerateTestCasesUseCase } from "./application/usecases/GenerateTestCasesUseCase";
import { PlaywrightGenerator } from "./infrastructure/generators/PlaywrightGenerator";

async function main(){
    const requirementReader = new TextFileRequirementReader("requirements/login.txt");

    const promptBuilder = new PromptBuilder("src/prompts/GenerateTestCases.prompt");

    const llmService = new OllamaService("http://localhost:11434","llama3.2");

    const responseParser = new ResponseParser();

    const generateTestCasesUseCase = new GenerateTestCasesUseCase(requirementReader,promptBuilder,llmService,responseParser);

    const testCases = await generateTestCasesUseCase.execute();

    console.log(JSON.stringify(testCases, null, 2));

    const playwrightGenerator = new PlaywrightGenerator();
    console.log(playwrightGenerator.generate(testCases));
    
}

main().catch((error) =>{
    console.error(error);
});