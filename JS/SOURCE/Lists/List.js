Deliron_UI_List = function ( el ) {
    this._el = el;
}

Deliron_UI_List.prototype.construct = function (modifier) {
    if ( modifier ) {
        this._el.addClass(modifier);
    }

    this._el.addClass('dui_l_orig');

    this._el.getChildren('li').each(function(li_el, idx){
        if ( idx % 2 ) li_el.addClass('dui_alt')
    });
}