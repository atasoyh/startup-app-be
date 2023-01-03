import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Phase } from 'graphql';
import {
  CompanyRepository,
  COMPANY_REPOSITORY,
} from 'src/interfaces/data/company-repository.interface';
import {
  PhaseRepository,
  PHASE_REPOSITORY,
} from '../../interfaces/data/phase-repository.interface';
import { CreatePhaseInput, PhaseDTO } from '../../models/phase.model';
import { GetPhaseByIdUseCase } from './get-phase-by-id.usecase';

@Injectable()
export class CreatePhaseUseCase {
  constructor(
    @Inject(PHASE_REPOSITORY) private phaseRepository: PhaseRepository,
    @Inject(COMPANY_REPOSITORY) private companyRepository: CompanyRepository,
    private getPhaseByIdUseCase: GetPhaseByIdUseCase,
  ) {}

  async execute(createPhaseInput: CreatePhaseInput): Promise<PhaseDTO> {
    const company = await this.companyRepository.findById(
      createPhaseInput.companyId,
    );
    if (!company) {
      throw new NotFoundException(
        `Company ${createPhaseInput.companyId} not found`,
      );
    }

    const id = this.phaseRepository.generateNewId();
    const newPhase = { id, name: createPhaseInput.name, tasks: [] };
    const phase = await this.phaseRepository.create(newPhase);
    company.phases.push(phase.id);
    this.companyRepository.update(company);
    return this.getPhaseByIdUseCase.execute(phase.id);
  }
}
