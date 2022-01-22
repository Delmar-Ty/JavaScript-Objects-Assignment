function Plan(name, price, discountMonths) {
    this.name = name;
    document.getElementById('plan').textContent = this.name;
    this.price = price;
    this.discountMonths = discountMonths;
    Plan.prototype.calcAnnual = function(disc) {
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        var total;
        var discPer = 100 - (disc * 100);
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                total = (this.price * disc * 12).toFixed(2);
                document.getElementById('total').textContent = 'Total: $' + total;
                document.getElementById('discount').textContent = 'Discount: ' + discPer + '%';
                break;
            } else {
                document.getElementById('total').textContent = 'Total: $' + this.price * 12;
                document.getElementById('discount').textContent = 'Discount: None';
            }
        }
    }
}

function basic() {
    var pBasic = new Plan('Basic', 3.99, [0, 7]);
    pBasic.calcAnnual(0.8);
    console.log('Being Called');
}

function prof() {
    var pProfessional = new Plan('Professional', 5.99, [0, 7, 11]);
    pProfessional.calcAnnual(0.8);
}

function ult() {
    var pUltimate = new Plan('Ultimate', 9.99, [0, 7]);
    pUltimate.calcAnnual(0.8);
}