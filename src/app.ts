import { TextFileRequirementReader } from "./infrastructure/readers/TextFileRequirementReader"
import { PromptBuilder } from "./application/PromptBuilder"; 

async function main(){
    const reader = new TextFileRequirementReader("requirements/login.txt");

    const requirement = await reader.read();

    const promptBuilder = new PromptBuilder("src/prompts/GenerateTestCases.prompt");

    const prompt = await promptBuilder.build(requirement);

    console.log(prompt);
}

main().catch((error) =>{
    console.error(error);
});