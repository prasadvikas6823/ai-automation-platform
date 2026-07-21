import { TestCase } from "../models/TestCase";

export interface TestAutomationGenerator{
    generate(testCases: TestCase[]): string;
}