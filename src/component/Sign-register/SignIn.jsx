import Poster from './Poster';
import './style.css'
// import image from '../../Images/images-2.png'
function SignIn(){
    return (<>
        <main>
            <Poster/>
            <section className="sec-second">
                <form >
                    <h1>Sing In</h1>
                    <div>Sing in to continue access pages</div><br />
                    <input type="text" placeholder="Email"/><br />
                    <input type="text" placeholder="Password"/><br />
                    <button type="submit">Sing in</button>
                </form>
            </section>
        </main>
    </>);
}
export default SignIn;