var wms_layers = [];

var format_CuencaS_0 = new ol.format.GeoJSON();
var features_CuencaS_0 = format_CuencaS_0.readFeatures(json_CuencaS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaS_0.addFeatures(features_CuencaS_0);
var lyr_CuencaS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CuencaS_0, 
                style: style_CuencaS_0,
                interactive: true,
                title: '<img src="styles/legend/CuencaS_0.png" /> CuencaS'
            });
var lyr_sombra_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "sombra",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/sombra_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11356107.581595, 2123919.300720, -11279443.600290, 2185552.146326]
                            })
                        });

lyr_CuencaS_0.setVisible(true);lyr_sombra_1.setVisible(true);
var layersList = [lyr_CuencaS_0,lyr_sombra_1];
lyr_CuencaS_0.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Area': 'Area', 'X': 'X', 'Y': 'Y', 'Perimetro': 'Perimetro', 'HydroID': 'HydroID', });
lyr_CuencaS_0.set('fieldImages', {'Id': '', 'gridcode': '', 'Area': '', 'X': '', 'Y': '', 'Perimetro': '', 'HydroID': '', });
lyr_CuencaS_0.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Area': 'no label', 'X': 'no label', 'Y': 'no label', 'Perimetro': 'no label', 'HydroID': 'no label', });
lyr_CuencaS_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});