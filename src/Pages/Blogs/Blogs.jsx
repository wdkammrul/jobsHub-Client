const Blogs = () => {
  return (
    <div>
      <div className="bg-slate-700 rounded-lg p-16 mt-16 w-[400px] md:w-[740px] lg:w-full mx-auto">
        <h1 className="text-center text-3xl font-bold">
          Q: 01: What is an access token and refresh token? How do they work and where should we
          store them on the client-side?
        </h1>
        <ol>
          <li className="text-start mt-8">
            <h1>
              ⇝ An access token is like a key that lets an application access a user's data on a server. It's short-lived and used for specific tasks. A refresh token is a longer-term key that, when the access token expires, gets a new one without the user having to log in again. These tokens need secure storage on the client-side, with access tokens usually kept in memory and refresh tokens stored more securely, like in a secure cookie.

              <br /><br />
              ⇝ Access tokens act as short-lived keys for applications to access user data on a server. When these tokens expire, refresh tokens, with a longer lifespan, obtain new access tokens without requiring user reauthentication. Access tokens are typically stored in memory on the client-side, while refresh tokens, which are more persistent, are securely stored in mechanisms like secure HTTP cookies to prevent unauthorized access. Security measures, including HTTPS and protection against Cross-Site Scripting (XSS), are crucial for safeguarding these tokens.
            </h1>
          </li>

          <h1 className="text-center text-3xl font-bold mt-20">
            Q: 02: What is express js?
          </h1>
          <li className="mt-8">
            ⇝ Express.js is a web application framework for Node.js, simplifying the creation of web and mobile applications. Known for its minimal design and flexibility, it provides essential features like routing and middleware support. Express.js is widely used to build APIs and web applications, offering developers a streamlined and efficient development process in the Node.js environment.
          </li>


          <h1 className="text-center text-3xl font-bold mt-20">
            Q: 03: What is Nest JS ?
          </h1>
          <li className="mt-8">
            ⇝ NestJS is a Node.js framework for creating scalable server-side applications, leveraging concepts from both object-oriented and functional programming. Built on Express.js, it features a powerful dependency injection system and encourages the use of TypeScript for type safety and maintainability. With a modular and structured approach, NestJS is well-suited for building robust backend systems, especially for APIs and microservices.
          </li>
        </ol>
      </div>


      <div className="bg-slate-800 rounded-lg p-16 mt-16 w-[400px] md:w-[740px] lg:w-full mx-auto">
        <h1 className="text-center text-3xl font-bold">
          ✈ My Code Explain
        </h1>
        <ol>
          <li className="text-start mt-8">
            <h1>
              1. Folder Structure:
              The code follows a well-organized folder structure with separate folders for components, pages, authentication, utilities, styles, server, routes, models, controllers, and middlewares.
              <br /><br />
              2. Header :
              The Header component is responsible for displaying navigation links based on whether the user is logged in or not. It includes links to Home, All Jobs, My Jobs, Applied Jobs, Add A Job, Blogs, and User Profile.

              <br /><br />
              3. Footer :

              The Footer component contains the website's footer content, including the logo, copyright, contact information, and social media links.

              <br /><br />
              4. Home Page:

              The Home page consists of a Banner component and JobCategories component, providing a visually appealing and user-friendly interface.
              <br /><br />
              5. Banner Component:
              The Banner component displays a slider/banner with a Heading Title, Short Description, and a Search Input Field, contributing to a visually appealing home page.

              <br /><br />
              6. JobCategories Component:

              The JobCategories component utilizes the React-tabs library to implement a tab system for job categories. It dynamically generates tabs for On Site, Remote, Hybrid, Part-Time, and All Jobs, each showing relevant job cards.

              <br /><br />
              7. JobCard Component:

              The JobCard component represents an individual job card, displaying essential job details like the poster's name, job title, posting date, application deadline, salary range, and a View Details Button.
              <br /><br />
              8. Login and Registration:

              The website incorporates a Login page with email/password and Google Sign-in options. A link on the login page redirects users to the registration page, featuring fields for name, email, password, and photo URL.

              <br /><br />
              9. User Authentication:

              The Header dynamically adjusts its content based on user authentication status, displaying either user-specific links (My Jobs, Applied Jobs, Add A Job, Blogs, User Profile) or a Login button.

              <br /><br />
              10. All Jobs Page:

              The All Jobs page presents a tabular form showcasing jobs added by users, including details such as the poster's name, job title, posting date, salary range, and a Details Button.

              <br /><br />
              11.   Search Functionality:

              The All Jobs page implements a search system based on job titles, enhancing user experience and making job exploration more efficient.
              <br /><br />
              12.  Single Job Details:

              Clicking on the View Details Button redirects users to a private route displaying detailed information about a specific job, including company logo, job banner, title, description, salary range, number of applicants, and an Apply Button.
              <br /><br />
              13.  Apply Functionality:

              The Apply Button opens a modal with auto-filled user name and email, providing an input field for submitting a resume link. Upon clicking the submit application button, the application is saved in a MongoDB collection.
              <br /><br />
              14.  Private Routes:

              Certain routes, such as Add A Job, My Jobs, and Applied Jobs, are private and accessible only to logged-in users, enhancing security and user-specific functionality.
              <br /><br />
              15. 404 Page:
              A custom 404 page is created with interesting graphics, a Back to Home button, and no header/footer for a better user experience when encountering a page not found situation.
            </h1>
          </li>
        </ol>
      </div>



    </div>
  );
};

export default Blogs;