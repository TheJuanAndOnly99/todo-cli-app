import { Task } from '../businessLogic/taskManager';

const tasks: Task[] = [];

export function addTask(task: Task): void {
	tasks.push(task);
	console.log(`addTask(${task.id}, ${task.description})`);
}

export function getTasks(): Task[] {
	console.log(tasks);
	return tasks;
}
