import { Module } from '@nestjs/common';
import { PhaseResolver } from './phase.resolver';
import { PhaseModule as PhaseUsecaseModule } from 'src/usecases/phase/phase.module';
@Module({
  imports: [PhaseUsecaseModule],
  providers: [PhaseResolver],
})
export class PhaseModule {}
