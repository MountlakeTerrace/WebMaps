import re

BASMAPS = '''
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

osm.setVisible(true);
aerial2024.setVisible(false);
'''

def patch_layers(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()

    # 1. Insert basemaps after var wms_layers = [];
    text_new = re.sub(r'(var\s+wms_layers\s*=\s*\[\s*\];)', r'\1\n' + BASMAPS, text, count=1)

    # 2. Add basemaps to layersList, if present
    def repl_layerslist(match):
        arr = match.group(1)
        # Remove existing aerial2024/osm
        arr = re.sub(r'aerial2024\s*,?|osm\s*,?', '', arr)
        # Insert at front
        return '[aerial2024, osm, ' + arr.strip('[]') + ']'
    text_new = re.sub(r'var\s+layersList\s*=\s*(\[[^\]]+\])', lambda m: 'var layersList = ' + repl_layerslist(m), text_new, count=1)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(text_new)
    print(f'Patched {filename} with OSM and Aerial_2024 basemaps.')

# Usage: replace 'layers.js' below with your actual file path
patch_layers('layers.js')
