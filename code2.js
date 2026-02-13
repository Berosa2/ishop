gdjs.book_95readCode = {};
gdjs.book_95readCode.localVariables = [];
gdjs.book_95readCode.idToCallbackMap = new Map();
gdjs.book_95readCode.GDBookPage1Objects1= [];
gdjs.book_95readCode.GDBookPage1Objects2= [];
gdjs.book_95readCode.GDBookPage2Objects1= [];
gdjs.book_95readCode.GDBookPage2Objects2= [];
gdjs.book_95readCode.GDnameObjects1= [];
gdjs.book_95readCode.GDnameObjects2= [];
gdjs.book_95readCode.GDupObjects1= [];
gdjs.book_95readCode.GDupObjects2= [];
gdjs.book_95readCode.GDdownObjects1= [];
gdjs.book_95readCode.GDdownObjects2= [];
gdjs.book_95readCode.GDNome_9595shopObjects1= [];
gdjs.book_95readCode.GDNome_9595shopObjects2= [];
gdjs.book_95readCode.GDShop_9595IconObjects1= [];
gdjs.book_95readCode.GDShop_9595IconObjects2= [];
gdjs.book_95readCode.GDProduct_9595IconObjects1= [];
gdjs.book_95readCode.GDProduct_9595IconObjects2= [];
gdjs.book_95readCode.GDiconObjects1= [];
gdjs.book_95readCode.GDiconObjects2= [];
gdjs.book_95readCode.GDborderObjects1= [];
gdjs.book_95readCode.GDborderObjects2= [];
gdjs.book_95readCode.GDNomeObjects1= [];
gdjs.book_95readCode.GDNomeObjects2= [];
gdjs.book_95readCode.GDhomeObjects1= [];
gdjs.book_95readCode.GDhomeObjects2= [];
gdjs.book_95readCode.GDSettingsObjects1= [];
gdjs.book_95readCode.GDSettingsObjects2= [];
gdjs.book_95readCode.GDAppObjects1= [];
gdjs.book_95readCode.GDAppObjects2= [];
gdjs.book_95readCode.GDShopObjects1= [];
gdjs.book_95readCode.GDShopObjects2= [];
gdjs.book_95readCode.GDbackObjects1= [];
gdjs.book_95readCode.GDbackObjects2= [];
gdjs.book_95readCode.GDBookObjects1= [];
gdjs.book_95readCode.GDBookObjects2= [];


