$(document).ready(function(){
    $.getJSON("./block.json", function(json) {
        var output = '<table class=\"table table-striped\"><thead><tr><th scope=\"col\">Information</th><th scope=\"col\">Valeur</th></tr></thead> <tbody>'; 
        $.each(json, function(key,val){
            if(key == "tx"){
                output += '<tr><th>Nombre de transaction(s)</th><td>'+ val.length+ '</td></tr>';
                $.each(val, function(key, vol){
                    output += '<tr><th>Transaction n° '+ key + '</th> <td>-------------------</td></tr>';
                    $.each(vol, function(koy,vil){
                        output += '<tr><th>'+ koy + "</th> <td>" + vil+ '</td></tr>';
                    });
                });
            }
            if(key == "prev_block"){
                output += '<tr><th>'+ key + "</th> <td>" + val+ '</td></tr>';
                output += '<tr><th>'+key+'</th><td><a href=\"https://www.blockchain.com/btc/block/0000000000000000000e51f6ee084894205cff287c381bc1daaf1d71656110c3\">lien vers block precedent</a></td></tr>';
            }
            output += '<tr><th>'+ key + "</th> <td>" + val+ '</td></tr>';
        });
        output += '</tbody></table>';
        $('#result').html(output);
    });

    $.getJSON("./block.json", function(json) {
        //var output = '<table class=\"table table-striped\"><thead><tr><th scope=\"col\">Information</th><th scope=\"col\">Valeur</th></tr></thead> <tbody>'; 
        var output = ""
        $.each(json, function(key,val){
            if(key == "tx"){
                output += 'Nombre de transaction(s)'+ val.length+ '<br/>';
            }
            
            output += key + ":" + val+ '<br/>';
        });
        
        $('#result2').html(output);
    });
   
})