# Portfolio Migration Guide

## Installation Steps

Run these commands in your terminal to complete the migration:

### 1. Remove old dependencies and install new ones

```bash
# Remove node_modules and lock file
rm -rf node_modules yarn.lock

# Install new dependencies
yarn install

# or if using npm
npm install
```

### 2. If you encounter any TypeScript errors, add these type definitions:

```bash
yarn add -D @types/node
```

### 3. Start the development server

```bash
yarn dev
```

## What's Changed

### ✅ Fixed Issues:
1. **Broken images** - Moved from `src/assets/` to `public/images/`
2. **Updated dependencies** - All packages updated to latest versions
3. **Replaced PrimeReact** - Now using Tailwind CSS + custom components
4. **Added image optimization** - New `ImageWithLoading` component with skeleton loading

### 🎨 New Features:
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for easy theming
- **Custom UI components** in `src/components/ui/`
- **Path aliases** - Use `@/` to import from `src/`
- **Loading skeletons** for images
- **Modern animations** ready to implement

### 📁 New File Structure:
```
src/
├── components/
│   └── ui/
│       ├── button.tsx      # Modern button component
│       ├── card.tsx        # Card components
│       ├── badge.tsx       # Badge for tags
│       └── image-with-loading.tsx  # Optimized image component
├── lib/
│   └── utils.ts           # Utility functions (cn)
└── ...
```

## Next Steps

Now you need to update your components to use the new UI components:

1. **Update Header component** - Replace PrimeReact Menubar with Tailwind navigation
2. **Update Hero component** - Replace PrimeReact Card and Button with new components
3. **Update Projects component** - Use new Card and Badge components
4. **Update other sections** - Remove all PrimeReact imports

## Quick Component Examples:

### Using the new Button:
```tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost" size="icon">
  <GithubIcon className="h-4 w-4" />
</Button>
```

### Using the new Card:
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Project Name</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Project description</p>
  </CardContent>
</Card>
```

### Using ImageWithLoading:
```tsx
import { ImageWithLoading } from "@/components/ui/image-with-loading"

<ImageWithLoading
  src="/images/project.png"
  alt="Project screenshot"
  aspectRatio="video"
/>
```

## Troubleshooting

If you see errors about missing dependencies, make sure to:
1. Delete `node_modules` and `yarn.lock`/`package-lock.json`
2. Run `yarn install` or `npm install` again
3. Restart your dev server

The site should now work with the new setup!
