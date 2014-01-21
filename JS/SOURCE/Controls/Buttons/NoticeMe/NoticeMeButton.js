Deliron_UI_Contol_Button_NoticeMe = function ( opts ) {
    this.opts = opts || {};
}

Deliron_UI_Contol_Button_NoticeMe.prototype.init = function () {
    var els;

    if ( this.opts.container ) {
        els = this.opts.container.getElements('.dui.notice_me.button');
    }
    else {
        els = $$('.dui.notice_me.button');
    }

    els.each(function (el) {
        var button = new Deliron_UI_Contol_Button(el);
        [ 'dui', 'notice_me', 'button' ]
            .each(function (className) {
                el.removeClass(className);
            });
        button.construct('dui_control_button_notice_me');
    });
}