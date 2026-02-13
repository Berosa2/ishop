gdjs.Lista_32de_32ProdutosCode = {};
gdjs.Lista_32de_32ProdutosCode.localVariables = [];
gdjs.Lista_32de_32ProdutosCode.idToCallbackMap = new Map();
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDiconObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDiconObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDiconObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDborderObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDborderObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDborderObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDAppObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDAppObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDAppObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDShopObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDShopObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDShopObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDbackObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDbackObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDbackObjects3= [];
gdjs.Lista_32de_32ProdutosCode.GDBookObjects1= [];
gdjs.Lista_32de_32ProdutosCode.GDBookObjects2= [];
gdjs.Lista_32de_32ProdutosCode.GDBookObjects3= [];


gdjs.Lista_32de_32ProdutosCode.mapOfGDgdjs_9546Lista_959532de_959532ProdutosCode_9546GDBookObjects1Objects = Hashtable.newFrom({"Book": gdjs.Lista_32de_32ProdutosCode.GDBookObjects1});
gdjs.Lista_32de_32ProdutosCode.mapOfGDgdjs_9546Lista_959532de_959532ProdutosCode_9546GDBookObjects1Objects = Hashtable.newFrom({"Book": gdjs.Lista_32de_32ProdutosCode.GDBookObjects1});
gdjs.Lista_32de_32ProdutosCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(102);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(98);
}
}

}


};gdjs.Lista_32de_32ProdutosCode.mapOfGDgdjs_9546Lista_959532de_959532ProdutosCode_9546GDBookObjects1Objects = Hashtable.newFrom({"Book": gdjs.Lista_32de_32ProdutosCode.GDBookObjects1});
gdjs.Lista_32de_32ProdutosCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "Generator", 0.2, null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 11);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString());
}
}
if (isConditionTrue_0) {
gdjs.Lista_32de_32ProdutosCode.GDBookObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Lista_32de_32ProdutosCode.mapOfGDgdjs_9546Lista_959532de_959532ProdutosCode_9546GDBookObjects1Objects, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), 128, "");
}
{gdjs.evtTools.storage.readStringFromJSONFile("Bougth", "Book-" + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + "-icon", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3));
}
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), gdjs.Lista_32de_32ProdutosCode.mapOfGDgdjs_9546Lista_959532de_959532ProdutosCode_9546GDBookObjects1Objects, false, null);
}
{for(var i = 0, len = gdjs.Lista_32de_32ProdutosCode.GDBookObjects1.length ;i < len;++i) {
    gdjs.Lista_32de_32ProdutosCode.GDBookObjects1[i].returnVariable(gdjs.Lista_32de_32ProdutosCode.GDBookObjects1[i].getVariables().getFromIndex(0)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).add(1);
}

{ //Subevents
gdjs.Lista_32de_32ProdutosCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.Lista_32de_32ProdutosCode.GDBookObjects1);
{for(var i = 0, len = gdjs.Lista_32de_32ProdutosCode.GDBookObjects1.length ;i < len;++i) {
    gdjs.Lista_32de_32ProdutosCode.GDBookObjects1[i].getBehavior("Resizable").setSize(102, 140);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Book"), gdjs.Lista_32de_32ProdutosCode.GDBookObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Lista_32de_32ProdutosCode.mapOfGDgdjs_9546Lista_959532de_959532ProdutosCode_9546GDBookObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Lista_32de_32ProdutosCode.GDBookObjects1 */
{gdjs.evtTools.storage.readStringFromJSONFile("Bougth", "Book-" + ((gdjs.Lista_32de_32ProdutosCode.GDBookObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Lista_32de_32ProdutosCode.GDBookObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-title", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(4));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Bougth", "Book-" + ((gdjs.Lista_32de_32ProdutosCode.GDBookObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Lista_32de_32ProdutosCode.GDBookObjects1[0].getVariables()).getFromIndex(0).getAsString() + "-location", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(5));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString(runtimeScene.getScene().getVariables().getFromIndex(5).getAsString());
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(4).getAsString());
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "book_read");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.Lista_32de_32ProdutosCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lista_32de_32ProdutosCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.Lista_32de_32ProdutosCode.GDbackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Lista_32de_32ProdutosCode.GDbackObjects1[k] = gdjs.Lista_32de_32ProdutosCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.Lista_32de_32ProdutosCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Inici");
}
}

}


};

gdjs.Lista_32de_32ProdutosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDiconObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDiconObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDiconObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDborderObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDborderObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDborderObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDAppObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDAppObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDAppObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShopObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShopObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShopObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDbackObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDbackObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDbackObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBookObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBookObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBookObjects3.length = 0;

gdjs.Lista_32de_32ProdutosCode.eventsList1(runtimeScene);
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSIBooksObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBack_9595ebookObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProximo_9595ebookObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNome_9595shopObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShop_9595IconObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDProduct_9595IconObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDiconObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDiconObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDiconObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDborderObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDborderObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDborderObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDNomeObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDhomeObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDSettingsObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDAppObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDAppObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDAppObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShopObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShopObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDShopObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDbackObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDbackObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDbackObjects3.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBookObjects1.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBookObjects2.length = 0;
gdjs.Lista_32de_32ProdutosCode.GDBookObjects3.length = 0;


return;

}

gdjs['Lista_32de_32ProdutosCode'] = gdjs.Lista_32de_32ProdutosCode;
