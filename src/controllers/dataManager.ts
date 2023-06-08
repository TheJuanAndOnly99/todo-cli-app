import fs from 'fs';
import path from 'path';

export class DataManager {
	private readonly filepath: string;

	constructor(filepath: string) {
		this.filepath = path.resolve(filepath);

		if (!fs.existsSync(this.filepath)) {
			fs.writeFileSync(this.filepath, '[]', 'utf8');
		}
	}

	private readFileData(): Promise<any> {
		return new Promise((resolve, reject) => {
			fs.readFile(this.filepath, 'utf8', (err, data) => {
				if (err) {
					if (err.code === 'ENOENT') {
						// Return empty array if file does not exist
						resolve([]);
					}
					else {
						reject(err);
					}
				}
				else {
					try {
						const parsedData = JSON.parse(data);
						resolve(parsedData);
					} catch (parseError) {
						reject(parseError);
					}
				}
			});
		});
	}

	private writeFileData(data: any): Promise<void> {
		return new Promise((resolve, reject) => {
			fs.writeFile(this.filepath, JSON.stringify(data), 'utf8', (err) => {
				if (err) {
					reject(err);
				}
				else {
					resolve();
				}
			});
		});
	}

	async getUsers(): Promise<any[]> {
		try {
			const fileData = await this.readFileData();
			return fileData;
		} catch (error) {
			console.error('Error reading user data:', error);
			return [];
		}
	}

	async addUser(user: any): Promise<void> {
		try {
			const fileData = await this.readFileData();
			fileData.push(user);
			await this.writeFileData(fileData);
			console.log(`User ${user.name} with id ${user.id} added successfully!`);
		} catch (error) {
			console.error('Error adding user:', error);
		}
	}
}
