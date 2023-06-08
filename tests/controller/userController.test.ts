import { UserController } from '../../src/controllers/userController.js';

describe('UserController', () => {
	let userController: UserController;

	beforeEach(() => {
		userController = new UserController();
	});

	it('should create a user correctly', () => {
		userController.createUser('John Doe');
		expect(userController.getUsers()).toEqual([ { id: 1, name: 'John Doe' } ]);
	});
});
