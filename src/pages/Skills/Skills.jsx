import '../../styles/skills.css';
import ProgBar from '../../UI/prog-bar/ProgBar';
import TestiProfCard from '../../UI/testimonial-profile-card/TestiProfCard';
import testiProfImage1 from '../../assests/skills-01.jpg'
import testiProfImage2 from '../../assests/skills-02.jpg'


const Skills = () => {
    return (
        <div className='skills-parent'>
            <div className="testimo-parent">
                <div className="text-skills-container">
                    <h3>Testimonials</h3>
                    <p>Curabitur arcu erat,
                        accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                        eget tincidunt. </p>
                </div>
                <TestiProfCard image={testiProfImage1} text='Curabitur arcu erat,
                 accumsan id imperdiet et,
                 porttitor at sem. Mauris blandit aliquet elit,
                 eget tincidunt.' writer='John Doe, CEO' />

                <TestiProfCard image={testiProfImage2} text='Curabitur arcu erat,
                 accumsan id imperdiet et,
                 porttitor at sem. Mauris blandit aliquet elit,
                 eget tincidunt.' writer='Tarek Amr, CEO' />
            </div>
            <div className="skills-container">
                <div className="text-skills-container">
                    <h3>Skills</h3>
                    <p>Curabitur arcu erat,
                        accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit,
                        eget tincidunt.
                    </p>
                </div>
                <ProgBar progNum={90} progTag='HTML&CSS' />
                <ProgBar progNum={85} progTag='JavaScript' />
                <ProgBar progNum={80} progTag='Reactjs' />
                <ProgBar progNum={80} progTag='MaterialUI/Bootstrap' />
            </div>
        </div>
    )
}

export default Skills;