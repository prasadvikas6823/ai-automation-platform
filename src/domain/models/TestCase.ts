import { Step } from "./Step";

export class TestCase{
    constructor(
        public readonly title: string,
        public readonly steps: ReadonlyArray<Step>,
        public readonly expectedResult: string
    ){}
}