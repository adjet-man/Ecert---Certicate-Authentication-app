## ecert: A Simple Certificate Authentication System

**ecert** is a web application designed to help institutions securely verify the authenticity of student certificates. It provides a user-friendly interface for certificate holders and a reliable verification system for authorized personnel.

**Features:**

* **Certificate Verification:** Enter a certificate ID to retrieve student information and confirm its authenticity.
* **Database Integration:** Connect to your database to access student data securely.
* **Error Handling:** Provides informative messages for invalid searches or database errors.
* **Visual Feedback:** Uses success or error messages with corresponding message types for clear user experience.

## Folder Structure

```
ecert
│
├── public
│   ├── css
│   ├── img
│   ├── js
│
├── views
│   ├── index.ejs
│   ├── verify.ejs
│   └── 404.ejs
│
├── app.js
└── README.md
```

## Routes

- `/`: Home page
- `/index`: Home page
- `/verify`: Certificate verification page
- `/search`: Handles certificate verification form submission
- `*`: 404 error page

![Home page](Readme/picture1.png)

![Form](Readme/picture2.png)


## Code Explanation

### `app.js`

- Sets up the Express server and configures middleware.
- Establishes a connection to the MySQL database.
- Defines routes for the home page, certificate verification, and 404 error handling.
- Handles form submissions for certificate verification.

### `views/index.ejs`

- Contains the HTML structure for the home page.

### `views/verify.ejs`

- Contains the HTML structure for displaying the verification results and student details.

### `views/404.ejs`

- Contains the HTML structure for the 404 error page.


**Requirements:**

* Node.js and npm (or yarn) installed
* MySQL database server

**Installation and Setup:**

1. Clone this repository: `git clone https://github.com/your-username/ecert.git`
2. Install dependencies: `npm install`
3. Configure your MySQL database connection details in `app.js`:
   - `host`
   - `user`
   - `password`
   - `database`

**Running the Application:**

1. Start the server: `node app.js`
2. Access the application in your browser: http://localhost:5000

**Usage:**

1. Navigate to the verification page: http://localhost:5000/verify
2. Enter a valid certificate ID in the provided field.
3. Click the 'Verify' button or submit the form.

**Verification Results:**

* **Successful Verification:** Displays the retrieved student information along with a success message.
* **No Student Found:** Informs the user that no student record matches the entered certificate ID.
* **Error:** Provides an informative message if a database error or other issue occurs.

**Further Development:**

This is a basic foundation for a certificate authentication system. You can extend it with features like user authentication, more detailed student information display, and integration with other systems. Feel free to explore the code and contribute your enhancements!


**By using ecert, you acknowledge these terms and conditions.**

I hope this improved README provides a clear and informative overview of your `ecert` web application. Feel free to tailor it further based on your specific implementation and desired features.



