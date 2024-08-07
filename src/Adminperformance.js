import React, { useState } from 'react';
import { Table, Container, Row, Col, Nav, Navbar, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Adminperformance = () => {

    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();

    const [personalDetails, setPersonalDetails] = useState({
        photo: '',
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        dateOfBirth: '',
        address: '',
      });
    
      const handleProfileClick = () => setShowModal(true);
    
      const handleCloseModal = () => {
        setShowModal(false);
        setEditMode(false);
      };
    
      const handleEdit = () => setEditMode(true);
    
      const handleSave = () => {
        setEditMode(false);
        setShowModal(false);
        console.log('Personal Details Saved:', personalDetails);
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setPersonalDetails({
          ...personalDetails,
          [name]: value
        });
      };
    
      const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPersonalDetails({
              ...personalDetails,
              photo: reader.result
            });
          };
          reader.readAsDataURL(file);
        }
      };
    
    
      const handleLogout = () => {
        navigate('/login');
      };

  const technicians = [
    { id: 1, name: 'John Smith', email: 'john.smith@example.com', phone: '123-456-7890', skills: 'AC Repair, Installation', assignedJobs: 120, completedJobs: 115, jobCompletionRate: '95.83%', averageRating: 4.8, availability: 'Available', locationId: 101, storeId: 201, joinDate: '10-03-2022', lastActiveDate: '05-07-2024' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '234-567-8910', skills: 'AC Maintenance, Repair', assignedJobs: 108, completedJobs: 106, jobCompletionRate: '98.2%', averageRating: 4.7, availability: 'Unavailable', locationId: 102, storeId: 202, joinDate: '05-06-2021', lastActiveDate: '04-07-2024' },
    { id: 3, name: 'John Smith', email: 'john.smith@example.com', phone: '123-456-7890', skills: 'AC Repair, Installation', assignedJobs: 120, completedJobs: 115, jobCompletionRate: '95.83%', averageRating: 4.8, availability: 'Available', locationId: 101, storeId: 201, joinDate: '10-03-2022', lastActiveDate: '05-07-2024' },
    { id: 4, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '234-567-8910', skills: 'AC Maintenance, Repair', assignedJobs: 108, completedJobs: 106, jobCompletionRate: '98.2%', averageRating: 4.7, availability: 'Unavailable', locationId: 102, storeId: 202, joinDate: '05-06-2021', lastActiveDate: '04-07-2024' },
    { id: 5, name: 'John Smith', email: 'john.smith@example.com', phone: '123-456-7890', skills: 'AC Repair, Installation', assignedJobs: 120, completedJobs: 115, jobCompletionRate: '95.83%', averageRating: 4.8, availability: 'Available', locationId: 101, storeId: 201, joinDate: '10-03-2022', lastActiveDate: '05-07-2024' },
    { id: 6, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '234-567-8910', skills: 'AC Maintenance, Repair', assignedJobs: 108, completedJobs: 106, jobCompletionRate: '98.2%', averageRating: 4.7, availability: 'Unavailable', locationId: 102, storeId: 202, joinDate: '05-06-2021', lastActiveDate: '04-07-2024' },
    { id: 7, name: 'John Smith', email: 'john.smith@example.com', phone: '123-456-7890', skills: 'AC Repair, Installation', assignedJobs: 120, completedJobs: 115, jobCompletionRate: '95.83%', averageRating: 4.8, availability: 'Available', locationId: 101, storeId: 201, joinDate: '10-03-2022', lastActiveDate: '05-07-2024' },
    { id: 8, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '234-567-8910', skills: 'AC Maintenance, Repair', assignedJobs: 108, completedJobs: 106, jobCompletionRate: '98.2%', averageRating: 4.7, availability: 'Unavailable', locationId: 102, storeId: 202, joinDate: '05-06-2021', lastActiveDate: '04-07-2024' },
    { id: 9, name: 'John Smith', email: 'john.smith@example.com', phone: '123-456-7890', skills: 'AC Repair, Installation', assignedJobs: 120, completedJobs: 115, jobCompletionRate: '95.83%', averageRating: 4.8, availability: 'Available', locationId: 101, storeId: 201, joinDate: '10-03-2022', lastActiveDate: '05-07-2024' },
    { id: 10, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '234-567-8910', skills: 'AC Maintenance, Repair', assignedJobs: 108, completedJobs: 106, jobCompletionRate: '98.2%', averageRating: 4.7, availability: 'Unavailable', locationId: 102, storeId: 202, joinDate: '05-06-2021', lastActiveDate: '04-07-2024' },
    { id: 11, name: 'John Smith', email: 'john.smith@example.com', phone: '123-456-7890', skills: 'AC Repair, Installation', assignedJobs: 120, completedJobs: 115, jobCompletionRate: '95.83%', averageRating: 4.8, availability: 'Available', locationId: 101, storeId: 201, joinDate: '10-03-2022', lastActiveDate: '05-07-2024' },
    { id: 12, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '234-567-8910', skills: 'AC Maintenance, Repair', assignedJobs: 108, completedJobs: 106, jobCompletionRate: '98.2%', averageRating: 4.7, availability: 'Unavailable', locationId: 102, storeId: 202, joinDate: '05-06-2021', lastActiveDate: '04-07-2024' },
  ];

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="shadow-sm reduced-navbar">
        <Container>
            <Navbar.Brand href="admin-dashboard">Performance</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <span className="navbar-text">Good Morning, Mr. Admin</span>
            </Nav>
            <Nav className="ms-auto d-flex align-items-center">
                <Nav.Link href="#notifications">Send Notifications</Nav.Link>
                <Nav.Link href="#profile" className="d-flex align-items-center">
                <Button variant="link" onClick={handleProfileClick}>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </Button>
                <span className="ms-2">S.Admin</span>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="mt-3">
        <Row>
        <Col md={2} className="sidebar bg-primary text-white">
            <Nav defaultActiveKey="/admin-dashboard" className="flex-column">
              <Nav.Link as={Link} to="/admin-dashboard" className="text-white">
                <i className="bi bi-house-door-fill"></i> Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/admin-calender" className="text-white">
                <i className="bi bi-calendar2-event-fill"></i> Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/admin-chat" className="text-white">
                <i className="bi bi-chat-dots-fill"></i> Chat
              </Nav.Link>
              <Nav.Link as={Link} to="/admin-performance" className="text-white">
                <i className="bi bi-bar-chart-fill"></i> Performance
              </Nav.Link>
              <Nav.Link as={Link} to="/admin-settings" className="text-white">
                <i className="bi bi-gear-fill"></i> Settings
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="text-white">
                <i className="bi bi-box-arrow-right"></i> Logout
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={10}>
            <Container fluid>
              <Row>
                <Col>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>TechnicianID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Skills</th>
                        <th>Assigned Jobs</th>
                        <th>Completed Jobs</th>
                        <th>Job Completion Rate</th>
                        <th>Average Rating</th>
                        <th>Availability</th>
                        <th>Location ID</th>
                        <th>Store ID</th>
                        <th>Join Date</th>
                        <th>Last Active Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicians.map((tech) => (
                        <tr key={tech.id}>
                          <td>{tech.id}</td>
                          <td>{tech.name}</td>
                          <td>{tech.email}</td>
                          <td>{tech.phone}</td>
                          <td>{tech.skills}</td>
                          <td>{tech.assignedJobs}</td>
                          <td>{tech.completedJobs}</td>
                          <td>{tech.jobCompletionRate}</td>
                          <td>{tech.averageRating}</td>
                          <td>{tech.availability}</td>
                          <td>{tech.locationId}</td>
                          <td>{tech.storeId}</td>
                          <td>{tech.joinDate}</td>
                          <td>{tech.lastActiveDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
            <Modal.Title>Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {editMode ? (
                <Form>
                <Form.Group controlId="photo" className="mb-3">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="file" onChange={handlePhotoChange} />
                    {personalDetails.photo && <img src={personalDetails.photo} alt="Profile" className="img-thumbnail mt-3" />}
                </Form.Group>
                <Form.Group controlId="firstName" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" value={personalDetails.firstName} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="lastName" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" value={personalDetails.lastName} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="mobileNumber" className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" name="mobileNumber" value={personalDetails.mobileNumber} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={personalDetails.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="dateOfBirth" className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" name="dateOfBirth" value={personalDetails.dateOfBirth} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="address" className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={personalDetails.address} onChange={handleChange} />
                </Form.Group>
                </Form>
            ) : (
                <div>
                <div className="text-center mb-3">
                    {personalDetails.photo && <img src={personalDetails.photo} alt="Profile" className="img-thumbnail" />}
                </div>
                <p><strong>First Name:</strong> {personalDetails.firstName}</p>
                <p><strong>Last Name:</strong> {personalDetails.lastName}</p>
                <p><strong>Mobile Number:</strong> {personalDetails.mobileNumber}</p>
                <p><strong>Email:</strong> {personalDetails.email}</p>
                <p><strong>Date of Birth:</strong> {personalDetails.dateOfBirth}</p>
                <p><strong>Address:</strong> {personalDetails.address}</p>
                </div>
            )}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleLogout} className="me-auto">
                Logout
            </Button>
            {editMode ? (
                <Button variant="primary" onClick={handleSave}>
                Save
                </Button>
            ) : (
                <Button variant="secondary" onClick={handleEdit}>
                Edit
                </Button>
            )}
            <Button variant="secondary" onClick={handleCloseModal}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
};

export default Adminperformance;
