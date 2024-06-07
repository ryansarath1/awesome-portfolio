import ryanImage from '../assets/ryan.jpg';

function About() {
    return (
        <section id="about" className="about">
            <div className="article">
                <h2>About Me</h2>
                <img src={ryanImage} alt="ryan's picture" className="photo" />
                <p id="paragraph">
                I am a Junior Developer. I can provide clean code and pixel perfect design. 
                I also make the website more & more interactive with we animations. 
                A responsive design makes your website accessible to all users, regardless of their device.
                </p>
            </div>
        </section>
    );
}

export default About;