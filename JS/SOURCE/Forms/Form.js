Deliron_UI_Forms_Form = function () {
}

Deliron_UI_Forms_Form.prototype.init = function() {
    var els = $$('.dui.form');

    var obj = this;
    els.each(function (el) {
        [ 'form' ].each(function (className) {
            el.removeClass(className);
        });
        obj.construct(el);
    });
}

Deliron_UI_Forms_Form.prototype.construct = function (el) {
    if ( el.hasClass('auto_setup') ) {
        el.removeClass('auto_setup');
        this.construct_children(el);
    }
}
Deliron_UI_Forms_Form.prototype.construct_children = function (el) {
    el.addClass('dui_form_orig dui_form_auto_setup_orig');

    // Buttons
    el.getElements('input[type="submit"],button,input[type="button"]')
        .each(function(el){
            if ( el.hasClass('dui') ) return;
            el.addClass('dui'); el.addClass('button'); el.addClass('plain');
        });

    // Text inputs
    el.getElements('input[type="text"],input[type="password"]')
        .each(function(el){
            if ( el.hasClass('dui') ) return;
            el.addClass('dui');
            el.addClass('input');
            el.addClass('plain');
            el.addClass('text');
        });

    // Text areas
    el.getElements('textarea')
        .each(function(el){
            if ( el.hasClass('dui') ) return;
            el.addClass('dui');
            el.addClass('plain');
            el.addClass('textarea');
        });

    // Labels
    el.getElements('label')
        .each(function(el){
            if ( el.hasClass('dui') ) return;
            el.addClass('dui'); el.addClass('form'); el.addClass('label');
        });
}