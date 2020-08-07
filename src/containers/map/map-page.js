import React from 'react';
import { connect } from 'redux-bundler-react';
import Map from './map';
import Toolbar from './toolbar';

class MapPage extends React.Component {
  render(){
    return (
      <div>
        <div>
          <Toolbar/>
        </div>
        <div>
          <Map/>
        </div>
        
      </div>

    )
  }
}
export default connect(
  MapPage
  );