const cards = [
    {
        title: 'Card 1',
    },
    {
        title: 'Card 2',
    },
    {
        title: 'Card 3',
    },
    {
        title: 'Card 4',
    },
    {
        title: 'Card 5',
    },
    {
        title: 'Card 6',
    },
    {
        title: 'Card 7',
    },
    {
        title: 'Card 8',
    },
    {
        title: 'Card 9',
    },
    {
        title: 'Card 10',
    },
    {
        title: 'Card 11',
    },
    {
        title: 'Card 12',
    },
    {
        title: 'Card 13',
    },
    {
        title: 'Card 14',
    },
    {
        title: 'Card 15',
    },
    {
        title: 'Card 16',
    },
    {
        title: 'Card 17',
    },
    {
        title: 'Card 18',
    },
    {
        title: 'Card 19',
    },
    {
        title: 'Card 20',
    },
    {
        title: 'Card 21',
    },
    {
        title: 'Card 22',
    },
    {
        title: 'Card 23',
    },
    {
        title: 'Card 24',
    },
    {
        title: 'Card 25',
    },
    {
        title: 'Card 26',
    },
    {
        title: 'Card 27',
    },
    {
        title: 'Card 28',
    },
    {
        title: 'Card 29',
    },
    {
        title: 'Card 30',
    },
    {
        title: 'Card 31',
    },
    {
        title: 'Card 32',
    },
    {
        title: 'Card 33',
    },
    {
        title: 'Card 34',
    },
    {
        title: 'Card 35',
    },
    {
        title: 'Card 36',
    },
    {
        title: 'Card 37',
    },
    {
        title: 'Card 38',
    },
    {
        title: 'Card 39',
    },
    {
        title: 'Card 40',
    },
    {
        title: 'Card 41',
    },
    {
        title: 'Card 42',
    }
];


const mainContainer = document.getElementById('main-container');

cards.map((card) => {
    mainContainer.innerHTML += `<div class="w-full md:w-[25%] h-96 p-5">
    <div class="bg-slate-300 w-full h-full flex justify-center items-center">
        ${card.title}
    </div>
</div>`;
});