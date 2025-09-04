var wms_layers = [];

// --- Basemap Layers ---
var osm = new ol.layer.Tile({
    title: "OpenStreetMap",
    type: "base",
    source: new ol.source.OSM()
});

var aerial2024 = new ol.layer.Tile({
    title: "Aerial_2024",
    type: "base",
    source: new ol.source.TileArcGISRest({
        url: "https://gis.snoco.org/img/rest/services/Imagery/Aerial_2024/ImageServer"
    })
});

osm.setVisible(false);
aerial2024.setVisible(true);


var format_CityLimits_0 = new ol.format.GeoJSON();
var features_CityLimits_0 = format_CityLimits_0.readFeatures(json_CityLimits_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityLimits_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityLimits_0.addFeatures(features_CityLimits_0);
var lyr_CityLimits_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CityLimits_0, 
                style: style_CityLimits_0,
                popuplayertitle: 'CityLimits',
                interactive: false,
                title: '<img src="styles/legend/CityLimits_0.png" /> CityLimits'
            });
var format_Parcels_1 = new ol.format.GeoJSON();
var features_Parcels_1 = format_Parcels_1.readFeatures(json_Parcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_1.addFeatures(features_Parcels_1);
var lyr_Parcels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcels_1, 
                style: style_Parcels_1,
                popuplayertitle: 'Parcels',
                interactive: true,
                title: '<img src="styles/legend/Parcels_1.png" /> Parcels'
            });
var format_Streets_trunc_2 = new ol.format.GeoJSON();
var features_Streets_trunc_2 = format_Streets_trunc_2.readFeatures(json_Streets_trunc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streets_trunc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streets_trunc_2.addFeatures(features_Streets_trunc_2);
var lyr_Streets_trunc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Streets_trunc_2, 
                style: style_Streets_trunc_2,
                popuplayertitle: 'Streets_trunc',
                interactive: true,
                title: '<img src="styles/legend/Streets_trunc_2.png" /> Streets_trunc'
            });
var format_work_orders_3 = new ol.format.GeoJSON();
var features_work_orders_3 = format_work_orders_3.readFeatures(json_work_orders_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_work_orders_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_work_orders_3.addFeatures(features_work_orders_3);
var lyr_work_orders_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_work_orders_3, 
                style: style_work_orders_3,
                popuplayertitle: 'work_orders',
                interactive: true,
    title: 'work_orders<br />\
    <img src="styles/legend/work_orders_3_0.png" /> Done<br />\
    <img src="styles/legend/work_orders_3_1.png" /> Open<br />\
    <img src="styles/legend/work_orders_3_2.png" /> Partial<br />\
    <img src="styles/legend/work_orders_3_3.png" /> <br />' });

lyr_CityLimits_0.setVisible(true);lyr_Parcels_1.setVisible(true);lyr_Streets_trunc_2.setVisible(true);lyr_work_orders_3.setVisible(true);
var layersList = [aerial2024, osm, lyr_CityLimits_0,lyr_Parcels_1,lyr_Streets_trunc_2,lyr_work_orders_3];
lyr_CityLimits_0.set('fieldAliases', {'CITY_BO_ID': 'CITY_BO_ID', 'AREA': 'AREA', 'ACRES': 'ACRES', 'name': 'name', 'Shape_Area': 'Shape_Area', });
lyr_Parcels_1.set('fieldAliases', {'PARCEL_ID': 'PARCEL_ID', 'SITUSLINE1': 'SITUSLINE1', });
lyr_Streets_trunc_2.set('fieldAliases', {'CFCC': 'CFCC', 'FNAME': 'FNAME', 'STREET_NAM': 'STREET_NAM', 'FedRoadCla': 'FedRoadCla', 'Shape_Leng': 'Shape_Leng', 'MLTRoadCla': 'MLTRoadCla', });
lyr_work_orders_3.set('fieldAliases', {'wo_number': 'wo_number', 'wo_link': 'wo_link', 'location': 'location', 'description': 'description', 'issued': 'issued', 'completed': 'completed', 'status': 'status', 'comments': 'comments', });
lyr_CityLimits_0.set('fieldImages', {'CITY_BO_ID': 'Range', 'AREA': 'TextEdit', 'ACRES': 'TextEdit', 'name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parcels_1.set('fieldImages', {'PARCEL_ID': 'TextEdit', 'SITUSLINE1': 'TextEdit', });
lyr_Streets_trunc_2.set('fieldImages', {'CFCC': 'TextEdit', 'FNAME': 'TextEdit', 'STREET_NAM': 'TextEdit', 'FedRoadCla': 'TextEdit', 'Shape_Leng': 'TextEdit', 'MLTRoadCla': 'TextEdit', });
lyr_work_orders_3.set('fieldImages', {'wo_number': 'TextEdit', 'wo_link': '', 'location': 'TextEdit', 'description': 'TextEdit', 'issued': 'TextEdit', 'completed': 'TextEdit', 'status': 'TextEdit', 'comments': 'TextEdit', });
lyr_CityLimits_0.set('fieldLabels', {'CITY_BO_ID': 'no label', 'AREA': 'no label', 'ACRES': 'no label', 'name': 'no label', 'Shape_Area': 'no label', });
lyr_Parcels_1.set('fieldLabels', {'PARCEL_ID': 'inline label - always visible', 'SITUSLINE1': 'inline label - always visible', });
lyr_Streets_trunc_2.set('fieldLabels', {'CFCC': 'no label', 'FNAME': 'inline label - always visible', 'STREET_NAM': 'no label', 'FedRoadCla': 'no label', 'Shape_Leng': 'no label', 'MLTRoadCla': 'no label', });
lyr_work_orders_3.set('fieldLabels', {'wo_number': 'inline label - always visible', 'wo_link': 'no label', 'location': 'inline label - always visible', 'description': 'inline label - always visible', 'issued': 'inline label - always visible', 'completed': 'inline label - always visible', 'status': 'inline label - always visible', 'comments': 'inline label - always visible', });
lyr_work_orders_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});