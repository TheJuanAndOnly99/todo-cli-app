import { User } from '../businessLogic/userManager';
class UserAccess {
	private users: User[];

	constructor() {
		this.users = [];
	}

	createUser(id: number, name: string): User {
		return {
			id,
			name
		};
	}

	addUser(user: User): void {
		console.log(`addUser(${user.id}, ${user.name})`);
		this.users.push(user);
	}

	getUsers(): User[] {
		console.log(this.users);
		return this.users;
	}
}

export default UserAccess;
