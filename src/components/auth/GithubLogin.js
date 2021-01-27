import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from "../../context/UserContext";
import {Button, Card, Form, Row, Col} from "react-bootstrap";
import {date, string} from 'yup';
import DatePicker from "react-datepicker";
import CreateDeveloper from "../../data/CreateDeveloper";
import login_img from '../../images/login_image.svg';
import {FaGithub} from "react-icons/all";

const {
    REACT_APP_GITHUB_AUTH_CLIENT_ID,
    REACT_APP_GITHUB_AUTH_REDIRECT_URI
} = process.env;

const scopes = [
    "read:user", "read:org", "repo", "public_repo", "user:email"
];

const githubAuthUrl = 'https://github.com/login/oauth/authorize';

function GithubLogin({message}) {
    const {user, setUser} = useContext(UserContext);

    const [designation, setDesignation] = useState('');
    const [joiningDate, setJoiningDate] = useState(new Date());
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        if (Object.keys(formErrors).length !== 0) {
            console.log(formErrors)
        }
    }, [formErrors])
    const validateForm = async () => {
        let isValid, errors = {};
        const designationSchema = string().required("Designation is required").min(3);
        const dateSchema = date().required("Joining Date is required").nullable();

        try {
            isValid = await designationSchema.validate(designation);
        } catch (error) {
            errors.designation = error.errors;
        }

        try {
            isValid = await dateSchema.validate(joiningDate);
        } catch (error) {
            errors.joiningDate = error.errors;
        }

        return errors;
    }

    const handleDesignationChange = (e) => {
        setDesignation(e.target.value);
    }

    const handleSubmit = async (e) => {
        const errors = await validateForm();

        if (errors.designation || errors.joiningDate) {
            setFormErrors(errors);
        } else {
            const newUser = {
                ...user,
                designation: designation,
                joiningDate: joiningDate
            };
            //create new user in dsi-backend
            CreateDeveloper(newUser, setDeveloperId)

            // redirect to github login
            window.location.assign(`${githubAuthUrl}?client_id=${REACT_APP_GITHUB_AUTH_CLIENT_ID}&
            redirect_uri=${REACT_APP_GITHUB_AUTH_REDIRECT_URI}&scope=${scopes.join("%20")}`);
        }
    }

    const setDeveloperId = (id, user) => {
        const newUser = {
            ...user,
            id: id
        }
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser));
    }

    //TODO:// Fix the styling and layout later
    return (
        <Card style={{maxWidth: '55rem'}} className="shadow border-0">
            <Row>
                <Col lg={6} className="d-none d-lg-block border-right">
                    <img
                        alt=""
                        src={login_img}
                        width="100%"
                        height="auto"
                        className="m-2"
                    />
                </Col>
                <Col xs={12} lg={6}>
                    <Card.Body>
                        <Card.Title className="text-center text-secondary">
                            Welcome !!!
                            <br/>
                            {user.name}
                        </Card.Title>
                        <hr/>
                        <Card.Subtitle>
                            {message}
                        </Card.Subtitle>
                        <br/>
                        <Form>
                            <Form.Group controlId="formDesignation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control isInvalid={!!formErrors.designation} value={designation} type="text"
                                              placeholder="e.g.Software Engineer"
                                              onChange={handleDesignationChange}/>
                                <p className="text-danger form-error-custom">{formErrors.designation}</p>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Date of joining</Form.Label>
                                <Form.Control isInvalid={!!formErrors.joiningDate} as={DatePicker}
                                              selected={joiningDate} onChange={date => setJoiningDate(date)}
                                              showMonthDropdown
                                              showYearDropdown dropdownMode="scroll" wrapperClassName="datePicker"
                                              maxDate={new Date()}
                                              minDate={new Date(2008, 1, 1)} dateFormat="dd/MM/yyyy"
                                />
                                <p className="text-danger form-error-custom">{formErrors.joiningDate}</p>
                            </Form.Group>

                            <Button variant="outline-theme" block onClick={handleSubmit} type="button">
                                <FaGithub className="mr-3" size="1.5em" />
                                Login With Github
                            </Button>
                        </Form>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default GithubLogin;