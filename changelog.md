# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

(Node.js support requirements have sometimes increased in minor or patch releases.)

## [3.0.2] - 2026-11-02

### Changed

- Remove the `remark-mdat` peer requirement, leaving mdat `^3.0.0` as the only required peer.

### Documentation

- Generate dependency and installation guidance from package metadata, explicitly list supported Node.js and mdat versions, and use `npm install --save-dev` in the installation example.

### Maintenance

- Update runtime requirements to `@kitschpatrol/tldraw-cli ^6.1.1` and `zod ^4.6.7`.
- Construct the exported plugin configuration with mdat's `defineConfig` helper.
- Refresh development dependencies and pnpm, replace standalone skill synchronization with pnpm-managed skills and permissions, and clean up contributor configuration.
- Refresh CI, release, metadata, and dependency-update actions; schedule dependency updates monthly and make link checks skip loopback URLs and tolerate empty inputs.

## [3.0.1] - 2026-10-07

### Changed

- **Breaking:** Restrict supported Node.js versions to `^24.16.0 || >=26.3.0`, dropping Node.js 25 and versions 26.0 through 26.2.

### Documentation

- Correct plugin registration to use `defineConfig` with top-level rules, document mdat 3 compatibility, and link to releases supporting earlier mdat versions.

### Maintenance

- Update runtime requirements to `@kitschpatrol/tldraw-cli ^6.1.0` and `zod ^4.6.5`.
- Refresh contributor dependencies, including pnpm 12 and Vitest 5, and add automatic development-skill synchronization.
- Add a scheduled workflow that runs the dependency-maintenance skill and opens update pull requests.
- Make release automation validate the triggering tag against the repository's default branch, pin release actions, and publish npm packages using a one-time password.
- Improve website link checks by loading Lychee configuration, discovering sitemap links from HTML, and pinning sitemap-discovery tools.

## [3.0.0] - 2026-07-31

### Changed

- **Breaking:** Require mdat `^3.0.0` and remark-mdat `^3.0.0`.
- **Breaking:** Raise the minimum supported Node.js version to `24.16.0`.

### Fixed

- Report descriptive errors identifying the source and theme when the renderer returns no light-mode or dark-mode output.

### Documentation

- Correct README links to GitHub's picture-element guidance, npm, and the MIT license.

### Maintenance

- Update the renderer dependency to `@kitschpatrol/tldraw-cli ^6.0.2`.
- Upgrade contributor tooling to TypeScript 6 and shared-config 8, refresh build and release dependencies and pnpm, and adapt source, tests, and editor tasks to stricter checks.
- Add scheduled and pull-request link checking for repository Markdown and an external project website, and refresh CI actions.

## [2.0.3] - 2026-06-06

### Changed

- **Breaking:** Raise the minimum supported Node.js version to `22.22.2`.
- Update diagram rendering to tldraw 5 through `@kitschpatrol/tldraw-cli ^6.0.0`.

### Documentation

- Update the README's MIT license link.

### Maintenance

- Update the Zod runtime requirement to `^4.4.3`.
- Refresh development dependencies and GitHub Actions, upgrade to pnpm 11, and migrate dependency build permissions to `allowBuilds`.
- Fix the publishing script so `NPM_AUTH_TOKEN` is passed directly to `pnpm publish`.

## [2.0.2] - 2026-04-23

### Documentation

- Expand contribution guidance with an issue-first pull request policy and information about shared linting, formatting, and mdat tooling.

### Maintenance

- Update the renderer dependency to `@kitschpatrol/tldraw-cli ^5.0.16`.
- Refresh development dependencies and pnpm, and use a cross-platform cleanup command that preserves the `.claude` directory.
- Allow GitHub release automation to recognize version tags with or without a `v` prefix.

## [2.0.1] - 2026-04-03

### Fixed

- Create missing destination directories before validating them, allowing rendering into a new asset directory.
- Resolve destinations against the current working directory when expansion has no Markdown file context.
- Use forward slashes in generated image URLs on Windows.

### Maintenance

- Update the renderer dependency to `@kitschpatrol/tldraw-cli ^5.0.14`.
- Refresh development dependencies, including mdat 2.1, remark-mdat 2.2, shared configuration, and Node.js types.
- Restore CI linting, disable pnpm caching that interferes with Puppeteer, and make tests use local temporary assets with automatic cleanup to avoid Windows cross-volume path issues.

## [2.0.0] - 2026-04-02

### Added

- Add an optional `dest` argument to select each diagram's output directory, defaulting to `./assets`.

### Changed

- **Breaking:** Require mdat `^2.0.0` and remark-mdat `^2.0.0`, with plugin rules registered directly in the mdat configuration.
- **Breaking:** Resolve asset destinations and image URLs relative to the containing Markdown file, replacing the global `assetsPath` setting and package-relative image links.

