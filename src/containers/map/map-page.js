import React from 'react';
import { connect } from 'redux-bundler-react';
import {
  Map,
  addData,
  basemapSwitcher,
  bookmarks,
  coordDisplay,
  draw,
  geocoder,
  identify,
  measureTools,
  rotateNorth,
  treeView,
  zoomInOut,
  zoomHome,
  zoomToBox
} from "@corpsmap/corpsmap";
import "@corpsmap/corpsmap/css/corpsmap.css";

import cm2Plugin from "../../plugins/cm2-layers";

class MapPage extends React.Component {
  render(){
    return (
      <div className="container-fluid" style={{ padding: 0 }}>
            <Map
              theme="grey-cararra"
              plugins={[
                addData,
                basemapSwitcher,
                bookmarks,
                coordDisplay,
                draw,
                geocoder,
                identify,
                measureTools,
                rotateNorth,
                treeView,
                zoomInOut,
                zoomHome,
                zoomToBox,
                cm2Plugin
              ]}
            />
          </div>
    )
  }
}
export default connect(
  MapPage
  );