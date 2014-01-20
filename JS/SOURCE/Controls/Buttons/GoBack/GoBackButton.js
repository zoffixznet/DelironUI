Deliron_UI_Contol_Button_GoBack = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_GoBack.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.go_back.button');
    }
    else {
        els = $$('.dui.go_back.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'dui', 'go_back', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_go_back');
    });
}