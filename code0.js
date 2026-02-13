gdjs.IniciCode = {};
gdjs.IniciCode.localVariables = [];
gdjs.IniciCode.idToCallbackMap = new Map();
gdjs.IniciCode.GDSelos_9595titleObjects1= [];
gdjs.IniciCode.GDSelos_9595titleObjects2= [];
gdjs.IniciCode.GD_95951BookObjects1= [];
gdjs.IniciCode.GD_95951BookObjects2= [];
gdjs.IniciCode.GDBackObjects1= [];
gdjs.IniciCode.GDBackObjects2= [];
gdjs.IniciCode.GD_95955BookObjects1= [];
gdjs.IniciCode.GD_95955BookObjects2= [];
gdjs.IniciCode.GD_959515BookObjects1= [];
gdjs.IniciCode.GD_959515BookObjects2= [];
gdjs.IniciCode.GD_959530BookObjects1= [];
gdjs.IniciCode.GD_959530BookObjects2= [];
gdjs.IniciCode.GDSpendObjects1= [];
gdjs.IniciCode.GDSpendObjects2= [];
gdjs.IniciCode.GDwaterObjects1= [];
gdjs.IniciCode.GDwaterObjects2= [];
gdjs.IniciCode.GDtargetObjects1= [];
gdjs.IniciCode.GDtargetObjects2= [];
gdjs.IniciCode.GDVTPObjects1= [];
gdjs.IniciCode.GDVTPObjects2= [];
gdjs.IniciCode.GDNome_9595shopObjects1= [];
gdjs.IniciCode.GDNome_9595shopObjects2= [];
gdjs.IniciCode.GDShop_9595IconObjects1= [];
gdjs.IniciCode.GDShop_9595IconObjects2= [];
gdjs.IniciCode.GDProduct_9595IconObjects1= [];
gdjs.IniciCode.GDProduct_9595IconObjects2= [];
gdjs.IniciCode.GDiconObjects1= [];
gdjs.IniciCode.GDiconObjects2= [];
gdjs.IniciCode.GDborderObjects1= [];
gdjs.IniciCode.GDborderObjects2= [];
gdjs.IniciCode.GDNomeObjects1= [];
gdjs.IniciCode.GDNomeObjects2= [];
gdjs.IniciCode.GDhomeObjects1= [];
gdjs.IniciCode.GDhomeObjects2= [];
gdjs.IniciCode.GDSettingsObjects1= [];
gdjs.IniciCode.GDSettingsObjects2= [];
gdjs.IniciCode.GDAppObjects1= [];
gdjs.IniciCode.GDAppObjects2= [];
gdjs.IniciCode.GDShopObjects1= [];
gdjs.IniciCode.GDShopObjects2= [];
gdjs.IniciCode.GDbackObjects1= [];
gdjs.IniciCode.GDbackObjects2= [];
gdjs.IniciCode.GDBookObjects1= [];
gdjs.IniciCode.GDBookObjects2= [];


