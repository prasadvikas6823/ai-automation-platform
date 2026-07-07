 

export class RequirementNotFoundException extends Error{
    constructor(private readonly filepath: string){
        super(`Requirement not found: ${filepath}`);
        this.name = "Requirement Not Found Exception";
    }
}