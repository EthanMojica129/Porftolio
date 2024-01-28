import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import webDevelopment from '../assets/web-development.svg';
import projectManagement from '../assets/Project-management.svg';
import automation from '../assets/automation.svg';
import seo from '../assets/seo-3.svg';
import improvement from '../assets/process-improvement.svg';
import cloud from '../assets/cloud.svg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className = 'skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Throughout my career as a developer I have acquired a lot of different skills, both technical and administrative. I have also acquired mastery in some fundamental tools for the development of my professional activities.</p>
                        <Carousel responsive={responsive} infinite={true} className='skillSlider'>
                            <div className='item'>
                                <img src={webDevelopment} alt="Web Development Logo"/>
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={projectManagement} alt="Project Management Logo"/>
                                <h5>Project Management</h5>
                            </div>
                            <div className='item'>
                                <img src={automation} alt="Automation Logo"/>
                                <h5>Automation</h5>
                            </div>
                            <div className='item'>
                                <img src={seo} alt="SEO logo"/>
                                <h5>Search Engine Optimization</h5>
                            </div>
                            <div className='item'>
                                <img src={improvement} alt="Constant Improvement Logo"/>
                                <h5>Constant improvement</h5>
                            </div>
                            <div className='item'>
                                <img src={cloud} alt="Cloud Computing Logo"/>
                                <h5>Cloud Computing</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}
