import { UserView } from './views/userView.js';
import { UserController } from './controllers/userController.js';
import { DataManager } from './controllers/dataManager.js';

async function main() {
	const userView = new UserView();
	const userController = new UserController();
	const dataManager = new DataManager('./data/users.json');

	const userName = await userView.getUserInput();
	const user = userController.createUser(userName);

	await dataManager.addUser(user);

	console.log('User created and saved successfully!');
}

main().catch((error) => {
	console.error('An error occurred:', error);
});
