import React, { Component } from 'react';
import { connect } from 'react-redux';
class Dashboard extends Component {
    render(){
        return(
            <div className="">
                <h2>Dashboard {this.props.user.email} {this.props.user.password}</h2>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state
}
export default connect(mapStateToProps)(Dashboard); 