var size = 0;
var placement = 'point';

var style_Parcels_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
var style = [ new ol.style.Style({
    stroke: new ol.style.Stroke({color: 'rgba(191,191,191,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.608}),
    fill: new ol.style.Fill({color: 'rgba(255,255,255,0.01)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
