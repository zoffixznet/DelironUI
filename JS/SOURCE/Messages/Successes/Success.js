Deliron_UI_Messages_Success = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Success.prototype.construct = function (el) {
    [ 'dui', 'message', 'success' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_s_orig');
}

Deliron_UI_Messages_Success.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.message.success');
    }
    else {
        els = $$('.dui.message.success');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}