# Astro Starter Kit + Some Goodies

This is the starter kit from Astro with a few useful dependencies added for convenience when bootstrapping new static sites. I've added and configured the following:

## Extra Dependencies

- TailwindCSS - flexible expressive inline styling
- ESLint - pretty much a must-have for any JavaScript projects, static analysis
- Prettier - formatting that works out of the box for most filetypes in these kinds of sites

## Dev Tools

- Vitest - unit testing framework that integrates nicely with Vite
- Husky - pre-commit hooks to check your code before you yeet it up

## Prerequisites

- git
- bun

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   bun i
   ```
3. Rename the app title in `package.json` (optional)
4. Remove or overwrite this README (optional)
5. `rm -rf .git/` and `git init` to initialize a new repository
6. Make your first commit
7. Start the development server:

```bash
bun dev
```

## Available Scripts

- `bun dev` - Start the development server
- `bun build` - Build the site for production
- `bun preview` - Preview the production build locally
- `bun serve` - Preview the production build with host access
- `bun tsc` - Run TypeScript type checking
- `bun format` - Format all files with Prettier
- `bun format:check` - Check if files are properly formatted
- `bun lint` - Run ESLint to check for issues
- `bun lint:fix` - Fix ESLint issues automatically
- `bun test` - Run Vitest tests
- `bun check` - Run format check, lint, and TypeScript check
- `bun clean` - Remove node_modules and dist directories
- `bun git:add` - Run checks before staging files

## Usage

You may clone, re-use, re-write, and re-purpose this template for your projects however you'd like.
