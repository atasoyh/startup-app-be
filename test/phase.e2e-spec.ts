import { Test, TestingModule } from '@nestjs/testing';
import { CreateTaskInput, UpdateTaskInput } from 'graphql';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Phase (e2e)', () => {
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
  describe('createPhase mutation', () => {
    it('creates a phase successfuly.', async () => {
      // TODO implement - check object schema.
    });

    it('returns an error when the company id is not valid!', async () => {
      // TODO implement
    });
  });

  describe('updatePhase mutation', () => {
    it('updates the phase ', async () => {
      // TODO implement - check object schema.
    });
    it('returns an error when the phase id is not valid!', async () => {
      // TODO implement
    });
  });

  describe('deletePhase mutation', () => {
    // todo cover phase delete requests.
  });
});
