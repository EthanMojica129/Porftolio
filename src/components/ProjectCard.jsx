import { Col } from 'react-bootstrap'



export const ProjectCard = ({title, description, imgUrl}) => {
    return (
     <Col sm={6} md={4}>
        <div className='proj-imgbx'>
                <img src={imgUrl} />
        </div>
        <div className='proj-txtx'>
                <a href='https://little-lemon-book-a-table.vercel.app/'><h4>{title}</h4></a>
                <span>{description}</span>
        </div>
     </Col>
    )
}

