import Poster from './Poster';
import './style.css'
function Register(){
    return (<>
        <main>
            <Poster/>
            <section className="sec-second register">
                <form >
                    <h1>Register</h1>
                    <div>Register to continue access pages</div>
                    <button id='btn-circle'>+</button><br />
                    <input type="text"  placeholder="Name"/><br />
                    <input type="text" placeholder="Email"/><br />
                    <input type="text" placeholder="Phone"/><br />
                    <input type="text" placeholder="Profession"/><br />
                    <input type="text" placeholder="Password"/><br />
                    <input type="text" placeholder="Confirm Password"/><br />
                    <button type="submit">Register</button><br />
                </form>
            </section>
        </main>
    </>);
}
export default Register;