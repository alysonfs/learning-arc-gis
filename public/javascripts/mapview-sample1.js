require(["esri/config","esri/Map", "esri/views/MapView"], (esriConfig, Map, MapView) => {
	esriConfig.apiKey = "AAPK7f721bf6c36d4afbac47832be33b2f7aWIAcxoX0bM5fbknH9D_ansC_RLlo1fbEm9xO50mIPCnXIJeEgCfxq1uEsbKuPVVH"
  const map = new Map({
		basemap: "arcgis-topographic",
	});

	const view = new MapView({
		container: "viewDiv",
		map: map,
		zoom: 13,
		center: [-82.712174, 41.429967],
    constraints: {
      snapToZoom: false
    }
	});
});
