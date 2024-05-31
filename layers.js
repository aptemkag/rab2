var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="">Yandex Satellite</a>',
                url: 'https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1025.0&x={x}&y={y}&z={z}&scale=1&lang=ru_RU'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QuickWKT_2 = new ol.format.GeoJSON();
var features_QuickWKT_2 = format_QuickWKT_2.readFeatures(json_QuickWKT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuickWKT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuickWKT_2.addFeatures(features_QuickWKT_2);
var lyr_QuickWKT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuickWKT_2, 
                style: style_QuickWKT_2,
                popuplayertitle: "QuickWKT",
                interactive: true,
                    title: '<img src="styles/legend/QuickWKT_2.png" /> QuickWKT'
                });
var format_building_house_3 = new ol.format.GeoJSON();
var features_building_house_3 = format_building_house_3.readFeatures(json_building_house_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_house_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_house_3.addFeatures(features_building_house_3);
var lyr_building_house_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_house_3, 
                style: style_building_house_3,
                popuplayertitle: "building_house",
                interactive: true,
                    title: '<img src="styles/legend/building_house_3.png" /> building_house'
                });
var format_railway_rail_4 = new ol.format.GeoJSON();
var features_railway_rail_4 = format_railway_rail_4.readFeatures(json_railway_rail_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_rail_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_rail_4.addFeatures(features_railway_rail_4);
var lyr_railway_rail_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_rail_4, 
                style: style_railway_rail_4,
                popuplayertitle: "railway_rail",
                interactive: true,
                    title: '<img src="styles/legend/railway_rail_4.png" /> railway_rail'
                });
var format_highway_secondary_5 = new ol.format.GeoJSON();
var features_highway_secondary_5 = format_highway_secondary_5.readFeatures(json_highway_secondary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_secondary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_secondary_5.addFeatures(features_highway_secondary_5);
var lyr_highway_secondary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_secondary_5, 
                style: style_highway_secondary_5,
                popuplayertitle: "highway_secondary",
                interactive: true,
                    title: '<img src="styles/legend/highway_secondary_5.png" /> highway_secondary'
                });
var format_highway_tertiary_6 = new ol.format.GeoJSON();
var features_highway_tertiary_6 = format_highway_tertiary_6.readFeatures(json_highway_tertiary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_6.addFeatures(features_highway_tertiary_6);
var lyr_highway_tertiary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_tertiary_6, 
                style: style_highway_tertiary_6,
                popuplayertitle: "highway_tertiary",
                interactive: true,
                    title: '<img src="styles/legend/highway_tertiary_6.png" /> highway_tertiary'
                });
var format_highway_tertiary_7 = new ol.format.GeoJSON();
var features_highway_tertiary_7 = format_highway_tertiary_7.readFeatures(json_highway_tertiary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_7.addFeatures(features_highway_tertiary_7);
var lyr_highway_tertiary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_tertiary_7, 
                style: style_highway_tertiary_7,
                popuplayertitle: "highway_tertiary",
                interactive: true,
                    title: '<img src="styles/legend/highway_tertiary_7.png" /> highway_tertiary'
                });
var format_highway_unclassified_8 = new ol.format.GeoJSON();
var features_highway_unclassified_8 = format_highway_unclassified_8.readFeatures(json_highway_unclassified_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_unclassified_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_unclassified_8.addFeatures(features_highway_unclassified_8);
var lyr_highway_unclassified_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_unclassified_8, 
                style: style_highway_unclassified_8,
                popuplayertitle: "highway_unclassified",
                interactive: true,
                    title: '<img src="styles/legend/highway_unclassified_8.png" /> highway_unclassified'
                });
var format_highway_secondary_9 = new ol.format.GeoJSON();
var features_highway_secondary_9 = format_highway_secondary_9.readFeatures(json_highway_secondary_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_secondary_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_secondary_9.addFeatures(features_highway_secondary_9);
var lyr_highway_secondary_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_secondary_9, 
                style: style_highway_secondary_9,
                popuplayertitle: "highway_secondary",
                interactive: true,
                    title: '<img src="styles/legend/highway_secondary_9.png" /> highway_secondary'
                });
var format_railway_rail_10 = new ol.format.GeoJSON();
var features_railway_rail_10 = format_railway_rail_10.readFeatures(json_railway_rail_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_rail_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_rail_10.addFeatures(features_railway_rail_10);
var lyr_railway_rail_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_railway_rail_10, 
                style: style_railway_rail_10,
                popuplayertitle: "railway_rail",
                interactive: true,
                    title: '<img src="styles/legend/railway_rail_10.png" /> railway_rail'
                });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_QuickWKT_2.setVisible(true);lyr_building_house_3.setVisible(true);lyr_railway_rail_4.setVisible(true);lyr_highway_secondary_5.setVisible(true);lyr_highway_tertiary_6.setVisible(true);lyr_highway_tertiary_7.setVisible(true);lyr_highway_unclassified_8.setVisible(true);lyr_highway_secondary_9.setVisible(true);lyr_railway_rail_10.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_QuickWKT_2,lyr_building_house_3,lyr_railway_rail_4,lyr_highway_secondary_5,lyr_highway_tertiary_6,lyr_highway_tertiary_7,lyr_highway_unclassified_8,lyr_highway_secondary_9,lyr_railway_rail_10];
