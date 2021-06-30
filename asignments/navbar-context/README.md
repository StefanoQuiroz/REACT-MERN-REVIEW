# NavBar-Context

Create a React project that has a navigation bar with a message that says the user's name ("Hi, *some_name_here *!"). In the body of the page, have an entry where the user can dynamically change the name in the navigation bar. You will need to create the following components:

Form.js: this component should contain the input field.
FormWrapper.js: this component should only wrap the form component as a child. This is to illustrate that you can use nested components with context without passing support.
Navbar.js: this component should be your navigation bar containing the greeting.
Wrapper.js: this component should set the navbar and FormWrapper components (and will access useState).
You will also need to create the context object.

Your App.js function should look like this (note that Navbar and FormWrapper do not support any support): 

Execute the app

```sh
npm intall
npm run start
```