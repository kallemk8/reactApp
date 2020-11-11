import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright'
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

class Forgot extends Component {
    state = {
        currentPassword:"",
        password:""
    }
    submitlogin(){
        
    }
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className='paper'>
                    <Avatar className='avatar'>
                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Change Password
                    </Typography>
                    <div noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Current Password"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e)=>this.setState({currentPassword:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="New Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e)=>this.setState({password:e.target.value})}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Confirm New Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e)=>this.setState({password:e.target.value})}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                            onClick={()=>this.submitlogin()}
                        >
                            Change Password
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#/login" variant="body2">
                                    {"Sign in"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        )
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(Forgot);  
