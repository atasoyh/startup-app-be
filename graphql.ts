
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateCompanyInput {
    name: string;
}

export class UpdateCompanyInput {
    id: string;
    name?: Nullable<string>;
    phases?: Nullable<Nullable<string>[]>;
}

export class CreatePhaseInput {
    name: string;
    companyId: string;
}

export class UpdatePhaseInput {
    id: string;
    name: string;
    tasks: Nullable<string>[];
}

export class CreateTaskInput {
    name: string;
    phaseId: string;
}

export class UpdateTaskInput {
    id: string;
    completed: boolean;
}

export class Company {
    id: string;
    name: string;
    phases: Nullable<Phase>[];
}

export abstract class IQuery {
    abstract company(id: string): Nullable<Company> | Promise<Nullable<Company>>;

    abstract phase(id: string): Nullable<Phase> | Promise<Nullable<Phase>>;

    abstract task(id: string): Nullable<Task> | Promise<Nullable<Task>>;
}

export abstract class IMutation {
    abstract createCompany(input: CreateCompanyInput): Company | Promise<Company>;

    abstract updateCompany(input: UpdateCompanyInput): Company | Promise<Company>;

    abstract deleteCompany(id: string): Company | Promise<Company>;

    abstract createPhase(input: CreatePhaseInput): Phase | Promise<Phase>;

    abstract updatePhase(input: UpdatePhaseInput): Phase | Promise<Phase>;

    abstract deletePhase(id: string): Phase | Promise<Phase>;

    abstract createTask(input: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(input: UpdateTaskInput): Task | Promise<Task>;

    abstract deleteTask(id: string): Task | Promise<Task>;
}

export class Phase {
    id: string;
    name: string;
    tasks: Nullable<Task>[];
}

export class Task {
    id?: Nullable<string>;
    name?: Nullable<string>;
    completed?: Nullable<boolean>;
}

type Nullable<T> = T | null;
