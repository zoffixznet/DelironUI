Deliron_UI_Messages_Error_Tiny = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Error_Tiny.prototype.construct = function (el) {
    [ 'dui', 'tiny', 'message', 'error' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_e_t_orig');
}

Deliron_UI_Messages_Error_Tiny.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.tiny.message.error');
    }
    else {
        els = $$('.dui.tiny.message.error');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}