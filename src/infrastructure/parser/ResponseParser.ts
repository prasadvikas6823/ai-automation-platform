import { TestCase } from "../../domain/models/TestCase";
import { Step } from "../../domain/models/Step";

interface AIResponse{
    testCases: AITestCase[];
}

interface AITestCase {
    title: string;
    steps: string[];
    expectedResult: string;
}


export class ResponseParser{

    parse(response: string): TestCase[]{
        console.log(response);

        const parsedResponse: AIResponse = JSON.parse(response);

        return parsedResponse.testCases.map((testCase) => {

            const steps = testCase.steps.map((step,index) =>{
                return new Step(index+1,step);
            });

            return new TestCase(
                testCase.title,
                steps,
                testCase.expectedResult
            );
        });
    }
}