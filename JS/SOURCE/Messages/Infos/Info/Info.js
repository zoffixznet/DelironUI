Deliron_UI_Messages_Info = function (opts) {
    this.opts = opts || {};
}

Deliron_UI_Messages_Info.prototype.construct = function (el) {
    [ 'message', 'info' ]
        .each(function (className) {
            el.removeClass(className);
        });

    el.addClass('dui_m_i_orig');
}

Deliron_UI_Messages_Info.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.message.info');
    }
    else {
        els = $$('.dui.message.info');
    }

    var _this = this;
    els.each(function (el) {
        _this.construct(el);
    });
}