function Resume() {
    const frontProficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'jQuery', 'Responsive Design', 'Bootstrap, Bulma'];
    const backProficiencies = ['APIs', 'GraphQl', 'Express', 'MySQL, sequelize', 'MongoDB, Mongoose', 'REST', 'Node.js'];

    return (
        <section id="resume" className="resume">
            <h3>Front-End Proficiencies</h3>
            <ul>
                {frontProficiencies.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                {backProficiencies.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Resume;