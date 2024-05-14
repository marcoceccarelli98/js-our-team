'use strict';

const myTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
    }
];

for (let i = 0; i < myTeam.length; i++) {
    //create elements
    const elementContainer = document.querySelector('.container');
    const card = document.createElement('div');
    const name = document.createElement('h1');
    const role = document.createElement('h2');
    const img = document.createElement('img');

    //add class card
    card.classList.add('card');
    //fill name label
    name.innerText = myTeam[i].name;
    //fill role label
    role.innerText = myTeam[i].role;
    //fill img label
    img.src = './img/' + myTeam[i].img;

    //append elements to card
    card.append(name);
    card.append(role);
    card.append(img);

    //append card to container
    elementContainer.append(card);

    // console.log(myTeam[i].name);
    // console.log(myTeam[i].role);
    // console.log(myTeam[i].img);
}


