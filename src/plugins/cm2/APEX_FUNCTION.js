// the functions below should be available in our apex app

export default () => {
  var store, corpsmap, React, ReactDOM;

  window.ORM_ENV = "development";

  window.LIMIT_GEOCODER_COUNTRIES = [
    "us",
    "as",
    "mp",
    "gu",
    "pw",
    "pr",
    "vi",
    "um",
  ];

  window.CM_EDIT_GET_DATA = function (callback) {
    const schemaName = "&CM_SCHEMA_NAME.";
    const packageName = "&CM_PACKAGE_NAME.";
    const funcName = "&CM_GETSHAPE_PROC_NAME.";
    const shapeId = "&CM_SHAPE_ID.";
    const roleId = "&CM_ROLE_ID.";
    const shapeType = "&CM_SHAPE_TYPE.";
    var req = new XMLHttpRequest();
    req.onload = function (e) {
      const responseText = req.responseText;
      callback(null, responseText);
    };
    req.onerror = function (e) {
      callback("error");
    };
    req.open(
      "GET",
      schemaName +
        "." +
        packageName +
        "." +
        funcName +
        "?p_uid=" +
        shapeId +
        "&p_role_id=" +
        roleId +
        "&p_layer=" +
        shapeType
    );
    req.send();
  };

  window.CM_EDIT_SAVE = function (wkt, callback) {
    const schemaName = "&CM_SCHEMA_NAME.";
    const packageName = "&CM_PACKAGE_NAME.";
    const funcName = "&CM_SAVESHAPE_PROC_NAME.";
    const shapeId = "&CM_SHAPE_ID.";
    const roleId = "&CM_ROLE_ID.";
    const shapeType = "&CM_SHAPE_TYPE.";
    var req = new XMLHttpRequest();
    req.onload = function (e) {
      const responseText = req.responseText;
      callback(null, responseText);
    };
    req.onerror = function (e) {
      callback("error");
    };
    req.open(
      "POST",
      schemaName +
        "." +
        packageName +
        "." +
        funcName +
        "?p_uid=" +
        shapeId +
        "&p_role_id=" +
        roleId +
        "&p_layer=" +
        shapeType +
        "&p_geom=" +
        wkt
    );
    req.send();
  };

  window.CM_GET_CONFIG = function () {
    if (!window.apex) return null;

    return {
      mapext0: "&CM_MAP_EXTENT_0.",
      mapext1: "&CM_MAP_EXTENT_1.",
      mapext2: "&CM_MAP_EXTENT_2.",
      mapext3: "&CM_MAP_EXTENT_3.",
      mapmode: "&CM_MAP_MODE.",
      maplayer: "&CM_DEFAULT_MAP_LAYER.",
      basemap: "&CM_DEFAULT_BASEMAP.",
      scale: "&CM3_DEFAULT_SCALE_FACTOR.",
      projectLink: "&CM_PROJECT_LINK.",
      aqLink: "&CM_AQ_RESOURCE_LINK.",
    };
  };
};
