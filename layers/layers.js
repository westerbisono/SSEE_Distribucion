var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_EDESUR_2 = new ol.format.GeoJSON();
var features_EDESUR_2 = format_EDESUR_2.readFeatures(json_EDESUR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDESUR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDESUR_2.addFeatures(features_EDESUR_2);
var lyr_EDESUR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDESUR_2, 
                style: style_EDESUR_2,
                popuplayertitle: 'EDESUR',
                interactive: false,
                title: '<img src="styles/legend/EDESUR_2.png" /> EDESUR'
            });
var format_EDEESTE_3 = new ol.format.GeoJSON();
var features_EDEESTE_3 = format_EDEESTE_3.readFeatures(json_EDEESTE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDEESTE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDEESTE_3.addFeatures(features_EDEESTE_3);
var lyr_EDEESTE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDEESTE_3, 
                style: style_EDEESTE_3,
                popuplayertitle: 'EDEESTE',
                interactive: false,
                title: '<img src="styles/legend/EDEESTE_3.png" /> EDEESTE'
            });
var format_EDENORTE_4 = new ol.format.GeoJSON();
var features_EDENORTE_4 = format_EDENORTE_4.readFeatures(json_EDENORTE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDENORTE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDENORTE_4.addFeatures(features_EDENORTE_4);
var lyr_EDENORTE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDENORTE_4, 
                style: style_EDENORTE_4,
                popuplayertitle: 'EDENORTE',
                interactive: false,
                title: '<img src="styles/legend/EDENORTE_4.png" /> EDENORTE'
            });
var format_SSEEDistribucion_5 = new ol.format.GeoJSON();
var features_SSEEDistribucion_5 = format_SSEEDistribucion_5.readFeatures(json_SSEEDistribucion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SSEEDistribucion_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SSEEDistribucion_5.addFeatures(features_SSEEDistribucion_5);
cluster_SSEEDistribucion_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_SSEEDistribucion_5
});
var lyr_SSEEDistribucion_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SSEEDistribucion_5, 
                style: style_SSEEDistribucion_5,
                popuplayertitle: 'SSEE Distribucion',
                interactive: true,
    title: 'SSEE Distribucion<br />\
    <img src="styles/legend/SSEEDistribucion_5_0.png" /> CEPM/CEB<br />\
    <img src="styles/legend/SSEEDistribucion_5_1.png" /> COSTASUR<br />\
    <img src="styles/legend/SSEEDistribucion_5_2.png" /> EDEESTE<br />\
    <img src="styles/legend/SSEEDistribucion_5_3.png" /> EDENORTE<br />\
    <img src="styles/legend/SSEEDistribucion_5_4.png" /> EDENORTE-ETED<br />\
    <img src="styles/legend/SSEEDistribucion_5_5.png" /> EDENORTE-PRIVADO<br />\
    <img src="styles/legend/SSEEDistribucion_5_6.png" /> EDESUR<br />\
    <img src="styles/legend/SSEEDistribucion_5_7.png" /> EDESUR-EGEHAINA<br />\
    <img src="styles/legend/SSEEDistribucion_5_8.png" /> LYF LT<br />\
    <img src="styles/legend/SSEEDistribucion_5_9.png" /> PPE<br />'
        });
var group_EDEs = new ol.layer.Group({
                                layers: [lyr_EDESUR_2,lyr_EDEESTE_3,lyr_EDENORTE_4,lyr_SSEEDistribucion_5,],
                                fold: "open",
                                title: 'EDEs'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_EDESUR_2.setVisible(true);lyr_EDEESTE_3.setVisible(true);lyr_EDENORTE_4.setVisible(true);lyr_SSEEDistribucion_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,group_EDEs];
lyr_EDESUR_2.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_EDEESTE_3.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_EDENORTE_4.set('fieldAliases', {'fid': 'fid', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', });
lyr_SSEEDistribucion_5.set('fieldAliases', {'DISTRIBUIDORA': 'DISTRIBUIDORA', 'Provincia': 'Provincia', 'Cód SE': 'Cód SE', 'Nombre subestación': 'Nombre subestación', 'Cód transf': 'Cód transf', 'Circ / transf': 'Circ / transf', 'Pot - MVA': 'Pot - MVA', 'Rel transf / kV': 'Rel transf / kV', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', 'Subestación Cabecera': 'Subestación Cabecera', });
lyr_EDESUR_2.set('fieldImages', {'fid': '', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'auxiliary_storage_labeling_show': '', });
lyr_EDEESTE_3.set('fieldImages', {'fid': '', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_EDENORTE_4.set('fieldImages', {'fid': '', 'GID_0': 'TextEdit', 'NAME_0': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', });
lyr_SSEEDistribucion_5.set('fieldImages', {'DISTRIBUIDORA': 'TextEdit', 'Provincia': 'TextEdit', 'Cód SE': 'TextEdit', 'Nombre subestación': 'TextEdit', 'Cód transf': 'TextEdit', 'Circ / transf': 'Range', 'Pot - MVA': 'TextEdit', 'Rel transf / kV': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', 'Subestación Cabecera': 'TextEdit', });
lyr_EDESUR_2.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'inline label - always visible', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'auxiliary_storage_labeling_show': 'no label', });
lyr_EDEESTE_3.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'inline label - always visible', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_EDENORTE_4.set('fieldLabels', {'fid': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'inline label - always visible', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', });
lyr_SSEEDistribucion_5.set('fieldLabels', {'DISTRIBUIDORA': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Cód SE': 'no label', 'Nombre subestación': 'inline label - always visible', 'Cód transf': 'no label', 'Circ / transf': 'inline label - always visible', 'Pot - MVA': 'inline label - always visible', 'Rel transf / kV': 'inline label - always visible', 'Latitud': 'inline label - always visible', 'Longitud': 'inline label - always visible', 'Coord X': 'no label', 'Coord Y': 'no label', 'Subestación Cabecera': 'inline label - always visible', });
lyr_SSEEDistribucion_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});