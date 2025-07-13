# Replit.md

## Overview

This is a full-stack web application built with React and Express, featuring a modern UI built with shadcn/ui components and Tailwind CSS. The application appears to be a Telegram-like interface with phone number authentication and multi-step user onboarding flow. It uses TypeScript throughout and follows a monorepo structure with shared schemas between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules (type: "module")
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Project Structure
```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared TypeScript schemas and types
├── components.json  # shadcn/ui configuration
├── drizzle.config.ts # Database configuration
└── migrations/      # Database migrations
```

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared schema definitions in `shared/schema.ts`
- **Current Tables**: Users table with id, username, password
- **Migrations**: Automated with drizzle-kit

### Storage Interface
- **Abstract Interface**: IStorage interface for CRUD operations
- **Memory Implementation**: MemStorage class for development/testing
- **Database Integration**: Ready for PostgreSQL via Drizzle ORM

### Authentication System
- **User Model**: Username/password based authentication
- **Session Management**: PostgreSQL-backed sessions
- **Validation**: Zod schemas for input validation

### UI Components
- **Design System**: shadcn/ui with custom theming
- **Theme**: Dark theme with custom color palette (telegram-blue, social-proof colors)
- **Mobile-first**: Responsive design with mobile breakpoints
- **Custom Components**: FloatingLabel, StepCard, ProgressBar, StatusBar

### Form Handling
- **Library**: React Hook Form with Zod resolvers
- **Validation**: Client-side validation with shared schemas
- **OTP Input**: Custom OTP input component for verification codes

## Data Flow

### Client-Server Communication
1. **API Requests**: Custom apiRequest utility with credential handling
2. **Query Management**: React Query for caching and synchronization
3. **Error Handling**: Centralized error handling with toast notifications
4. **Authentication**: Cookie-based sessions with automatic credential inclusion

### State Management
- **Server State**: React Query for API data
- **Local State**: React hooks for component state
- **Form State**: React Hook Form for form management

## External Dependencies

### Database
- **Neon PostgreSQL**: Serverless PostgreSQL database
- **Connection**: @neondatabase/serverless driver
- **Environment**: DATABASE_URL environment variable required

### UI Framework
- **Radix UI**: Headless UI components
- **Tailwind CSS**: Utility-first styling
- **Lucide Icons**: Icon library
- **Date Utilities**: date-fns for date formatting

### Development Tools
- **Vite**: Build tool with React plugin
- **TypeScript**: Type checking and compilation
- **ESBuild**: Server-side bundling for production

## Deployment Strategy

### Development
- **Server**: tsx for TypeScript execution
- **Client**: Vite dev server with HMR
- **Database**: Drizzle push for schema updates

### Production Build
- **Client**: Vite build to `dist/public`
- **Server**: ESBuild bundle to `dist/index.js`
- **Static Files**: Served from Express after API routes

### Environment Setup
- **Database**: PostgreSQL connection via DATABASE_URL
- **Session Store**: PostgreSQL table for session storage
- **Static Assets**: Served from Express in production

### Key Features
- **Hot Reload**: Development server with automatic reload
- **Type Safety**: Full TypeScript coverage
- **Database Migrations**: Automated schema updates
- **Error Overlay**: Runtime error modal in development
- **Replit Integration**: Cartographer plugin for Replit environment

The application is structured as a full-stack TypeScript application with clear separation between client and server code, shared type definitions, and a modern development experience with hot reload and type safety throughout.