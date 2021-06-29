

import React, { Component } from 'react';
import "../Login/Login.css"
import { Redirect } from 'react-router';
import {

    Button,

    TextField,

} from '@material-ui/core';

export default class Login extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }

        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state

        if (username === "ankul" && password === "1234") {
            localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDUsIm5hbWUiOiJNYW50aGFuIiwiY2xhc3NfbmFtZSI6IlVzZXIiLCJleHAiOjE2MjkwODk4MTN9.1PL-8DkvcW0FooVfP4ZHQLeBy_9lp-FR5mZ-qqFTctQ"
            )
            this.setState({
                loggedIn: true
            })

        }
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <div className="abc">
                <h1> Login </h1>
                <form onSubmit={this.submitForm}>
                    <TextField
                        label="username"
                        type="text"
                        placeholder="username"
                        name="username"
                        margin="normal"
                        value={this.state.username}
                        onChange={this.onChange}
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        label="Password"
                        type="password"
                        placeholder="password"
                        name="password"
                        margin="normal"
                        value={this.state.password}
                        onChange={this.onChange}
                        variant="outlined"
                    />
                    <br />
                    <Button
                        color="primary"
                        fullWidth
                        className="a"

                        type="submit" >
                        Sign in now
                    </Button>

                </form>
            </div>
        )
    }
}
