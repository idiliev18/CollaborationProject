$(function() {
    let url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    console.log(url);

    let params = url[0].split('=');
    console.log(params[1]);

    let title = cardText[params[1]]["details"][langId].title;
    let photoUrl = cardText[params[1]].photo;
    let inventor = cardText[params[1]]["details"][langId].createdBy;
    let invented = cardText[params[1]]["details"][langId].howInvented;
    let howUsed = cardText[params[1]]["details"][langId].howUsed;
    console.log(title);

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