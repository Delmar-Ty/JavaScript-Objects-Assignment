function Plan(name, price, discountMo) {
    this.name = name;
    this.price = price;
    this.discountMo = discountMo;
    Plan.prototype.calc = function (disc) {
        var discount;
        var total = this.price * 12;
        var monthly = this.price;
        var currDate = new Date();
        var currMo = currDate.getMonth();
        for (i = 0; i < this.discountMo.length; i++) {
            if (currMo === this.discountMo[i]) {
                total = this.price * disc;
                discount = true;
            } else {
                discount = false;
            }
        }
        document.getElementById('monthly').textContent = monthly;
        document.getElementById('annual').textContent = total;
        document.getElementById('discount').textContent = discount;
        document.getElementById('total').textContent = total;
    }
}