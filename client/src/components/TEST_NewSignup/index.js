import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles';
import { TextField, Button } from '@material-ui/core';
import { isUser, register, passwordsMatch } from './scripts'
import { login } from '../Login/scripts';

const styles = () => ({
    container: {
        '& > *': {
            display: 'flex',
            justifyContent: 'space-between'
        },
    },
    half: {
        '& > *': {
            margin: '2%',
            width: '48%',
        },
    },
    root: {
        '& > *': {
            margin: '2%',
            width: '96%',
        },
    }
})

export default class TEST_DynamicRendering extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            //
            firstname: '',
            lastname: '',
            email: '',
            birthdate: '',
            username: '',
            password: '',
            password2: ''
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.myRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.myRef.current)
    }

    componentWillUnmount() {
        console.log(this.state.page)
    }

    nextPage(a, e) {
        var next = a + 1
        this.setState({ page: next })
        this.myRef.current.value = null
        console.log(this.state)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            birthdate: this.state.birthdate,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        }

        //check if password fields match
        if (passwordsMatch(user.password, user.password2)) {
            //if they match, check if the user exists
            isUser(user.username).then(res => {
                //if it doesn't exist, create user
                if (res === null) {
                    register(user).then(data => {
                        //if user was created successfully, log them in
                        if (data) {
                            login(user).then(data => {
                                //if user was logged in succesfully, reload page to update components
                                if (data) {
                                    //reloading home component to refresh user features
                                    this.props.history.push('/');
                                    //closing popup when done reloading components
                                    //this.props.toggle()
                                }
                            })
                        }
                    })
                } else {
                    //handle what happens when the username already exists
                    console.log("user already exists.")
                }
            })
        } else {
            //handle what happens when the password fields don't match
            console.log('passwords do not match.')
        }
    }

    render() {

        if (this.state.page === 0) {
            return (
                <div>
                    <TextField
                        size='small'
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        onChange={this.onChange}
                        inputRef={this.myRef}
                    />
                    <div><button onClick={() => this.nextPage(this.state.page)}>Next</button></div>
                </div>
            )
        }
        else {
            return (
                <div id="myform">
                    <TextField
                        size='small'
                        id="username"
                        name="username"
                        type="username"
                        label="Username"
                        variant="outlined"
                        onChange={this.onChange}
                        inputRef={this.myRef}
                    />
                    <TextField size='small' id="password" name="password" type="password" label="Password" variant="outlined" onChange={this.onChange} />
                    <TextField size='small' id="password2" name="password2" type="password" label="Re-enter Password" variant="outlined" onChange={this.onChange} />
                    <div><button onClick={() => this.nextPage(this.state.page)}>Next</button></div>
                </div>
            )
        }
    }
}