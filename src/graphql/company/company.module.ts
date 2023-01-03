import { Module } from '@nestjs/common';
import { CompanyResolver } from './company.resolver';
import { CompanyModule as CompanyUsecaseModule } from 'src/usecases/company/company.module';
import { PhaseModule } from '../../usecases/phase/phase.module';
@Module({
  imports: [CompanyUsecaseModule, PhaseModule],
  providers: [CompanyResolver],
})
export class CompanyModule {}
