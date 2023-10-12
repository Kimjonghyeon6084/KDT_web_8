import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import data from './../Component/data';
import Navbar from './Navbar';
import './../css/List.css'

export default function List(props) {  

  const data = props.data

  // data.sort()
  
  return (
    <>
    <Navbar/>
    <Container>
      <Row>
        {data.map((item) => {
          return (
            <Col key={item.id}>
              <img className='ListImg' src={process.env.PUBLIC_URL + '/bg.png'}/>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>{item.price}</p>
            </Col>
          )
        })}
      </Row>
    </Container>
    </>
      
  );
}

