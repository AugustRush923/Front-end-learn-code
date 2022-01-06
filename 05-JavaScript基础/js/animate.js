function moveAround(elementObj, positionY, callback) {
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
        }
        // 2. 让盒子在当前位置加上1个移动距离(注意此元素需要添加定位)
        elementObj.style.left = elementObj.offsetLeft + lengthPosition + 'px';
    }, 30);

};