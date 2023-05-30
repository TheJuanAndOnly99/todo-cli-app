import { User } from '../businessLogic/userManager';

const users: User[] = [];

export function addUser(user: User): void {
	console.log(`addUser(${user.id}, ${user.name})`);
	users.push(user);
}

export function getUsers(): User[] {
	console.log(users);
	return users;
}
