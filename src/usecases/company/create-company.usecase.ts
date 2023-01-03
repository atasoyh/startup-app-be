import { Inject, Injectable } from '@nestjs/common';
import {
  CompanyRepository,
  COMPANY_REPOSITORY,
} from 'src/interfaces/data/company-repository.interface';
import { CompanyDTO, CreateCompanyInput } from 'src/models/company.model';
import { GetCompanyByIdUseCase } from './get-company-by-id.usecase';
import InitialData from '../../constants/predefined-company-data';
import { Phase } from 'src/models/phase.model';
import { CreatePhaseUseCase } from '../phase/create-phase.usecase';
import { CreateTaskUseCase } from '../task/create-task.usecase';
@Injectable()
export class CreateCompanyUseCase {
  constructor(
    @Inject(COMPANY_REPOSITORY) private companyRepository: CompanyRepository,
    private getCompanyByIdUseCase: GetCompanyByIdUseCase,
    private createPhaseUseCase: CreatePhaseUseCase,
    private createTaskUseCase: CreateTaskUseCase,
  ) {}

  async execute(createCompanyInput: CreateCompanyInput): Promise<CompanyDTO> {
    console.log('create-company execute');
    const id = this.companyRepository.generateNewId();
    const name = createCompanyInput.name;
    console.log({ id, name });
    await this.companyRepository.create({
      id,
      name,
      phases: [],
    });
    await this.createInitialData(id);
    return this.getCompanyByIdUseCase.execute(id);
  }

  private async createInitialData(companyId: string) {
    await Promise.all(
      InitialData.phases.map(async (phase) => {
        const { id } = await this.createPhaseUseCase.execute({
          name: phase.name,
          companyId,
        });
        await Promise.all(
          phase.tasks.map((task) =>
            this.createTaskUseCase.execute({ name: task.name, phaseId: id }),
          ),
        );
      }),
    );
  }
}
