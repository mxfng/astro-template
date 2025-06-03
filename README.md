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
- `bun run build` - Build the site for production
- `bun preview` - Preview the production build locally
- `bun format` - Format all files with Prettier
- `bun format:check` - Check if files are properly formatted
- `bun lint` - Run ESLint to check for issues
- `bun lint:fix` - Fix ESLint issues automatically
- `bun test` - Run Vitest tests

## License

MIT License

Copyright (c) 2025 Max Fung

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
