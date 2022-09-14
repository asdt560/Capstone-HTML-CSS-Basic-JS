const arr = [
  {
    id: '1',
    mobilestatus: 'shown',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person 1',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '2',
    mobilestatus: 'shown',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person 2',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '3',
    mobilestatus: 'hidden',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person 3',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '4',
    mobilestatus: 'hidden',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person 4',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '5',
    mobilestatus: 'hidden',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person 5',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '6',
    mobilestatus: 'hidden',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person 6',
    jobs: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
];

const cardholder = document.getElementById('speakercontainer');

arr.forEach((item) => {
  cardholder.innerHTML += `<div class="card" id=${item.mobilestatus}>
  <img class="cardimage" src=${item.image}>
  <div class="cardtext">
      <h3 class="cardtitle">${item.name}</h3>
      <p class="cardsubtitle">${item.jobs}</p>
      <span class="carddivider"></span>
      <p class="cardblurb">${item.text}</p>
  </div>
</div>`;
});

const menu = document.querySelector('.curtainmenu');
console.log(menu);

function menuClose() {
  menu.style.display = 'none';
}

function menuOpen() {
  menu.style.display = 'flex';
}

const closer = document.querySelector('#closebutton');
console.log(closer);

closer.addEventListener('click', menuClose);

const opener = document.querySelector('#mobilemenubutton');

opener.addEventListener('click', menuOpen);

const hiddencards = document.querySelectorAll('#hidden');
console.log(hiddencards);

const more = document.querySelector('#morebutton');

function moreCards() {
  hiddencards.forEach((card) => {
    if (card.id === 'hidden') {
      card.id = 'shown';
    } else {
      card.id = 'hidden';
    }
  });
}

const arrow = document.querySelector('#arrow');
console.log(arrow);

function buttonChanger() {
  if (more.innerHTML === 'MORE <i id="arrow" class="fa-solid fa-greater-than">') {
    more.innerHTML = 'LESS <i id="arrow" class="fa-solid fa-greater-than">';
    const transformvalue = 'rotate(270deg)';
    arrow.style.transform = transformvalue;
  }
}

more.addEventListener('click', () => {
  moreCards();
  buttonChanger();
});