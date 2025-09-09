# Blog Platform

A modern **blog platform built with Next.js**, allowing users to create, manage,
and read posts in a clean and responsive interface.  
The project is designed to be simple, extensible, and developer-friendly.

---

## 🚀 Features

- ✍️ Create, edit, and delete blog posts
- 📖 Read posts with a responsive layout
- ⚡ Built with **Next.js** for fast performance and SEO
- 📦 Database migrations and seeding support
- 🔒 Authentication with JWT and cookie sessions

---

## 📂 Tech Stack

- [Next.js](https://nextjs.org/) – React framework for production
- [Tailwind-CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Node.js](https://nodejs.org/) – Runtime environment
- [Drizzle](https://orm.drizzle.team/) – Database ORM
- [SQLite](https://sqlite.org/) – Database

---

## ⚙️ Environment Variables

Rename .env.local-EXAMPLE file to .env.local and edit the variables.

## 🛠️ Installation & Setup

Follow the steps below to run the project from scratch:

```sh
# Make sure you have Node.js installed
# Install all dependencies
npm install

# Configure environment variables in `.env.local`

# Run database migrations
npm run migrate

# (Optional) Seed the database with initial data
npm run seed

# Run in dev mode
npm run dev

# Or build the Next.js application
npm run build

# Start the production server (for testing)
npm start
```

## 🔨 Admin Page Access

To access the admin page, go to /admin/login and insert the information you've
put on the .env.local file.
