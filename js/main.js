// Individual "Shop Now" button listeners (static jerseys in Best Sellers section)
document.getElementsByClassName('shopnow')[0].addEventListener('click', function() {
    window.open('https://liverpoolfc.com')
});
document.getElementsByClassName('shopnow')[1].addEventListener('click', function() {
    window.open('https://mancity.com')
});
document.getElementsByClassName('shopnow')[2].addEventListener('click', function() {
    window.open('https://inter.it')
});
document.getElementsByClassName('shopnow')[3].addEventListener('click', function() {
    window.open('https://realmadrid.com')
});
document.getElementsByClassName('shopnow')[4].addEventListener('click', function() {
    window.open('https://fcbayern.com')
});

// Individual "Add to Cart" button listeners (static jerseys in Best Sellers section)
document.getElementsByClassName('addtocart')[0].addEventListener('click', function() {
    localStorage.setItem('cart', localStorage.getItem('cart') + 'liv-$74.99 ');
    document.getElementsByClassName('addtocart')[0].textContent = "Added to Cart!";
    document.getElementsByClassName('addtocart')[0].style.backgroundColor = "green";
});
document.getElementsByClassName('addtocart')[1].addEventListener('click', function() {
    localStorage.setItem('cart', localStorage.getItem('cart') + 'mci-$74.99 ');
    document.getElementsByClassName('addtocart')[1].textContent = "Added to Cart!";
    document.getElementsByClassName('addtocart')[1].style.backgroundColor = "green";
});
document.getElementsByClassName('addtocart')[2].addEventListener('click', function() {
    localStorage.setItem('cart', localStorage.getItem('cart') + 'int-$89.99 ');
    document.getElementsByClassName('addtocart')[2].textContent = "Added to Cart!";
    document.getElementsByClassName('addtocart')[2].style.backgroundColor = "green";
});
document.getElementsByClassName('addtocart')[3].addEventListener('click', function() {
    localStorage.setItem('cart', localStorage.getItem('cart') + 'rma-$104.99 ');
    document.getElementsByClassName('addtocart')[3].textContent = "Added to Cart!";
    document.getElementsByClassName('addtocart')[3].style.backgroundColor = "green";
});
document.getElementsByClassName('addtocart')[4].addEventListener('click', function() {
    localStorage.setItem('cart', localStorage.getItem('cart') + 'bay-$74.99 ');
    document.getElementsByClassName('addtocart')[4].textContent = "Added to Cart!";
    document.getElementsByClassName('addtocart')[4].style.backgroundColor = "green";
});

// Jersey class for reusable data objects
class Jersey {
    constructor(country, name, abb, imgSrc, color, websiteURL) {
        this.country = country;
        this.name = name;
        this.abb = abb;
        this.imgSrc = imgSrc;
        this.color = color;
        this.websiteURL = websiteURL;
    }

    // Getter methods
    fetchCountry() {
        return this.country;
    }
    fetchAbb() {
        return this.abb;
    }
    fetchName() {
        return this.name;
    }
    fetchSrc() {
        return this.imgSrc;
    }
}

// Jersey team arrays by country
const englandTeams = [
    new Jersey('England', 'Liverpool', 'liv', 'images/liverpool.png', 'maroon', 'liverpoolfc.com'),
    new Jersey('England', 'Manchester City', 'mci', 'images/mci.png', 'skyblue', 'mancity.com'),
    new Jersey('England', 'Arsenal FC', 'ars', 'images/ars.png', 'red', 'arsenal.com'),
    new Jersey('England', 'Newcastle United', 'new', 'images/new.png', 'black', 'newcastleunited.com'),
    new Jersey('England', 'Manchester United', 'mun', 'images/mun.png', 'red', 'manutd.com')
];

const spainTeams = [
    new Jersey('Spain', 'FC Real Madrid', 'rma', 'images/rma.png', 'black', 'realmadrid.com'),
    new Jersey('Spain', 'FC Barcelona', 'bar', 'images/bar.png', 'purple', 'fcbarcelona.com'),
    new Jersey('Spain', 'Atletico de Madrid', 'ama', 'images/ama.png', 'red', 'en.atleticodemadrid.com'),
    new Jersey('Spain', 'Sevilla FC', 'sev', 'images/sev.png', 'maroon', 'sevillafc.es'),
    new Jersey('Spain', 'Real Betis', 'bet', 'images/bet.png', 'green', 'en.realbetisbalompie.es')
];

