import { expandString } from 'mdat'
import fs from 'node:fs/promises'
import path from 'node:path'
import { afterAll, describe, expect, it } from 'vitest'

const TEST_DEST = 'test/.tldraw-tmp'

// Clean up generated files after all tests
afterAll(async () => {
	await fs.rm(path.join(process.cwd(), TEST_DEST), { force: true, recursive: true })
})

// These have long timeouts because going through puppeteer is slow
describe('tldraw image rule', () => {
	it('should expand tldraw images from local files', async () => {
		const markdown = `<!-- tldraw({ src: "./test/assets/tldraw-sketch.tldr", dest: "${TEST_DEST}"}) -->`
		const result = await expandString(markdown)
		// Surface the actual error if expansion failed
		expect(result.messages.map((m) => m.toString())).toEqual([])
		expect(stripHashes(result.toString())).toMatchInlineSnapshot(`
			"<!-- tldraw({ src: "./test/assets/tldraw-sketch.tldr", dest: "test/.tldraw-tmp"}) -->

			<picture>
			  <source media="(prefers-color-scheme: dark)" srcset="test/.tldraw-tmp/tldraw-sketch-XXXXXXXX-dark.svg">
			  <source media="(prefers-color-scheme: light)" srcset="test/.tldraw-tmp/tldraw-sketch-XXXXXXXX-light.svg">
			  <img alt="tldraw diagram" src="test/.tldraw-tmp/tldraw-sketch-XXXXXXXX-light.svg">
			</picture>

			<!-- /tldraw -->
			"
		`)
	}, 30_000)

	it('should expand tldraw images from remote urls', async () => {
		const markdown = `<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4", dest: "${TEST_DEST}"} } -->`
		const result = await expandString(markdown)

		expect(stripHashes(result.toString())).toMatchInlineSnapshot(`
			"<!-- tldraw { src: "https://www.tldraw.com/s/v2_c_JsxJk8dag6QsrqExukis4", dest: "test/.tldraw-tmp"} } -->
			"
		`)
	}, 120_000)
})

// Helpers

function stripHashes(text: string): string {
	return text.replaceAll(/-[\da-f]{8}/g, '-XXXXXXXX')
}
