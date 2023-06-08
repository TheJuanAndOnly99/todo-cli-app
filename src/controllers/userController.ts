import { User } from '../models/user.js';

export class UserController {
	private users: User[];

	constructor() {
		this.users = [];
	}

	createUser(name: string): User {
		const id = this.users.length + 1;
		const user = new User(id, name);
		this.users.push(user);
		console.log(`Created user ${user.name} with id ${user.id}`);
		return user;
	}

	getUsers(): User[] {
		return this.users;
	}
}
