# AJA Software Licenses' Manager

This project is a comprehensive Software Licensing Manager Website incorporating Bootstrap code, licensed under the MIT License.

## Usage

### For Clients:

- **Landing Page:** Featuring a header, footer, and navigation bar for easy website navigation.
- **Login Page:** Securely access your account.
- **Registration Page:** Set up new accounts with personal information.
- **Dashboard:** A user-friendly dashboard displays account details, including name, address, and vital information.
- **Serial Number Management:** View and manage serial numbers, including software names, purchase dates, and expiry dates.
- **Adding Serial Numbers:** Add new serial numbers using a straightforward page with necessary fields.
- **License Management:** Dedicated page for renewing or discontinuing licenses, especially for subscription-based licenses.
- **Acquiring New Licenses:** Conveniently procure new licenses for software.

### For Software Providers:

- **Landing Page:** Equipped with a header, footer, and navigation bar for efficient website navigation.
- **Provider Access:** Secure login page for software providers to access their accounts.
- **Registration:** Specific page for software providers to establish new accounts.
- **Provider Dashboard:** Comprehensive dashboard offers an overview of clients' accounts, including essential information.
- **Serial Number Management:** Generate new serial numbers and associate them with specific products and client accounts.
- **Serial Number Control:** Dedicated page for enabling/unblocking or disabling/blocking individual serial numbers.
- **Client Notifications:** Notification feature for communication with clients through emails, including subscription renewals, invalid serial numbers, and irregular serial number usage.


## Setting up the Database

To use AJA Software Licenses' Manager, you need to set up a database and configure the necessary environment variables.

### Database Configuration

1. **XAMPP with MySQL:**
   - Install [XAMPP](https://www.apachefriends.org/index.html) to set up a local development environment with MySQL.
   - Open XAMPP and start the Apache and MySQL services.

2. **MySQL Database Setup:**
   - Access PHPMyAdmin through `http://localhost/phpmyadmin/`.
   - Create a new database for the project, e.g., `aja_licenses`.
   - Import the SQL schema from the provided `schema.sql` file to create the necessary tables.

### Environment Variable Configuration

1. **Copy the `.env.example` file:**
   - Duplicate the `.env.example` file in the project root directory.
   - Rename the duplicate file to `.env`.

2. **Update the Database Connection Details:**
   - Open the `.env` file in a text editor.
   - Locate the following lines:

     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=
     DB_DATABASE=aja_licenses
     ```

   - Update the values according to your MySQL configuration.
   
3. **Other Environment Variables:**
   - Review other variables in the `.env` file and adjust them if necessary, such as the port number or any secret keys.

### Save Changes and Run the Application

1. **Save the `.env` File:**
   - Save the changes made to the `.env` file.

2. **Run the Application:**
   - If the application is not already running, start the server using the provided scripts or with the command `npm start` or `nodemon server.js`.

3. **Access the Website:**
   - Open your browser and navigate to the specified port (default is `http://localhost:3000/`).

Now your AJA Software Licenses' Manager should be connected to the configured database, and you can start using the application.

## Backend Features:

- **User Authentication:**
  - `auth.js`: Handles user authentication.
  - `authenticate.js`: Middleware to authenticate user sessions.
  - `login.js` and `logout.js`: Manage user login and logout.
  - `profile.js`: Manages user profile information.
  - `signup.js`: Handles user registration.

- **License Management:**
  - `license.js`: Manages licenses, including renewal and discontinuation.

- **Serial Number Control:**
  - `disableenable.js`: Enables/Disables or Blocks/Unblocks individual serial numbers.

- **Table Creation:**
  - `dbconfig.js`: Configures the XAMPP MySQL database.
  - `pages.js`: Handles routes for different pages.

- **Profile Picture Storage:**
  - Images uploaded through the profile management feature are stored in the `uploads` folder.

## Installation Guide

1. **Open in a Browser:**
   - Download the "AJA_Website.zip" file from the source.
   - Extract the contents to a location of your choice on your computer.
  
2. **View the Code:**
   - Open the project folder in VSCode to navigate through the files and directories.

3. **Preview in a Browser:**
   - Open HTML files in the browser via "File" > "Open File" in VSCode.

4. **Test the Code:**
   - Interact with the website in the browser for testing purposes.

5. **Deployment:**
   - Deploy the website locally or use a repository like GitHub or Vercel for broader accessibility.

## Main Applications and Dependencies:

- **XAMPP with MySQL Database:**
  - Utilized XAMPP for MySQL database setup and management through PHPMyAdmin.

- **Node.js Packages (from `package.json`):**
  - `@emailjs/browser`: Email sending capabilities.
  - `bcryptjs`: Password hashing.
  - `body-parser`: Parses incoming request bodies.
  - `cookie-parser`: Parses cookie headers.
  - `dotenv`: Loads environment variables.
  - `ejs`: Embedded JavaScript templates.
  - `emailjs`: Email sending capabilities.
  - `express`: Web application framework.
  - `jsonwebtoken`: JSON Web Token generation and verification.
  - `multer`: File uploading middleware.
  - `mysql`: MySQL database connectivity.
  - `nodemon`: Monitors for changes and automatically restarts the server.

## Third-Party Code

This project incorporates code from Bootstrap, licensed under the MIT License.

- **Original Bootstrap License:**
  - Copyright (c) 2011-2022 Twitter, Inc.
  - [Bootstrap License](https://github.com/twbs/bootstrap/blob/main/LICENSE)
