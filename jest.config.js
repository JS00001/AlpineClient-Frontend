module.exports = {
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!**/node_modules/**'],
	moduleNameMapper: {
		'@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|less|scss|sss|styl)$': '<rootDir>/__mocks__/styleMock.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
	},
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/e2e/'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
	},
	transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
