
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePhaseInput {
    name: string;
    tasks?: Nullable<Nullable<string>[]>;
}

export class UpdatePhaseInput {
    id: string;
    name?: Nullable<string>;
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

export class Phase {
    id: string;
    name: string;
    tasks: Nullable<Task>[];
}

export abstract class IQuery {
    abstract phases(): Nullable<Nullable<Phase>[]> | Promise<Nullable<Nullable<Phase>[]>>;

    abstract tasks(): Nullable<Nullable<Task>[]> | Promise<Nullable<Nullable<Task>[]>>;
}

export abstract class IMutation {
    abstract createPhase(input: CreatePhaseInput): Phase | Promise<Phase>;

    abstract updatePhase(input: UpdatePhaseInput): Phase | Promise<Phase>;

    abstract deletePhase(id: string): Phase | Promise<Phase>;

    abstract createTask(input: CreateTaskInput): Task | Promise<Task>;

    abstract updateTask(input: UpdateTaskInput): Task | Promise<Task>;

    abstract deleteTask(id: string): Task | Promise<Task>;
}

export class Task {
    id?: Nullable<string>;
    name?: Nullable<string>;
    completed?: Nullable<boolean>;
}

type Nullable<T> = T | null;
