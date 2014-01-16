window.Deliron = {};
Deliron.UI = function(type) {
        this.init();
}

Deliron.UI.prototype.init = function () {
    var plain_button = new Deliron_UI_Contol_Button_Plain();
    plain_button.init();
}

new Deliron.UI();