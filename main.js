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

