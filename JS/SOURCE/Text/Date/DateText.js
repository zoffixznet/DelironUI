Deliron_UI_Text_Date = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Text_Date.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.date.text');
    }
    else {
        els = $$('.dui.date.text');
    }

    var _this = this;
    els.each(function (el) {
        [ 'dui', 'date', 'text' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_text_date');
    });
}
