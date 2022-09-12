const arr = [
  {
    id: '1',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '2',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '3',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '4',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '5',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person',
    jobs: 'Professional experience and positions',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
  {
    id: '6',
    image: './images/plceholderspeakerimg.png',
    name: 'Name Person',
    jobs: '',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque optio, hic natus commodi labore aliquid?',
  },
];

const cardholder = document.getElementById('speakercontainer');

arr.forEach((item) => {
  cardholder.innerHTML += `<div class="card">
  <img class="cardimage" src=${item.image}>
  <div class="cardtext">
      <h3 class="cardtitle">${item.name}</h3>
      <p class="cardsubtitle">${item.jobs}</p>
      <span class="carddivider"></span>
      <p class="cardblurb">${item.text}</p>
  </div>
</div>`;
});