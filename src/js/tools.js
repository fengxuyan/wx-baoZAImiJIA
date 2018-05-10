var requestUrl = "http://121.196.233.1:8000/web/api";
var body_height = document.documentElement.clientHeight;
$('body').css('height', body_height);
$('.sort-container').css('height', body_height);
function serilizeURL(url) {
    var rs = url.split("?")[1];
    var arr = rs.split("&");
    var json = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("=") != -1) {
            json[arr[i].split("=")[0]] = arr[i].split("=")[1];
        }
        else {
            json[arr[i]] = "undefined";
        }
    }
    return json;
}