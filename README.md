It is simple todo app with NextJS, sqlite and drizzle ORM.
Here I also added db.sqlite and .env.local to get you run locally without any 
hard setup, enjoy. 

## Getting Started

create a .env.local in project root. Copy everythings from .env.example to .env.local then iinstall dependencies:

```bash
npm install
```
run the development server:

```bash
npm run dev
```
run below command to see db in browser, Open [https://local.drizzle.studio](https://local.drizzle.studio)

```bash
npx drizzle-kit studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

