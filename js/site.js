$(document).ready(function() { // run when the whole site is loaded

    translateLabel("en");

    $(".translate-button").on("click", function() {
        console.log("keks");
        translateLabel($(this).data("lng"));
    });


    // select all 'a' atributes that contain in their href '#'
    $('a.InfoButton').on('click', function(e) {

        // Prevent event bubling (i.e. the browser will not add #element_id in address bar)
        e.preventDefault();

        // Scroll the page to the selected element
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 400, 'linear');
    });

    $('#myBtn').on('click', function(e) {

        // Prevent event bubling (i.e. the browser will not add #element_id in address bar)
        e.preventDefault();

        // Scroll the page to the selected element
        $('html, body').animate({ scrollTop: $($("body")).offset().top }, 300, 'linear');
    });

});

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

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

        let para = card.find("div.text p.details");
        let img = card.find("div.photo img");
        let readMore = card.find("div.text p.read-more a");

        console.log("Hover");
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