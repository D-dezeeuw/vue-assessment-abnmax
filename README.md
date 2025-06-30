# ABN Max Streaming Service

## Introduction
ABN Max is a conceptual streaming service application, envisioned as a spin-off from ABN AMRO, a prominent bank. This project demonstrates how a financial institution might venture into the entertainment sector, offering a unique blend of banking reliability and streaming entertainment. The application provides a user-friendly interface to browse and view details of various TV shows, leveraging external APIs for content.

The content for ABN Max is sourced from the TVmaze and The Movie Database (TMDB) APIs, providing a rich catalog of TV shows. YouTube is integrated for playing trailers, offering a dynamic and engaging user experience.

## Features
- **Engaging Welcome Screen**: A visually appealing opening screen with a clear call-to-action button to enter the application.
- **Comprehensive TV Show Listing**: A main page displaying a curated list of TV shows, allowing users to easily discover content.
- **Detailed Show View**: Clicking on a TV show card navigates to a dedicated detail page, presenting in-depth information about the selected show.
- **Integrated Trailer Playback**: Within the detailed show view, users can watch YouTube trailers directly, enhancing the content preview experience.

## Technologies Used
ABN Max is built with a modern and robust technology stack, ensuring a performant and scalable application:
- **Nuxt.js**: A powerful open-source framework that makes web development simple and powerful with Vue.js.
- **Vue.js**: The progressive JavaScript framework for building user interfaces.
- **Pinia**: A lightweight and intuitive state management library for Vue.js applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and maintainability.
- **Vitest**: A fast and modern unit testing framework powered by Vite.
- **Playwright**: A robust framework for end-to-end testing of web applications.

## API Integrations
The application relies on external APIs to fetch and display content:
- **TVmaze API**: Used for fetching general TV show information and listings. The base URL is configured in `nuxt.config.ts`.
- **The Movie Database (TMDB) API**: Utilized for more detailed show information and to retrieve trailer links. **Note**: The API key for TMDB is currently hardcoded in `composables/useTmdbApi.ts`. For production environments, it is highly recommended to move this key to an environment variable for security and flexibility.
- **YouTube**: Integrated for embedding and playing TV show trailers.

## Project Structure
The project follows a standard Nuxt.js directory structure, promoting modularity and maintainability:
- `components/`: Contains reusable Vue components, categorized further (e.g., `decorative`, `layout`, `ui`).
- `composables/`: Houses reusable Vue Composition API functions, primarily for API interactions (e.g., `useTvShowApi.ts`, `useTmdbApi.ts`).
- `pages/`: Defines the application's routes and their corresponding Vue components (e.g., `index.vue` for the home page, `tv-show/[id].vue` for show details).
- `public/`: Stores static assets like images, favicons, and global CSS.
- `stores/`: Manages application state using Pinia stores (e.g., `tvshows.ts` for TV show data).
- `server/`: (If applicable) Contains server-side API routes or utilities.
- `types/`: Holds TypeScript type definitions for data structures (e.g., `tvshows.ts`).
- `utils/`: Provides general utility functions.

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js**: Version 18 or higher (LTS recommended).
- **npm** (Node Package Manager) or **Yarn**.

### Installation
1.  **Clone the repository**:
    ```bash
    git clone [repository-url] # Replace with the actual repository URL
    cd abn-max
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Configuration
- **TMDB API Key**: As mentioned, the TMDB API key is currently hardcoded. To enhance security and manageability, consider moving it to an environment variable. You can define it in a `.env` file at the project root (e.g., `NUXT_PUBLIC_TMDB_API_KEY=your_key_here`) and access it via `useRuntimeConfig()`.

### Development Server
To run the application in development mode with hot-reloading:
```bash
npm run dev
```
The application will be accessible in your browser at `http://localhost:3000`.

### Building for Production
To compile the application for production deployment:
```bash
npm run build
```
This command generates the optimized production build in the `.output` directory.

### Running in Production
To preview the production build locally:
```bash
npm run preview
```

## Docker Deployment
The application can be easily containerized using Docker for consistent deployment across different environments.

### Building the Docker Image
From the project root directory, execute the following command to build the Docker image:
```bash
docker build -t abn-max-app .
```
This command builds an image named `abn-max-app` using the `Dockerfile` provided.

### Running the Docker Container
To run the built Docker image and map the application's port (3000) to your host machine's port 3000:
```bash
docker run -p 3000:3000 abn-max-app
```
Your ABN Max application should now be accessible in your browser at `http://localhost:3000`.

## Usage
1.  **Welcome Screen**: Upon opening the application, you'll be greeted by a welcome screen. Click the "Enter" button to proceed.
2.  **Browse TV Shows**: You will be presented with a grid of TV show cards. Scroll through to explore available content.
3.  **View Show Details**: Click on any TV show card to navigate to its dedicated detail page. Here, you'll find more information about the show.
4.  **Watch Trailer**: On the show detail page, if a trailer is available, you can play it directly within the application.

## Testing
The project includes both unit and end-to-end tests to ensure functionality and stability.
- **Run Unit Tests**:
    ```bash
    npm run test
    ```
- **Run End-to-End Tests**:
    ```bash
    npm run test:e2e
