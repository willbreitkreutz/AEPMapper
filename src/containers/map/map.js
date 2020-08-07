import React from 'react';
import { connect } from 'redux-bundler-react';
class Map extends React.Component {
    componentDidMount(){
        const { doMapInitialize } = this.props;
        doMapInitialize(this.el)
    }
    render(){
        return (
            <div className="corpsmap cm-container-fluid">
                <div className="north-container">
                    <div id="map" ref={(el) => this.el = el}>
                    </div>
                </div>
            </div>

        )
    }
}
export default connect(
    'doMapInitialize',
    Map
);