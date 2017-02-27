document.getElementById("celsius_button").addEventListener("click", function(){
    var celsius = document.getElementById("celsius").value.trim();
      if(isNaN(celsius)){
        alert("Celsius debe ser un número.");
        return false;
      }
    var farenheit = celsius * 1.8 + 32;
    document.getElementById("farenheit").value = farenheit;
  });

  document.getElementById("farenheit_button").addEventListener("click", function(){
    var farenheit = document.getElementById("farenheit").value.trim();
      if(isNaN(farenheit)){
        alert("Farenheit debe ser un numero");
      return false;
      }
    var celsius = farenheit / 1.8 - 32;
    document.getElementById("celsius").value = celsius;
  });