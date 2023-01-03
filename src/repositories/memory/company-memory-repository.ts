import { Company, UpdateCompanyInput } from '../../models/company.model';
import { CompanyRepository } from '../../interfaces/data/company-repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyMemoryRepository implements CompanyRepository {
  private companies: Company[] = [];

  generateNewId(): string {
    return `company_${this.companies.length + 1}`;
  }
  async findAll(): Promise<Company[]> {
    return this.companies;
  }

  async findById(id: string): Promise<Company> {
    return this.companies.find((company) => company.id === id);
  }

  async create(company: Company): Promise<Company> {
    this.companies.push(company);
    return company;
  }

  async update(company: Company): Promise<Company> {
    const { id, ...rest } = company;
    const index = this.companies.findIndex((t) => t.id === id);
    if (index >= 0) {
      this.companies[index] = { ...this.companies[index], ...rest };
    }
    return this.companies[index];
  }

  async delete(id: string): Promise<Company> {
    const index = this.companies.findIndex((company) => company.id === id);
    if (index >= 0) {
      const phase = this.companies[index];
      this.companies.splice(index, 1);
      return phase;
    }
  }
}
