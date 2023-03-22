import './style.css'
// import image from '../../Images/images-2.png'
function SingIn(){
    return (<>
        <main>
            <section className="sec-first">
                {/* <img src={image} alt="" /> */}
                <h1>Tuner</h1>
                <div>Enjoy Multiple videos at one place</div>
                <button>Register</button>
            </section>
            <section className="sec-second">
                <form action="">
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
export default SingIn;