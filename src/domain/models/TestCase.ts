import { Step } from "../../domain/models/Step";

export class TestCase{
    constructor(
        private readonly title: string,
        private readonly steps: Step[],
        private readonly expectedResult: string
    ){}
}