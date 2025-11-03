import { expandReadmeString } from 'mdat'
import os from 'node:os'
import { describe, expect, it } from 'vitest'

// These have long timeouts because going through puppeteer is slow
describe('tldraw image rule', () => {
	it('should expand tldraw images from local files', async () => {
		const markdown = `<!-- tldraw { src: "./test/assets/tldraw-sketch.tldr" } -->`
		const result = await expandReadmeString(markdown, {
			addMetaComment: false,
			assetsPath: `${os.tmpdir()}/assets`,
		})
		expect(stripHashes(stripTempPath(result.toString()))).toMatchInlineSnapshot(`
			"<!-- tldraw { src: "./test/assets/tldraw-sketch.tldr" } -->

			<picture>
			  <source media="(prefers-color-scheme: dark)" srcset="assets/tldraw-sketch-XXXXXXXX-dark.svg">
			  <source media="(prefers-color-scheme: light)" srcset="assets/tldraw-sketch-XXXXXXXX-light.svg">
			  <img alt="tldraw diagram" src="assets/tldraw-sketch-XXXXXXXX-light.svg">
			</picture>

			<!-- /tldraw -->
			"
		`)
	}, 30_000)

	it('should expand tldraw images from remote urls', async () => {
		const markdown = `<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4" } -->`
		const result = await expandReadmeString(markdown, {
			addMetaComment: false,
			assetsPath: `${os.tmpdir()}/assets`,
		})

		expect(stripHashes(stripTempPath(result.toString()))).toMatchInlineSnapshot(`
			"<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4" } -->

			<picture>
			  <source media="(prefers-color-scheme: dark)" srcset="assets/v2_c_JsxJk8dag6QsrqExukis4-XXXXXXXX-dark.svg">
			  <source media="(prefers-color-scheme: light)" srcset="assets/v2_c_JsxJk8dag6QsrqExukis4-XXXXXXXX-light.svg">
			  <img alt="tldraw diagram" src="assets/v2_c_JsxJk8dag6QsrqExukis4-XXXXXXXX-light.svg">
			</picture>

			<!-- /tldraw -->
			"
		`)
	}, 120_000)
})

// Helpers

// Replace matched dates with the placeholder text for stable snapshots
function stripTempPath(text: string): string {
	return text.replaceAll(os.tmpdir(), '').replaceAll('../', '')
}

function stripHashes(text: string): string {
	return text.replaceAll(/-[\da-f]{8}/g, '-XXXXXXXX')
}
