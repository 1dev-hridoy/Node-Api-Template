# Node.js API Template

A simple, clean, and modular Node.js API template using **Express.js**. Perfect for quickly building RESTful APIs with a scalable structure. 

## Features

- Simple and easy to use
- Modular API structure where each endpoint is self-contained
- Includes basic "Hello World" and "Greet" API examples
- Ready to use with Express.js for easy setup and deployment

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/1dev-hridoy/Node-Api-Template.git
    ```

2. Navigate into the project folder:

    ```bash
    cd Node-Api-Template
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

To start the server, run the following command:

```bash
npm start
```

By default, the server will run on **http://localhost:3000**. You can change the port by modifying the `PORT` environment variable or in the `config/server.js` file.

## API Endpoints

Here are the API endpoints included in this template:

### GET /api/hello

Returns a simple "Hello, World!" message.

**Response:**
```json
"Hello, World!"
```

### GET /api/greet

Returns a welcome message as a JSON object.

**Response:**
```json
{
    "message": "Welcome to the Node.js API!"
}
```

## Contributing

Feel free to fork the repository and submit issues or pull requests. All contributions are welcome!

## License

This project is licensed under the ISC License - see the LICENSE file for details.