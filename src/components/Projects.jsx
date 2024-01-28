import projImg1 from '../assets/projImg1.png'
import {Container, Row, Col, Nav, Tab} from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
const projects = [
    {
        title: "Little Lemon Book A table",
        description: 'Design & Development of a booking application for a restaurant called little lemon (React)',
        imgUrl: projImg1
    }
]
export const Projects = () => {
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Here are some of the projects that I worked on</p>
                <Tab.Container id ='projects-tabs' defaultActiveKey='first'>
                <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                <Nav.Item>
                    <Nav.Link eventKey='first'>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">Tab Two </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third" >
                    Tab Three
                    </Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey='first'>
                        <Row>
                            {projects.map((project, index)=>{
                                return(
                                    <ProjectCard title={project.title} description={project.description} imgUrl={project.imgUrl} key={index} />
                                )
                            })}
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
