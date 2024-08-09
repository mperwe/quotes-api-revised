# Quotes API

This is a simple Quotes API built with Node.js and Express.js following the MVC design pattern. The API allows you to manage authors and quotes.

## Endpoints

### Authors
- **GET /authors**: Retrieve all authors.
- **GET /authors/:id**: Retrieve a specific author by ID.
- **POST /authors**: Create a new author.
- **PUT /authors/:id**: Update an existing author by ID.
- **DELETE /authors/:id**: Delete an author by ID.

### Quotes
- **GET /quotes**: Retrieve all quotes.
- **GET /quotes/:id**: Retrieve a specific quote by ID.
- **POST /quotes**: Create a new quote.
- **PUT /quotes/:id**: Update an existing quote by ID.
- **DELETE /quotes/:id**: Delete a quote by ID.

## Development

- Install dependencies: `npm install`
- Run the server with Nodemon: `npm run dev`

## Logging

All requests are logged with timestamps, methods, URLs, and response statuses in `logs/request_logs.txt`.

## Deployment

Deploy the API using Render or any other Node.js hosting platform.
