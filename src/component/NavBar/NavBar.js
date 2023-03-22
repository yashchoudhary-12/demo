import "./nav.css"
import { useNavigate } from "react-router-dom"


function NavBar() {
  const navigate = useNavigate();
  const Navigate = useNavigate();
  return (<>
    <nav>
      <div className="Container">
        <span className="heading">Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        {/* <button className="btn-2 com-btn">Register</button> */}
        <button className="btn-2 com-btn" onClick={() => { navigate('/register') }}>Register</button>
        <span className="com-btn">|</span>
        <button className="btn-1 com-btn" onClick={() => { Navigate('/sign') }}>Login</button>
        {/* <button className="btn-1 com-btn">Login</button> */}
      </div>
    </nav>
  </>);
}

export default NavBar;
