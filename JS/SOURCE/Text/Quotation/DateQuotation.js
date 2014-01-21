Deliron_UI_Text_Quotation = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Text_Quotation.prototype.construct = function (el) {
    var r_quot;
    el.addClass('dui_text_quot');
    el.set('html',
        '<span class="dui_text_r_quot">'
            + el.get('html') +
        '</span>'
    );


    // r_quot = new Element('div', {'class': 'dui_text_r_quot'});
    // r_quot.replaces(el);
    // el.inject(r_quot);
}

Deliron_UI_Text_Quotation.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.quotation.text');
    }
    else {
        els = $$('.dui.quotation.text');
    }

    var _this = this;
    els.each(function (el) {
        [ 'dui', 'quotation', 'text' ].each(function (className) {
            el.removeClass(className);
        });
        _this.construct(el);
    });
}
