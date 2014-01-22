Deliron_UI_List_Plain = function ( ) {
}

Deliron_UI_List_Plain.prototype.init = function () {
    var els = $$('.dui.plain.list');

    els.each(function (el) {
        [ 'plain', 'list'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_List(el).construct('dui_list_plain');
    });
}