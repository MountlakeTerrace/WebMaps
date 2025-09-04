var style_Streets_trunc_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "18px 'Open Sans', sans-serif";
    var labelFill = "#bfbfbf";
    var bufferColor = "#2c2c2c";
    var bufferWidth = 5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    
    // More aggressive scale filtering to reduce overlap
    if (resolution > 1.5) {
        labelText = "";  // Hide labels when zoomed out
    } else if (feature.get("FNAME") !== null) {
        labelText = String(feature.get("FNAME"));
    }
    
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(191,191,191,0.5882352941176471)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: labelText ? new ol.style.Text({
            font: labelFont,
            text: labelText,
            fill: new ol.style.Fill({color: labelFill}),
            stroke: new ol.style.Stroke({color: bufferColor, width: bufferWidth}),
            placement: 'line',
            maxAngle: 0.3,  // Limit label rotation
            overflow: false,  // Don't draw labels outside geometry
            textAlign: 'center',
            repeat: 200  // Add spacing between repeated labels
        }) : undefined
    })];

    return style;
};