### Documentation

- Update examples to function-call placeholder syntax, document destination customization and mdat 2 compatibility, and add rendered example output.

### Maintenance

- Upgrade validation to Zod 4 and remove the unused `type-fest` dependency.
- Upgrade shared development configuration to version 7 and migrate integration tests to mdat 2's `expandString` API.
- Extend CI to Linux, macOS, and Windows and normalize repository text files to LF line endings.

## [1.0.9] - 2026-04-01

### Maintenance

- Add Linux CI for builds, linting, and tests, and run Vitest without watch mode.
- Harden release and metadata workflows with pinned checkout revisions, explicit permissions, disabled credential persistence, and safer shell variable handling.
- Refresh shared configuration, mdat, build and test dependencies, and pnpm.

## [1.0.8] - 2026-03-21

### Maintenance

- Update runtime requirements to `@kitschpatrol/tldraw-cli ^5.0.13` and `type-fest ^5.5.0`.
- Declare the package side-effect-free for bundlers.
- Refresh development dependencies, pnpm, editor integration, and GitHub checkout and repository-metadata actions.

## [1.0.7] - 2026-02-23

### Maintenance

- Upgrade shared-config to version 6, refresh mdat and pnpm for development, and declare Node.js `>=22.21.0` as the contributor runtime requirement.

## [1.0.6] - 2026-02-18

### Maintenance

- Reuse the loaded mdat configuration when constructing image markup and simplify stale-asset cleanup.
- Update runtime requirements to `@kitschpatrol/tldraw-cli ^5.0.10` and `type-fest ^5.4.4`.
- Refresh Node.js types, build and release dependencies, pnpm, and unused-dependency checking configuration.

## [1.0.5] - 2026-01-29

### Maintenance

- Declare `path-type` and Zod as runtime dependencies and update `@kitschpatrol/tldraw-cli` to `^5.0.9` and `type-fest` to `^5.4.2`.
- Refresh development dependencies and pnpm, migrate CSpell and Prettier configurations to TypeScript, and exclude generated assets from version control.

## [1.0.4] - 2026-01-19

### Maintenance

- Update runtime requirements to `@kitschpatrol/tldraw-cli ^5.0.8` and `type-fest ^5.4.1`.
- Refresh development dependencies, pnpm, and editor settings, and exempt README TypeScript examples from unresolved-import lint errors.

## [1.0.3] - 2025-12-08

### Maintenance

- Update runtime requirements to `@kitschpatrol/tldraw-cli ^5.0.6` and `type-fest ^5.3.1`.
- Refresh development dependencies and pnpm, declare mdat explicitly for development, and fix shared-tooling hoisting by moving its settings into the pnpm workspace configuration.

## [1.0.2] - 2025-11-05

### Maintenance

- Move tsdown's output-extension setting into the build command and remove the redundant configuration file.

## [1.0.1] - 2025-11-05

### Maintenance

- Update the renderer dependency to `@kitschpatrol/tldraw-cli ^5.0.2`.
- Refresh lint, build, and test dependencies, including tsdown 0.16, and configure the build to preserve existing output extensions.

## [1.0.0] - 2025-11-03

### Added

- Provide a default-exported `tldraw` rule collection for embedding local `.tldr` files and remote tldraw URLs, distributed as typed ESM for mdat `^1.1.0` and Node.js `>=20.19.0`.
- Generate transparent light and dark SVGs in mdat's configured asset directory and emit theme-aware `<picture>` markup with configurable alt text and package-relative image URLs.
- Hash asset filenames, reuse existing renders for unchanged local sketches, and remove stale SVG versions; render remote diagrams on each expansion.

### Documentation

- Document development-dependency installation, plugin registration, placeholder usage, generated markup, and Puppeteer-backed rendering.

### Maintenance

- Establish TypeScript builds, linting, local and remote expansion tests, publishing scripts, and GitHub release and metadata workflows.

[1.0.0]: https://github.com/kitschpatrol/mdat-plugin-tldraw/releases/tag/v1.0.0
[1.0.1]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.3...v1.0.4
[1.0.5]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.4...v1.0.5
[1.0.6]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.5...v1.0.6
[1.0.7]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.6...v1.0.7
[1.0.8]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.7...v1.0.8
[1.0.9]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.8...v1.0.9
[2.0.0]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v1.0.9...v2.0.0
[2.0.1]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v2.0.0...v2.0.1
[2.0.2]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v2.0.1...v2.0.2
[2.0.3]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v2.0.2...v2.0.3
[3.0.0]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v2.0.3...v3.0.0
[3.0.1]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v3.0.0...v3.0.1
[3.0.2]: https://github.com/kitschpatrol/mdat-plugin-tldraw/compare/v3.0.1...v3.0.2
