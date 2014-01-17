Deliron_UI_Messages_Error = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Error.prototype.construct = function (el) {
    [ 'dui', 'message', 'error' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_e_orig');
}

Deliron_UI_Messages_Error.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.message.error');
    }
    else {
        els = $$('.dui.message.error');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}