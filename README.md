# Admin Panel Demo Project

A demo project for an admin panel built with TypeScript and React. This project includes authentication, entry management, and user detail views.

## Stacks Used

- **TypeScript**
- **React (with TypeScript)**
- **Node.js (with TypeScript)**
- **Express (with TypeScript)**
- **TailwindCSS**
- **ChakraUI**

## Features

1. **Authentication**: 
   - JWT-based authentication (note: no password encryption implemented).
2. **Entries Listing**: 
   - Admins can view a list of entries.
3. **Search and Filtering**: 
   - Search and filter entries (users) including alphabetical order sorting, age, and gender filtering.
4. **User Details**: 
   - Render detailed information for specific users.

## Database

- **Local Database**: 
  - Runs on port `4001` with the Node.js server.

## Pages

1. **Login Page**: 
   - Authentication interface.
2. **Homepage (Dashboard)**: 
   - Main dashboard showing the list of users.
3. **User Page**: 
   - Detailed view of a specific user’s information.

## Setup

To get started with this project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rizzboislw/AdminPanel_ReactJs_NodeJs.git
   ```

2. **Include your `.env` file in the server directory**

   - Ensure you have a `.env` file in the `server` directory.
   - The `.env` file should include your secret key:

   ```bash
   SECRET_KEY=[your_secret_key]
   ```

   *Here's how to generate your secret key:*
   - Open your command line interface.
   - Enter the following command to generate a base64 encoded secret key:

   ```bash
   node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
   ```

3. **Install Dependencies and Run the Server**

   Navigate to the `server` directory, install dependencies, and start the server:

   ```bash
   cd server
   npm install
   npm run start
   ```

4. **Install Dependencies and Run the Client**

   Navigate to the `client` directory, install dependencies, and start the client:

   ```bash
   cd ../client
   npm install
   npm run dev
   ```

5. **Visit the Application**

   Open your browser and go to `http://localhost:[given port]` for the client website.

## Admin Credentials

Here are the admin credentials for logging into the application:

1. **Admin One**
   - **ID**: adminuser1 
   - **Password**: adminpassword1

2. **Admin Two**
   - **ID**: adminuser2
   - **Password**: adminpassword2

3. **Admin Three**
   - **ID**: adminuser3 
   - **Password**: adminpassword3
