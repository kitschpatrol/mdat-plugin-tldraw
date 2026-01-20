import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig(
	{
		type: 'lib',
	},
	{
		files: ['readme.md/*.ts'],
		rules: {
			'import/no-unresolved': 'off',
		},
	},
)
