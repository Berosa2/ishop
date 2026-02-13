gdjs.ConfigurationCode = {};
gdjs.ConfigurationCode.localVariables = [];
gdjs.ConfigurationCode.idToCallbackMap = new Map();
gdjs.ConfigurationCode.GDnameObjects1= [];
gdjs.ConfigurationCode.GDnameObjects2= [];
gdjs.ConfigurationCode.GDID_9595PASSObjects1= [];
gdjs.ConfigurationCode.GDID_9595PASSObjects2= [];
gdjs.ConfigurationCode.GDSCObjects1= [];
gdjs.ConfigurationCode.GDSCObjects2= [];
gdjs.ConfigurationCode.GDNome_9595shopObjects1= [];
gdjs.ConfigurationCode.GDNome_9595shopObjects2= [];
gdjs.ConfigurationCode.GDShop_9595IconObjects1= [];
gdjs.ConfigurationCode.GDShop_9595IconObjects2= [];
gdjs.ConfigurationCode.GDProduct_9595IconObjects1= [];
gdjs.ConfigurationCode.GDProduct_9595IconObjects2= [];
gdjs.ConfigurationCode.GDiconObjects1= [];
gdjs.ConfigurationCode.GDiconObjects2= [];
gdjs.ConfigurationCode.GDborderObjects1= [];
gdjs.ConfigurationCode.GDborderObjects2= [];
gdjs.ConfigurationCode.GDNomeObjects1= [];
gdjs.ConfigurationCode.GDNomeObjects2= [];
gdjs.ConfigurationCode.GDhomeObjects1= [];
gdjs.ConfigurationCode.GDhomeObjects2= [];
gdjs.ConfigurationCode.GDSettingsObjects1= [];
gdjs.ConfigurationCode.GDSettingsObjects2= [];
gdjs.ConfigurationCode.GDAppObjects1= [];
gdjs.ConfigurationCode.GDAppObjects2= [];
gdjs.ConfigurationCode.GDShopObjects1= [];
gdjs.ConfigurationCode.GDShopObjects2= [];
gdjs.ConfigurationCode.GDbackObjects1= [];
gdjs.ConfigurationCode.GDbackObjects2= [];
gdjs.ConfigurationCode.GDBookObjects1= [];
gdjs.ConfigurationCode.GDBookObjects2= [];


gdjs.ConfigurationCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SC"), gdjs.ConfigurationCode.GDSCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ConfigurationCode.GDSCObjects1.length;i<l;++i) {
    if ( gdjs.ConfigurationCode.GDSCObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ConfigurationCode.GDSCObjects1[k] = gdjs.ConfigurationCode.GDSCObjects1[i];
        ++k;
    }
}
gdjs.ConfigurationCode.GDSCObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ID_PASS"), gdjs.ConfigurationCode.GDID_9595PASSObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.ConfigurationCode.GDnameObjects1);
{gdjs.evtTools.storage.writeStringInJSONFile("info", "name", (( gdjs.ConfigurationCode.GDnameObjects1.length === 0 ) ? "" :gdjs.ConfigurationCode.GDnameObjects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.storage.writeStringInJSONFile("info", "id", (( gdjs.ConfigurationCode.GDID_9595PASSObjects1.length === 0 ) ? "" :gdjs.ConfigurationCode.GDID_9595PASSObjects1[0].getBehavior("Text").getText()));
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Inici");
}
}

}


};

