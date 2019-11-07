Deliron_UI_Forms_Inputs_TextInput = function ( el ) {
    this._el = el;
}

Deliron_UI_Forms_Inputs_TextInput.prototype.construct = function (modifier) {
    var left, middle, right, el = this._el;

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

    el.addEvent('focus', function(){
        this.getParent('.dui_i_t_l').addClass('dui_focus');
    });
    el.addEvent('blur', function(){
        this.getParent('.dui_i_t_l').removeClass('dui_focus');
    });

    left.replaces(this._el);
    right.inject(left);
    middle.inject(right);
    el.inject(middle);
    el.addClass('dui_i_t_orig');

    el.setStyle(
        'width',
        (left.getParent().getComputedSize().width - 18 ) + 'px'
    );
}