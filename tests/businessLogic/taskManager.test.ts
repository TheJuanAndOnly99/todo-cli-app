import { Task, createTask, markTaskAsCompleted } from '../../src/businessLogic/taskManager';

describe('taskUtils', () => {
	it('should create a task correctly', () => {
		const id = 1;
		const description = 'Task 1';
		const expectedTask: Task = { id, description, status: 'pending' };

		const createdTask = createTask(id, description);

		expect(createdTask).toEqual(expectedTask);
	});

	it('should mark a task as completed', () => {
		const task: Task = { id: 1, description: 'Task 1', status: 'pending' };
		const expectedTask: Task = { id: 1, description: 'Task 1', status: 'completed' };

		markTaskAsCompleted(task);

		expect(task).toEqual(expectedTask);
	});
});
