import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';
@Module({
  imports: [GraphqlModule],
})
export class AppModule {}
