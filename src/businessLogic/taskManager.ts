export interface Task {
	id: number;
	description: string;
	status: 'pending' | 'completed';
}

export function createTask(id: number, description: string): Task {
	console.log(`createTask(${id}, ${description})`);
	return {
		id,
		description,
		status: 'pending'
	};
}

export function markTaskAsCompleted(task: Task): void {
	task.status = 'completed';
	console.log(`markTaskAsCompleted(${task.id})`);
}

createTask(1, 'Task 1');
createTask(2, 'Task 2');
createTask(3, 'Task 3');
