# Remix + Express Template

A modern, full-stack TypeScript template combining Remix and Express for building scalable web applications with server-side rendering, WebSocket support, and end-to-end type safety.

## Features

- 🚀 **Full-Stack TypeScript**: End-to-end type safety across your entire application
- 🎭 **Remix + Express**: Combines the best of both worlds - Remix's SSR and routing with Express's flexibility
- 🔒 **Authentication Ready**: Built-in Google OAuth support using remix-auth
- 📦 **Database Integration**: Drizzle ORM setup for type-safe database operations
- 🎨 **Modern Styling**: TailwindCSS for utility-first styling
- 🐳 **Docker Support**: Production-ready Docker configuration
- ⚡ **Fast Development**: Powered by Vite for lightning-fast builds and HMR
- 🔍 **Type Safety**: Shared types between frontend and backend

## Project Structure

```
.
├─ app/                  # Remix frontend code
│  ├─ components/        # React components
│  ├─ context/          # React context providers
│  ├─ routes/           # Remix routes
│  ├─ entry.client.tsx  # Client entry point
│  ├─ entry.server.tsx  # Server entry point
│  ├─ root.tsx         # Root component
│  └─ tailwind.css     # Tailwind styles
├─ src/                 # Server-side code
│  ├─ api/             # Express API routes
│  └─ utils/           # Utility functions
├─ common/              # Shared code between frontend and backend
│  ├─ auth/             # Authentication logic
│  ├─ db/               # Database configuration and schemas
│  ├─ errors/           # Error handling
│  └─ type/             # Shared types
├─ build/               # Build output
│  ├─ client/           # Client-side build
│  ├─ node/             # Server build
│  └─ server/           # Remix server build
├─ drizzle/             # Database migrations
├─ public/              # Static assets
├─ .vscode/             # VS Code configuration
├─ server.ts            # Express server setup
├─ vite.config.ts       # Vite configuration
├─ remix.config.js      # Remix configuration
├─ tsconfig.json        # TypeScript configuration for app
├─ tsconfig.server.json # TypeScript configuration for server
├─ tailwind.config.ts   # Tailwind CSS configuration
├─ postcss.config.js    # PostCSS configuration
├─ .env.example         # Example environment variables
├─ .env                 # Environment variables
├─ .env.production      # Production environment variables
├─ Dockerfile           # Docker configuration
└─ package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/remix-express-template.git
   cd remix-express-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the environment variables in `.env` with your configuration:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/dbname
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   SESSION_SECRET=your_session_secret
   ```

5. Run database migrations:
   ```bash
   npm run db:migrate
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000.

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t remix-express-app .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file .env remix-express-app
   ```

## Build Pipeline

The template uses two separate build pipelines:

1. **Frontend (Remix + Vite)**:
   - Builds client assets to `build/client`
   - Handles SSR compilation

2. **Backend (TypeScript)**:
   - Compiles server code to `build/node`
   - Maintains Node.js native module resolution

## Important Notes

### Common Module Usage

The `common/` directory contains shared code between frontend and backend. When using this shared code:

- Keep code platform-agnostic (no DOM or Node-specific APIs)
- Use `globalThis` for true singletons (e.g., database connections)
- Stick to relative imports in production builds

### Authentication

The template uses `remix-auth` with Google OAuth. The authentication is unified across both Remix and Express through a custom middleware.

### Module Resolution

Both server and Remix code use the same module resolution settings to ensure compatibility:

```json
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "node"
  }
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:remix` - Build Remix assets
- `npm run build:server` - Build server code
- `npm start` - Start production server
- `npm run db:migrate` - Run database migrations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
