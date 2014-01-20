Deliron_UI_Text_Quiet_Inline = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Text_Quiet_Inline.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.inline.quiet.text');
    }
    else {
        els = $$('.dui.inline.quiet.text');
    }

    var _this = this;
    els.each(function (el) {
        [ 'dui', 'inline', 'quiet', 'text' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_text_quiet_i');
        // _this.construct(el);
    });
}


// Deliron_UI_Text_Quiet_Inline.prototype.init = function (el) {
//     el.addClass()
// }