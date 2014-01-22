Deliron_UI_Messages_Success_Tiny = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Success_Tiny.prototype.construct = function (el) {
    [ 'tiny', 'message', 'success' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_s_t_orig');
}

Deliron_UI_Messages_Success_Tiny.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.tiny.message.success');
    }
    else {
        els = $$('.dui.tiny.message.success');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}