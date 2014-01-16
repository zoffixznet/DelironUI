Deliron_UI_Forms_Labels_Label = function () {
}

Deliron_UI_Forms_Labels_Label.prototype.init = function() {
    var els = $$('.dui.form.label');

    var obj = this;
    els.each(function (el) {
        [ 'dui', 'form', 'label'].each(function (className) {
            el.removeClass(className);
        });

        obj.construct(el);
    });
}

Deliron_UI_Forms_Labels_Label.prototype.construct = function (el) {
    el.addClass('dui_f_l_orig');
}