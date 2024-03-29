import { Navbar, Container, Nav} from "react-bootstrap"
import {useState} from 'react';
import logo from '../assets/logo.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';

import { useEffect } from "react";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = () => {
      if(window.scrollY > 50){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink =(value) => {
    setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled?'scrolled':""}>
    <Container>
      <Navbar.Brand href="#home">
        <img  src={logo} alt= 'Logo' className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toogler-icon"></span>
      </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink=== 'home'? 'active navbar-Link' : 'navbar-link'} onClick = {()=>onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink=== 'skills'? 'active navbar-Link' : 'navbar-link'} onClick = {()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink=== 'projects'? 'active navbar-Link' : 'navbar-link'} onClick = {()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/ethanmojica129/"><img src={navIcon1} alt="linkedIn" /></a>
                <a href="https://github.com/EthanMojica129"><img src={navIcon2} alt="Github" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>

          </div>
          <button className='vvd' onClick={()=>console.log('connect')}><span>Let&apos;s Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
