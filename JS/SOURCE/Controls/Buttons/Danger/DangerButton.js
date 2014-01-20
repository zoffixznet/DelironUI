Deliron_UI_Contol_Button_Danger = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_Danger.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.danger.button');
    }
    else {
        els = $$('.dui.danger.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'dui', 'danger', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_danger');
    });
}