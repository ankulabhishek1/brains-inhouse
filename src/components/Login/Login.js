
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import axios from "axios";
import './Login.css';
import { Formik } from 'formik';
import { useEffect } from 'react'
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@material-ui/core';



const Login = () => {
    useEffect(() => {
        document.title = "Login"
    }, [])



    const url = " "
    const [data, setData] = useState({
        email: "",
        password: "",

    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            email: data.email,
            password: data.password,
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    return (
        <>
            <Helmet>
                <title>Login </title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center'
                }}
            >
                <Container maxWidth="sm">
                    <Formik
                        initialValues={{
                            email: ' ',
                            password: ''
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                            password: Yup.string().max(255).required('Password is required')
                        })}

                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values
                        }) => (
                            <form style={{ paddingTop: "54px" }} onSubmit={(e) => submit(e)} className="sss">
                                <Box sx={{ mb: 3 }}>
                                    <Typography
                                        color="textPrimary"
                                        variant="h2"
                                    >
                                        Sign in
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                                    >

                                    </Typography>
                                </Box>
                                <Grid
                                    container
                                    spacing={3}
                                >


                                </Grid>
                                <Box
                                    sx={{
                                        pb: 1,
                                        pt: 3
                                    }}
                                >
                                    <Typography
                                        align="center"
                                        color="textSecondary"
                                        variant="body1"
                                        style={{ padding: "24px" }}
                                    >
                                        or login with email address
                                    </Typography>
                                </Box>
                                <TextField
                                    id="email"
                                    error={Boolean(touched.email && errors.email)}
                                    fullWidth
                                    helperText={touched.email && errors.email}
                                    label="Email Address"
                                    margin="normal"
                                    name="email"
                                    onBlur={handleBlur}
                                    onChange={(e) => handle(e)}
                                    type="email"
                                    value={data.email}
                                    variant="outlined"
                                />
                                <TextField
                                    id="password"
                                    error={Boolean(touched.password && errors.password)}
                                    fullWidth
                                    helperText={touched.password && errors.password}
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={(e) => handle(e)}
                                    type="password"
                                    value={data.password}
                                    variant="outlined"
                                />
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        style={{ width: "39%", backgroundolor: "#224e21" }}
                                    >
                                        Sign in now
                                    </Button>
                                </Box>

                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    );
};

export default Login;
