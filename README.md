# Srey Mango - Upcycled Cambodian Mango Treasures

A modern e-commerce website showcasing sustainable, upcycled products made from Cambodian mangoes. Built with Next.js and Tailwind CSS, this platform connects consumers with authentic, handcrafted items while supporting local farmers and reducing food waste.

## 🌟 Features

- **Home Page**: Hero section with farm imagery, featured products, farm story, upcoming experiences, and farm adoption program
- **Products Page**: Browse handcrafted mango-based products (soaps, oils, jams, sauces)
- **Experiences Page**: Discover cultural experiences and workshops in Cambodia
- **Farmers Page**: Meet the Cambodian farmers behind the products
- **Membership Page**: Farm adoption program with exclusive benefits
- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Dynamic Content**: Data-driven pages using JSON files for easy content management

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Daravuth24/srey-mango.git
cd srey-mango
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The app will auto-reload as you make changes to the code.

## 📁 Project Structure

```
src/
├── app/
│   ├── data/                 # JSON data files
│   │   ├── experiences/
│   │   ├── farmers/
│   │   ├── home-page/
│   │   ├── membership/
│   │   └── products/
│   ├── experiences/          # Experiences page
│   ├── farmers/              # Farmers page
│   ├── membership/           # Membership page
│   ├── products/             # Products page
│   ├── favicon.ico
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── layout/
│   │   ├── footer.tsx        # Site footer
│   │   └── navbar.tsx        # Navigation bar
│   └── ui/
│       ├── Badge.tsx         # Reusable badge component
│       ├── Button.tsx        # Button component
│       └── Card.tsx          # Card component
└── fonts/
    ├── GeistMonoVF.woff
    └── GeistVF.woff
public/
└── [images]                  # Static images (farm photos, product images)
```

## 🛠️ Technologies Used

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font) (optimized with next/font)
- **TypeScript**: For type safety
- **Data**: JSON files for content management

## 📊 Data Management

Product and experience data is stored in JSON files under `src/app/data/` for easy maintenance:

- `products.json`: Product catalog with images, descriptions, and pricing
- `experiences.json`: Cultural experiences and workshops
- `farmers.json`: Farmer profiles and stories
- `benefits.json`: Membership benefits

## 🎨 Customization

### Styling
- Global styles in `src/app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Custom color scheme with brand colors (cream, secondary, primary)

### Content
- Update JSON files in `src/app/data/` to modify content
- Add new images to the `public/` folder
- Modify components in `src/components/` for UI changes

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
This is a standard Next.js app that can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Node.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and commit: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Srey Mango.

## 📞 Contact

For questions or support, please contact the development team.

---

Built with ❤️ for sustainable farming and Cambodian communities.
