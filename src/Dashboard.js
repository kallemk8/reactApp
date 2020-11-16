import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class Dashboard extends Component {
    redirectUrl(){
        this.props.history.push('login');
    }
    render(){
        return(
            <div className="">
                
                <Container component="main" maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <h2>Dashboard</h2>
                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='submit'
                        onClick={()=>this.redirectUrl()}
                        >
                        Logout
                    </Button>   
                        
                    </Grid>
                </Grid>
                <TableContainer >
                    <Table className="table" aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email Address</TableCell>
                            <TableCell align="right">Password</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        
                            <TableRow >
                            <TableCell component="th" scope="row">
                            {this.props.user_details.username}
                            </TableCell>
                            <TableCell align="right">{this.props.user_details.firstName}</TableCell>
                            <TableCell align="right">{this.props.user_details.lastName}</TableCell>
                            <TableCell align="right">{this.props.user_details.email}</TableCell>
                            <TableCell align="right">{this.props.user_details.password}</TableCell>
                            </TableRow>
                        
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </Container>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state
}
export default connect(mapStateToProps)(Dashboard); 