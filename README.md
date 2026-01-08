# step-right-homes

Professional website for Step Right Homes - Residential Property Maintenance Services in South Australia.

## About Step Right Homes

Step Right Homes provides comprehensive property maintenance services for residential properties across South Australia. Our services include:

- Fencing
- Roofing
- Electrical Works
- Plumbing Works

**Specialization**: Real Estate Residential Property Maintenance

## Contact Information

- **Address**: 26 Spencer Street, Cowandilla SA 5033
- **ABN**: 74 692 705 267
- **Phone**: 0478 733 998

## Technology Stack

- **Framework**: Next.js 15.1.6
- **Language**: TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **Font**: Roboto (Google Fonts)
- **Theme Colors**:
  - Primary: Orange/Yellow rgb(249, 202, 1)
  - Secondary: Black and White

## Project Structure

```
step-right-homes/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   └── layout/            # Layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
├── lib/
│   └── constants.ts       # Application constants
└── public/                # Static assets

```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Reusable UI components
- ✅ Professional layout with Navbar and Footer
- ✅ Essential pages (Home, Services, About, Contact)
- ✅ Custom theme colors
- ✅ Roboto font integration
- ✅ Mobile-friendly navigation

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design System

### Colors
- **Primary Yellow**: rgb(249, 202, 1) - Used for CTAs and highlights
- **Black**: #000000 - Primary text and secondary buttons
- **White**: #FFFFFF - Background and primary buttons text

### Typography
- **Font Family**: Roboto
- **Weights**: 300, 400, 500, 700, 900

### Spacing
- **Section Spacing**: 5rem (default) / 3rem (small)
- **Container Padding**: Responsive padding for all screen sizes

## License

© 2025 Step Right Homes. All rights reserved.
