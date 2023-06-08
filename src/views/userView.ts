import inquirer from 'inquirer';

export class UserView {
	async getUserInput(): Promise<string> {
		const prompt = await inquirer.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'Enter your name:'
			}
		]);
		return prompt.name;
	}
}
