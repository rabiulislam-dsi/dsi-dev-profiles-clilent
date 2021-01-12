import {useState,useContext, useEffect} from 'react';
import {UserContext} from "../../context/UserContext";
import {Button,Form} from "react-bootstrap";
import {date,object,string} from 'yup';
import { parse, isDate } from "date-fns";
import DatePicker from "react-datepicker";

const {
    REACT_APP_GITHUB_AUTH_CLIENT_ID,
    REACT_APP_GITHUB_AUTH_REDIRECT_URI
  } = process.env;

const scopes = [
    "read:user","repo:status"
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
            const newInfo = {
                ...user.info,
                designation,
                joiningDate
            };
            const newUser = {...user,info:newInfo};
            localStorage.setItem('user',JSON.stringify(newUser));
            //create new user in dsi-backend

            // redirect to github login
            window.location.assign(`${githubAuthUrl}?client_id=${REACT_APP_GITHUB_AUTH_CLIENT_ID}&
            redirect_uri=${REACT_APP_GITHUB_AUTH_REDIRECT_URI}&scope=${scopes.join("%20")}`);
        }
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