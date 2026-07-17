import { LLMService } from "../../domain/contracts/LLMSerivice";

export class FakeLLMService implements LLMService{
    async generate(prompt: string): Promise<string> {
        return `{
            "message":"Fake AI Response",
            "promptLength": ${prompt.length}
        }`;
    }
}