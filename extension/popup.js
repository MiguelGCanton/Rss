//document.addEventListener('DOMContentLoaded', function () {
//document.getElementById('alertButton').addEventListener('click', ShowUrl);
document.getElementById('field').addEventListener('keyup', showHint);
//}); 


function ShowUrl(){
    chrome.tabs.getSelected(null, function(tab) {
    myfunction(tab.url);
});

}
/*
function myfunction(tablink) {
    var urlretained = tablink;
    alert(urlretained);

    $.ajax({
            type: "POST",
            url: "http://localhost/Rss/index2.php",
            data: {"myData":urlretained},
            success: function(data){
                alert('Items added');
            },
            error: function(e){
                console.log(e.message);
                alert('Addition Failed');
            }
    });

}
*/
function cargarHTML(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            document.getElementById("returnfromphp").innerHTML = xhttp.responseText;
        }
        xhttp.open("GET", "http://localhost/Rss/index2.php", true);
        xhttp.send();
    }
}

function showHint() {
    var str = document.getElementById('field').value;
    if (str.length == 0) { 
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "http://localhost/Rss/index3.php?q=" + str, true);
        xmlhttp.send();
    }
}