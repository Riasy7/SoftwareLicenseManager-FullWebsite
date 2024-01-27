# AJA Software Licenses' Manager

This repo is the FULL website with both upgraded front-end features and back-end implemented features. This is the completed Software License Manager Website from my other repository where I showcase the front-end HTML aspect only. If you wish to look at the HTML only visit this repo https://github.com/Riasy7/SoftwareLicenseManager-HTML/. And if you wish view the front-end to get a feel of the webiste please visit this page where I uploaded html only static pages to showcase the website feel and look. https://riasy7.github.io/SoftwareLicenseManager-HTML/

Anywyas, Express and Node.js are thouroughly used to create the back end of this website. If you wish to use this website and run the back-end, with the SQL db, add all the dependencies to your project and please refer to the below instructions.

However, before hopping into the instructions, here is a quick rundown/explanation or even just an introduction to some EJS concepts to help you utilize it if you are new to it or to increase your knowledge on it.

## Understanding EJS (Embedded JavaScript)

### What is EJS?

EJS, or Embedded JavaScript, is a templating engine for JavaScript that allows dynamic content rendering within HTML files. It enables you to embed JavaScript code directly into your HTML markup, making it easier to generate dynamic HTML content on the server side.

### Why Use EJS?

1. **Dynamic Content:**
   - EJS allows you to inject dynamic data directly into your HTML templates, making it easier to create web pages with content that changes based on variables, user input, or server-side logic.

2. **Code Reusability:**
   - EJS supports reusable templates, enabling you to create modular components that can be included across multiple pages. This promotes code organization and reduces redundancy.

3. **Integrating JavaScript Logic:**
   - With EJS, you can embed JavaScript logic directly into your HTML, allowing you to execute server-side code and generate dynamic content before sending it to the client's browser.

4. **Expressive Syntax:**
   - EJS uses a simple and expressive syntax, resembling traditional HTML with added flexibility. It strikes a balance between ease of use and powerful features.

### How EJS Works:
   **Here's a few examples**
   
1. **Tags:**
   - EJS uses tags to embed JavaScript code within HTML. The default tags are `<% %>` for control flow and `<%= %>` for outputting data.
   ```
   <ul>
     <% for(let i=0; i<5; i++) { %>
       <li>Item <%= i+1 %></li>
     <% } %>
   </ul>
   ```
   
2. **Outputting Variables:**
   - To output the value of a Javascript variable, use `<%= %>` tags.
   ```
   <p>Welcome, <%= username %>!</p>
   ```
   
3. **Control Flow:**
   - This is a really cool concept and it's the main reason I wanted to use express in my application. It's control flow; EJS supports JavaScript control flow structures like if, for, and while. In simple terms, you can use JS code in your HTML code just by importing express and using a .ejs file.
   ```
   <% if (isAdmin) { %>
      <p>Welcome, Administrator!</p>
   <% } else { %>
     <p>Welcome, User!</p>
   <% } %>
   ```
   
## Integrating EJS with Node.js and Express

### Setting Up EJS:

1. **Install EJS:**
   - Install the EJS package using `npm install ejs`.
2. **Configure Express:**
   - In your Express application, set EJS as the view engine.
   ```
   const express = require('express');
   const app = express();

   app.set('view engine', 'ejs');
   ```
   
### Rendering EJS Templates:

1. **Create EJS templates:**
   - Create an ejs file for example `index.ejs`, `profile.ejs`, etc..
   ```
   <!--index.ejs-->
   <html>
   <head>
     <title><%= title %></title>
   </head>
   <body>
     <h1>Welcome to <%= title %></h1>
   </body>
   </html>
   ```
   ```
   <!-- profile.ejs -->
   <html>
   <head>
     <title>User Profile</title>
   </head>
   <body>
     <p>Welcome, <%= username %>!</p>
     <% if (isAdmin) { %>
       <p>You have administrative privileges.</p>
     <% } %>
   </body>
   </html>
   ```
   
2. **Render Templates in Express Routes:**
   - Use `res.render()` in your Express route handlers to render EJS templates.
   ```
   app.get('/', (req, res) => {
     res.render('index', { title: 'Home Page' });
   });
   
   app.get('/profile', (req, res) => {
      res.render('profile', { username: 'JohnDoe', isAdmin: true });
   });
   ```

### Passing Data to Templates:

1. **Provide Data with `res.render()`:**
   - Pass data to EJS templates by providing an object as the second argument to `res.render()`.
   ```
   app.get('/profile', (req, res) => {
      res.render('profile', { username: 'JohnDoe', isAdmin: true });
   });
   ```
   
2. **Access Data in your Templates:**
   - Access the data in your EJS templates using the embedded JavaScript syntax.
   ```
   <p>Welcome, <%= username %>!</p>
   <% if (isAdmin) { %>
     <p>You have administrative privileges.</p>
   <% } %>
   ```
   
Finally, with all these intro things and very straight forward pieces of code, EJS should be clearer and easier to establish in your own code now. Please feel free to use any of my code to learn more and to increase learning!
**Have fun coding!**
Below are all the setups and usage skip if you don't want to run the on your own device.
   
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
