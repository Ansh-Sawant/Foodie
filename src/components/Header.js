import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';

const Header = ({searchedFood, setSearchedFood}) => {

    const findItem = () => {
        window.alert(`Your searched food is ${searchedFood}!`);
    }

    return(
        <>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Foodies</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '90px' }} navbarScroll>  
                    
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchedFood}
                    onChange = {(e) => setSearchedFood(e.target.value)}
                    />
                    <Button variant="outline-success" onClick={findItem} >Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );
}

export default Header;