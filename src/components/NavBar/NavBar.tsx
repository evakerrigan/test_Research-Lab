import './NavBar.css';

export const NavBar = () => {
  return (
    <div className="navbar">
      <button className="navbar-button green"><div className="button-text">Market</div></button>
      <button className="navbar-button grey" ><div className="button-text">Project</div></button>
      <button className="navbar-button blue" ><div className="button-text">User</div></button>
    </div>
  )
}