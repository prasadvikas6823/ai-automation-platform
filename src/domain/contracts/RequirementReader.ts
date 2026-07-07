import { Requirement } from '../models/Requirement';

export interface RequirementReader{
    read(): Promise<Requirement>;
}