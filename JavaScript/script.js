function Plan(name, price, discountMo) {
    this.name = name;
    this.price = price;
    this.discountMo = discountMo;
    Plan.prototype.test = function() {
        console.log('Getting Called');
    }
}

var pBasic = new Plan('Basic', '$3.99', [6, 7]);
var pProfessional = new Plan('Professional', '$5.99', [6, 7, 11]);
var pUltimate = new Plan('Ultimate', '$9.99', [6, 7]);

function y() {
    console.log(x);
}