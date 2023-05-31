import { Task } from '../businessLogic/taskManager';
class TaskAccess {
	private tasks: Task[];

	constructor() {
		this.tasks = [];
	}

	addTask(task: Task): void {
		this.tasks.push(task);
		console.log(`addTask(${task.id}, ${task.description})`);
	}

	getTasks(): Task[] {
		console.log(this.tasks);
		return this.tasks;
	}
}

export default TaskAccess;
