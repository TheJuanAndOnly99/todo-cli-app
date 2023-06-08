import { Task } from '../../src/models/task.js';

describe('Task', () => {
	it('should have the correct properties', () => {
		const task: Task = {
			id: 1,
			userId: 1,
			title: 'Task',
			completed: false
		};

		expect(task.id).toBe(1);
		expect(task.title).toBe('Task');
		expect(task.completed).toBe(false);
	});
});