gdjs.book_95readCode.asyncCallback12007372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.book_95readCode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}
gdjs.book_95readCode.localVariables.length = 0;
}
gdjs.book_95readCode.idToCallbackMap.set(12007372, gdjs.book_95readCode.asyncCallback12007372);
gdjs.book_95readCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.book_95readCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://raw.githubusercontent.com/dot-operationalsistem/dot-ebook/refs/heads/main/Book/y6/" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "/info.json", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1)), (runtimeScene) => (gdjs.book_95readCode.asyncCallback12007372(runtimeScene, asyncObjectsList)), 12007372, asyncObjectsList);
}
}

}


};gdjs.book_95readCode.mapOfGDgdjs_9546book_959595readCode_9546GDBookPage1Objects1Objects = Hashtable.newFrom({"BookPage1": gdjs.book_95readCode.GDBookPage1Objects1});
gdjs.book_95readCode.mapOfGDgdjs_9546book_959595readCode_9546GDBookPage2Objects1Objects = Hashtable.newFrom({"BookPage2": gdjs.book_95readCode.GDBookPage2Objects1});
gdjs.book_95readCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.book_95readCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BookPage1"), gdjs.book_95readCode.GDBookPage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("BookPage2"), gdjs.book_95readCode.GDBookPage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.book_95readCode.GDnameObjects1);
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, "https://raw.githubusercontent.com/dot-operationalsistem/dot-ebook/refs/heads/main/Book/y6/" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + "." + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("format").getAsString(), gdjs.book_95readCode.mapOfGDgdjs_9546book_959595readCode_9546GDBookPage1Objects1Objects, false, null);
}
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, "https://raw.githubusercontent.com/dot-operationalsistem/dot-ebook/refs/heads/main/Book/y6/" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "/" + runtimeScene.getScene().getVariables().getFromIndex(5).getAsString() + "." + runtimeScene.getScene().getVariables().getFromIndex(4).getChild("format").getAsString(), gdjs.book_95readCode.mapOfGDgdjs_9546book_959595readCode_9546GDBookPage2Objects1Objects, false, null);
}
{for(var i = 0, len = gdjs.book_95readCode.GDBookPage1Objects1.length ;i < len;++i) {
    gdjs.book_95readCode.GDBookPage1Objects1[i].getBehavior("Resizable").setSize(384, 608);
}
}
{for(var i = 0, len = gdjs.book_95readCode.GDBookPage2Objects1.length ;i < len;++i) {
    gdjs.book_95readCode.GDBookPage2Objects1[i].getBehavior("Resizable").setSize(384, 608);
}
}
{for(var i = 0, len = gdjs.book_95readCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.book_95readCode.GDnameObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("up"), gdjs.book_95readCode.GDupObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.book_95readCode.GDupObjects1.length;i<l;++i) {
    if ( gdjs.book_95readCode.GDupObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.book_95readCode.GDupObjects1[k] = gdjs.book_95readCode.GDupObjects1[i];
        ++k;
    }
}
gdjs.book_95readCode.GDupObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("down"), gdjs.book_95readCode.GDdownObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.book_95readCode.GDdownObjects1.length;i<l;++i) {
    if ( gdjs.book_95readCode.GDdownObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.book_95readCode.GDdownObjects1[k] = gdjs.book_95readCode.GDdownObjects1[i];
        ++k;
    }
}
gdjs.book_95readCode.GDdownObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).sub(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(4).getChild("pages").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.book_95readCode.GDnameObjects1);
{for(var i = 0, len = gdjs.book_95readCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.book_95readCode.GDnameObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


};

gdjs.book_95readCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.book_95readCode.GDBookPage1Objects1.length = 0;
gdjs.book_95readCode.GDBookPage1Objects2.length = 0;
gdjs.book_95readCode.GDBookPage2Objects1.length = 0;
gdjs.book_95readCode.GDBookPage2Objects2.length = 0;
gdjs.book_95readCode.GDnameObjects1.length = 0;
gdjs.book_95readCode.GDnameObjects2.length = 0;
gdjs.book_95readCode.GDupObjects1.length = 0;
gdjs.book_95readCode.GDupObjects2.length = 0;
gdjs.book_95readCode.GDdownObjects1.length = 0;
gdjs.book_95readCode.GDdownObjects2.length = 0;
gdjs.book_95readCode.GDNome_9595shopObjects1.length = 0;
gdjs.book_95readCode.GDNome_9595shopObjects2.length = 0;
gdjs.book_95readCode.GDShop_9595IconObjects1.length = 0;
gdjs.book_95readCode.GDShop_9595IconObjects2.length = 0;
gdjs.book_95readCode.GDProduct_9595IconObjects1.length = 0;
gdjs.book_95readCode.GDProduct_9595IconObjects2.length = 0;
gdjs.book_95readCode.GDiconObjects1.length = 0;
gdjs.book_95readCode.GDiconObjects2.length = 0;
gdjs.book_95readCode.GDborderObjects1.length = 0;
gdjs.book_95readCode.GDborderObjects2.length = 0;
gdjs.book_95readCode.GDNomeObjects1.length = 0;
gdjs.book_95readCode.GDNomeObjects2.length = 0;
gdjs.book_95readCode.GDhomeObjects1.length = 0;
gdjs.book_95readCode.GDhomeObjects2.length = 0;
gdjs.book_95readCode.GDSettingsObjects1.length = 0;
gdjs.book_95readCode.GDSettingsObjects2.length = 0;
gdjs.book_95readCode.GDAppObjects1.length = 0;
gdjs.book_95readCode.GDAppObjects2.length = 0;
gdjs.book_95readCode.GDShopObjects1.length = 0;
gdjs.book_95readCode.GDShopObjects2.length = 0;
gdjs.book_95readCode.GDbackObjects1.length = 0;
gdjs.book_95readCode.GDbackObjects2.length = 0;
gdjs.book_95readCode.GDBookObjects1.length = 0;
gdjs.book_95readCode.GDBookObjects2.length = 0;

gdjs.book_95readCode.eventsList1(runtimeScene);
gdjs.book_95readCode.GDBookPage1Objects1.length = 0;
gdjs.book_95readCode.GDBookPage1Objects2.length = 0;
gdjs.book_95readCode.GDBookPage2Objects1.length = 0;
gdjs.book_95readCode.GDBookPage2Objects2.length = 0;
gdjs.book_95readCode.GDnameObjects1.length = 0;
gdjs.book_95readCode.GDnameObjects2.length = 0;
gdjs.book_95readCode.GDupObjects1.length = 0;
gdjs.book_95readCode.GDupObjects2.length = 0;
gdjs.book_95readCode.GDdownObjects1.length = 0;
gdjs.book_95readCode.GDdownObjects2.length = 0;
gdjs.book_95readCode.GDNome_9595shopObjects1.length = 0;
gdjs.book_95readCode.GDNome_9595shopObjects2.length = 0;
gdjs.book_95readCode.GDShop_9595IconObjects1.length = 0;
gdjs.book_95readCode.GDShop_9595IconObjects2.length = 0;
gdjs.book_95readCode.GDProduct_9595IconObjects1.length = 0;
gdjs.book_95readCode.GDProduct_9595IconObjects2.length = 0;
gdjs.book_95readCode.GDiconObjects1.length = 0;
gdjs.book_95readCode.GDiconObjects2.length = 0;
gdjs.book_95readCode.GDborderObjects1.length = 0;
gdjs.book_95readCode.GDborderObjects2.length = 0;
gdjs.book_95readCode.GDNomeObjects1.length = 0;
gdjs.book_95readCode.GDNomeObjects2.length = 0;
gdjs.book_95readCode.GDhomeObjects1.length = 0;
gdjs.book_95readCode.GDhomeObjects2.length = 0;
gdjs.book_95readCode.GDSettingsObjects1.length = 0;
gdjs.book_95readCode.GDSettingsObjects2.length = 0;
gdjs.book_95readCode.GDAppObjects1.length = 0;
gdjs.book_95readCode.GDAppObjects2.length = 0;
gdjs.book_95readCode.GDShopObjects1.length = 0;
gdjs.book_95readCode.GDShopObjects2.length = 0;
gdjs.book_95readCode.GDbackObjects1.length = 0;
gdjs.book_95readCode.GDbackObjects2.length = 0;
gdjs.book_95readCode.GDBookObjects1.length = 0;
gdjs.book_95readCode.GDBookObjects2.length = 0;


return;

}

gdjs['book_95readCode'] = gdjs.book_95readCode;
