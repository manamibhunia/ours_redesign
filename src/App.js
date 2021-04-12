import React from 'react';
// import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './App.css';

class App extends React.Component{
  render() {
    return (
      <div>
        <div>
          <Helmet>
            <title>OURS | HOME</title>
          </Helmet>
        </div>
        <div>
          <img src="https://static.tildacdn.com/tild3233-3364-4832-b066-623739333966/OURS-Finallogo-04.png" width="180" height="70" alt="hey" />
          <h1>An Anonymous Community of Seekers</h1>
        </div>       
      </div>
    )
  }

}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
