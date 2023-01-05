import { Inject, Injectable } from '@nestjs/common';
import {
  CompanyRepository,
  COMPANY_REPOSITORY,
} from '../../interfaces/data/company-repository.interface';
import { CompanyDTO } from '../../models/company.model';
import { ListPhasesUseCase } from '../phase/list-phases.usecase';
import { handleNotFound } from '../utils/handle-not-found';

@Injectable()
export class GetCompanyByIdUseCase {
  constructor(
    @Inject(COMPANY_REPOSITORY)
    private companyRepository: CompanyRepository,
    private listPhasesUseCase: ListPhasesUseCase,
  ) {}

  async execute(id: string): Promise<CompanyDTO> {
    const companyPromise = this.companyRepository.findById(id);
    const company = await handleNotFound(companyPromise);
    const phases = await this.listPhasesUseCase.execute(company.phases);
    return { id: company.id, name: company.name, phases };
  }
}
