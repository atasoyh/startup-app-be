import { Module } from '@nestjs/common';
import { UseCasesModule } from 'src/usecases/usecases.module';
import { PhaseResolver } from './phase.resolver';

@Module({
  imports: [UseCasesModule],
  providers: [PhaseResolver],
})
export class PhaseModule {}
