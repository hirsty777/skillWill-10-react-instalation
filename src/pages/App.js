//import logo from './logo.svg';
import profile from '../assets/images/profile.png';
import '../assets/styles/App.css'        //'./App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" /> 
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='wrapper'>
      <div className='top-decoration'>Simple Portgolio</div>
      <main>
        <div className='profile-box'>
          <img src={profile} className="profile-image" alt="profile" />
          <p>Hello I`m Lasha.<br/>Driven by a relentless desire for improvement,
          I am committed to overcoming challenges and pushing my boundaries, all 
          in the pursuit of becoming a proficient coder.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
