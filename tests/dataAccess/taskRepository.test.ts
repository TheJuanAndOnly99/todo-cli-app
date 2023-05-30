import { addTask, getTasks } from '../../src/dataAccess/taskRepository';
import { Task, createTask } from '../../src/businessLogic/taskManager';

const tasks: Task[] = [];

describe('Task Repository', () => {
	beforeEach(() => {
		// Reset tasks before each test
		tasks.length = 0;
	});

	it('should add a task', () => {
		const task = createTask(1, 'Task 1');

		addTask(task);

		expect(tasks[0]).toEqual(task);
	});

	it('should get tasks', () => {
		const task2 = createTask(2, 'Task 2');
		console.log(`task2: ${task2}`);
		const task3 = createTask(3, 'Task 3');
		console.log(`task3: ${task3}`);

		addTask(task2);
		addTask(task3);

		const retrievedTasks = getTasks();
		console.log(`retrievedTasks: ${retrievedTasks}`);

		expect(retrievedTasks[1]).toEqual([ { task2 } ]);
	});
});
