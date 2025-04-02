# 🚀 Next-Gen Express Web Application

![version](https://img.shields.io/badge/version-1.0.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)

## 🌟 Overview

This is a modern, high-performance web application for Chris Meah - built with Express.js and TypeScript. Designed with scalability and developer experience in mind.

## ✨ Features

- **TypeScript Integration** - Full type safety across both frontend and backend
- **Express Server** - Fast, minimalist web framework for Node.js
- **Hot Reloading** - Instant feedback during development
- **Production-Ready** - Optimized build process for deployment

## 🔧 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/AJHemmings/chris-meah-website.git
cd chris-meah-website
npm install
```

## 🚀 Running the Application

### Development Mode

Start the development server with hot reloading:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

> **Note:** If you encounter binding errors like `ENOTSUP: operation not supported on socket`, try modifying the server configuration in `server/index.ts`:
>
> ```typescript
> // Change this:
> server.listen({
>   port,
>   host: "0.0.0.0",
>   reusePort: true,
> });
>
> // To this simpler configuration:
> server.listen(port, () => {
>   log(`serving on port ${port}`);
> });
> ```

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## 🧰 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run check` - Run TypeScript type checking

## 📋 Requirements

- Node.js (v16 or later recommended)
- npm or yarn package manager

## 🔮 Future Scope

### Drizzle ORM Integration

This project is structured to incorporate Drizzle ORM in future updates. Drizzle is a lightweight, type-safe ORM for TypeScript that offers:

- **TypeScript-First Design** - Providing complete type safety with your database schema
- **SQL-Like Query Builder** - Write queries that closely resemble SQL for better readability
- **Performance-Focused** - Minimal overhead with a focus on speed and efficiency
- **Schema Migrations** - Simplified database schema management
- **Multiple Database Support** - Works with PostgreSQL, MySQL, and SQLite

Once implemented, Drizzle will enable robust customer relationship management (CRM) capabilities, allowing for efficient storage and retrieval of data, interactions, and relationship tracking.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
