Deliron_UI_Contol_Button = function ( el ) {
    this._el = el;
}

Deliron_UI_Contol_Button.prototype.construct = function (modifier) {
    var left, middle, right;

    if ( ! modifier ) { modifier = '' }

    left   = new Element('span', {
        'class': 'dui_b_l ' + modifier
    });
    middle = new Element('span', {
        'class': 'dui_b_m ' + modifier
    });
    right  = new Element('span', {
        'class': 'dui_b_r '  + modifier
    });

    left.addEvent(  'mouseover', function(){this.addClass('dui_hover')} );
    // middle.addEvent('mouseover', function(){this.addClass('dui_hover')} );
    // right.addEvent( 'mouseover', function(){this.addClass('dui_hover')} );
    // this._el.addEvent('mouseover', function(){this.addClass('dui_hover')} );
    left.addEvent(  'mouseout', function(){this.removeClass('dui_hover')} );
    // middle.addEvent('mouseout', function(){this.removeClass('dui_hover')} );
    // right.addEvent( 'mouseout', function(){this.removeClass('dui_hover')} );
    // this._el.addEvent( 'mouseout', function(){this.removeClass('dui_hover')} );


    left.addEvent('click', function(){
        alert(this);
        this.getElement('.dui_b_orig').click();
        return false;
    });
    right.addEvent('click', function(){
        this.getElement('.dui_b_orig').click();
        return false;
    });
    middle.addEvent('click', function(){
        this.getElement('.dui_b_orig').click();
        return false;
    });

    left.replaces(this._el);
    right.inject(left);
    middle.inject(right);
    this._el.inject(middle);
    this._el.addClass('dui_b_orig');
    // this._el.addEvent('click', function() {
    //     alert("Clicked!");
    //     return false;
    // });
}