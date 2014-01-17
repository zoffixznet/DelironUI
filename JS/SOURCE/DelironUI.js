window.Deliron = {};
Deliron.UI = function(type) {
        this.init();
}

Deliron.UI.prototype.init = function () {
    new Deliron_UI_Forms_Form().init();
        new Deliron_UI_Forms_Labels_Label().init();
        new Deliron_UI_Forms_Inputs_TextInput_Plain().init();
        new Deliron_UI_Forms_Inputs_TextAreaInput_Plain().init();

    new Deliron_UI_Contol_Button_Plain().init();

    new Deliron_UI_List_Plain().init();
}

new Deliron.UI();