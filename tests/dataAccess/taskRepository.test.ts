import TaskAccess from '../../src/dataAccess/taskRepository';
import { Task } from '../../src/businessLogic/taskManager';

describe('TaskAccess', () => {
	let taskAccess: TaskAccess;

	beforeEach(() => {
		taskAccess = new TaskAccess();
	});

	it('should add a task correctly', () => {
		const task: Task = { id: 1, description: 'Task 1', status: 'pending' };
		taskAccess.addTask(task);
		expect(taskAccess.getTasks()).toEqual([ task ]);
	});

	it('should get all tasks correctly', () => {
		const task1: Task = { id: 1, description: 'Task 1', status: 'pending' };
		const task2: Task = { id: 2, description: 'Task 2', status: 'pending' };

		taskAccess.addTask(task1);
		taskAccess.addTask(task2);

		expect(taskAccess.getTasks()).toEqual([ task1, task2 ]);
	});
});
