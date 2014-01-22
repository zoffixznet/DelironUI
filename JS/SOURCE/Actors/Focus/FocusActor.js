Deliron_UI_Actor_Focus = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Actor_Focus.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.focus.actor');
    }
    else {
        els = $$('.dui.focus.actor');
    }

    var _this = this;
    els.each(function (el) {
        [ 'focus', 'actor' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_focus_actor');
        el.focus();
    });
}