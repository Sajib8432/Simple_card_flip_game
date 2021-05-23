
document.addEventListener("DOMContentLoaded", () => {
    // card options

    const cardarry = [
        {
            name: 'woman',
            img: './imges/adult-beautiful-blonde-blur-324658.jpg'
        },
        {
            name: 'burger',
            img: './imges/close-up-photo-of-a-cheese-burger-1633578.jpg'
        },
        {
            name: 'sweet',
            img: './imges/food-red-sweet-raw-35629.jpg'
        },
        {
            name: 'grape',
            img: './imges/grape-fruits-708777.jpg'
        },
        {
            name: 'pinapple',
            img: './imges/green-pineapple-fruit-with-brown-framed-sunglasses-beside-1161547.jpg'
        },
        {
            name: 'apple',
            img: './imges/healthy-apple-fruits-natural-102104.jpg'
        },
        {
            name: 'woman',
            img: './imges/adult-beautiful-blonde-blur-324658.jpg'
        },
        {
            name: 'burger',
            img: './imges/close-up-photo-of-a-cheese-burger-1633578.jpg'
        },
        {
            name: 'sweet',
            img: './imges/food-red-sweet-raw-35629.jpg'
        },
        {
            name: 'grape',
            img: './imges/grape-fruits-708777.jpg'
        },
        {
            name: 'pinapple',
            img: './imges/green-pineapple-fruit-with-brown-framed-sunglasses-beside-1161547.jpg'
        },
        {
            name: 'apple',
            img: './imges/healthy-apple-fruits-natural-102104.jpg'
        },
        {
            name: 'strabarry',
            img: './imges/macro-photography-of-strawberry-934066.jpg'
        },
        {
            name: 'coconut',
            img: './imges/plant-coconut-tree-coconut-60713.jpg'
        },
        {
            name: 'dish',
            img: './imges/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545.jpg'
        },
        {
            name: 'cheese',
            img: './imges/baking-cheese-cooking-crust-315755.jpg'
        },
        {
            name: 'cream',
            img: './imges/white-cream-on-white-bowl-1633525.jpg'
        },
        {
            name: 'dinner',
            img: './imges/food-dinner-lunch-unhealthy-70497.jpg'
        },
        {
            name: 'strabarry',
            img: './imges/macro-photography-of-strawberry-934066.jpg'
        },
        {
            name: 'coconut',
            img: './imges/plant-coconut-tree-coconut-60713.jpg'
        },
        {
            name: 'dish',
            img: './imges/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545.jpg'
        },
        {
            name: 'cheese',
            img: './imges/baking-cheese-cooking-crust-315755.jpg'
        },
        {
            name: 'cream',
            img: './imges/white-cream-on-white-bowl-1633525.jpg'
        },
        {
            name: 'dinner',
            img: './imges/food-dinner-lunch-unhealthy-70497.jpg'
        }
    ]

    cardarry.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardChosen = [];
    var cardChosenId = [];
    var cardsWon = [];

    // creting board
    function creatBoard() {
        for (let i = 0; i < cardarry.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'imges/blnk.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // check for match

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardChosenId[0];
        const optionTwoId = cardChosenId[1];
        if (cardChosen[0] === cardChosen[1]) {
            cards[optionOneId].setAttribute('src', 'imges/white.jpg');
            cards[optionTwoId].setAttribute('src', 'imges/white.jpg');
            cardsWon.push(cardChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'imges/blnk.jpg');
            cards[optionTwoId].setAttribute('src', 'imges/blnk.jpg');
        }
        cardChosen = [];
        cardChosenId = [];
        resultDisplay.textContent = cardsWon.length * 50;

        if (cardsWon.length === cardarry.length / 2) {
            resultDisplay.textContent = 'You Won The Game';
        }
    }

    // flip card

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardChosen.push(cardarry[cardId].name);
        cardChosenId.push(cardId);
        this.setAttribute('src', cardarry[cardId].img);
        if (cardChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    creatBoard();
});