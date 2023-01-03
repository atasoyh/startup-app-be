import { Company } from '../../models/company.model';

export const COMPANY_REPOSITORY = 'COMPANY_REPOSITORY';

export interface CompanyRepository {
  findById(id: string): Promise<Company | undefined>;
  create(company: Company): Promise<Company>;
  update(company: Company): Promise<Company>;
  delete(id: string): Promise<Company>;
  generateNewId(): string;
}
