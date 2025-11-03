import { mdatConfig } from '@kitschpatrol/mdat-config'
import tldrawPlugin from './src'

export default mdatConfig({
	rules: {
		...tldrawPlugin,
	},
})
