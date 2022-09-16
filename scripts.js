const arr = [
  {
    id: '1',
    mobilestatus: 'shown',
    image: './images/plceholderspeakerimg.png',
    name: 'Yochai Benkler',
    jobs: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    text: 'Benkler studies commons-based peer productions, and published his seminal book The Wealth of Network in 2006.',
  },
  {
    id: '2',
    mobilestatus: 'shown',
    image: './images/speaker2.png',
    name: 'SohYeong Noh',
    jobs: 'Director of Art Centre Nabi and a board member of CC Korea',
    text: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
  },
  {
    id: '3',
    mobilestatus: 'hidden',
    image: './images/speaker3.png',
    name: 'Lila Tretikov',
    jobs: 'Executive Director of the Wikimedia Foundation',
    text: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    id: '4',
    mobilestatus: 'hidden',
    image: './images/speaker4.png',
    name: 'Kilnam Chon',
    jobs: '',
    text: "Kilnam Chon is help to bring the internet to Asia and is an outspoken advocate for the open web and digital commons. in 2012 he was inducted into the inaugural class of the Internet Society's (ISOC) Internet Hall of Fame",
  },
  {
    id: '5',
    mobilestatus: 'hidden',
    image: './images/speaker5.png',
    name: 'Julia Leda',
    jobs: 'President of Young Pirates of Europe',
    text: "European integration, political democracy and participation of youth trough online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    id: '6',
    mobilestatus: 'hidden',
    image: './images/speaker6.png',
    name: 'Ryan Merkley',
    jobs: 'CEO of Creative Commons, ex COO of the Mozilla foundation',
    text: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
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
  if (more.innerHTML === 'MORE <i id="arrow" class="fa-solid fa-greater-than"></i>') {
    more.innerHTML = 'LESS <i id="arrow" class="fa-solid fa-greater-than" style="transform: rotate(-90deg)"></i>';
    arrow.style.transform = 'rotate(90deg)';
  } else {
    more.innerHTML = 'MORE <i id="arrow" class="fa-solid fa-greater-than"></i>';
  }
}

more.addEventListener('click', () => {
  moreCards();
  buttonChanger();
});