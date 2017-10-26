var widget = document.getElementById('logo-widget');
var wClientX = widget.offsetLeft, wClientY = widget.offsetTop;
var cur = widget.offsetParent;
while (cur !== null){
    wClientX += cur.offsetLeft;
    wClientY += cur.offsetTop;
    cur = cur.offsetParent;
}

var wParentX = wClientX - widget.offsetLeft, wParentY = wClientY - widget.offsetTop;

var wCenterX = wClientX + widget.offsetWidth / 2, wCenterY = wClientY + widget.offsetHeight / 2;

function mouseMove(e){
    var mPos = e || window.event;
    var mPosX = mPos.pageX, mPosY = mPos.pageY;

    var subX = wCenterX - mPosX, subY = wCenterY - mPosY;
    var distance = Math.sqrt(subX*subX + subY*subY);

    var sigmoid = (1 / (1 + Math.exp(0 - distance * sensitive)) - 0.5) * 2;
    newPosX = wClientX - sigmoid * maxDistance * subX / distance;
    newPosY = wClientY - sigmoid * maxDistance * subY / distance;

    widget.style.left = newPosX - wParentX + 'px';
    widget.style.top = newPosY - wParentY + 'px';
}
document.onmousemove = mouseMove;
