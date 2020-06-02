$(function() {

    let url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    console.log(url);

    let params = url[0].split('=');
    console.log(params[1]);

    $(".translate-button").on("click", function() {
        console.log("keks");
        translate1($(this).data("lng"), params[1]);
        translate($(this).data("lng"));
    });


    let title = cardText[params[1]]["details"][langId].title;
    let photoUrl = cardText[params[1]].photo;
    let inventor = cardText[params[1]]["details"][langId].createdBy;
    let invented = cardText[params[1]]["details"][langId].howInvented;
    let howUsed = cardText[params[1]]["details"][langId].howUsed;

    console.log(inventor);

    let titleObj = $("div.title h1");
    titleObj.text(title);

    let photoObj = $("div.photo img");
    photoObj.attr("src", photoUrl);

    let inventorObj = $("div.createdBy p");
    inventorObj.text(inventor);

    let howInventedObj = $("div.howInvented p");
    howInventedObj.text(invented);

    let howUsedObj = $("div.howUsed p");
    howUsedObj.text(howUsed);

});

function replaceElementText1(item, text) {
    if (!item.is("button")) {
        item.html(text);
    } else {
        item.text(text);
    }
}

function translate1(langId, cat) {
    currentLanguage = langId;

    // Gets all tags that have 'data-lang' attribute present
    $("[data-lang1]")
        .each(function() {
            let item = $(this);
            if (cardText.hasOwnProperty(cat) && cardText[cat].details.hasOwnProperty(langId)) {
                let text = cardText[cat].details[langId][item.data("lang1")];
                replaceElementText1(item, text);
            } else {
                replaceElementText1(item, "<font color='red'>" + item.data("lang1") + "</font>");
            }
        })
};

function getTranslatedText(elementId) {
    return cardText[elementId][currentLanguage];
}