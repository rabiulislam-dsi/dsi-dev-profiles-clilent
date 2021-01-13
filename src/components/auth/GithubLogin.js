import {useState,useContext, useEffect} from 'react';
import {UserContext} from "../../context/UserContext";
import {Button,Form} from "react-bootstrap";
import {date,string} from 'yup';
import DatePicker from "react-datepicker";
import CreateDeveloper from "../../data/CreateDeveloper";

const {
    REACT_APP_GITHUB_AUTH_CLIENT_ID,
    REACT_APP_GITHUB_AUTH_REDIRECT_URI
  } = process.env;

const scopes = [
    "read:user","repo:status","read:org"
];

const githubAuthUrl = 'https://github.com/login/oauth/authorize';

function GithubLogin() {
    const {user, setUser} = useContext(UserContext);

    const [designation,setDesignation] = useState('');
    const [joiningDate,setJoiningDate] = useState(new Date());
    const [formErrors,setFormErrors] = useState({});

    useEffect(()=>{
        console.log(formErrors)
    },[formErrors])
    const validateForm=async ()=>{
        let isValid,errors={};
        const designationSchema = string().required("Designation is required").min(3);
        const dateSchema = date().required("Joining Date is required").nullable();
        
        try {
            isValid = await designationSchema.validate(designation);
        } catch (error){
            errors.designation = error.errors;
        }

        try {
            isValid = await dateSchema.validate(joiningDate);
        } catch (error){
            errors.joiningDate = error.errors;
        }
        
        return errors;
    }

    const handleDesignationChange=(e)=>{
        setDesignation(e.target.value);
    }

    const handleSubmit= async(e)=>{
        const errors = await validateForm();

        if(errors.designation || errors.joiningDate){
            setFormErrors(errors);
        }
        else{
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
        localStorage.setItem('user',JSON.stringify(newUser));
    }

    //TODO:// Fix the styling and layout later
    return (
        <Form>
            <Form.Group controlId="formDesignation">
                <Form.Label>Designation</Form.Label>
                <Form.Control isInvalid={!!formErrors.designation} value={designation} type="text" placeholder="e.g.Software Engineer" 
                    onChange={handleDesignationChange}/>
                <p className="text-danger form-error-custrom">{formErrors.designation}</p>
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Date of joining</Form.Label>

                {/* <DatePicker 
                customInput={<Form.Control isInvalid={!!formErrors.joiningDate} type="text" placeholder="dd-mm-yyyy" />}/> */}
                <Form.Control isInvalid={!!formErrors.joiningDate} as={DatePicker} style={{width:"100%"}}
                selected={joiningDate} onChange={date => setJoiningDate(date)}  wrapperClassName="datePicker" dateFormat="dd/MM/yyyy"/>
                <p className="text-danger form-error-custrom">{formErrors.joiningDate}</p>
            </Form.Group>

    
            <Button className='col-md-12'onClick={handleSubmit} type="button">
                Login to Github
            </Button>      
        </Form>
    );
}

export default GithubLogin;