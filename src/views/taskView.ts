import inquirer from 'inquirer';

export class TaskView {
	async getTaskInput(): Promise<{ title: string; userId: number }> {
		const prompt = await inquirer.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'Enter task title:'
			},
			{
				type: 'number',
				name: 'userId',
				message: 'Enter user ID:'
			}
		]);
		return {
			title: prompt.title,
			userId: prompt.userId
		};
	}

	async getTaskIdInput(): Promise<number> {
		const prompt = await inquirer.prompt([
			{
				type: 'number',
				name: 'taskId',
				message: 'Enter task ID:'
			}
		]);
		return prompt.taskId;
	}
}
