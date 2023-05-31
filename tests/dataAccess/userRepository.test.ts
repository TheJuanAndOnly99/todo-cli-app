import UserAccess from '../../src/dataAccess/userRepository';
import { User } from '../../src/businessLogic/userManager';

describe('UserAccess', () => {
	let userAccess: UserAccess;

	beforeEach(() => {
		userAccess = new UserAccess();
	});

	it('should create a user correctly', () => {
		const user: User = { id: 1, name: 'John Doe' };
		expect(userAccess.createUser(1, 'John Doe')).toEqual(user);
	});

	it('should add a user correctly', () => {
		const user: User = { id: 1, name: 'John Doe' };
		userAccess.addUser(user);
		expect(userAccess.getUsers()).toEqual([ user ]);
	});

	it('should get all users correctly', () => {
		const user1: User = { id: 1, name: 'John Doe' };
		const user2: User = { id: 2, name: 'Jane Smith' };

		userAccess.addUser(user1);
		userAccess.addUser(user2);

		expect(userAccess.getUsers()).toEqual([ user1, user2 ]);
	});
});
