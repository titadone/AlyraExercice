$(document).ready(function(){
    $.getJSON("./block.json", function(json) {
        var output = '<table class=\"table table-striped\"><thead><tr><th scope=\"col\">Information</th><th scope=\"col\">Valeur</th></tr></thead> <tbody>'; 
        $.each(json, function(key,val){
            if(key == "tx"){
                output += '<tr><th>Nombre de transaction(s)</th><td>'+ val.length+ '</td></tr>';
            }
            if(key =="prev_block"){
                output += '<tr><th>'+key+'</th><td><a href="https://www.blockchain.com/btc/block/0000000000000000000e51f6ee084894205cff287c381bc1daaf1d71656110c3">'+ val.length+ '</a></td></tr>';
            }
            output += '<tr><th>'+ key + '</th> <td>'+ val+ '</td></tr>';
        });
        output += '</tbody></table>';
        $('#result').html(output);
    });
   
})