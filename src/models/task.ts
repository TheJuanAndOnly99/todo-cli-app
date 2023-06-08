// export interface Task {
// 	id: number;
// 	userId: number;
// 	description: string;
// 	status: 'pending' | 'completed';
// }

export class Task {
	id: number;
	title: string;
	completed: boolean;
	userId: number;

	constructor(id: number, title: string, completed: boolean, userId: number) {
		this.id = id;
		this.title = title;
		this.completed = completed;
		this.userId = userId;
	}
}
