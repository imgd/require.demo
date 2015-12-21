define(["web/r_math"], function (r_math) {
    var adddel = function (x, y) {
        var a = r_math.add(x, y);
        return (a * x * y);
    }
    return {
        adddel: adddel
    }
})