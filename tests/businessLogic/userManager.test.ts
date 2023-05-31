import { User, createUser } from '../../src/businessLogic/userManager';

describe('userUtils', () => {
	it('should create a user correctly', () => {
		const id = 1;
		const name = 'John Doe';
		const expectedUser: User = { id, name };

		const createdUser = createUser(id, name);

		expect(createdUser).toEqual(expectedUser);
	});
});
