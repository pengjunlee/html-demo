function dragResize() {
    var resizeBar = document.querySelector(".resize");
    var leftBox = document.querySelector(".left");
    var box = document.querySelector(".box");
    var rightBox = document.querySelector(".right");
    var resizeWidth = resizeBar.offsetWidth;
    var boxWidth = box.offsetWidth;
    resizeBar.onmousedown = function (e) {
        var startX = e.clientX;
        resizeBar.left = resizeBar.offsetLeft;
        // 鼠标拖动事件
        document.onmousemove = function (e) {
            var moveLen = resizeBar.left + (e.clientX - startX);
            resizeBar.style.left = moveLen + 'px';
            leftBox.style.width = moveLen + "px";
            rightBox.style.width = boxWidth - resizeWidth - moveLen + "px";
            e.target.style.cursor = "w-resize";
            // 拖拽过程中，禁止选中文本
            leftBox.classList.add('userselect')   ;
            rightBox.classList.add('userselect') ;
        };
        // 鼠标松开事件
        document.onmouseup = function (evt) {
            document.onmousemove = null;
            document.onmouseup = null;
            // 清空cursor
            leftBox.style.cursor = "default"   ;
            rightBox.style.cursor = "default"     ;
            leftBox.classList.remove('userselect') ;
            rightBox.classList.remove('userselect') ;
        };
    };
}
dragResize()