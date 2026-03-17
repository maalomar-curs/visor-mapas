ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25831").setExtent([326447.966664, 4250776.817540, 621649.429164, 4451704.264596]);
var wms_layers = [];

var lyr_MallorcaOmbres_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MallorcaOmbres<br />\
    <img src="styles/legend/MallorcaOmbres_0_0.png" /> 0<br />\
    <img src="styles/legend/MallorcaOmbres_0_1.png" /> 100<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MallorcaOmbres_0.png",
            attributions: ' ',
            projection: 'EPSG:25831',
            alwaysInRange: true,
            imageExtent: [433341.645197, 4327530.850493, 553306.645197, 4427500.850493]
        })
    });

lyr_MallorcaOmbres_0.setVisible(true);
var layersList = [lyr_MallorcaOmbres_0];
