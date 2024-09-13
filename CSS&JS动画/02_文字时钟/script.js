var main = new Vue({
    el: "#main", //确定vue对象范围
    data: {     //vue对象所对应的数据
        year: "",
        allmonth: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        month: [],
        days: [],
        hours: [],
        minutes: [],
        seconds: [],
    },
})

function draw() {
    // 赋值前清除原有数组内的内容（使用push方法会直接增加数组元素)
    main.month = []
    main.days = []
    main.hours = []
    main.minutes = []
    main.seconds = []
    var d = new Date()
    var mon = d.getMonth()
    var day = d.getDay()
    var hour = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()
    main.year = d.getFullYear()
    for (var i = 0; i < 12; i++) { //计算当前月份对应的allmonth索引，并且按照索引的顺序填充month数组
        key = 0
        if ((mon + i) < 12) {
            key = mon + i
        }
        else {
            key = mon + i - 12
        }
        main.month.push(main.allmonth[key])
    }
    for (var i = 0; i < 31; i++) {
        val = ""
        if ((day + i) <= 31) {
            val = String(day + i) + "日" //将计算好的日期转为字符串方式并加上文字
        }
        else {
            val = String(day + i - 31) + "日"
        }
        val = "0" + val             //在日期前补0，并从后向前取3个字符，以达到在个位数日期前补0的效果
        main.days.push(val.slice(-3))
    }
    for (var i = 0; i < 24; i++) {
        val = ""
        if ((hour + i) <= 24) {
            val = String(hour + i) + ":"
        }
        else {
            val = String(hour + i - 24) + ":"
        }
        val = "0" + val
        main.hours.push(val.slice(-3))
    }
    for (var i = 0; i < 60; i++) {
        val = ""
        if ((min + i) <= 60) {
            val = String(min + i) + ":"
        }
        else {
            val = String(min + i - 60) + ":"
        }
        val = "0" + val
        main.minutes.push(val.slice(-3))
    }
    for (var i = 0; i < 60; i++) {
        val = ""
        if ((sec + i) <= 60) {
            val = String(sec + i)
        }
        else {
            val = String(sec + i - 60)
        }
        val = "0" + val
        main.seconds.push(val.slice(-2))
    }
}
draw()
setInterval(draw, 1)