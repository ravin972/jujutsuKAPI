# Express User API

This is a simple Node.js application that provides a RESTful API for managing users. It's built using Express.js and uses in-memory storage for user data. Users can be created, retrieved, updated, and deleted through the API.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- npm (Node Package Manager) installed on your machine.

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone <repository-url>
```

2. Install the project dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

The server will run on http://localhost:5000.

## API Endpoints

### Get All Users

- **URL**: `/users`
- **HTTP Method**: GET
- **Description**: Retrieve a list of all users.

### Get a User by ID

- **URL**: `/users/:id`
- **HTTP Method**: GET
- **Description**: Retrieve a user by their unique ID.

### Create a New User

- **URL**: `/users`
- **HTTP Method**: POST
- **Description**: Create a new user. You should send a JSON object with the user's name and age in the request body.

Example Request Body:
```json
{
    "name": "Ravin",
    "age": 22
}
```

### Update a User

- **URL**: `/users/:id`
- **HTTP Method**: PATCH
- **Description**: Update an existing user by ID. You can update the user's name and/or age by sending a JSON object in the request body.

Example Request Body:
```json
{
    "name": "New Name",
    "age": 25
}
```

### Delete a User

- **URL**: `/users/:id`
- **HTTP Method**: DELETE
- **Description**: Delete a user by their unique ID.

## Dependencies

- [Express.js](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [UUID](https://www.npmjs.com/package/uuid)

## Author

- [Ravinder Pandey](https://github.com/ravin972)

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE.md) file for details.

## Acknowledgments

- This project is for educational purposes and demonstrates building a simple Express.js REST API.

Remember to replace `<repository-url>` in step 1 with the actual URL of your repository.