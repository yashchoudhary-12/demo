import NavBar from '../NavBar/NavBar'
import Navigation from "../NavBar/Navigation"
import { useState } from 'react';

export default function Home() {
    const [toggle, setToggle] = useState(false);
    return (<>
        {!toggle ? <NavBar /> : <Navigation />}
        This is Home Page.
    </>)
};