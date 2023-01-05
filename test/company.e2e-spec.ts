import { Test, TestingModule } from '@nestjs/testing';
import { CreateTaskInput, UpdateTaskInput } from 'graphql';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Company (e2e)', () => {
  let app;

  const createCompany = async () => {
    const createCompanyInput = {
      name: 'Test Company',
    };
    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: { input: createCompanyInput },
        query: `
        mutation CreateCompany($input: CreateCompanyInput!) {
          createCompany(input: $input) {
            name
          }
        }
      `,
      });
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await createCompany();
  });
  describe('createCompany mutation', () => {
    it('creates a new company successfuly.', async () => {
      // TODO implement
    });
  });

  describe('company query', () => {
    it('returns error when the company id now valid', async () => {
      // TODO implement
    });

    it('return company', async () => {
      // TODO implement
    });
  });
});