const franceTeams = [
    new Jersey('France', 'Paris Saint-Germain', 'psg', 'images/psg.png', 'navy', 'psg.fr'),
    new Jersey('France', 'Olympique Marseille', 'mar', 'images/mar.png', 'skyblue', 'om.fr'),
    new Jersey('France', 'Olympique Lyonnais', 'lyo', 'images/lyo.png', 'blue', 'ol.fr'),
    new Jersey('France', 'AS Monaco', 'asm', 'images/asm.png', 'red', 'asmonaco.com'),
    new Jersey('France', 'Lille OSC', 'los', 'images/losc.png', 'red', 'losc.fr')
];

const italyTeams = [
    new Jersey('Italy', 'Juventus', 'juv', 'images/juv.png', 'black', 'juventus.com'),
    new Jersey('Italy', 'AC Milan', 'acm', 'images/acm.png', 'red', 'acmilan.com'),
    new Jersey('Italy', 'Inter Milan', 'int', 'images/int.png', 'darkblue', 'inter.it'),
    new Jersey('Italy', 'AS Roma', 'rom', 'images/rom.png', 'maroon', 'asroma.com'),
    new Jersey('Italy', 'Napoli', 'nap', 'images/nap.png', 'skyblue', 'sscnapoli.it')
];

const germanyTeams = [
    new Jersey('Germany', 'Bayern Munich', 'bay', 'images/bay.png', 'red', 'fcbayern.com'),
    new Jersey('Germany', 'Borussia Dortmund', 'bvb', 'images/bvb.png', 'gold', 'bvb.de'),
    new Jersey('Germany', 'RB Leipzig', 'rbl', 'images/rbl.png', 'maroon', 'dierotenbullen.com'),
    new Jersey('Germany', 'Bayer Leverkusen', 'b04', 'images/b04.png', 'red', 'bayer04.de'),
    new Jersey('Germany', 'Eintracht Frankfurt', 'sge', 'images/sge.png', 'black', 'eintracht.de')
];
console.log(localStorage.getItem('cart'))
// Updates the 5 cards in the "Shop by Country" section based on selected country
function changeJerseys() {
    var country = document.getElementsByTagName('select')[0].value;
    console.log("clicked");

    let teamList;

    // Get the correct country array
    if (country == "England") teamList = englandTeams;
    else if (country == "Spain") teamList = spainTeams;
    else if (country == "France") teamList = franceTeams;
    else if (country == "Italy") teamList = italyTeams;
    else if (country == "Germany") teamList = germanyTeams;

    // Populate the card UI with selected teams
    for (let i = 1; i < 6; i++) {
        var team = teamList[i - 1];
        setCard(i, team.name, team.abb, team.color, team.websiteURL);
    }
}

// Updates a single card with jersey data (image, name, buttons)
function setCard(id, name, abb, color, siteURL) {
    var card = document.getElementById('card-' + id);

    // Set image and name
    document.getElementById('image-' + id).src = 'images/' + abb + '.png';
    card.querySelector('h3').innerHTML = name;
    card.querySelector('h3').style.color = color;

    // Reset and bind Shop Now button
    var oldButton = card.querySelector('.shopnow');
    var newButton = oldButton.cloneNode(true); // shallow clone
    oldButton.parentNode.replaceChild(newButton, oldButton);
    newButton.addEventListener('click', function () {
        window.open('https://' + siteURL);
    });

    // Reset and bind Add to Cart button
    var oldCartButton = card.querySelector('.addtocart');
    var newCartButton = oldCartButton.cloneNode(true);
    oldCartButton.parentNode.replaceChild(newCartButton, oldCartButton);
    newCartButton.addEventListener('click', function () {
        if (localStorage.getItem('cart') == '') {
            localStorage.setItem('cart', '')
        }
        localStorage.setItem('cart', localStorage.getItem('cart') + abb + '-' + card.querySelector('.cost').innerHTML + ' ');
        console.log(localStorage.getItem('cart'));
        newCartButton.textContent = "Added to Cart!";
        newCartButton.style.backgroundColor = "green";
    });
}

// Automatically populate jerseys on first load
window.addEventListener('DOMContentLoaded', changeJerseys);