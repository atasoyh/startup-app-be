import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  Company,
  CompanyDTO,
  CreateCompanyInput,
} from '../../models/company.model';
import { GetCompanyByIdUseCase } from '../../usecases/company/get-company-by-id.usecase';
import { CreateCompanyUseCase } from '../../usecases/company/create-company.usecase';

@Resolver((of) => CompanyDTO)
export class CompanyResolver {
  constructor(
    private getCompanyByIdUseCase: GetCompanyByIdUseCase,
    private createCompanyUseCase: CreateCompanyUseCase,
  ) {}

  @Query((returns) => [CompanyDTO])
  async company(@Args('id') id: string): Promise<CompanyDTO> {
    return this.getCompanyByIdUseCase.execute(id);
  }

  @Mutation((returns) => CompanyDTO)
  async createCompany(
    @Args('input') input: CreateCompanyInput,
  ): Promise<CompanyDTO> {
    return this.createCompanyUseCase.execute(input);
  }

  @Mutation((returns) => CompanyDTO)
  async updateCompany(@Args('input') input: Company): Promise<CompanyDTO> {
    // TODO implement updating name, order of phases.
    return null;
  }

  @Mutation((returns) => CompanyDTO)
  async deleteCompany(@Args('id') id: string): Promise<CompanyDTO> {
    // TODO implement deletion
    return null;
  }
}
