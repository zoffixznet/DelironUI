Deliron_UI_Contol_Button_Plain = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_Plain.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.plain.button');
    }
    else {
        els = $$('.dui.plain.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'plain', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_plain');
    });
}