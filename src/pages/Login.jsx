 import React, { useState } from 'react'
 import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
 import { useValid } from '../context/validation';
 import { Link, useNavigate} from 'react-router-dom';
 import {signInWithEmailAndPassword} from 'firebase/auth'
 import { auth } from '../firebaseConfig';
 
 
 function Login() {
    const initialValues ={ 
        email:'',
        password:''
    }
    const [values,setValues]=useState(initialValues)
    const [formErrors, setFormErrors] = useState({});
    const valid = useValid()
    const navigate = useNavigate()
    const changeHandler = (e) =>{
        const {name,value} = e.target;
        setValues({...values, [name]:value });
    }
    const submitHandler = (e) =>{
      e.preventDefault();
       

      // const inCorrect = {
      //   email:'',
      //   password:''
      // };
      setFormErrors(validate(values))
        signInWithEmailAndPassword(auth,values.email,values.password) 
          .then( async (res) =>{
            valid.logged(res.user.displayName)
            navigate('/')
          })
          .catch(err =>{
            setFormErrors(err)
            alert(err)
          })
        // axios.get('http://localhost:8000/users')
        // .then(res => {
        //   res.data.map(user => {
        //       if(user.email === values.email) {
        //           if(user.password === values.password) {
        //               valid.logged(user.username)
        //               setValues(initialValues) 
        //               navigate('/')
        //           } else{
        //             inCorrect.password = 'password is not correct'
        //           } 
        //       } else {
        //         inCorrect.email = 'email is not correct'
                 
        //       }
        //       return inCorrect; 
        //       })
        //   setFormErrors(inCorrect)
        //  })
        //  .catch(err => console.log(err))
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
                    <Form.Label className='d-flex'>Password <p className='errMsg'>{formErrors.password}</p> </Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={values.password} onChange={changeHandler}/>
                  </Form.Group>
                   
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                  <div className="d-grid">
                    <Button   type="submit" className='signupBtn'>
                      Login
                    </Button>
                  </div>
                </Form>
                <div className="mt-3">
                  <p className="mb-0  text-center">
                    Already have an account??{' '}
                    <Link className='signInLink' to='/signup'>Sign Up</Link>
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
 
 export default Login