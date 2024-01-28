import {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from '../assets/banner-icon.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const period = 2000;
    const toRotate = ['Web Developer', 'Software Developer' , 'Project Manager', 'System Administrator', 'SEO Specialist']
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
        return () => { clearInterval(ticker) };
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [text])
    const tick = ()=> {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex+1)
        }
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Ethan A,`} <span className='wrap'>{text}</span></h1>
                    <p>I recently graduated as a software engineer from Keiser University. I have a love for learning and a great curiosity, which has led me to learn about many things. My specialty is responsive web development and design, however I also have a particular interest in Machine Learning, automation and Cyber Security. These interests have led me to learn in a self-taught way some programming languages. </p>
                    <button onClick = {() => console.log('connect')}>Let&apos;s Connect <ArrowRightCircle size={25}/> </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Headder Img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

