import { LLMService } from "../../domain/contracts/LLMSerivice";

export class OllamaService implements LLMService{

    constructor(
        private readonly baseUrl: string,
        private readonly model:string
    ){}

    async generate(prompt: string): Promise<string> {
        const response = await fetch(
            `${this.baseUrl}/api/generate`,
            {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                model: this.model,
                prompt: prompt,
                stream: false
            })
        }
        )

        const data = await response.json();
        return data.response;
    }
}