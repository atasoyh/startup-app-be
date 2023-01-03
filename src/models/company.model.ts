import { PhaseDTO } from './phase.model';

export class Company {
  id: string;
  name: string;
  phases: string[];
}

export class CompanyDTO {
  id: string;
  name: string;
  phases: PhaseDTO[];
}

export class CreateCompanyInput {
  name: string;
}
export class UpdateCompanyInput {
  id: string;
  name?: string;
  phaseIds?: string[];
}
