Deliron_UI_Forms_Inputs_TextAreaInput_Plain = function ( type ) {
}

Deliron_UI_Forms_Inputs_TextAreaInput_Plain.prototype.init = function () {
    var els = $$('.dui.plain.textarea');

    els.each(function (el) {
        [ 'dui', 'plain', 'textarea'].each(function (className) {
            el.removeClass(className);
        });
        new Deliron_UI_Forms_Inputs_TextAreaInput(el)
            .construct(
                'dui_textarea_plain',
                '/UI/images/Forms/TextAreas/Plain/'
            );
    });
}