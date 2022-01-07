function moveAround(elementObj, positionY, callback) {
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(elementObj.countdown)
    // 3. 利用定时器不断重复这个操作
    elementObj.countdown = setInterval(function () {
        // 4. 加一个结束定时器的条件
        var lengthPosition = (positionY - elementObj.offsetLeft) / 10;
        lengthPosition = lengthPosition > 0 ? Math.ceil(lengthPosition) : Math.floor(lengthPosition);
        // console.log(lengthPosition);

        if (elementObj.offsetLeft == positionY) {
            clearInterval(elementObj.countdown);
            if (callback) {
                callback();
            };
            // 高级写法 在JS中 && 有短路的功能，即如果前一个条件不为真，则不往下执行
            //callback && callback()
        }
        // 2. 让盒子在当前位置加上1个移动距离(注意此元素需要添加定位)
        elementObj.style.left = elementObj.offsetLeft + lengthPosition + 'px';
    }, 30);

};