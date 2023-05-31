import { Task } from '../../src/businessLogic/taskManager';

describe('Task', () => {
	it('should have the correct properties', () => {
		const task: Task = {
			id: 1,
			description: 'Task description',
			status: 'pending'
		};

		expect(task.id).toBe(1);
		expect(task.description).toBe('Task description');
		expect(task.status).toBe('pending');
	});
});
