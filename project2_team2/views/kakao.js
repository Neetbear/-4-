window.onload = function(){
    document.getElementById("address_kakao").addEventListener("click", function(){ 
        new daum.Postcode({
            oncomplete: function(data) { 
                document.getElementById("address_kakao").value = data.address; 
            }
        }).open();
    });
}