import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Snackbar from '@material-ui/core/Snackbar';
import './Login.css'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', redirect: '/', isLoggedIn: false }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">

                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>
                        <form onSubmit={this.handleSubmit} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input id="email" name="email" required value={this.state.email} onChange={this.handleEmailChange} autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input required
                                    value={this.state.password} onChange={this.handlePasswordChange}
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>

                            <Link to={this.state.redirect} id="redirect" name="redirect" style={{ textDecoration: 'none' }}>
                                <Button
                                    onClick={this.handleSubmit}
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    color='primary'
                                    className="submit">
                                    Sign In
                                </Button>
                            </Link>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit(e) {
        localStorage.setItem('email', 'correo@mail.com')
        localStorage.setItem('password', 'contraseña')

        if (this.state.email === localStorage.getItem('email') && this.state.password === localStorage.getItem('password')) {
            this.setState({ isLoggedIn: true })
            window.location = "/todo"
        }
        else {
            window.location = "/"
        }
    }

}