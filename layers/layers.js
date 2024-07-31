var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COMMUNECCVEYLE_1 = new ol.format.GeoJSON();
var features_COMMUNECCVEYLE_1 = format_COMMUNECCVEYLE_1.readFeatures(json_COMMUNECCVEYLE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNECCVEYLE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNECCVEYLE_1.addFeatures(features_COMMUNECCVEYLE_1);
var lyr_COMMUNECCVEYLE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNECCVEYLE_1, 
                style: style_COMMUNECCVEYLE_1,
                popuplayertitle: "COMMUNE CC VEYLE",
                interactive: false,
                    title: '<img src="styles/legend/COMMUNECCVEYLE_1.png" /> COMMUNE CC VEYLE'
                });
var format_CCVEYLE_2 = new ol.format.GeoJSON();
var features_CCVEYLE_2 = format_CCVEYLE_2.readFeatures(json_CCVEYLE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCVEYLE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCVEYLE_2.addFeatures(features_CCVEYLE_2);
var lyr_CCVEYLE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CCVEYLE_2, 
                style: style_CCVEYLE_2,
                popuplayertitle: "CC VEYLE",
                interactive: false,
                    title: '<img src="styles/legend/CCVEYLE_2.png" /> CC VEYLE'
                });
var format_VOIEBLEUE_3 = new ol.format.GeoJSON();
var features_VOIEBLEUE_3 = format_VOIEBLEUE_3.readFeatures(json_VOIEBLEUE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VOIEBLEUE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOIEBLEUE_3.addFeatures(features_VOIEBLEUE_3);
var lyr_VOIEBLEUE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOIEBLEUE_3, 
                style: style_VOIEBLEUE_3,
                popuplayertitle: "VOIE BLEUE",
                interactive: false,
                    title: '<img src="styles/legend/VOIEBLEUE_3.png" /> VOIE BLEUE'
                });
var format_LIAISONSCYCLABLES_4 = new ol.format.GeoJSON();
var features_LIAISONSCYCLABLES_4 = format_LIAISONSCYCLABLES_4.readFeatures(json_LIAISONSCYCLABLES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIAISONSCYCLABLES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIAISONSCYCLABLES_4.addFeatures(features_LIAISONSCYCLABLES_4);
var lyr_LIAISONSCYCLABLES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LIAISONSCYCLABLES_4, 
                style: style_LIAISONSCYCLABLES_4,
                popuplayertitle: "LIAISONS CYCLABLES",
                interactive: true,
    title: 'LIAISONS CYCLABLES<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_4_0.png" /> 1 - LIAISON COMMUNAUTAIRE STRUCTURANTE<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_4_1.png" /> 2 - AUTRE LIAISON COMMUNAUTAIRE<br />\
    <img src="styles/legend/LIAISONSCYCLABLES_4_2.png" /> 3 - LIAISON COMMUNALE<br />'
        });
var format_Numrodeliaisons_5 = new ol.format.GeoJSON();
var features_Numrodeliaisons_5 = format_Numrodeliaisons_5.readFeatures(json_Numrodeliaisons_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Numrodeliaisons_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Numrodeliaisons_5.addFeatures(features_Numrodeliaisons_5);
var lyr_Numrodeliaisons_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Numrodeliaisons_5, 
                style: style_Numrodeliaisons_5,
                popuplayertitle: "Numéro de liaisons",
                interactive: false,
                    title: '<img src="styles/legend/Numrodeliaisons_5.png" /> Numéro de liaisons'
                });
var format_POINTSDURS_6 = new ol.format.GeoJSON();
var features_POINTSDURS_6 = format_POINTSDURS_6.readFeatures(json_POINTSDURS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTSDURS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTSDURS_6.addFeatures(features_POINTSDURS_6);
var lyr_POINTSDURS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POINTSDURS_6, 
                style: style_POINTSDURS_6,
                popuplayertitle: "POINTS DURS",
                interactive: true,
                    title: '<img src="styles/legend/POINTSDURS_6.png" /> POINTS DURS'
                });

