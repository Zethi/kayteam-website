# KayTeam Project

A Website using NextJS with TypeScript and Taiwlind.

## Getting Started

To start developing, follow these steps:

1. Install the dependencies by running the following command: `yarn install`
2. Start the development server with the following command: `yarn dev`

## Technologies Used

- NextJS: React framework for server-side rendering.
- TypeScript: Programming language that adds static typing to JavaScript.
- Tailwind CSS: Utility-first CSS framework for rapidly building custom user interfaces.

## Building and Deploying the Application

You have two options for building and deploying the application:

### Option 1: Manual Build and Deployment

1. Compile the application by running the command `yarn build`.
   This will generate a `build` folder with the compiled files ready for deployment.
2. Start the production server using the command `yarn start`.
   The application will now be available at [http://localhost:3000](http://localhost:3000).

### Option 2: Using Docker

1. Configure the `docker-compose.yml` file with the necessary parameters for your environment.
2. Build the Docker image and run the container using the command `docker-compose up`.
   This will create a Docker container with the application ready to be accessed at [http://localhost:PORT](http://localhost:PORT).
