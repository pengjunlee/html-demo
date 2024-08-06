var hour = document.getElementsByClassName("hour")[0] //定义时针
var min = document.getElementsByClassName("min")[0] //定义分针
var sec = document.getElementsByClassName("sec")[0] //定义秒针
var clock = document.getElementsByClassName("clock")[0] //定义数字时钟
function tik() {
    var now = new Date() //获取当前时间
    var secrotate = 0.006 * (now.getSeconds() * 1000 + now.getMilliseconds()) + "deg" //计算当前秒针的旋转角度
    sec.setAttribute('style', 'transform:translateX(-50%) rotate(' + secrotate + ')') //旋转秒针
    var minrotate = 6 * now.getMinutes() + "deg" //计算分针旋转角度
    min.setAttribute('style', 'transform:translateX(-50%) rotate(' + minrotate + ')') //旋转分针
    var hourrotate = 0.5 * (now.getHours() % 12 * 60 + now.getMinutes())+ "deg" //计算时针旋转角度
    hour.setAttribute('style', 'transform:translateX(-50%) rotate(' + hourrotate + ')') //旋转秒针
    var clockstr = ("0" + now.getHours()).slice(-2) //计算数字时钟的显示字符串
    clockstr += ":" + ("0" + now.getMinutes()).slice(-2)
    clockstr += ":" + ("0" + now.getSeconds()).slice(-2)
    clock.innerHTML = clockstr
}
setInterval(tik, 10)