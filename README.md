# @elcarte/blocks

Base React components for Elcarte e-commerce platform.

## Installation

```bash
npm install @elcarte/blocks
```

## Usage

```tsx
import { BlockRenderer, Hero, ProductsGrid } from '@elcarte/blocks';

// Render blocks from API response
<BlockRenderer blocks={pageData.blocks} />
```

## Available Components

- `BlockRenderer` - Renders an array of blocks
- `Hero` - Hero section with title and image
- `ProductsGrid` - Grid of product cards
- `RichText` - Rich text content

## License

MIT
