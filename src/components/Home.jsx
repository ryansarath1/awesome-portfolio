import { useState } from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Resume from './Resume';
import ryanImage from '../assets/ryan.jpg'
import blockBusterBeats from '../assets/blockbuster-beats2.png';

function Portfolio() {
    const [activeSection, setActiveSection] = useState('about');

    const renderSection = () => {
        switch (activeSection) {
            case 'about':
                return <About ryanImage={ryanImage} />;
            case 'work':
                return <Work blockBusterBeats={blockBusterBeats} />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return null;
        }
    };

    const handleNavigationClick = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="portfolio">
            <header className="header">
                <div id="header">
                    <h1>Hello, I am Ryan Sarath.</h1>
                </div>
                <nav id="nav">
                    <ul>
                        <li className={activeSection === 'about' ? 'active' : ''}>
                            <button onClick={() => handleNavigationClick('about')}>About Me</button>
                        </li>
                        <li className={activeSection === 'work' ? 'active' : ''}>
                            <button onClick={() => handleNavigationClick('work')}>Portfolio</button>
                        </li>
                        <li className={activeSection === 'contact' ? 'active' : ''}>
                            <button onClick={() => handleNavigationClick('contact')}>Contact Me</button>
                        </li>
                        <li className={activeSection === 'resume' ? 'active' : ''}>
                            <button onClick={() => handleNavigationClick('resume')}>Resume</button>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>
                {renderSection()}
            </main>

            <footer className="footer">
                <h4>Connect with Me</h4>
                <nav id="footernav">
                    <ul>
                        <li>
                            <a href="sarathryan@yahoo.com">sarathryan@yahoo.com</a>
                        </li>
                        <li>
                            <a href="https://github.com/ryansarath1">GitHub</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ryan-sarath-6493a02a7/">LinkedIn</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default Portfolio;