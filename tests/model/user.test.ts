import { User } from '../../src/models/user.js';

describe('User', () => {
	it('should have the correct properties', () => {
		const user: User = {
			id: 1,
			name: 'Joe'
		};

		expect(user.id).toBe(1);
		expect(user.name).toBe('Joe');
	});
});
