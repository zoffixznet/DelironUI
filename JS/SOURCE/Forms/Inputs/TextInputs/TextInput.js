Deliron_UI_Forms_Inputs_TextInput = function ( el ) {
    this._el = el;
}

Deliron_UI_Forms_Inputs_TextInput.prototype.construct = function (modifier) {
    var left, middle, right;

    if ( ! modifier ) { modifier = '' }

    left   = new Element('span', {
        'class': 'dui_i_t_l ' + modifier
    });
    middle = new Element('span', {
        'class': 'dui_i_t_m ' + modifier
    });
    right  = new Element('span', {
        'class': 'dui_i_t_r '  + modifier
    });

    left.addEvent('focus', function(){this.addClass('dui_focus')} );
    left.addEvent('blur', function(){this.removeClass('dui_focus')} );

    left.replaces(this._el);
    right.inject(left);
    middle.inject(right);
    this._el.inject(middle);
    this._el.addClass('dui_i_t_orig');

    this._el.setStyle(
        'width',
        ( left.getParent().getSize().x - 18 ) + 'px'
    );
}