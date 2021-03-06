export default [
  {
    id: "DoD",
    parentId: null,
    layerOrder: 17,
    serviceType: "Folder",
    identifyType: null,
    tiled: 0,
    displayName: "DoD",
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
    id: "DISDI",
    parentId: "DoD",
    layerOrder: 17,
    serviceType: "Folder",
    identifyType: null,
    tiled: 0,
    displayName: "DISDI",
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
    id: "disdirange",
    parentId: "DISDI",
    layerOrder: 130,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "DISDI Range Complex Boundaries",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:disdirange",
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
    id: "disdinoise",
    parentId: "DISDI",
    layerOrder: 130,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "DISDI Noise Zones",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:disdinoise",
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
    id: "disdiflood",
    parentId: "DISDI",
    layerOrder: 130,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "DISDI Installation Flood Zone Area",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:disdiflood",
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
    id: "disdiwetland",
    parentId: "DISDI",
    layerOrder: 130,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "DISDI Installation Wetlands",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:disdiwetland",
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
    id: "disdiinst",
    parentId: "DISDI",
    layerOrder: 130,
    serviceType: "WMS",
    identifyType: "ORM-GEOSERVER",
    tiled: 0,
    displayName: "DISDI Installations",
    description: null,
    url: "https://orm-corpsmap.usace.army.mil:8443/geoserver/orm-prod-ms/wms",
    layerList: "orm-prod-ms:disdiinst",
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
];
