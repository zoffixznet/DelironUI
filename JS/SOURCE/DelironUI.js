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
    new Deliron_UI_Contol_Button_Danger().init();
    new Deliron_UI_Contol_Button_NoticeMe().init();
    new Deliron_UI_Contol_Button_GoBack().init();
    new Deliron_UI_Contol_ButtonGroup_Plain().init();

    // Lists
    new Deliron_UI_List_Plain().init();
    new Deliron_UI_List_Segment().init();
    new Deliron_UI_List_File().init();

    // Messages
    new Deliron_UI_Messages_Error_Tiny().init();
    new Deliron_UI_Messages_Error().init();
    new Deliron_UI_Messages_Success_Tiny().init();
    new Deliron_UI_Messages_Success().init();


    // Text
    new Deliron_UI_Text_Quiet_Inline().init();
    new Deliron_UI_Text_Date().init();
    new Deliron_UI_Text_Quotation().init();

    // Actors
    new Deliron_UI_Actor_ScrollTo().init();
    new Deliron_UI_Actor_Focus().init();

}

new Deliron.UI();