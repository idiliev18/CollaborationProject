$(() => {

    $(".card").fadeOut(0);

    $(".card").click(function(e) {
        e.stopPropagation();
    })

    $("body").click(function(e) {
        let card = $(".card");
        card.css({ display: "none" });
    })


    $("ul.timeline li span.flag").hover(function() {
        let item = $(this);
        let itemOffset = item.offset();

        let card = $("div.card");

        // Find parent DIV with class beginning with "direction"
        let fDivs = item.parents('div[class^="direction"]');

        // Get DIV's class
        let dClass = fDivs[0].classList[0];

        let cardLeft;

        if (dClass == "direction-l") {
            cardLeft = itemOffset.left - card.width() - 50;
        } else {
            cardLeft = itemOffset.left + item.width() + 70;
        }

        let para = card.find("div.text center p");
        let img = card.find("div.photo img");
        let readMore = card.find("div.text p.read-more a");


        if (cardText.hasOwnProperty(item.data("lang")) && cardText[item.data("lang")]['text'].hasOwnProperty(langId)) {
            let text = cardText[item.data("lang")]["text"][langId];
            let link = cardText[item.data("lang")]["photo"];

            para.text(text);
            img.attr("src", link);

            let rmLink = `details.html?item=${item.data("lang")}`;
            readMore.attr("href", rmLink);
        } else {
            para.text("No translation!");
            img.attr("src", "");
        }

        card.css({ top: itemOffset.top, left: cardLeft }).fadeIn("slow");

    }, function() {
        //let item = $(this);
        //let card = $(".card");
        //card.fadeOut(1);
        //console.log("Hover End");
        //console.log(item);
    });



});