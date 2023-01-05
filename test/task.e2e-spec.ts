import { Test, TestingModule } from '@nestjs/testing';
import { CreateTaskInput, UpdateTaskInput } from 'graphql';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Task (e2e)', () => {
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
  describe('createTask mutation', () => {
    const createTaskRequest = (input: CreateTaskInput) =>
      request(app.getHttpServer())
        .post('/graphql')
        .send({
          operationName: null,
          variables: { input },
          query: `
      mutation CreateTask($input: CreateTaskInput!) {
        createTask(input: $input) {
          id
          name
          completed
        }
      }
    `,
        });

    it('creates a task successfuly.', async () => {
      const createTaskInput = {
        name: 'Test Task',
        phaseId: 'phase_1',
      };
      const createTaskResponse = await createTaskRequest(
        createTaskInput,
      ).expect(200);

      const { data } = createTaskResponse.body;

      expect(data.createTask.id).toBe('task_9');
    });

    it('returns error when the phase id is not valid!', async () => {
      const createTaskInput = {
        name: 'Test Task',
        phaseId: '0',
      };
      const createTaskResponse = await createTaskRequest(
        createTaskInput,
      ).expect(200);

      const { errors } = createTaskResponse.body;
      expect(errors[0].message).toBe('Item not found');
    });
  });

  describe('updateTask mutation', () => {
    const getUpdateTaskRequest = (updateTaskInput: UpdateTaskInput) =>
      request(app.getHttpServer())
        .post('/graphql')
        .send({
          variables: { input: updateTaskInput },
          query: `
      mutation UpdateTask($input: UpdateTaskInput!) {
        updateTask(input: $input) {
          id
          name
          completed
        }
      }
    `,
        });

    it('returns error when the task is not editable', async () => {
      const updateTaskInput = {
        id: 'task_8',
        completed: true,
      };

      const updateTaskResponse = await getUpdateTaskRequest(
        updateTaskInput,
      ).expect(200);

      const { data, errors } = updateTaskResponse.body;
      expect(errors).toBeDefined();
      expect(errors[0].message).toBe(
        'The task is not editable! Please be sure the previous phase is completed.',
      );
      expect(data).toBe(null);
    });

    it('updates the task', async () => {
      const updateTaskInput = {
        id: 'task_1',
        completed: true,
      };

      const updateTaskResponse = await getUpdateTaskRequest(
        updateTaskInput,
      ).expect(200);

      const { data } = updateTaskResponse.body;
      expect(data).toBeDefined();
      expect(data.updateTask.id).toBe(updateTaskInput.id);
      expect(data.updateTask.completed).toBe(updateTaskInput.completed);
    });
  });

  describe('deleteTask mutation', () => {
    // todo cover task delete requests.
  });
  describe('list tasks query', () => {
    // todo cover list task queries.
  });
});