gdjs.ConfigurationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConfigurationCode.GDnameObjects1.length = 0;
gdjs.ConfigurationCode.GDnameObjects2.length = 0;
gdjs.ConfigurationCode.GDID_9595PASSObjects1.length = 0;
gdjs.ConfigurationCode.GDID_9595PASSObjects2.length = 0;
gdjs.ConfigurationCode.GDSCObjects1.length = 0;
gdjs.ConfigurationCode.GDSCObjects2.length = 0;
gdjs.ConfigurationCode.GDNome_9595shopObjects1.length = 0;
gdjs.ConfigurationCode.GDNome_9595shopObjects2.length = 0;
gdjs.ConfigurationCode.GDShop_9595IconObjects1.length = 0;
gdjs.ConfigurationCode.GDShop_9595IconObjects2.length = 0;
gdjs.ConfigurationCode.GDProduct_9595IconObjects1.length = 0;
gdjs.ConfigurationCode.GDProduct_9595IconObjects2.length = 0;
gdjs.ConfigurationCode.GDiconObjects1.length = 0;
gdjs.ConfigurationCode.GDiconObjects2.length = 0;
gdjs.ConfigurationCode.GDborderObjects1.length = 0;
gdjs.ConfigurationCode.GDborderObjects2.length = 0;
gdjs.ConfigurationCode.GDNomeObjects1.length = 0;
gdjs.ConfigurationCode.GDNomeObjects2.length = 0;
gdjs.ConfigurationCode.GDhomeObjects1.length = 0;
gdjs.ConfigurationCode.GDhomeObjects2.length = 0;
gdjs.ConfigurationCode.GDSettingsObjects1.length = 0;
gdjs.ConfigurationCode.GDSettingsObjects2.length = 0;
gdjs.ConfigurationCode.GDAppObjects1.length = 0;
gdjs.ConfigurationCode.GDAppObjects2.length = 0;
gdjs.ConfigurationCode.GDShopObjects1.length = 0;
gdjs.ConfigurationCode.GDShopObjects2.length = 0;
gdjs.ConfigurationCode.GDbackObjects1.length = 0;
gdjs.ConfigurationCode.GDbackObjects2.length = 0;
gdjs.ConfigurationCode.GDBookObjects1.length = 0;
gdjs.ConfigurationCode.GDBookObjects2.length = 0;

gdjs.ConfigurationCode.eventsList0(runtimeScene);
gdjs.ConfigurationCode.GDnameObjects1.length = 0;
gdjs.ConfigurationCode.GDnameObjects2.length = 0;
gdjs.ConfigurationCode.GDID_9595PASSObjects1.length = 0;
gdjs.ConfigurationCode.GDID_9595PASSObjects2.length = 0;
gdjs.ConfigurationCode.GDSCObjects1.length = 0;
gdjs.ConfigurationCode.GDSCObjects2.length = 0;
gdjs.ConfigurationCode.GDNome_9595shopObjects1.length = 0;
gdjs.ConfigurationCode.GDNome_9595shopObjects2.length = 0;
gdjs.ConfigurationCode.GDShop_9595IconObjects1.length = 0;
gdjs.ConfigurationCode.GDShop_9595IconObjects2.length = 0;
gdjs.ConfigurationCode.GDProduct_9595IconObjects1.length = 0;
gdjs.ConfigurationCode.GDProduct_9595IconObjects2.length = 0;
gdjs.ConfigurationCode.GDiconObjects1.length = 0;
gdjs.ConfigurationCode.GDiconObjects2.length = 0;
gdjs.ConfigurationCode.GDborderObjects1.length = 0;
gdjs.ConfigurationCode.GDborderObjects2.length = 0;
gdjs.ConfigurationCode.GDNomeObjects1.length = 0;
gdjs.ConfigurationCode.GDNomeObjects2.length = 0;
gdjs.ConfigurationCode.GDhomeObjects1.length = 0;
gdjs.ConfigurationCode.GDhomeObjects2.length = 0;
gdjs.ConfigurationCode.GDSettingsObjects1.length = 0;
gdjs.ConfigurationCode.GDSettingsObjects2.length = 0;
gdjs.ConfigurationCode.GDAppObjects1.length = 0;
gdjs.ConfigurationCode.GDAppObjects2.length = 0;
gdjs.ConfigurationCode.GDShopObjects1.length = 0;
gdjs.ConfigurationCode.GDShopObjects2.length = 0;
gdjs.ConfigurationCode.GDbackObjects1.length = 0;
gdjs.ConfigurationCode.GDbackObjects2.length = 0;
gdjs.ConfigurationCode.GDBookObjects1.length = 0;
gdjs.ConfigurationCode.GDBookObjects2.length = 0;


return;

}

gdjs['ConfigurationCode'] = gdjs.ConfigurationCode;
