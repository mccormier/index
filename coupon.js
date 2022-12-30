const time = new Date();
var month=time.getMonth()+1;
if (month == 12) {
//
document.getElementById("couponDiv").style.border = "3px dashed black";
var coupon=document.getElementById('coupon');
coupon.innerHTML='<b>Coupon</b><br />-50%';
var couponCode=document.getElementById('couponCode');
couponCode.innerHTML='<i>01ZboxingDayZ10</i>';
//
} else {
var cpD=document.getElementsById('couponDiv');
	cpD.style.display="none";
}