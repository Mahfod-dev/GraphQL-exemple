export const resolvers = {
	Query: {
		jobs: () => {
			return [
				{
					id: '1',
					title: 'Software Engineer',
					description: 'Google',
				},
				{
					id: '2',
					title: 'Back end developer',
					description: 'Facebook',
				},
			];
		},
	},
};
