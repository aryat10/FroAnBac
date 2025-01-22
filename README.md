# FrontnBack

## Overview

**FrontnBack** is a repository created as part of a learning task to explore the connection between the frontend and backend parts of a website. This repository does not represent a complete project but serves as a practical exercise to understand the integration of frontend and backend technologies.

## Folder Structure

The repository is structured into two main folders:

### Backend

The `Backend` folder contains the server-side code implemented using Express.js. It includes the necessary files to set up an Express server and define routes for serving data to the frontend.

### Frontend

The `Frontend` folder houses the client-side code developed using React with Vite. It comprises files responsible for making requests to the backend server and rendering the received data on the web page.

## Integration Details

The integration between the frontend and backend is achieved as follows:

- **Backend**: The `server.js` file in the `Backend` folder sets up an Express server and defines an API endpoint to serve jokes. These jokes are hardcoded into the server file.

- **Frontend**: The `app.jsx` file in the `Frontend` folder makes a request to the backend server to fetch jokes. Upon receiving the jokes, it renders them on the web page.

## Installation

To set up the project, follow these steps:

1. Navigate to the `Backend` folder and run `npm init` in the terminal to initialize the Node.js environment and install the required dependencies from `package.json`.

2. Similarly, navigate to the `Frontend` folder and run `npm init` to set up the frontend environment.

## Note

The `node_modules` folders are not included in the repository. You need to install dependencies separately in both the `Backend` and `Frontend` folders using `npm init`.

