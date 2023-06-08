module.exports = {
	testEnvironment         : 'node',
	transform               : {
		'^.+\\.[t|j]sx?$' : 'babel-jest'
	},
	moduleFileExtensions    : [ 'ts', 'tsx', 'js', 'jsx', 'json', 'node' ],
	transformIgnorePatterns : [ 'node_modules/(?!(your-module-to-ignore)/)' ],
	preset                  : 'ts-jest',
	moduleNameMapper        : {
		'^(\\.\\.?\\/.+)\\.jsx?$' : '$1'
	}
};
