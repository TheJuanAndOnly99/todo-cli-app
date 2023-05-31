import fs from 'fs';
import { Task } from '../businessLogic/taskManager';
import path from 'path';

class TaskAccess {
	private tasks: Task[];
	private filePath: string;

	constructor(filePath: string) {
		this.tasks = [];
		this.filePath = path.join(__dirname, filePath);
		this.loadTasks();
	}

	createTask(id: number, description: string): Task {
		console.log(`createTask(${id}, ${description})`);

		const task: Task = {
			id,
			description,
			status: 'pending'
		};
		return task;
	}

	addTask(task: Task): void {
		this.tasks.push(task);
		this.saveTasks();
		console.log(`addTask(${task.id}, ${task.description})`);
	}

	getTasks(): Task[] {
		console.log(this.tasks);
		return this.tasks;
	}

	private loadTasks(): void {
		try {
			if (fs.existsSync(this.filePath)) {
				const data = fs.readFileSync(this.filePath, 'utf8');
				this.tasks = JSON.parse(data);
			}
			else {
				console.log(`Task file does not exist. Creating new file at ${this.filePath}`);
				fs.writeFileSync(this.filePath, '[]');
			}
		} catch (err) {
			console.error('Error loading tasks from JSON file:', err);
		}
	}

	private saveTasks(): void {
		try {
			const data = JSON.stringify(this.tasks, null, 2);
			console.log(`data: ${data}`);
			fs.writeFileSync(this.filePath, data);
			console.log(`Saved ${this.tasks} to ${this.filePath}`);
		} catch (err) {
			console.error('Error saving tasks to JSON file:', err);
		}
	}

	clearTasks(): void {
		this.tasks = [];
		this.saveTasks();
	}
}

// const taskDataFilePath = path.resolve(__dirname, 'taskData.json');

const taskList = new TaskAccess('taskData.json');

taskList.clearTasks();

const task1 = taskList.createTask(1, 'Task 1');

taskList.addTask(task1);

export default TaskAccess;
