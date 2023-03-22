import "./nav.css"
function Navigation() {
  return (<>
    <nav>
      <div className="Container">
        <span className="heading">Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        <button className="btn-3 com-btn">Sign out</button>
        <span className="com-btn">|</span>
        <button className="btn-2 com-btn">Upload</button>
        <span className="com-btn">|</span>
        <button className="btn-11 com-btn">My Videos</button>
      </div>
    </nav>
  </>);
}

export default Navigation;
