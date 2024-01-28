import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import react from '../assets/react.svg';
import python from '../assets/python.svg';
import rails from '../assets/rails.svg';
import rust from '../assets/rust.svg';
import dotnet from '../assets/dotnet.svg';

export const Lenguages = () => {
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
        <section className = 'lenguage' id='lenguage'>
            <Container>
                <Row>
                    <Col>
                    <div className='lenguage-bx'>
                        <h2>Development Lenguages</h2>
                        <p>Some of the development Lenguages and other programing tools that I know how to use.</p>
                        <Carousel responsive={responsive} infinite={true} className='lenguage-slider'>
                            <div className='item'>
                                <img src={react} alt="React"/>
                                <h5>React</h5>
                            </div>
                            <div className='item'>
                                <img src={python} alt="Python"/>
                                <h5>Python</h5>
                            </div>
                            <div className='item'>
                                <img src={rails} alt="Ruby On Rails"/>
                                <h5>Ruby on Rails</h5>
                            </div>
                            <div className='item'>
                                <img src={rust} alt="Rust"/>
                                <h5>Rust</h5>
                            </div>
                            <div className='item'>
                                <img src={dotnet} alt=".net"/>
                                <h5>.Net</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}
