Deliron_UI_Contol_ButtonGroup_Plain = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_ButtonGroup_Plain.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.plain.button_group');
    }
    else {
        els = $$('.dui.plain.button_group');
    }

    els.each(function (el) {
        var button_group = new Deliron_UI_Contol_ButtonGroup(el);
        [ 'dui', 'plain', 'button', 'group' ].each(function (className) {
            el.removeClass(className);
        });
        button_group.construct('plain');
    });
}