lyr_QuickWKT_2.set('fieldAliases', {'name': 'name', });
lyr_building_house_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:levels': 'building:levels', 'addr:city': 'addr:city', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'address': 'address', });
lyr_railway_rail_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'supervised': 'supervised', 'name:uk': 'name:uk', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:pl': 'name:pl', 'name:md': 'name:md', 'name:lv': 'name:lv', 'name:lt': 'name:lt', 'name:ka': 'name:ka', 'name:hy': 'name:hy', 'name:ee': 'name:ee', 'name:bg': 'name:bg', 'name:be': 'name:be', 'esr:user': 'esr:user', 'description': 'description', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'crossing:barrier': 'crossing:barrier', 'uic_ref': 'uic_ref', 'name:en': 'name:en', 'train': 'train', 'public_transport': 'public_transport', 'name': 'name', });
lyr_highway_secondary_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'railway': 'railway', });
lyr_highway_tertiary_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'railway': 'railway', });
lyr_highway_tertiary_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name:ru': 'name:ru', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name:en': 'name:en', 'name': 'name', });
lyr_highway_unclassified_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'surface': 'surface', });
lyr_highway_secondary_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'layer': 'layer', 'bridge': 'bridge', 'name:etymology:wikidata': 'name:etymology:wikidata', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', });
lyr_railway_rail_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'layer': 'layer', 'designated_direction': 'designated_direction', 'passenger_lines': 'passenger_lines', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name:de': 'name:de', 'name': 'name', 'int_name': 'int_name', 'service': 'service', 'voltage': 'voltage', 'usage': 'usage', 'operator': 'operator', 'gauge': 'gauge', 'frequency': 'frequency', 'electrified': 'electrified', 'branch': 'branch', });
lyr_QuickWKT_2.set('fieldImages', {'name': 'TextEdit', });
lyr_building_house_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building:levels': 'TextEdit', 'addr:city': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'address': '', });
lyr_railway_rail_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'supervised': '', 'name:uk': '', 'name:ru': '', 'name:ro': '', 'name:pl': '', 'name:md': '', 'name:lv': '', 'name:lt': '', 'name:ka': '', 'name:hy': '', 'name:ee': '', 'name:bg': '', 'name:be': '', 'esr:user': '', 'description': '', 'foot': '', 'bicycle': '', 'barrier': '', 'crossing:barrier': '', 'uic_ref': '', 'name:en': '', 'train': '', 'public_transport': '', 'name': '', });
lyr_highway_secondary_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'railway': '', });
lyr_highway_tertiary_6.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'railway': '', });
lyr_highway_tertiary_7.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', 'ref': '', 'oneway': '', 'name:ru': '', 'name:etymology:wikidata': '', 'name:en': '', 'name': '', });
lyr_highway_unclassified_8.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'surface': '', });
lyr_highway_secondary_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'layer': '', 'bridge': '', 'name:etymology:wikidata': '', 'surface': '', 'ref': '', 'oneway': '', 'name:ru': '', 'name:en': '', 'name': '', 'maxspeed': '', 'lanes': '', });
lyr_railway_rail_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'railway': '', 'layer': '', 'designated_direction': '', 'passenger_lines': '', 'name:ru': '', 'name:en': '', 'name:de': '', 'name': '', 'int_name': '', 'service': '', 'voltage': '', 'usage': '', 'operator': '', 'gauge': '', 'frequency': '', 'electrified': '', 'branch': '', });
lyr_QuickWKT_2.set('fieldLabels', {'name': 'no label', });
lyr_building_house_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:levels': 'no label', 'addr:city': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'address': 'no label', });
lyr_railway_rail_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'supervised': 'no label', 'name:uk': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:pl': 'no label', 'name:md': 'no label', 'name:lv': 'no label', 'name:lt': 'no label', 'name:ka': 'no label', 'name:hy': 'no label', 'name:ee': 'no label', 'name:bg': 'no label', 'name:be': 'no label', 'esr:user': 'no label', 'description': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'crossing:barrier': 'no label', 'uic_ref': 'no label', 'name:en': 'no label', 'train': 'no label', 'public_transport': 'no label', 'name': 'no label', });
lyr_highway_secondary_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'railway': 'no label', });
lyr_highway_tertiary_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'railway': 'no label', });
lyr_highway_tertiary_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name:ru': 'no label', 'name:etymology:wikidata': 'no label', 'name:en': 'no label', 'name': 'no label', });
lyr_highway_unclassified_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'surface': 'no label', });
lyr_highway_secondary_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'layer': 'no label', 'bridge': 'header label - visible with data', 'name:etymology:wikidata': 'no label', 'surface': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', });
lyr_railway_rail_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'layer': 'no label', 'designated_direction': 'no label', 'passenger_lines': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name': 'no label', 'int_name': 'no label', 'service': 'no label', 'voltage': 'no label', 'usage': 'no label', 'operator': 'no label', 'gauge': 'no label', 'frequency': 'no label', 'electrified': 'no label', 'branch': 'no label', });
lyr_railway_rail_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});