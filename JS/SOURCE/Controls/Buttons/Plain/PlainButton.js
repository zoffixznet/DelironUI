Deliron_UI_Contol_Button_Plain = function ( type ) {
}

Deliron_UI_Contol_Button_Plain.prototype.init = function () {
    var els = $$('.dui.plain.button');

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'dui', 'plain', 'button'].each(function (className) {
            el.removeClass(className);
        });
        button.construct('dui_control_button_plain');
    });
}