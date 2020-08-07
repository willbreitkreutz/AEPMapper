import React from 'react';
import { connect } from 'redux-bundler-react';
import fema from '../../resources/FEMA_logo-white.png';
import usace from '../../resources/USACE_logo.png';

class Toolbar extends React.Component{
    render(){
        return (
            <div className="container-fluid mt-3" style={{position:'absolute',zIndex:2}}>
                <div className="float-left">
                    <img src={fema} alt="FEMA" style={{width:'150px'}}/>
                    <img src={usace} alt="USACE" style={{width:'150px'}}/>
                </div>
                <div className="float-right">
                </div>

            </div>
        )
    }
}
export default connect(
    Toolbar
);