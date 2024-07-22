// 获取canvas元素
const canvas = document.querySelector('canvas');

// 设置canvas画布的宽高为浏览器视口宽高
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 使用2d的绘图方式
const ctx = canvas.getContext('2d');

// 定义花瓣的数量
const SAKURA_SUM = 10;

// 花瓣数组
const sakuraArray = [];

// 雪花图片数组
const snowflake_Images = ['./image/snowflakes.png', './image/snowflakes2.png'];

let mouseX = 0;
/**
 * 定义花瓣类
 */
class Sakura {
    // 构造方法
    constructor(imagePath) {
        // 随机生成花瓣的x, y坐标
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;
        // 随机生成花瓣的宽高
        this.width = Math.random() * 15 + 25;
        this.height = Math.random() * 12 + 20;
        // 随机透明度
        this.opacity = this.w / 50;
        // 设置一个随机数，后面实现旋转角度效果时会用到
        this.rotate = Math.random();
        // 速度初始化
        this.xSpeed = Math.random() * 2 + 1;
        this.ySpeed = Math.random() + 1.5;
        this.rotateSpeed = Math.random() * 0.02;

        this.image = new Image();
        this.image.src = imagePath;
    }

    // 绘制
    draw() {
        // 当花瓣超过canvas画布边界后，重新设置花瓣的坐标、速度、和转速
        if (this.x > canvas.width || this.y > canvas.height) {
            this.x = 0 + Math.random() * 0.5 * canvas.width; // 刚好藏住
            this.y = Math.random() * canvas.height - canvas.height;
            this.rotate = Math.random();
            this.rotateSpeed = Math.random() * 0.02;
            this.xSpeed = Math.random() * 0.5 + 0.5;
            this.ySpeed = Math.random() + 1;
        }

        ctx.drawImage(
            this.image,
            this.x,
            this.y,
            this.width * (0.6 + (Math.abs(Math.cos(this.rotate)) / 3)),
            this.height * (0.8 + (Math.abs(Math.sin(this.rotate)) / 5))
        )
    }

    animate() {
        this.x += this.xSpeed + mouseX * 1;
        this.y += this.ySpeed + mouseX * 2;
        this.rotate += this.rotateSpeed;
        this.draw();
    }
}

/**
 * 定义渲染方法
 */
function render() {
    // 清除矩形内的内容 - 清空屏幕
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    sakuraArray.forEach(sakura => sakura.animate());
    // 该方法会高速浏览器在重绘之前调用指定的函数
    // 这样可以保证在浏览器的刷新频率下去更新动画；
    window.requestAnimationFrame(render);
}

setTimeout(() => {
  console.log('延迟 3 秒后的操作');
      for (let i = 0; i < SAKURA_SUM; i++) {

        const randomImagePath = snowflake_Images[Math.floor(Math.random() * snowflake_Images.length)];
        sakuraArray.push(new Sakura(randomImagePath))
      }
      render();
}, 3000);


// 监听浏览器窗口大小变化，重新设置canvas的宽高
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


function touchHandler(e) {
    // clinetX: 客户端区域的水平坐标 (与页面坐标不同)
    mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth;
}
// mousemove：鼠标移动的事件
window.addEventListener('mousemove', touchHandler);
// touchmove；触点在触屏上移动的事件
window.addEventListener('touchmove', touchHandler);
