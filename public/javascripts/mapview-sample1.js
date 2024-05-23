require(["esri/config","esri/Map", "esri/views/MapView"], (esriConfig, Map, MapView) => {
	esriConfig.apiKey = "<MY_KEY>"
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
