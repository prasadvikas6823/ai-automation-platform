import { TestAutomationGenerator } from "../../domain/contracts/TestAutomationGenerator";
import { Step } from "../../domain/models/Step";
import { TestCase } from "../../domain/models/TestCase";

export class PlaywrightGenerator implements TestAutomationGenerator{
    
    generate(testCases: TestCase[]): string {
        let code = "";
        code += this.generateImports();

        for(const testCase of testCases){
            code += this.generateTestCase(testCase);
        }
        return code;
    }

    private generateImports(): string{
        return `import { test, expect } from '@playwright/test';\n\n`
    }

    private generateTestCase(testCase: TestCase): string{
        return `test('${testCase.title}', async ({ page }) => {\n${this.generateSteps(testCase)}\n});\n\n`;
    }

    private generateSteps(testCase: TestCase): string{
        let code = "";
        for(const step of testCase.steps ){
            code += this.generateStep(step);
        }
        return code;;
    }

    private generateStep(step: Step): string{
        return "";
    }
}