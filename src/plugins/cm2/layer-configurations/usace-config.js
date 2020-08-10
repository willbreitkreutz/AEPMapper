export default [
  {
    id: "USACE",
    parentId: null,
    layerOrder: 10,
    serviceType: "Folder",
    identifyType: null,
    tiled: 0,
    displayName: "USACE",
    description: null,
    url: null,
    layerList: null,
    params: null,
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    collapsed: 1,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "damid",
    parentId: "USACE",
    layerOrder: 130,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "All NID Dams",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:damnid",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: 0,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "cpn_pt",
    parentId: "USACE",
    layerOrder: 9,
    serviceType: "ArcGISImage",
    identifyType: null,
    tiled: 0,
    displayName: "Corps Project Notebook - point",
    description:
      "Point locations for active projects from the US Army Corps of Engineers' Corps Project Notebook (CPN).",
    url:
      "https://rsgis-arcgis.crrel.usace.army.mil:6443/arcgis/rest/services/USACE/CPN_internal/MapServer",
    layerList: "show:0",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl:
      "https://rsgis-arcgis.crrel.usace.army.mil:6443/arcgis/rest/services/USACE/CPN_internal/MapServer",
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: "esri",
  },
  {
    id: "cpn_area",
    parentId: "USACE",
    layerOrder: 10,
    serviceType: "ArcGISImage",
    identifyType: null,
    tiled: 0,
    displayName: "Corps Project Notebook - area",
    description:
      "Area locations for active projects from the US Army Corps of Engineers' Corps Project Notebook (CPN).",
    url:
      "https://rsgis-arcgis.crrel.usace.army.mil:6443/arcgis/rest/services/USACE/CPN_internal/MapServer",
    layerList: "show:1",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl:
      "https://rsgis-arcgis.crrel.usace.army.mil:6443/arcgis/rest/services/USACE/CPN_internal/MapServer",
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: "esri",
  },
  {
    id: "nid-dams-coe",
    parentId: "USACE",
    layerOrder: 145,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "Corps Dam",
    description: "Corps Dam",
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:nid-dams-coe",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "corpsoffices",
    parentId: "USACE",
    layerOrder: 145,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "Corps Offices",
    description: "Corps Offices",
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:corpsoffices",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "distc",
    parentId: "USACE",
    layerOrder: 5,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Civil Works Districts",
    description: null,
    url:
      "https://geoportal.eis.usace.army.mil/s3arcgis/rest/services/Civil_Works/usace_cw_districts/MapServer",
    layerList: "0",
    params: null,
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.3,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend:
      "https://geoportal.eis.usace.army.mil/s3arcgis/rest/services/Civil_Works/usace_cw_districts/MapServer/legend",
  },
  {
    id: "divc",
    parentId: "USACE",
    layerOrder: 6,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Civil Works Divisions",
    description: null,
    url:
      "https://geoportal.eis.usace.army.mil/s3arcgis/rest/services/Civil_Works/usace_cw_divisions/MapServer",
    layerList: "0",
    params: null,
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.3,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "fudspoly",
    parentId: "USACE",
    layerOrder: 110,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "FUDS Polygons",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:fudspoly",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "publicfuds",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "FUDS Points",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:publicfuds",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "fudsmra",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "FUDS - Munitions Response Area",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:fudsmra",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "fudsmrs",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "FUDS - Munitions Response Site",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:fudsmrs",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "damhydro",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "Hydroelectric Dams",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:damhydro",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "levees",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "Levee Survey",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:levees",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "ncf_navigarion_ags",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "ArcGISImage",
    identifyType: null,
    tiled: 0,
    displayName: "National Channel Framework",
    description: null,
    url:
      "https://geoportal-dmzu.usace.army.mil/s1arcgis/rest/services/National/National_Channel_Framework/MapServer",
    layerList: "show:0,1,2,3",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: 0,
    maxscale: 1000000,
    metadataUrl:
      "https://geoportal-dmzu.usace.army.mil/s1arcgis/rest/services/National/National_Channel_Framework/MapServer",
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend:
      "http://maps.crrel.usace.army.mil:7778/graphics/orm_legend_items/channel_framework_new.png",
  },
  {
    id: "regbound",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "Regulatory Boundary",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:regbound",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "coe-wetland-regions",
    parentId: "USACE",
    layerOrder: 111,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "Regional Supplements",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:coe-wetland-regions",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "ndc",
    parentId: "USACE",
    layerOrder: 45,
    serviceType: "Folder",
    identifyType: null,
    tiled: 0,
    displayName: "Navigation Data Center",
    description: null,
    url: null,
    layerList: null,
    params: null,
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "coedredge",
    parentId: "ndc",
    layerOrder: 112,
    serviceType: "EsriFeatureService",
    identifyType: null,
    tiled: 0,
    displayName: "COE Dredge Locations",
    description: "COE Dredge Locations",
    url:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/ndc/FeatureServer",
    layerList: "4",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/ndc/FeatureServer",
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "dredge",
    parentId: "ndc",
    layerOrder: 112,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "Dredge Locations",
    description: "Dredge Locations",
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:dredge",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: "",
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "ndc-lock",
    parentId: "ndc",
    layerOrder: 112,
    serviceType: "EsriFeatureService",
    identifyType: null,
    tiled: 0,
    displayName: "Locks",
    description: "Locks",
    url:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/ndc/FeatureServer",
    layerList: "3",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/ndc/FeatureServer",
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "portsall",
    parentId: "ndc",
    layerOrder: 112,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "All Ports",
    description: "All Ports",
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:portsall",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: "",
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "ndc-principal-ports",
    parentId: "ndc",
    layerOrder: 112,
    serviceType: "EsriFeatureService",
    identifyType: null,
    tiled: 0,
    displayName: "Principal Ports",
    description: "Principal Ports",
    url:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/ndc/FeatureServer",
    layerList: "1",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl:
      "https://services7.arcgis.com/n1YM8pTrFmm7L4hs/ArcGIS/rest/services/ndc/FeatureServer",
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "rivermiles",
    parentId: "ndc",
    layerOrder: 112,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "River Miles",
    description: "River Miles",
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:rivermiles",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: "",
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "nld_f",
    parentId: "USACE",
    layerOrder: 45,
    serviceType: "Folder",
    identifyType: null,
    tiled: 0,
    displayName: "National Levee Database",
    description: null,
    url: null,
    layerList: null,
    params: null,
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesboreholept",
    parentId: "nld_f",
    layerOrder: 1,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Boreholes",
    description:
      "A shaft drilled, driven, or dug into the earth for the purpose of subsurface exploration.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "0",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesclosurestructureln",
    parentId: "nld_f",
    layerOrder: 2,
    serviceType: "ArcGISImage",
    identifyType: null,
    tiled: 0,
    displayName: "Closure Structure",
    description:
      "The means to close a vehicular, railroad, pedestrian or other opening in the flood control system.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "9",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveescrosssectionln",
    parentId: "nld_f",
    layerOrder: 3,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Cross Section Line",
    description:
      "A geometric line perpendicular to the flood control segment detailing the elevations along that line.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "10",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesencroachmentpt",
    parentId: "nld_f",
    layerOrder: 4,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Encroachment",
    description:
      "The location of structures or modifications to the flood control segment that are both approved and unapproved by the levee owner.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "2",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesfloodwallln",
    parentId: "nld_f",
    layerOrder: 5,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Flood Wall",
    description:
      "A wall, typically made of concrete or steel, that may be constructed in place of a levee or on a levee crown to increase the levee's height.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "12",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesgravitydrainln",
    parentId: "nld_f",
    layerOrder: 6,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Gravity Drain Line",
    description:
      "A structure designed to allow flow of water from the interior of a levee unit to the waterside.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "13",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesleveecrossingpt",
    parentId: "nld_f",
    layerOrder: 8,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Levee Crossing",
    description: "A location on a levee or floodwall where crossings occur.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "1",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesreliefwellpt",
    parentId: "nld_f",
    layerOrder: 9,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Levee Relief Well",
    description: "Wells installed to reduce interior pore pressures.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "5",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesleveestationpt",
    parentId: "nld_f",
    layerOrder: 10,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Levee Station",
    description:
      "A location of a specific levee distance mark along the length of the flood control system from a designated beginning point.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "6",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesLeveedArea",
    parentId: "nld_f",
    layerOrder: 11,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Leveed Area",
    description:
      "The lands from which flood water is excluded by the levee system.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "16",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveespiezometerpt",
    parentId: "nld_f",
    layerOrder: 12,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Piezometer",
    description:
      "The location of an open tube placed in the ground or a structure which is used to measure subsurface water elevation.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "3",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveespumpstationpt",
    parentId: "nld_f",
    layerOrder: 13,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Pump Station",
    description:
      "An area or location where a pump is located to pump water from the interior of a levee.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "4",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesrehabln",
    parentId: "nld_f",
    layerOrder: 14,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Rehabilitation Line",
    description:
      "A line that has had modifications to the original authorized flood control segment to repair flood damages or structural deficiencies.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "14",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveesystemalignln",
    parentId: "nld_f",
    layerOrder: 15,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "System Align Line",
    description:
      "Features that make up the levee system alignment including high natural ground, highway embankments, centerlines - railroads embankments.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "8",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "leveestoedrainln",
    parentId: "nld_f",
    layerOrder: 16,
    serviceType: "ArcGISImage",
    identifyType: "arcgisrest",
    tiled: 0,
    displayName: "Toe Drain Line",
    description:
      "Trench that runs parallel to the levee or floodwall at the landside edge, that provides a positive outlet for local under seepage and a check for controlling piping and/or excessive uplift pressure.",
    url:
      "https://ags01.sec.usace.army.mil/server/rest/services/NLD2_PUBLIC/MapServer",
    layerList: "15",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 0.6,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "ribits_f",
    parentId: "USACE",
    layerOrder: 50,
    serviceType: "Folder",
    identifyType: null,
    tiled: 0,
    displayName: "RIBITS",
    description: null,
    url: null,
    layerList: null,
    params: null,
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend: null,
  },
  {
    id: "ribits_bank_loc",
    parentId: "ribits_f",
    layerOrder: 5,
    serviceType: "WMS",
    identifyType: null,
    tiled: 0,
    displayName: "Bank Location",
    description: null,
    url:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&SRS=epsg:3857&service=WMS&version=1.1.1&",
    layerList: "ribits_bank_location",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=ribits_bank_location&format=image/png&STYLE=default",
  },
  {
    id: "ribits_ilf_loc",
    parentId: "ribits_f",
    layerOrder: 10,
    serviceType: "WMS",
    identifyType: null,
    tiled: 0,
    displayName: "ILF Location",
    description: null,
    url:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&SRS=epsg:3857&service=WMS&version=1.1.1&",
    layerList: "ribits_bank_location_ilf",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=ribits_bank_location_ilf&format=image/png&STYLE=default",
  },
  {
    id: "ribits_bank_service_a",
    parentId: "ribits_f",
    layerOrder: 15,
    serviceType: "WMS",
    identifyType: null,
    tiled: 0,
    displayName: "Bank Service Area",
    description: null,
    url:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&SRS=epsg:3857&service=WMS&version=1.1.1&",
    layerList: "ribits_bank_service",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=ribits_bank_service&format=image/png&STYLE=default",
  },
  {
    id: "ribits_prog_service_a",
    parentId: "ribits_f",
    layerOrder: 20,
    serviceType: "WMS",
    identifyType: null,
    tiled: 0,
    displayName: "Program Service Area",
    description: null,
    url:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&SRS=epsg:3857&service=WMS&version=1.1.1&",
    layerList: "ribits_prog_service",
    params: {
      transparent: true,
    },
    attributions: null,
    minscale: null,
    maxscale: null,
    metadataUrl: null,
    opacity: 1,
    visible: 0,
    labelDefault: 0,
    labelEnabled: 0,
    legend:
      "http://corpsmapu.usace.army.mil/cgi-bin/mapserv?map=/corpsmapdata/web-sites/corpsmapu/mapfiles/ribits_wms.map&version=1.3.0&service=WMS&request=GetLegendGraphic&sld_version=1.1.0&layer=ribits_prog_service&format=image/png&STYLE=default",
  },
];