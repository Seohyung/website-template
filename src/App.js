import { Container, Navbar } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">로고</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
