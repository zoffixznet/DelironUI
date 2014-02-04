Deliron_UI_Table_Plain = function ( ) {
}

Deliron_UI_Table_Plain.prototype.init = function () {
    var els = $$('.dui.plain.table');

    els.each(function (el) {
        [ 'plain', 'table' ].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_Table(el).construct('dui_table_plain');
    });
}