gdjs.IniciCode.mapOfGDgdjs_9546IniciCode_9546GDSettingsObjects1Objects = Hashtable.newFrom({"Settings": gdjs.IniciCode.GDSettingsObjects1});
gdjs.IniciCode.mapOfGDgdjs_9546IniciCode_9546GDSettingsObjects1Objects = Hashtable.newFrom({"Settings": gdjs.IniciCode.GDSettingsObjects1});
gdjs.IniciCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Shop"), gdjs.IniciCode.GDShopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IniciCode.GDShopObjects1.length;i<l;++i) {
    if ( gdjs.IniciCode.GDShopObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IniciCode.GDShopObjects1[k] = gdjs.IniciCode.GDShopObjects1[i];
        ++k;
    }
}
gdjs.IniciCode.GDShopObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Store_ibook");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.IniciCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IniciCode.mapOfGDgdjs_9546IniciCode_9546GDSettingsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.IniciCode.GDSettingsObjects1 */
{for(var i = 0, len = gdjs.IniciCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.IniciCode.GDSettingsObjects1[i].setAngle(20);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.IniciCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.IniciCode.mapOfGDgdjs_9546IniciCode_9546GDSettingsObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.IniciCode.GDSettingsObjects1 */
{for(var i = 0, len = gdjs.IniciCode.GDSettingsObjects1.length ;i < len;++i) {
    gdjs.IniciCode.GDSettingsObjects1[i].setAngle(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.IniciCode.GDSettingsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IniciCode.GDSettingsObjects1.length;i<l;++i) {
    if ( gdjs.IniciCode.GDSettingsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IniciCode.GDSettingsObjects1[k] = gdjs.IniciCode.GDSettingsObjects1[i];
        ++k;
    }
}
gdjs.IniciCode.GDSettingsObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("target"), gdjs.IniciCode.GDtargetObjects1);
gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.IniciCode.GDwaterObjects1);
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Configuration");
}
{for(var i = 0, len = gdjs.IniciCode.GDwaterObjects1.length ;i < len;++i) {
    gdjs.IniciCode.GDwaterObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Water", (( gdjs.IniciCode.GDtargetObjects1.length === 0 ) ? 0 :gdjs.IniciCode.GDtargetObjects1[0].getPointY("")), "easeFrom", 2, false);
}
}
{gdjs.evtTools.storage.clearJSONFile("Bougth");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("water"), gdjs.IniciCode.GDwaterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Configuration");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IniciCode.GDwaterObjects1.length;i<l;++i) {
    if ( gdjs.IniciCode.GDwaterObjects1[i].getBehavior("Tween").hasFinished("Water") ) {
        isConditionTrue_0 = true;
        gdjs.IniciCode.GDwaterObjects1[k] = gdjs.IniciCode.GDwaterObjects1[i];
        ++k;
    }
}
gdjs.IniciCode.GDwaterObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Configuration", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("VTP"), gdjs.IniciCode.GDVTPObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IniciCode.GDVTPObjects1.length;i<l;++i) {
    if ( gdjs.IniciCode.GDVTPObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IniciCode.GDVTPObjects1[k] = gdjs.IniciCode.GDVTPObjects1[i];
        ++k;
    }
}
gdjs.IniciCode.GDVTPObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Lista de Produtos");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("info", "name", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("info", "name");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nome"), gdjs.IniciCode.GDNomeObjects1);
{for(var i = 0, len = gdjs.IniciCode.GDNomeObjects1.length ;i < len;++i) {
    gdjs.IniciCode.GDNomeObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


};

gdjs.IniciCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IniciCode.GDSelos_9595titleObjects1.length = 0;
gdjs.IniciCode.GDSelos_9595titleObjects2.length = 0;
gdjs.IniciCode.GD_95951BookObjects1.length = 0;
gdjs.IniciCode.GD_95951BookObjects2.length = 0;
gdjs.IniciCode.GDBackObjects1.length = 0;
gdjs.IniciCode.GDBackObjects2.length = 0;
gdjs.IniciCode.GD_95955BookObjects1.length = 0;
gdjs.IniciCode.GD_95955BookObjects2.length = 0;
gdjs.IniciCode.GD_959515BookObjects1.length = 0;
gdjs.IniciCode.GD_959515BookObjects2.length = 0;
gdjs.IniciCode.GD_959530BookObjects1.length = 0;
gdjs.IniciCode.GD_959530BookObjects2.length = 0;
gdjs.IniciCode.GDSpendObjects1.length = 0;
gdjs.IniciCode.GDSpendObjects2.length = 0;
gdjs.IniciCode.GDwaterObjects1.length = 0;
gdjs.IniciCode.GDwaterObjects2.length = 0;
gdjs.IniciCode.GDtargetObjects1.length = 0;
gdjs.IniciCode.GDtargetObjects2.length = 0;
gdjs.IniciCode.GDVTPObjects1.length = 0;
gdjs.IniciCode.GDVTPObjects2.length = 0;
gdjs.IniciCode.GDNome_9595shopObjects1.length = 0;
gdjs.IniciCode.GDNome_9595shopObjects2.length = 0;
gdjs.IniciCode.GDShop_9595IconObjects1.length = 0;
gdjs.IniciCode.GDShop_9595IconObjects2.length = 0;
gdjs.IniciCode.GDProduct_9595IconObjects1.length = 0;
gdjs.IniciCode.GDProduct_9595IconObjects2.length = 0;
gdjs.IniciCode.GDiconObjects1.length = 0;
gdjs.IniciCode.GDiconObjects2.length = 0;
gdjs.IniciCode.GDborderObjects1.length = 0;
gdjs.IniciCode.GDborderObjects2.length = 0;
gdjs.IniciCode.GDNomeObjects1.length = 0;
gdjs.IniciCode.GDNomeObjects2.length = 0;
gdjs.IniciCode.GDhomeObjects1.length = 0;
gdjs.IniciCode.GDhomeObjects2.length = 0;
gdjs.IniciCode.GDSettingsObjects1.length = 0;
gdjs.IniciCode.GDSettingsObjects2.length = 0;
gdjs.IniciCode.GDAppObjects1.length = 0;
gdjs.IniciCode.GDAppObjects2.length = 0;
gdjs.IniciCode.GDShopObjects1.length = 0;
gdjs.IniciCode.GDShopObjects2.length = 0;
gdjs.IniciCode.GDbackObjects1.length = 0;
gdjs.IniciCode.GDbackObjects2.length = 0;
gdjs.IniciCode.GDBookObjects1.length = 0;
gdjs.IniciCode.GDBookObjects2.length = 0;

gdjs.IniciCode.eventsList0(runtimeScene);
gdjs.IniciCode.GDSelos_9595titleObjects1.length = 0;
gdjs.IniciCode.GDSelos_9595titleObjects2.length = 0;
gdjs.IniciCode.GD_95951BookObjects1.length = 0;
gdjs.IniciCode.GD_95951BookObjects2.length = 0;
gdjs.IniciCode.GDBackObjects1.length = 0;
gdjs.IniciCode.GDBackObjects2.length = 0;
gdjs.IniciCode.GD_95955BookObjects1.length = 0;
gdjs.IniciCode.GD_95955BookObjects2.length = 0;
gdjs.IniciCode.GD_959515BookObjects1.length = 0;
gdjs.IniciCode.GD_959515BookObjects2.length = 0;
gdjs.IniciCode.GD_959530BookObjects1.length = 0;
gdjs.IniciCode.GD_959530BookObjects2.length = 0;
gdjs.IniciCode.GDSpendObjects1.length = 0;
gdjs.IniciCode.GDSpendObjects2.length = 0;
gdjs.IniciCode.GDwaterObjects1.length = 0;
gdjs.IniciCode.GDwaterObjects2.length = 0;
gdjs.IniciCode.GDtargetObjects1.length = 0;
gdjs.IniciCode.GDtargetObjects2.length = 0;
gdjs.IniciCode.GDVTPObjects1.length = 0;
gdjs.IniciCode.GDVTPObjects2.length = 0;
gdjs.IniciCode.GDNome_9595shopObjects1.length = 0;
gdjs.IniciCode.GDNome_9595shopObjects2.length = 0;
gdjs.IniciCode.GDShop_9595IconObjects1.length = 0;
gdjs.IniciCode.GDShop_9595IconObjects2.length = 0;
gdjs.IniciCode.GDProduct_9595IconObjects1.length = 0;
gdjs.IniciCode.GDProduct_9595IconObjects2.length = 0;
gdjs.IniciCode.GDiconObjects1.length = 0;
gdjs.IniciCode.GDiconObjects2.length = 0;
gdjs.IniciCode.GDborderObjects1.length = 0;
gdjs.IniciCode.GDborderObjects2.length = 0;
gdjs.IniciCode.GDNomeObjects1.length = 0;
gdjs.IniciCode.GDNomeObjects2.length = 0;
gdjs.IniciCode.GDhomeObjects1.length = 0;
gdjs.IniciCode.GDhomeObjects2.length = 0;
gdjs.IniciCode.GDSettingsObjects1.length = 0;
gdjs.IniciCode.GDSettingsObjects2.length = 0;
gdjs.IniciCode.GDAppObjects1.length = 0;
gdjs.IniciCode.GDAppObjects2.length = 0;
gdjs.IniciCode.GDShopObjects1.length = 0;
gdjs.IniciCode.GDShopObjects2.length = 0;
gdjs.IniciCode.GDbackObjects1.length = 0;
gdjs.IniciCode.GDbackObjects2.length = 0;
gdjs.IniciCode.GDBookObjects1.length = 0;
gdjs.IniciCode.GDBookObjects2.length = 0;


return;

}

gdjs['IniciCode'] = gdjs.IniciCode;