lyr_OpenStreetMap_0.setVisible(true);lyr_COMMUNECCVEYLE_1.setVisible(true);lyr_CCVEYLE_2.setVisible(true);lyr_VOIEBLEUE_3.setVisible(true);lyr_LIAISONSCYCLABLES_4.setVisible(true);lyr_Numrodeliaisons_5.setVisible(true);lyr_POINTSDURS_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COMMUNECCVEYLE_1,lyr_CCVEYLE_2,lyr_VOIEBLEUE_3,lyr_LIAISONSCYCLABLES_4,lyr_Numrodeliaisons_5,lyr_POINTSDURS_6];
lyr_COMMUNECCVEYLE_1.set('fieldAliases', {'ID': 'ID', 'STATUT': 'STATUT', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', 'NOM_COM_M': 'NOM_COM_M', 'POPULATION': 'POPULATION', 'TYPE': 'TYPE', 'NOM_COM': 'NOM_COM', });
lyr_CCVEYLE_2.set('fieldAliases', {'ID': 'ID', 'CODE_EPCI': 'CODE_EPCI', 'NOM_EPCI': 'NOM_EPCI', 'TYPE_EPCI': 'TYPE_EPCI', });
lyr_VOIEBLEUE_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LIAISONSCYCLABLES_4.set('fieldAliases', {'LIAISON': 'LIAISON', 'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE ITIN.': 'TYPE ITIN.', 'DETAIL': 'DETAIL', 'VARIANTE': 'VARIANTE', 'VOIE VEYLE': 'VOIE VEYLE', 'PT_DUR_LIN': 'PT_DUR_LIN', 'STATUT': 'STATUT', 'EMPRISE': 'EMPRISE', 'Largeur': 'Largeur', 'Revêtemen': 'Revêtemen', 'Praticable': 'Praticable', 'Lar. acct1': 'Lar. acct1', 'Nat. acct1': 'Nat. acct1', 'Lar. acct2': 'Lar. acct2', 'Nat. acct2': 'Nat. acct2', 'LINEAIRE': 'LINEAIRE', 'PRECO.': 'PRECO.', 'DIRECTION': 'DIRECTION', 'Revetement': 'Revetement', 'Larg. amgt': 'Larg. amgt', 'travaux': 'travaux', 'PROFIL TYP': 'PROFIL TYP', 'PU€HT': 'PU€HT', '+/- VALUE': '+/- VALUE', '+/- VAL.HT': '+/- VAL.HT', 'TOTAL TRAV': 'TOTAL TRAV', 'Acq. Fonc.': 'Acq. Fonc.', 'MOE Aléas': 'MOE Aléas', 'COUT TOTAL': 'COUT TOTAL', 'MOA': 'MOA', 'Coût CC': 'Coût CC', 'Coût comm': 'Coût comm', 'ECO. PRECO': 'ECO. PRECO', 'E. DIRECT.': 'E. DIRECT.', 'E. Revet.': 'E. Revet.', 'E.Lar.amgt': 'E.Lar.amgt', 'E. travaux': 'E. travaux', 'E. PROFIL ': 'E. PROFIL ', 'E. PU€HT': 'E. PU€HT', 'E.+/- VAL': 'E.+/- VAL', 'E+/-VAL.HT': 'E+/-VAL.HT', 'E.TOT. TRA': 'E.TOT. TRA', 'E.Acq. Fon': 'E.Acq. Fon', 'E.MOE Alé': 'E.MOE Alé', 'E.COUT TOT': 'E.COUT TOT', 'E. MOA': 'E. MOA', 'E. Cout CC': 'E. Cout CC', 'E.Cout com': 'E.Cout com', });
lyr_Numrodeliaisons_5.set('fieldAliases', {'NUMERO': 'NUMERO', 'ML': 'ML', 'DESIGNAT°': 'DESIGNAT°', 'POLE1': 'POLE1', 'POLE2': 'POLE2', 'REMARQUE': 'REMARQUE', 'TYPE': 'TYPE', 'SOURCE': 'SOURCE', 'GROUPE': 'GROUPE', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', });
lyr_POINTSDURS_6.set('fieldAliases', {'LIAISON': 'LIAISON', 'ID': 'ID', 'PHOTO': 'PHOTO', 'COMMUNE': 'COMMUNE', 'TYPE ITIN.': 'TYPE ITIN.', 'DETAIL': 'DETAIL', 'VARIANTE': 'VARIANTE', 'VOIE VEYLE': 'VOIE VEYLE', 'PT_DUR_LIN': 'PT_DUR_LIN', 'STATUT': 'STATUT', 'EMPRISE': 'EMPRISE', 'TYPE PT DU': 'TYPE PT DU', 'Largeur': 'Largeur', 'Revêtemen': 'Revêtemen', 'Praticable': 'Praticable', 'Lar. acct1': 'Lar. acct1', 'Nat. acct1': 'Nat. acct1', 'Lar. acct2': 'Lar. acct2', 'Nat. acct2': 'Nat. acct2', 'LINEAIRE': 'LINEAIRE', 'PRECO.': 'PRECO.', 'DIRECTION': 'DIRECTION', 'Revetement': 'Revetement', 'Larg. amgt': 'Larg. amgt', 'travaux': 'travaux', 'PROFIL TYP': 'PROFIL TYP', 'PU€HT': 'PU€HT', '+/- VALUE': '+/- VALUE', '+/- VAL.HT': '+/- VAL.HT', 'TRAVAUX€': 'TRAVAUX€', 'Acq. Fonc.': 'Acq. Fonc.', 'MOE Aléas': 'MOE Aléas', 'COUT TOTAL': 'COUT TOTAL', 'MOA': 'MOA', 'Coût CC': 'Coût CC', 'Coût comm': 'Coût comm', 'ECO. PRECO': 'ECO. PRECO', 'E. DIRECT.': 'E. DIRECT.', 'E. Revet.': 'E. Revet.', 'E.Lar.amgt': 'E.Lar.amgt', 'E.travaux': 'E.travaux', 'E.PROFIL': 'E.PROFIL', 'E. PU€HT': 'E. PU€HT', 'E.+/-VAL': 'E.+/-VAL', 'E+/-VAL.HT': 'E+/-VAL.HT', 'E.TOT.TRA': 'E.TOT.TRA', 'E.Acq. Fon': 'E.Acq. Fon', 'E.MOE Alé': 'E.MOE Alé', 'E.COUT TOT': 'E.COUT TOT', 'E. MOA': 'E. MOA', 'E. Coût C': 'E. Coût C', 'E.Coût co': 'E.Coût co', });
lyr_COMMUNECCVEYLE_1.set('fieldImages', {'ID': 'TextEdit', 'STATUT': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'POPULATION': 'TextEdit', 'TYPE': 'TextEdit', 'NOM_COM': 'TextEdit', });
lyr_CCVEYLE_2.set('fieldImages', {'ID': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_EPCI': 'TextEdit', 'TYPE_EPCI': 'TextEdit', });
lyr_VOIEBLEUE_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_LIAISONSCYCLABLES_4.set('fieldImages', {'LIAISON': 'TextEdit', 'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITIN.': 'TextEdit', 'DETAIL': 'TextEdit', 'VARIANTE': 'TextEdit', 'VOIE VEYLE': 'TextEdit', 'PT_DUR_LIN': 'TextEdit', 'STATUT': 'TextEdit', 'EMPRISE': 'TextEdit', 'Largeur': 'TextEdit', 'Revêtemen': 'TextEdit', 'Praticable': 'TextEdit', 'Lar. acct1': 'TextEdit', 'Nat. acct1': 'TextEdit', 'Lar. acct2': 'TextEdit', 'Nat. acct2': 'TextEdit', 'LINEAIRE': 'TextEdit', 'PRECO.': 'TextEdit', 'DIRECTION': 'TextEdit', 'Revetement': 'TextEdit', 'Larg. amgt': 'TextEdit', 'travaux': 'TextEdit', 'PROFIL TYP': 'TextEdit', 'PU€HT': 'TextEdit', '+/- VALUE': 'TextEdit', '+/- VAL.HT': 'TextEdit', 'TOTAL TRAV': 'TextEdit', 'Acq. Fonc.': 'TextEdit', 'MOE Aléas': 'TextEdit', 'COUT TOTAL': 'TextEdit', 'MOA': 'TextEdit', 'Coût CC': 'TextEdit', 'Coût comm': 'TextEdit', 'ECO. PRECO': 'TextEdit', 'E. DIRECT.': 'TextEdit', 'E. Revet.': 'TextEdit', 'E.Lar.amgt': 'TextEdit', 'E. travaux': 'TextEdit', 'E. PROFIL ': 'TextEdit', 'E. PU€HT': 'TextEdit', 'E.+/- VAL': 'TextEdit', 'E+/-VAL.HT': 'TextEdit', 'E.TOT. TRA': 'TextEdit', 'E.Acq. Fon': 'TextEdit', 'E.MOE Alé': 'TextEdit', 'E.COUT TOT': 'TextEdit', 'E. MOA': 'TextEdit', 'E. Cout CC': 'TextEdit', 'E.Cout com': 'TextEdit', });
lyr_Numrodeliaisons_5.set('fieldImages', {'NUMERO': 'TextEdit', 'ML': 'TextEdit', 'DESIGNAT°': 'TextEdit', 'POLE1': 'TextEdit', 'POLE2': 'TextEdit', 'REMARQUE': 'TextEdit', 'TYPE': 'TextEdit', 'SOURCE': 'TextEdit', 'GROUPE': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', });
lyr_POINTSDURS_6.set('fieldImages', {'LIAISON': 'TextEdit', 'ID': 'TextEdit', 'PHOTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'TYPE ITIN.': 'TextEdit', 'DETAIL': 'TextEdit', 'VARIANTE': 'TextEdit', 'VOIE VEYLE': 'TextEdit', 'PT_DUR_LIN': 'TextEdit', 'STATUT': 'TextEdit', 'EMPRISE': 'TextEdit', 'TYPE PT DU': 'TextEdit', 'Largeur': 'TextEdit', 'Revêtemen': 'TextEdit', 'Praticable': 'TextEdit', 'Lar. acct1': 'TextEdit', 'Nat. acct1': 'TextEdit', 'Lar. acct2': 'TextEdit', 'Nat. acct2': 'TextEdit', 'LINEAIRE': 'TextEdit', 'PRECO.': 'TextEdit', 'DIRECTION': 'TextEdit', 'Revetement': 'TextEdit', 'Larg. amgt': 'TextEdit', 'travaux': 'TextEdit', 'PROFIL TYP': 'TextEdit', 'PU€HT': 'TextEdit', '+/- VALUE': 'TextEdit', '+/- VAL.HT': 'TextEdit', 'TRAVAUX€': 'TextEdit', 'Acq. Fonc.': 'TextEdit', 'MOE Aléas': 'TextEdit', 'COUT TOTAL': 'TextEdit', 'MOA': 'TextEdit', 'Coût CC': 'TextEdit', 'Coût comm': 'TextEdit', 'ECO. PRECO': 'TextEdit', 'E. DIRECT.': 'TextEdit', 'E. Revet.': 'TextEdit', 'E.Lar.amgt': 'TextEdit', 'E.travaux': 'TextEdit', 'E.PROFIL': 'TextEdit', 'E. PU€HT': 'TextEdit', 'E.+/-VAL': 'TextEdit', 'E+/-VAL.HT': 'TextEdit', 'E.TOT.TRA': 'TextEdit', 'E.Acq. Fon': 'TextEdit', 'E.MOE Alé': 'TextEdit', 'E.COUT TOT': 'TextEdit', 'E. MOA': 'TextEdit', 'E. Coût C': 'TextEdit', 'E.Coût co': 'TextEdit', });
lyr_COMMUNECCVEYLE_1.set('fieldLabels', {'ID': 'no label', 'STATUT': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', 'NOM_COM_M': 'no label', 'POPULATION': 'no label', 'TYPE': 'no label', 'NOM_COM': 'no label', });
lyr_CCVEYLE_2.set('fieldLabels', {'ID': 'no label', 'CODE_EPCI': 'no label', 'NOM_EPCI': 'no label', 'TYPE_EPCI': 'no label', });
lyr_VOIEBLEUE_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LIAISONSCYCLABLES_4.set('fieldLabels', {'LIAISON': 'inline label - always visible', 'ID': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITIN.': 'inline label - always visible', 'DETAIL': 'inline label - always visible', 'VARIANTE': 'inline label - always visible', 'VOIE VEYLE': 'inline label - always visible', 'PT_DUR_LIN': 'inline label - always visible', 'STATUT': 'inline label - always visible', 'EMPRISE': 'inline label - always visible', 'Largeur': 'inline label - always visible', 'Revêtemen': 'inline label - always visible', 'Praticable': 'inline label - always visible', 'Lar. acct1': 'inline label - always visible', 'Nat. acct1': 'inline label - always visible', 'Lar. acct2': 'inline label - always visible', 'Nat. acct2': 'inline label - always visible', 'LINEAIRE': 'inline label - always visible', 'PRECO.': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'Revetement': 'inline label - always visible', 'Larg. amgt': 'inline label - always visible', 'travaux': 'inline label - always visible', 'PROFIL TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', '+/- VALUE': 'inline label - always visible', '+/- VAL.HT': 'inline label - always visible', 'TOTAL TRAV': 'inline label - always visible', 'Acq. Fonc.': 'inline label - always visible', 'MOE Aléas': 'inline label - always visible', 'COUT TOTAL': 'inline label - always visible', 'MOA': 'inline label - always visible', 'Coût CC': 'inline label - always visible', 'Coût comm': 'inline label - always visible', 'ECO. PRECO': 'inline label - always visible', 'E. DIRECT.': 'inline label - always visible', 'E. Revet.': 'inline label - always visible', 'E.Lar.amgt': 'inline label - always visible', 'E. travaux': 'inline label - always visible', 'E. PROFIL ': 'inline label - always visible', 'E. PU€HT': 'inline label - always visible', 'E.+/- VAL': 'inline label - always visible', 'E+/-VAL.HT': 'inline label - always visible', 'E.TOT. TRA': 'inline label - always visible', 'E.Acq. Fon': 'inline label - always visible', 'E.MOE Alé': 'inline label - always visible', 'E.COUT TOT': 'inline label - always visible', 'E. MOA': 'inline label - always visible', 'E. Cout CC': 'inline label - always visible', 'E.Cout com': 'inline label - always visible', });
lyr_Numrodeliaisons_5.set('fieldLabels', {'NUMERO': 'no label', 'ML': 'no label', 'DESIGNAT°': 'no label', 'POLE1': 'no label', 'POLE2': 'no label', 'REMARQUE': 'no label', 'TYPE': 'no label', 'SOURCE': 'no label', 'GROUPE': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', });
lyr_POINTSDURS_6.set('fieldLabels', {'LIAISON': 'inline label - always visible', 'ID': 'inline label - always visible', 'PHOTO': 'inline label - always visible', 'COMMUNE': 'inline label - always visible', 'TYPE ITIN.': 'inline label - always visible', 'DETAIL': 'inline label - always visible', 'VARIANTE': 'inline label - always visible', 'VOIE VEYLE': 'inline label - always visible', 'PT_DUR_LIN': 'inline label - always visible', 'STATUT': 'inline label - always visible', 'EMPRISE': 'inline label - always visible', 'TYPE PT DU': 'inline label - always visible', 'Largeur': 'inline label - always visible', 'Revêtemen': 'inline label - always visible', 'Praticable': 'inline label - always visible', 'Lar. acct1': 'inline label - always visible', 'Nat. acct1': 'inline label - always visible', 'Lar. acct2': 'inline label - always visible', 'Nat. acct2': 'inline label - always visible', 'LINEAIRE': 'inline label - always visible', 'PRECO.': 'inline label - always visible', 'DIRECTION': 'inline label - always visible', 'Revetement': 'inline label - always visible', 'Larg. amgt': 'inline label - always visible', 'travaux': 'inline label - always visible', 'PROFIL TYP': 'inline label - always visible', 'PU€HT': 'inline label - always visible', '+/- VALUE': 'inline label - always visible', '+/- VAL.HT': 'inline label - always visible', 'TRAVAUX€': 'inline label - always visible', 'Acq. Fonc.': 'inline label - always visible', 'MOE Aléas': 'inline label - always visible', 'COUT TOTAL': 'inline label - always visible', 'MOA': 'inline label - always visible', 'Coût CC': 'inline label - always visible', 'Coût comm': 'inline label - always visible', 'ECO. PRECO': 'inline label - always visible', 'E. DIRECT.': 'inline label - always visible', 'E. Revet.': 'inline label - always visible', 'E.Lar.amgt': 'inline label - always visible', 'E.travaux': 'inline label - always visible', 'E.PROFIL': 'inline label - always visible', 'E. PU€HT': 'inline label - always visible', 'E.+/-VAL': 'inline label - always visible', 'E+/-VAL.HT': 'inline label - always visible', 'E.TOT.TRA': 'inline label - always visible', 'E.Acq. Fon': 'inline label - always visible', 'E.MOE Alé': 'inline label - always visible', 'E.COUT TOT': 'inline label - always visible', 'E. MOA': 'inline label - always visible', 'E. Coût C': 'inline label - always visible', 'E.Coût co': 'inline label - always visible', });
lyr_POINTSDURS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});