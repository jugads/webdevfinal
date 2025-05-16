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
document.getElementsByTagName("select")[0].addEventListener('change',
    changeJerseys()
);

class Jersey {
    constructor(country, name, abb, imgSrc) {
        this.country = country;
        this.name = name;
        this.abb = abb;
        this.imgSrc = imgSrc;
    }
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

var maps = {
    "🏴󠁧󠁢󠁥󠁮󠁧󠁿":"England",
    "🇫🇷":"France",
    "🇮🇹":"Italy",
    "🇩🇪":"Germany",
    "🇪🇸":"Spain"
}
var englandTeams = [
    new Jersey('England', 'Liverpool', 'liv', 'images/liverpool.png'),
    new Jersey('England', 'Manchester City', 'mci', 'images/mci.png'),
    new Jersey('England', 'Arsenal FC', 'ars', 'images/ars.png'),
    new Jersey('England', 'Newcastle United', 'nu', 'images/nu.png'),
    new Jersey('England', 'Manchester United', 'mu', 'images/mu.png'),
    new Jersey('England', 'Liverpool', 'liv', 'images/liverpool.png'),
    new Jersey('England', 'Liverpool', 'liv', 'images/liverpool.png'),
    new Jersey('England', 'Liverpool', 'liv', 'images/liverpool.png'),
    new Jersey('England', 'Liverpool', 'liv', 'images/liverpool.png')
]
function changeJerseys() {
    var country = document.getElementsByTagName('select')[0].value;
    switch (maps.country) {
        case ('Germany'):
            
    }
}