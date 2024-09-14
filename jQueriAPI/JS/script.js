function generateUrl(){
    //Generando un numero al azar entre 0 y 500
    let id = Math.round(Math.random()*500);
    return `https://picsum.photos/id/${id}/200/300`;
}
 
function renderPic(data){
    let div = $("<div></div>");
    div.addClass("pic card");
    
    let img = $("<img></img>");
    img.attr("src", data.dowloand_url);
    img.addClass("card-img");
    div.append(img);

    let autor = $("<h3></h3>");
    autor.addClass("card-title");
    autor.append(data.author);

    div.append(autor);
    $("#pictures.container").append(div);
}

function getPic(){
    //Consumir la API
    $.ajax({
        type: 'GET',
        url: generateUrl(),
        dataType: "json",
        async: true,
        success: function(data){renderPic(data)}
    })
}

$(document).ready(function(){
    for (let i=0; i<9; i++){
        getPic();
    }
})