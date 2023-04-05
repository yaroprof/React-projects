# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Here is the corrected summary of the components and files in the 14-cart/final project:

`index.js` is the entry point of the application and renders the App component. It also sets up the React and ReactDOM libraries to render the application in the browser.

### `App.js` is the root component of the application and renders the Navbar and CartContainer components. It also creates a CartContext using the useReducer hook and passes it to the CartContainer component as a prop.

### `CartContainer.js` is a container component that renders each CartItem component for every item in the shopping cart. It uses the CartContext to access the state and dispatch functions related to the shopping cart.

### `CartItem.js` is a presentational component that represents a single item in the shopping cart. It renders the item's name, price, quantity, and total price. It communicates with the CartContext to update the state of the shopping cart.

### `Navbar.js` is a presentational component that renders the navigation bar at the top of the page. It also displays the number of items in the user's shopping cart and toggles the visibility of the CartContainer component when the user clicks on the shopping cart icon.

### `context.js` is a file that exports a CartContext object created using the createContext hook. This context provides a way for components in the application to share state related to the shopping cart. It also exports a reducer function that is used by the useReducer hook in the CartContainer component to manage the state of the shopping cart.

### `data.js` is a file that exports an array of product data used in the application. Each product object contains information about the product, such as its name, image, price, and id.

### `reducer.js` is a file that exports a reducer function used to manage the state of the shopping cart. This function takes the current state and an action object as arguments and returns the new state based on the type of action.

The interaction between these components and files is as follows:

### `index.js` renders the App component.
### `App.js` renders the Navbar and CartContainer components and creates a CartContext using the useReducer hook.
### `CartContainer` maps over the cart items and renders a CartItem component for each item. It communicates with the `context.js` file to update the state of the shopping cart.
### `CartItem` represents a single item in the shopping cart. It renders the item's name, price, quantity, and total price. It communicates with the context.js file to update the state of the shopping cart.
### `Navbar` displays the number of items in the user's shopping cart and toggles the visibility of the CartContainer component when the user clicks on the shopping cart icon.
