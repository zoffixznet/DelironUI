Deliron_UI_Actor_ScrollTo = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Actor_ScrollTo.prototype.init = function () {
    var els;
    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.scroll_to.actor');
    }
    else {
        els = $$('.dui.scroll_to.actor');
    }

    var _this = this;
    els.each(function (el) {
        [ 'dui', 'scroll_to', 'actor' ].each(function (className) {
            el.removeClass(className);
        });
        el.addClass('dui_scroll_to_actor');
        new Fx.Scroll(window).toElement(el);
    });
}