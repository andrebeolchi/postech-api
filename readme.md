# PosTech
## Description
This is a simple API that allows you to CRUD posts.

## Installation
1. Clone the repository 
2. Run `yarn install` to install the dependencies
3. Run `docker-compose up` to start the database 
   - (I recommend using `docker-compose up -d` to run in the background)
4. Run `yarn dev` to start the server

<br>

> [!IMPORTANT]  
> Remember to create a `.env` file using the `.env.example` as a template

## Next Steps
- [X] Create the project structure
- [X] Add Docker support
- [X] Install and configure Prisma ORM
- [X] Create the database schema
- [X] Create the CRUD operations for the posts
- [X] Add CI/CD (GitHub Actions)
- [X] Add custom error handling
- [ ] Record a video showing how to use the API

## Endpoints
- GET `/posts` - Get all posts
- GET `/posts/:id` - Get a post by id
- POST `/posts` - Create a new post
- PUT `/posts/:id` - Update a post by id
- DELETE `/posts/:id` - Delete a post by id
- GET `/posts/search` - Get posts by query

## Tests
To run the tests, run `yarn test`

## Folder Structure
`src/` - Contains the source code
<br>├ `adapters/` - Contains the adapters that are responsible for abstracting external libraries and services
<br>├ `controllers/` - Contains the controllers that are responsible for handling the requests and responses
<br>├ `repositories/` - Contains the repositories are responsible for handling the database operations
<br>├ `routes/` - Contains the routes are responsible for defining the API routes
<br>├ `services/` - Contains the services are responsible for handling the business logic and calling the repositories
<br>├ `app.ts` - The file that configures the application, adding the routes, middlewares and/or other configurations (like error handling)
<br>├ `server.ts` - The file that starts the server

## Technologies
- Node.js
- Express
- Prisma ORM (PostgreSQL)
- Docker
- Jest
- TypeScript

## Author
<img src="https://avatars.githubusercontent.com/u/61586777" width="16" height="16"> [André Beolchi](https://github.com/andrebeolchi) (RM 359648)
<br><img src="https://avatars.githubusercontent.com/u/34667580" width="16" height="16"> [Fellipe Corominas](https://github.com/LeFelps) (RM 359677)

<br> Happy coding! 🚀