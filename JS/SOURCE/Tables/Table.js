Deliron_UI_Table = function ( el ) {
    this._el = el;
}

Deliron_UI_Table.prototype.construct = function (modifier) {
    if ( modifier ) {
        this._el.addClass(modifier);
    }

    this._el.addClass('dui_table_orig');

    this._el.getChildren('tr').each(function(li_el, idx){
        if ( idx % 2 ) li_el.addClass('dui_alt')
    });
}