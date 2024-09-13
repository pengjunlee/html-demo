var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")
var w = window.innerWidth
var h = window.innerHeight
canvas.width = w
canvas.height = h
var origin={ //设置默认的移动原点，屏幕的正中间
    x:w,
    y:h,
}
var num = 300 //设置星星数量
var stars = []
var speed = 1 //星空移动速度
for(var i = 0 ; i < num ; i++){
    stars.push({
        x:Math.random() * w,
        y:Math.random() * h,
        r:Math.random() * 5,
    })
}
function draw(){
    context.clearRect(0,0,w,h)
    context.beginPath()
    for(var i = 0 ; i < num ; i++){
        var star = stars[i]
        context.fillStyle = "white"
        context.moveTo(star.x, star.y)
        context.arc(star.x , star.y , star.r , 0 , Math.PI * 2)
    }
    context.fill()
    move()
}

function move(){
    for(var i = 0 ; i < num ; i++){
        var star = stars[i]
        m = Math.cos(Math.atan2(star.y - origin.y,star.x - origin.x)) * speed //利用三角函数计算移动方向
        n = Math.sin(Math.atan2(star.y - origin.y,star.x - origin.x)) * speed
        star.x += m
        star.y += n
        if(star.x > w || star.x < 0 || star.y > h || star.y < 0){ //判断是否移出屏幕范围
            stars[i]={
                x:Math.random() * w,
                y:Math.random() * h,
                r:Math.random() * 5,
            }
        }
    }
}
document.onmousemove = function(event){ //根据鼠标位置更改原点坐标
    origin.x = event.clientX
    origin.y = event.clientY
}
draw()
setInterval(draw,1)
