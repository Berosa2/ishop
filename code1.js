gdjs.Store_95ibookCode = {};
gdjs.Store_95ibookCode.localVariables = [];
gdjs.Store_95ibookCode.idToCallbackMap = new Map();
gdjs.Store_95ibookCode.GDWarningObjects1= [];
gdjs.Store_95ibookCode.GDWarningObjects2= [];
gdjs.Store_95ibookCode.GDWarningObjects3= [];
gdjs.Store_95ibookCode.GDWarningObjects4= [];
gdjs.Store_95ibookCode.GDIBook_9595IconObjects1= [];
gdjs.Store_95ibookCode.GDIBook_9595IconObjects2= [];
gdjs.Store_95ibookCode.GDIBook_9595IconObjects3= [];
gdjs.Store_95ibookCode.GDIBook_9595IconObjects4= [];
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects1= [];
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2= [];
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects3= [];
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects4= [];
gdjs.Store_95ibookCode.GDbuttonObjects1= [];
gdjs.Store_95ibookCode.GDbuttonObjects2= [];
gdjs.Store_95ibookCode.GDbuttonObjects3= [];
gdjs.Store_95ibookCode.GDbuttonObjects4= [];
gdjs.Store_95ibookCode.GDCollisionObjects1= [];
gdjs.Store_95ibookCode.GDCollisionObjects2= [];
gdjs.Store_95ibookCode.GDCollisionObjects3= [];
gdjs.Store_95ibookCode.GDCollisionObjects4= [];
gdjs.Store_95ibookCode.GDCodigoObjects1= [];
gdjs.Store_95ibookCode.GDCodigoObjects2= [];
gdjs.Store_95ibookCode.GDCodigoObjects3= [];
gdjs.Store_95ibookCode.GDCodigoObjects4= [];
gdjs.Store_95ibookCode.GDNome_9595shopObjects1= [];
gdjs.Store_95ibookCode.GDNome_9595shopObjects2= [];
gdjs.Store_95ibookCode.GDNome_9595shopObjects3= [];
gdjs.Store_95ibookCode.GDNome_9595shopObjects4= [];
gdjs.Store_95ibookCode.GDShop_9595IconObjects1= [];
gdjs.Store_95ibookCode.GDShop_9595IconObjects2= [];
gdjs.Store_95ibookCode.GDShop_9595IconObjects3= [];
gdjs.Store_95ibookCode.GDShop_9595IconObjects4= [];
gdjs.Store_95ibookCode.GDProduct_9595IconObjects1= [];
gdjs.Store_95ibookCode.GDProduct_9595IconObjects2= [];
gdjs.Store_95ibookCode.GDProduct_9595IconObjects3= [];
gdjs.Store_95ibookCode.GDProduct_9595IconObjects4= [];
gdjs.Store_95ibookCode.GDiconObjects1= [];
gdjs.Store_95ibookCode.GDiconObjects2= [];
gdjs.Store_95ibookCode.GDiconObjects3= [];
gdjs.Store_95ibookCode.GDiconObjects4= [];
gdjs.Store_95ibookCode.GDborderObjects1= [];
gdjs.Store_95ibookCode.GDborderObjects2= [];
gdjs.Store_95ibookCode.GDborderObjects3= [];
gdjs.Store_95ibookCode.GDborderObjects4= [];
gdjs.Store_95ibookCode.GDNomeObjects1= [];
gdjs.Store_95ibookCode.GDNomeObjects2= [];
gdjs.Store_95ibookCode.GDNomeObjects3= [];
gdjs.Store_95ibookCode.GDNomeObjects4= [];
gdjs.Store_95ibookCode.GDhomeObjects1= [];
gdjs.Store_95ibookCode.GDhomeObjects2= [];
gdjs.Store_95ibookCode.GDhomeObjects3= [];
gdjs.Store_95ibookCode.GDhomeObjects4= [];
gdjs.Store_95ibookCode.GDSettingsObjects1= [];
gdjs.Store_95ibookCode.GDSettingsObjects2= [];
gdjs.Store_95ibookCode.GDSettingsObjects3= [];
gdjs.Store_95ibookCode.GDSettingsObjects4= [];
gdjs.Store_95ibookCode.GDAppObjects1= [];
gdjs.Store_95ibookCode.GDAppObjects2= [];
gdjs.Store_95ibookCode.GDAppObjects3= [];
gdjs.Store_95ibookCode.GDAppObjects4= [];
gdjs.Store_95ibookCode.GDShopObjects1= [];
gdjs.Store_95ibookCode.GDShopObjects2= [];
gdjs.Store_95ibookCode.GDShopObjects3= [];
gdjs.Store_95ibookCode.GDShopObjects4= [];
gdjs.Store_95ibookCode.GDbackObjects1= [];
gdjs.Store_95ibookCode.GDbackObjects2= [];
gdjs.Store_95ibookCode.GDbackObjects3= [];
gdjs.Store_95ibookCode.GDbackObjects4= [];
gdjs.Store_95ibookCode.GDBookObjects1= [];
gdjs.Store_95ibookCode.GDBookObjects2= [];
gdjs.Store_95ibookCode.GDBookObjects3= [];
gdjs.Store_95ibookCode.GDBookObjects4= [];


gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects = Hashtable.newFrom({"Book": gdjs.Store_95ibookCode.GDBookObjects2});
gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects = Hashtable.newFrom({"Book": gdjs.Store_95ibookCode.GDBookObjects2});
gdjs.Store_95ibookCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString());
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.storage.elementExistsInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(8).getAsString()));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber()).getChild("codigo").getAsString() == "0");
}
}
if (isConditionTrue_0) {
gdjs.Store_95ibookCode.GDBookObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects, runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), "IBooks");
}
{for(var i = 0, len = gdjs.Store_95ibookCode.GDBookObjects2.length ;i < len;++i) {
    gdjs.Store_95ibookCode.GDBookObjects2[i].returnVariable(gdjs.Store_95ibookCode.GDBookObjects2[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber());
}
}
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber()).getChild("icon").getAsString(), gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects, false, null);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(170);
}
}

}


};gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects = Hashtable.newFrom({"Book": gdjs.Store_95ibookCode.GDBookObjects2});
gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects = Hashtable.newFrom({"Book": gdjs.Store_95ibookCode.GDBookObjects2});
gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects = Hashtable.newFrom({"Book": gdjs.Store_95ibookCode.GDBookObjects2});
gdjs.Store_95ibookCode.asyncCallback11984140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(18).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(19));
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(0);
}
gdjs.Store_95ibookCode.localVariables.length = 0;
}
gdjs.Store_95ibookCode.idToCallbackMap.set(11984140, gdjs.Store_95ibookCode.asyncCallback11984140);
gdjs.Store_95ibookCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://raw.githubusercontent.com/dot-operationalsistem/dot-ebook/refs/heads/main/key.json", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(18), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.Store_95ibookCode.asyncCallback11984140(runtimeScene, asyncObjectsList)), 11984140, asyncObjectsList);
}
}

}


};gdjs.Store_95ibookCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "true");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Livros_gen", 0.2, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber()).getChild("icon").getAsString() != "0");
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Store_95ibookCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber() == 12);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).add(138);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.Store_95ibookCode.GDBookObjects2);
{for(var i = 0, len = gdjs.Store_95ibookCode.GDBookObjects2.length ;i < len;++i) {
    gdjs.Store_95ibookCode.GDBookObjects2[i].getBehavior("Resizable").setSize(160, 224);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.Store_95ibookCode.GDBookObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Store_95ibookCode.GDBookObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Title_Ibook"), gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2);
{for(var i = 0, len = gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2.length ;i < len;++i) {
    gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(((gdjs.Store_95ibookCode.GDBookObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Store_95ibookCode.GDBookObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("Title").getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.Store_95ibookCode.GDBookObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Title_Ibook"), gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2);
{for(var i = 0, len = gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2.length ;i < len;++i) {
    gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2[i].getBehavior("Text").setText("");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.Store_95ibookCode.GDBookObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDBookObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11924372);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Store_95ibookCode.GDBookObjects2 */
{gdjs.evtsExt__PopUp__Confirm.func(runtimeScene, "Want to Buy the book?", null);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(((gdjs.Store_95ibookCode.GDBookObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Store_95ibookCode.GDBookObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("location").getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getChild(((gdjs.Store_95ibookCode.GDBookObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Store_95ibookCode.GDBookObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("Title").getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PopUp__ConfimationResponse.func(runtimeScene, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.Store_95ibookCode.GDBookObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("Values", "Book", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(15));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString(), "true");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString() + "-icon", runtimeScene.getScene().getVariables().getFromIndex(4).getChild(((gdjs.Store_95ibookCode.GDBookObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Store_95ibookCode.GDBookObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("icon").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString() + "-location", runtimeScene.getScene().getVariables().getFromIndex(4).getChild(((gdjs.Store_95ibookCode.GDBookObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Store_95ibookCode.GDBookObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("location").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString() + "-title", runtimeScene.getScene().getVariables().getFromIndex(4).getChild(((gdjs.Store_95ibookCode.GDBookObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Store_95ibookCode.GDBookObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getChild("Title").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(15).add(1);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Value", "Book", runtimeScene.getScene().getVariables().getFromIndex(15).getAsString());
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Lista de Produtos");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Codigo"), gdjs.Store_95ibookCode.GDCodigoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_95ibookCode.GDCodigoObjects1.length;i<l;++i) {
    if ( gdjs.Store_95ibookCode.GDCodigoObjects1[i].isSubmitted() ) {
        isConditionTrue_0 = true;
        gdjs.Store_95ibookCode.GDCodigoObjects1[k] = gdjs.Store_95ibookCode.GDCodigoObjects1[i];
        ++k;
    }
}
gdjs.Store_95ibookCode.GDCodigoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11153876);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Store_95ibookCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Store_95ibookCode.asyncCallback11928220 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("true");
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(14));
}
gdjs.Store_95ibookCode.localVariables.length = 0;
}
gdjs.Store_95ibookCode.idToCallbackMap.set(11928220, gdjs.Store_95ibookCode.asyncCallback11928220);
gdjs.Store_95ibookCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://raw.githubusercontent.com/dot-operationalsistem/dot-ebook/refs/heads/main/Book/tag.json", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(5), gdjs.VariablesContainer.badVariable), (runtimeScene) => (gdjs.Store_95ibookCode.asyncCallback11928220(runtimeScene, asyncObjectsList)), 11928220, asyncObjectsList);
}
}

}


};gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Store_95ibookCode.GDbuttonObjects1});
gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Store_95ibookCode.GDbuttonObjects1});
gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDCollisionObjects1Objects = Hashtable.newFrom({"Collision": gdjs.Store_95ibookCode.GDCollisionObjects1});
gdjs.Store_95ibookCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Collision"), gdjs.Store_95ibookCode.GDCollisionObjects1);
/* Reuse gdjs.Store_95ibookCode.GDbuttonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDbuttonObjects1Objects, gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDCollisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Store_95ibookCode.GDbuttonObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(11).add(34);
}
{for(var i = 0, len = gdjs.Store_95ibookCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Store_95ibookCode.GDbuttonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}
}
}

}


};gdjs.Store_95ibookCode.asyncCallback11931372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("true");
}
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "IBooks");
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "tags");
}
gdjs.Store_95ibookCode.localVariables.length = 0;
}
gdjs.Store_95ibookCode.idToCallbackMap.set(11931372, gdjs.Store_95ibookCode.asyncCallback11931372);
gdjs.Store_95ibookCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Store_95ibookCode.GDbuttonObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://raw.githubusercontent.com/dot-operationalsistem/dot-ebook/refs/heads/main/Book/" + (( gdjs.Store_95ibookCode.GDbuttonObjects1.length === 0 ) ? "" :gdjs.Store_95ibookCode.GDbuttonObjects1[0].getBehavior("Text").getText()) + "/books.json", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(6)), (runtimeScene) => (gdjs.Store_95ibookCode.asyncCallback11931372(runtimeScene, asyncObjectsList)), 11931372, asyncObjectsList);
}
}

}


};gdjs.Store_95ibookCode.asyncCallback10748852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("Values", "Book", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(15));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString(), "true");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString() + "-icon", runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(19).getChild(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()).getChild("loc2").getAsNumberOrString()).getChild("icon").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString() + "-location", runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(19).getChild(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()).getChild("loc2").getAsNumberOrString()).getChild("location").getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(15).getAsString() + "-title", runtimeScene.getScene().getVariables().getFromIndex(4).getChild(runtimeScene.getScene().getVariables().getFromIndex(19).getChild(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()).getChild("loc2").getAsNumberOrString()).getChild("Title").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(15).add(1);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Value", "Book", runtimeScene.getScene().getVariables().getFromIndex(15).getAsString());
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Lista de Produtos");
}
gdjs.Store_95ibookCode.localVariables.length = 0;
}
gdjs.Store_95ibookCode.idToCallbackMap.set(10748852, gdjs.Store_95ibookCode.asyncCallback10748852);
gdjs.Store_95ibookCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Store_95ibookCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://raw.githubusercontent.com/dot-operationalsistem/dot-ebook/refs/heads/main/Book/" + runtimeScene.getScene().getVariables().getFromIndex(19).getChild(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()).getChild("loc").getAsString() + "/books.json", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(6)), (runtimeScene) => (gdjs.Store_95ibookCode.asyncCallback10748852(runtimeScene, asyncObjectsList)), 10748852, asyncObjectsList);
}
}

}


};gdjs.Store_95ibookCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Codigo"), gdjs.Store_95ibookCode.GDCodigoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_95ibookCode.GDCodigoObjects2.length;i<l;++i) {
    if ( gdjs.Store_95ibookCode.GDCodigoObjects2[i].getBehavior("Text").getText() == runtimeScene.getScene().getVariables().getFromIndex(19).getChild(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()).getChild("codigo").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Store_95ibookCode.GDCodigoObjects2[k] = gdjs.Store_95ibookCode.GDCodigoObjects2[i];
        ++k;
    }
}
gdjs.Store_95ibookCode.GDCodigoObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8494084);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Store_95ibookCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Codigo"), gdjs.Store_95ibookCode.GDCodigoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_95ibookCode.GDCodigoObjects1.length;i<l;++i) {
    if ( gdjs.Store_95ibookCode.GDCodigoObjects1[i].getBehavior("Text").getText() != runtimeScene.getScene().getVariables().getFromIndex(19).getChild(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()).getChild("codigo").getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.Store_95ibookCode.GDCodigoObjects1[k] = gdjs.Store_95ibookCode.GDCodigoObjects1[i];
        ++k;
    }
}
gdjs.Store_95ibookCode.GDCodigoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Teste", 0.2, null);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(17).add(1);
}
}

}


};gdjs.Store_95ibookCode.eventsList8 = function(runtimeScene) {

{


gdjs.Store_95ibookCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Store_95ibookCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "true");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Tags_gen", 0.2, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(14).getChild(runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber()).getAsString() != "0");
}
}
}
if (isConditionTrue_0) {
gdjs.Store_95ibookCode.GDbuttonObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Store_95ibookCode.mapOfGDgdjs_9546Store_959595ibookCode_9546GDbuttonObjects1Objects, runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber(), "tags");
}
{for(var i = 0, len = gdjs.Store_95ibookCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Store_95ibookCode.GDbuttonObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(14).getChild(runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber()).getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(10).add((( gdjs.Store_95ibookCode.GDbuttonObjects1.length === 0 ) ? 0 :gdjs.Store_95ibookCode.GDbuttonObjects1[0].getWidth()) + 20);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).add(1);
}

{ //Subevents
gdjs.Store_95ibookCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Store_95ibookCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_95ibookCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.Store_95ibookCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Store_95ibookCode.GDbuttonObjects1[k] = gdjs.Store_95ibookCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.Store_95ibookCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Store_95ibookCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Store_95ibookCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Store_95ibookCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.Store_95ibookCode.GDbackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Store_95ibookCode.GDbackObjects1[k] = gdjs.Store_95ibookCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.Store_95ibookCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(16).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Store_95ibookCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


};

gdjs.Store_95ibookCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Store_95ibookCode.GDWarningObjects1.length = 0;
gdjs.Store_95ibookCode.GDWarningObjects2.length = 0;
gdjs.Store_95ibookCode.GDWarningObjects3.length = 0;
gdjs.Store_95ibookCode.GDWarningObjects4.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects1.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects2.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects3.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects4.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects1.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects3.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects4.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects1.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects2.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects3.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects4.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects1.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects2.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects3.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects4.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects1.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects2.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects3.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects4.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects1.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects2.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects3.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects4.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects1.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects2.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects3.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects4.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects1.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects2.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects3.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects4.length = 0;
gdjs.Store_95ibookCode.GDiconObjects1.length = 0;
gdjs.Store_95ibookCode.GDiconObjects2.length = 0;
gdjs.Store_95ibookCode.GDiconObjects3.length = 0;
gdjs.Store_95ibookCode.GDiconObjects4.length = 0;
gdjs.Store_95ibookCode.GDborderObjects1.length = 0;
gdjs.Store_95ibookCode.GDborderObjects2.length = 0;
gdjs.Store_95ibookCode.GDborderObjects3.length = 0;
gdjs.Store_95ibookCode.GDborderObjects4.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects1.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects2.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects3.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects4.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects1.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects2.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects3.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects4.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects1.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects2.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects3.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects4.length = 0;
gdjs.Store_95ibookCode.GDAppObjects1.length = 0;
gdjs.Store_95ibookCode.GDAppObjects2.length = 0;
gdjs.Store_95ibookCode.GDAppObjects3.length = 0;
gdjs.Store_95ibookCode.GDAppObjects4.length = 0;
gdjs.Store_95ibookCode.GDShopObjects1.length = 0;
gdjs.Store_95ibookCode.GDShopObjects2.length = 0;
gdjs.Store_95ibookCode.GDShopObjects3.length = 0;
gdjs.Store_95ibookCode.GDShopObjects4.length = 0;
gdjs.Store_95ibookCode.GDbackObjects1.length = 0;
gdjs.Store_95ibookCode.GDbackObjects2.length = 0;
gdjs.Store_95ibookCode.GDbackObjects3.length = 0;
gdjs.Store_95ibookCode.GDbackObjects4.length = 0;
gdjs.Store_95ibookCode.GDBookObjects1.length = 0;
gdjs.Store_95ibookCode.GDBookObjects2.length = 0;
gdjs.Store_95ibookCode.GDBookObjects3.length = 0;
gdjs.Store_95ibookCode.GDBookObjects4.length = 0;

gdjs.Store_95ibookCode.eventsList8(runtimeScene);
gdjs.Store_95ibookCode.GDWarningObjects1.length = 0;
gdjs.Store_95ibookCode.GDWarningObjects2.length = 0;
gdjs.Store_95ibookCode.GDWarningObjects3.length = 0;
gdjs.Store_95ibookCode.GDWarningObjects4.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects1.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects2.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects3.length = 0;
gdjs.Store_95ibookCode.GDIBook_9595IconObjects4.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects1.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects2.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects3.length = 0;
gdjs.Store_95ibookCode.GDTitle_9595IbookObjects4.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects1.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects2.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects3.length = 0;
gdjs.Store_95ibookCode.GDbuttonObjects4.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects1.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects2.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects3.length = 0;
gdjs.Store_95ibookCode.GDCollisionObjects4.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects1.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects2.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects3.length = 0;
gdjs.Store_95ibookCode.GDCodigoObjects4.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects1.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects2.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects3.length = 0;
gdjs.Store_95ibookCode.GDNome_9595shopObjects4.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects1.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects2.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects3.length = 0;
gdjs.Store_95ibookCode.GDShop_9595IconObjects4.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects1.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects2.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects3.length = 0;
gdjs.Store_95ibookCode.GDProduct_9595IconObjects4.length = 0;
gdjs.Store_95ibookCode.GDiconObjects1.length = 0;
gdjs.Store_95ibookCode.GDiconObjects2.length = 0;
gdjs.Store_95ibookCode.GDiconObjects3.length = 0;
gdjs.Store_95ibookCode.GDiconObjects4.length = 0;
gdjs.Store_95ibookCode.GDborderObjects1.length = 0;
gdjs.Store_95ibookCode.GDborderObjects2.length = 0;
gdjs.Store_95ibookCode.GDborderObjects3.length = 0;
gdjs.Store_95ibookCode.GDborderObjects4.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects1.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects2.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects3.length = 0;
gdjs.Store_95ibookCode.GDNomeObjects4.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects1.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects2.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects3.length = 0;
gdjs.Store_95ibookCode.GDhomeObjects4.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects1.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects2.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects3.length = 0;
gdjs.Store_95ibookCode.GDSettingsObjects4.length = 0;
gdjs.Store_95ibookCode.GDAppObjects1.length = 0;
gdjs.Store_95ibookCode.GDAppObjects2.length = 0;
gdjs.Store_95ibookCode.GDAppObjects3.length = 0;
gdjs.Store_95ibookCode.GDAppObjects4.length = 0;
gdjs.Store_95ibookCode.GDShopObjects1.length = 0;
gdjs.Store_95ibookCode.GDShopObjects2.length = 0;
gdjs.Store_95ibookCode.GDShopObjects3.length = 0;
gdjs.Store_95ibookCode.GDShopObjects4.length = 0;
gdjs.Store_95ibookCode.GDbackObjects1.length = 0;
gdjs.Store_95ibookCode.GDbackObjects2.length = 0;
gdjs.Store_95ibookCode.GDbackObjects3.length = 0;
gdjs.Store_95ibookCode.GDbackObjects4.length = 0;
gdjs.Store_95ibookCode.GDBookObjects1.length = 0;
gdjs.Store_95ibookCode.GDBookObjects2.length = 0;
gdjs.Store_95ibookCode.GDBookObjects3.length = 0;
gdjs.Store_95ibookCode.GDBookObjects4.length = 0;


return;

}

gdjs['Store_95ibookCode'] = gdjs.Store_95ibookCode;
