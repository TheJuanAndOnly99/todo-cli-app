import { TaskController } from '../../src/controllers/taskController.js';

describe('TaskController', () => {
	// if filepath does not exist, create it

	let taskController: TaskController;

	beforeEach(() => {
		taskController = new TaskController();
		taskController.clearTasks();
	});

	it('should create a task correctly', () => {
		taskController.createTask('Task 1', 1);
		expect(taskController.getTasks()).toEqual([
			{ id: 1, userId: 1, title: 'Task 1', completed: false }
		]);
	});
});
