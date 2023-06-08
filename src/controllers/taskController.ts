import { Task } from '../models/task.js';

export class TaskController {
	private tasks: Task[];

	constructor() {
		this.tasks = [];
	}

	createTask(title: string, userId: number): Task {
		const id = this.tasks.length + 1;
		const completed = false;
		const task = new Task(id, title, completed, userId);
		this.tasks.push(task);
		return task;
	}

	markTaskAsCompleted(taskId: number): void {
		const task = this.tasks.find((task) => task.id === taskId);
		if (task) {
			task.completed = true;
		}
	}

	getTasks(): Task[] {
		return this.tasks;
	}

	getTasksByUser(userId: number): Task[] {
		return this.tasks.filter((task) => task.userId === userId);
	}

	deleteTask(taskId: number): void {
		const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
		if (taskIndex > -1) {
			this.tasks.splice(taskIndex, 1);
		}
	}

	clearTasks(): void {
		this.tasks = [];
	}
}
