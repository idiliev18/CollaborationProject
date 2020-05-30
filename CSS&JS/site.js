
$(() => {

    $(".card").fadeOut(0);

    $(".card").click(function(e) {        
        e.stopPropagation();
    })

    $("body").click(function(e) {        
        let card = $(".card");
        card.css({ display: "none" });
    })
    
    
    $("ul.timeline li span.flag").hover(function(){
        let item = $(this);
        let itemOffset = item.offset();

        let card = $("div.card");
        
        // Find parent DIV with class beginning with "direction"
        let fDivs = item.parents('div[class^="direction"]');      
                
        // Get DIV's class
        let dClass = fDivs[0].classList[0];
                   
        let cardLeft;   
        
        if (dClass == "direction-l"){
            cardLeft = itemOffset.left - card.width() - 50;
        } else {
            cardLeft = itemOffset.left + item.width() + 70;
        }
        
        card.css({ top: itemOffset.top, left: cardLeft }).fadeIn("slow");
        
    }, function(){
        //let item = $(this);
        //let card = $(".card");
        //card.fadeOut(1);
        //console.log("Hover End");
        //console.log(item);
    });



});