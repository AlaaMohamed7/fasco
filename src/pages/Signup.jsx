import React, { useEffect, useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebaseConfig';


function Signup() {
    const initialValues ={
        username:'',
        email:'',
        password:'',
        cPassword:''
    }
    const [values,setValues]=useState(initialValues)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
     
    const navigate = useNavigate()
    const changeHandler = (e) =>{
        const {name,value} = e.target;
        setValues({...values, [name]:value });
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,values.email,values.password)
         .then( async (data) =>{
          const user = data.user
          await updateProfile(user, {
            displayName: values.username
          });
          navigate('/login')
          console.log(userName)
          console.log(data,'gnshnhns')
         })
         .catch(err=>{
          alert(err.code)
         })
        setFormErrors(validate(values))
        setIsSubmit(true)
    }

    // useEffect(() => {

    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //       axios.post('http://localhost:8000/users',values)
    //         .then(() => { 
    //             setValues(initialValues)
    //             navigate('/login')
    //         })
    //         .catch(err => console.log(err))

    //     }
    // },[formErrors])
    const [userName,setUserName] = useState('')
    useEffect(() => {
      auth.onAuthStateChanged((user) =>{
        if (user) {
          setUserName(user.displayName)
          
        } else setUserName("");
      });
    },[])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        if(values.cPassword !== values.password) {
            errors.cPassword = "password is not match"
        }
        return errors;
      };
    
  return (
    <div className='LoginSignupPage'>
        <div className='LoginSignupForm'>
        <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4 formCard">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase siteName">
                     Fasco 
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={submitHandler}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center d-flex ">Name <p className='errMsg'>{formErrors.username}</p></Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" name='username' value={values.username} onChange={changeHandler} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center d-flex">
                          Email address
                          <p className='errMsg'>
                          {' '} {formErrors.email}
                          </p>
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email' value={values.email} onChange={changeHandler} />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className='d-flex'>Password <p className='errMsg'>{formErrors.password}</p></Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' value={values.password} onChange={changeHandler}/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label className='d-flex'>Confirm Password <p className='errMsg'>{formErrors.cPassword}</p></Form.Label>
                        <Form.Control type="password" placeholder="Password" name='cPassword' value={values.cPassword} onChange={changeHandler} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button   type="submit" className='signupBtn'>
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{' '}
                        <Link className='signInLink' to='/login'>Sign In</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
        </div>
    </div>
  )
}

export default Signup