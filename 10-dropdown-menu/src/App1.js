// import React from 'react';
// import Parse from 'parse';
// import './Dropdown.css';
// import Dropdown from './Dropdown';



// const app_id = process.env.REACT_APP_PARSE_APP_ID;
// const host_url = process.env.REACT_APP_PARSE_HOST_URL;
// const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
// Parse.initialize(app_id, javascript_key);
// Parse.serverURL = host_url;

// const App = () => {
//   const fetchAllMovies = async () => {
//     const query = new Parse.Query("Movies")
//     const allMoviesGet = await query.find();

//     allMoviesGet.forEach((item) => {
//       console.log(item)

//       console.log("App ID:", process.env.REACT_APP_PARSE_APP_ID);
//       console.log("JS Key:", process.env.REACT_APP_PARSE_JS_KEY);
//     })
//   }
//   fetchAllMovies()


//   return (
//     <></>
//     // <div className="dropdown-container">
//     //   <Dropdown
//     //     options={[
//     //       { value: 'option1', label: 'Option 1' },
//     //       { value: 'option2', label: 'Option 2' },
//     //       { value: 'option3', label: 'Option 3' },
//     //       { value: 'option4', label: 'Option 4' },
//     //     ]}
//     //     onChange={(selected) => console.log(selected)}

//     //   />
//     // </div>
//   );
// };

// export default App;