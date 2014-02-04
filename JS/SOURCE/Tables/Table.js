Deliron_UI_Table = function ( el ) {
    this._el = el;
}

Deliron_UI_Table.prototype.construct = function (modifier) {
    if ( modifier ) {
        this._el.addClass(modifier);
    }

    this._el.addClass('dui_table_orig');

    this._el.getElements('tr').each(function(tr_el, idx){
        if ( idx % 2 ) tr_el.addClass('dui_alt')
    });
}