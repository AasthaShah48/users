import React  from "react";
import { Formik, Form } from "formik";
import { signUpSchema } from '../schemas';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Textfield from './FormsUI/Textfield';
import RadioButton from './FormsUI/RadioButton';
import Button from './FormsUI/Button';
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser  } from "../redux/userSlice";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';



const defaultFormShape = {

  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  phone: "",
  hobby: "",
};


const gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

const AddUser = () => {

  const params = useParams();
  let {id} = params; 
  const usersAmount = useSelector((state) => state.users.users.length);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.users.user);


   
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Container maxWidth="md" sx={{
            mt: 5,
            mb: 8,
          }}>

            <Formik
              initialValues={id ? userData : defaultFormShape}
              validationSchema={signUpSchema}
              
              onSubmit={(values) => {                
                if (id) {              
                  dispatch(
                    updateUser({ ...values , id: id, })
                  );                 
                } else {
                  dispatch(addUser({ ...values, id: (usersAmount) + 1, })
                  );
                }
              }}
            >
              <Form>

                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <Typography>
                      {id ? 'Update Details' : 'Add User'}
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="firstName"
                      label="First Name"

                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield
                      name="lastName"
                      label="Last Name"

                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="email"
                      label="Email"


                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="phone"
                      label="Phone"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <RadioButton
                      name="gender"
                      label="Gender"
                      options={gender}

                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name="hobby"
                      label="Hobby"

                    />
                  </Grid>

                  <Grid item xs={12}>
                  <Link to="/" className="btn btn-link">
                    <Button >
                      Submit
                    </Button>
                  </Link>

                  </Grid>

                  <Grid item xs={12}>
                 
                    <Link to="/" className="btn btn-link" ><Button >
                      Cancel
                    </Button>
                    </Link>
              
                  </Grid>



                </Grid>

              </Form>
            </Formik>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default AddUser;
