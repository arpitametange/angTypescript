var Product = /** @class */ (function () {
    function Product() {
        this.description = 'djfjk';
    }
    Product.prototype.display = function () {
        console.log("void");
    };
    return Product;
}());
var objectProduct = new Product();
objectProduct.display();
var Excel = /** @class */ (function () {
    function Excel() {
    }
    Excel.prototype.print = function () {
        console.log('EXCEL');
    };
    return Excel;
}());
var PDF = /** @class */ (function () {
    function PDF() {
    }
    PDF.prototype.print = function () {
        console.log('PDF');
    };
    return PDF;
}());
var Doc = /** @class */ (function () {
    function Doc() {
    }
    Doc.prototype.print = function () {
        console.log('Doc');
    };
    return Doc;
}());
var objectExcel = new Excel();
objectExcel.print();
