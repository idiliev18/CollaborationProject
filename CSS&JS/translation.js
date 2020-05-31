var translation = {

    "nav-goal": {
        'en': `Goal`,

        'bg': `Цел`
    },

    "nav-about": {
        'en': `Аbout`,

        'bg': `За нас`
    },

    "nav-contact": {
        'en': `Contact`,

        'bg': `Свържете се с нас`
    },

    "nav-home": {
        'en': `Home`,

        'bg': `Начална страница`
    },

    "contactus": {
        'en': `Contact Us`,

        'bg': `Свържете се с нас`
    },

    "misirla": {
        'en': `Our Mission`,

        'bg': `Нашата цел`
    },

    "purpose": {
        'en': `The purpose of our project is to inform people about technology inventions that changed the world in a timeline format. So that's why we wanted to create a timeline that shows a big portion of the technology inventions. `,

        'bg': `Нашата цел е да информираме хората за технологичните откритя, които са променили света във вид на линия на времето. Това е и главната причина да направим линия на времето с голяма част от технологичните открития.`
    },

    "better-design": {
        'en': `Better Design `,

        'bg': `По-добър дизайн`
    },

    "more-information": {
        'en': `More information `,

        'bg': `Повече информация`
    },

    "functionality": {
        'en': `Functionality `,

        'bg': `Функционалност`
    },

    "better-translation": {
        'en': `Better translation `,

        'bg': `По-добър превод`
    },

    "ivelin": {
        'en': `Ivelin Bachvarov (Manager) `,

        'bg': `Ивелин Бъчваров (Мениджър)`
    },

    "stoyan": {
        'en': `Stoyan Kolev (Developer) `,

        'bg': `Стоян Колев (Разработчик)`
    },

    "qnko": {
        'en': `Georgi Georgiev (Designer) `,

        'bg': `Георги Георгиев (Дизайнер)`
    },

    "dimitar": {
        'en': `Dimitar Kalchev (Developer) `,

        'bg': `Димитър Клачев (Разработчик)`
    },

    "egor": {
        'en': `Egor Semenov (Designer) `,

        'bg': `Егор Семенов (Дизайнер) `
    },

    "ivelin-text": {
        'en': `Ivelin is a manager. He organized our meetings, controlled the team and helped with making some of the pages. `,

        'bg': `Ивелин е нашият мениджър. Той оргранизира нашите срещи, контролира отбора и помага с направата на някои от страниците. `
    },

    "stoyan-text": {
        'en': `As a developer, Stoyan helped with the creating of the main page, dynamically loading card information `,

        'bg': `Като разработчик, Стоян помогна с създаването на главната страница и създавамето на динамичното зареждане на инфорацията в картите. `
    },

    "qnko-text": {
        'en': `As a designer, Georgi was telling us how the website should look and he found a lot of the information. `,

        'bg': `Като дизайнер, Георги ни казваше как да изглежда уебсайта и намери голяма част от информацията. `
    },


    "ilko-text": {
        'en': `Iliyan is a developer. He made a contact form with PHP and mySQL and helped with finding information for the timeline `,

        'bg': `Илиян е разработчик. Той направи контакт форма с PHP и mySQl и помогна с търсенето на информация за линията на времето`
    },


    "dimitar-text": {
        'en': `As a developer, he participated in making the timeline, finding information and creating the dynamically loading the information . `,

        'bg': `Като разработчик той участваше в изготвянето на линията на времето, търсенето на информация и създаването на динамичното зареждане на ифнормация. `
    },

    "egor-text": {
        'en': `Egor told us how the website should look and he wrote a bit of the HTML for the site. `,

        'bg': `Егор даваше съвети как да изглежда уебсайта и търсеше информация. `
    },

}

var currentLanguage = 'en';

function replaceElementText(item, text) {
    if (!item.is("button")) {
        item.html(text);
    } else {
        item.text(text);
    }
}

function translate(langId) {
    currentLanguage = langId;
    // Gets all tags that have 'data-lang' attribute present
    $("[data-lang]")
        .each(function() {
            let item = $(this);
            if (textTranslation.hasOwnProperty(item.data("lang")) && textTranslation[item.data("lang")].hasOwnProperty(langId)) {
                let text = textTranslation[item.data("lang")][langId];
                replaceElementText(item, text);
            } else {
                replaceElementText(item, "<font color='red'>" + item.data("lang") + "</font>");
            }
        })
};

function getTranslatedText(elementId) {
    return textTranslation[elementId][currentLanguage];
}