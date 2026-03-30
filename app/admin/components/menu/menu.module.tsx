import Nav from 'react-bootstrap/Nav';

function Menu() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link eventKey="link-1">Category</Nav.Link>
      <Nav.Link eventKey="link-2">About</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default Menu;