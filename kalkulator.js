var layar = document.querySelector("#layar");
var tombol = document.querySelector(".container-tombol");

layar.addEventListener("input", function (event) {
    event.target.value = event.target.value.replace(/[^0-9+\-*/]/g, "");
});

var resetLayar = false;
var bolehHitung = false;
var tmpVal = '';
var operator = '';

tombol.addEventListener("click", function(e) {    

	var tombolClick = e.target;    
	var nilaiTombol = tombolClick.innerText;    
	
	if (nilaiTombol == "C"){
		layar.value = "";
	} 
	else if (nilaiTombol == "D"){
		layar.value = layar.value.slice(0, -1);
	}
	else if (nilaiTombol == "="){
		layar.value	= eval(layar.value);
	}
	else{
		layar.value = layar.value + nilaiTombol;
	}

});



