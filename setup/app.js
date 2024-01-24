// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Haerin',
    job: 'Cat🐱',
    img: 'https://preview.redd.it/240113-newjeans-phoning-photo-update-with-haerin-v0-72prfey955cc1.jpg?width=1080&crop=smart&auto=webp&s=514b37b634b355215e9258dee6bf68ae783d171f',
    text: "Haerin (해린)",
  },
  {
    id: 2,
    name: 'Minji',
    job: 'Bear🐻',
    img: 'https://i.redd.it/207cuva7hcka1.jpg',
    text: 'Minji (민지)',
  },
  {
    id: 3,
    name: 'Hyein',
    job: 'Chick🐣',
    img: 'https://static.wikia.nocookie.net/witchers/images/3/3e/Hyein_Super_Shy_Concept_Photo_%281%29.jpg/revision/latest?cb=20230707151603',
    text: 'Hyein (혜인)',
  },
  {
    id: 4,
    name: 'Hanni',
    job: 'Rabbit🐰 ',
    img: 'https://static.wikia.nocookie.net/kpop/images/4/4a/NewJeans_Hanni_OMG_concept_photo_%281%29.png/revision/latest/scale-to-width-down/333?cb=20230116012320',
    text: 'Hanni (하니)',
  },
  {
    id: 5,
    name: 'Danielle',
    job: ' Dog🐶/ Sunflower 🌻',
    img: 'https://static.wikia.nocookie.net/witchers/images/4/40/Danielle_Super_Shy_Concept_Photo_%281%29.jpg/revision/latest?cb=20230707145047',
    text: 'Danielle (다니엘)',
  }
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const startBtn = document.querySelector('.start-btn')
const endBtn = document.querySelector('.end-btn');
 
// set starting item
let currentItem = 0;
 
// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});
 
// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');
 
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

// show start person
startBtn.addEventListener('click', function () {
  console.log('start');
  currentItem = 0;
  showPerson(currentItem);
});

// show end person
endBtn.addEventListener('click', function () {
  currentItem = reviews.length - 1;
  showPerson(currentItem);
});