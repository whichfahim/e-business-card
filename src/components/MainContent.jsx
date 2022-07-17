export default function MainContent(){
    return(
        <main>
            <h1 className="main-heading">Fahim Imtiaz</h1>
            <h3 className="sub-heading">Frontend Developer</h3>
            <h4 className="website-link">fahimimtiaz.com</h4>
            <div className="btn-container">
                <button className="btn-email"><img className="iconify" src="src\assets\icons\Mail Icon.svg" alt="Email icon"/>Email</button>
                <button className="btn-linkedin"><img className="iconify" src="src\assets\icons\Linkedin Icon.svg" alt="Email icon"/>LinkedIn</button>
            </div>
            <div className="text-container">
                <h2 className="heading-para">About</h2>
                <p className="text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="heading-para">Interests</h2>
                <p className="text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}