widget_status = {}

function moveWidget(e){
  var mPos = e || window.event;
  var mPosX = mPos.pageX, mPosY = mPos.pageY;

  var subX = widget_status.wCenterX - mPosX, subY = widget_status.wCenterY - mPosY;
  var distance = Math.sqrt(subX*subX + subY*subY);

  var sigmoid = (1 / (1 + Math.exp(0 - distance * widget_settings.sensitive)) - 0.5) * 2;
  newPosX = widget_status.wClientX - sigmoid * widget_settings.maxDistance * subX / distance;
  newPosY = widget_status.wClientY - sigmoid * widget_settings.maxDistance * subY / distance;

  widget_status.widget.style.left = newPosX - widget_status.wParentX + 'px';
  widget_status.widget.style.top = newPosY - widget_status.wParentY + 'px';
}


function moveWidgetMobile(e) {
  var touch = e.touches[0];
  var mPos = {
    pageX: touch.pageX,
    pageY: touch.pageY
  };
  moveWidget(mPos);
}

new function() {
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

  widget_status = {
    widget: widget,
    wClientX: wClientX,
    wClientY: wClientY,
    wParentX: wParentX,
    wParentY: wParentY,
    wCenterX: wCenterX,
    wCenterY: wCenterY
  };
  
  document.addEventListener("mousemove", moveWidget);
  document.addEventListener("touchstart", moveWidgetMobile);
  document.addEventListener("touchmove", moveWidgetMobile);
}();


