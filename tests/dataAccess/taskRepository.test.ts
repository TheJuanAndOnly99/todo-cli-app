import TaskAccess from '../../src/dataAccess/taskRepository';
import { Task } from '../../src/businessLogic/taskManager';
// import fs from 'fs';
import path from 'path';

describe('TaskAccess', () => {
	const taskDataFilePath = path.resolve(__dirname, 'taskData.json');

	// if filepath does not exist, create it

	let taskAccess: TaskAccess;

	beforeEach(() => {
		taskAccess = new TaskAccess(taskDataFilePath);
		taskAccess.clearTasks();
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

	// it('should save a task correctly', () => {
	// 	const task1: Task = { id: 1, description: 'Task 1', status: 'pending' };

	// 	taskAccess.addTask(task1);

	// 	const data = fs.readFileSync(taskDataFilePath, 'utf8');
  //   console.log(`data: ${data}`);
  //   console.log(`taskDataFilePath: ${taskDataFilePath}`);
	// 	expect(data).toEqual(JSON.stringify([ task1 ], null, 2));
	// });
});
