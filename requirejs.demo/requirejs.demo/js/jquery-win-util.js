(function (window) {
    var detials = {};
    detials.toString = function (input) {
        return "toString:" + input;
    }
    window.detials = detials;
})(window)