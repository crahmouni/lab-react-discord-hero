import './App.css';
import logo from './assets/discord-logo-white.png';
import discordBackground from './assets/discord-background.png';
import menu from './assets/menu-icon.png';

function App() {
  return (
    <div className="App"> 
    <header className="header">
      <img src={logo} alt="Discord Logo" className="logo" />
      <img src={menu} alt="Menu Icon" className="menu-icon" />
    </header>
    <main className="main-content">
      <div className="text-content">
        <h1>IMAGINE A</h1>
        <h1>PLACE...</h1>
        <p>
        ...where you can belong to a school club, a gaming group, or a 
        worldwide art community. Where just you and a handful of 
        friends can spend time together. A place that makes it easy to 
        talk every day and hang out more often.
        </p>
        <div className="buttons">
          <button className="button light-button">Download for Mac</button>
          <button className="button dark-button">Open Discord in your browser</button>
        </div>
      </div>
    </main>
    <img src={discordBackground} alt="Discord Characters" className="discord-background" />
    </div>
  );
}

export default App
