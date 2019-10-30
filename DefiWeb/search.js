$(document).ready(function(){
    $.getJSON("block.json", function(json) {
        var output = '<table class=\"table table-striped\"><thead><tr><th scope=\"col\">Information</th><th scope=\"col\">Valeur</th></tr></thead> <tbody>'; 
        $.each(json, function(key,val){
            if(key == "tx"){
                output += '<tr><th>Nombre de transaction(s)</th><td>'+ val.length+ '</td></tr>';
            }
            output += '<tr><th>'+ key + "</th> <td>" + val+ '</td></tr>';
        });
        output += '</tbody></table>';
        $('#result').html(output);
    });
   
})