$.getJSON('https://raw.githubusercontent.com/ITBconsult/json-data/master/data.json', function(data) {

   // Data contiene los datos del JSON

   $(function () {
       $.each(data, function (i, item) {
            $('<tr>').append(
            $('<td>').text(item.name),
            $('<td>').text(item.city),
            $('<td>').text(item.color),           
            $('<td>').text(item.age)).appendTo('#table01');
       });
   });

});

// Función que añade registros al final de la tabla

function addFunction() {

   $('<tr>').append(
      $('<td>').text($("#name").val()),
      $('<td>').text($("#city").val()),
      $('<td>').text($("#color").val()),           
      $('<td>').text($("#age").val())).appendTo('#table01');
}

