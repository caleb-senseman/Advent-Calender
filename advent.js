// this array will keep track of the days that have been opened
let daysOpened = JSON.parse(localStorage.getItem('clickedDays'));

let icons = [
    '&#x1F6F7;',
    '&#x1F328;',
    '&#x1F43B;',
    '&#x1F332;',
    '&#x1F381;',
    '&#x1F936;',
    '&#x1F9E4;',
    '&#x1F9E3;',
    '&#x1F976;',
    '&#x1F31F;',
    '&#x26F8;',
    '&#x1F36A;',
    '&#x1F98C;',
    '&#x1F3C2;',
    '&#x26F7;',
    '&#x1F3BF;',
    '&#x1F3D2;',
    '&#x1F514;',
    '&#x1F6CF;',
    '&#x1F385;',
    '&#x1F3BF;',
    '&#x1F56F;',
    '&#x26c4;'
  ];

icons = randomizeIcons(icons);
// variable to hold ALL the boxes for the days on the calender
const boxes = document.querySelectorAll('.num');
// this function will run when we click on a box
function handleBoxClick(event){
  const clickedBox = event.currentTarget.dataset.day;
  const today = new Date()

if(today.getDate() >= Number(clickedBox)){
  // show the emoji for the day
  console.log(icons[Number(clickedBox)]);
  const day = event.currentTarget;
  day.innerHTML = icons[Number(clickedBox)];


} else {
  console.log('No peaking, You can NOT open me yet!');
    }

}

// add event listener to each and every box
boxes.forEach(function(box){
box.addEventListener('click', handleBoxClick);
});



function storeClickedBoxes(day){
  // add the clicked box to local storage
  // first check to see if there are clickedDays exists in localStorage
  if (!localStorage.getItem('daysClicked')){
    daysOpened = [];
  }else {
    daysOpened = JSON.parse(localStorage.getItem('daysClicked'));
  } if (!daysOpened.includes(day)){
    daysOpened.push(day);
  }
  localStorage.setItem('daysClicked', JSON.stringify(daysOpened));
console.log(daysOpened);

}



function randomizeIcons(oldList){
  let randomList = [];
  if(!localStorage.getItem('icons')){
    while(oldList.length > 0){
      const index = Math.floor(Math.random()*oldList.length);
      randomList.push(oldList[index]);
      oldList.splice(index, 1);
    }
    localStorage.setItem('icons', JSON.stringify(randomList));
  }else{
    randomList = JSON.parse(localStorage.getItem('icons'));
  }
return randomList;
}

showClickedBoxes();

function showClickedBoxes(){
  if(daysOpened !== null){
    boxes.forEach(function (box){
      const day = Number(box.dataset.day);
      if(daysOpened.includes(day)){
        box.innerHTML = icons[day];
      }
    });
  }
}
//TODO  ----->

function resetCalender(){
// only reset if they say yes to a prompt
const answer = confirm('Are you sure you want to reset the calender? This action cannot be undone.');
if(answer){
  localStorage.clear();

  document.location.reload();
  }
} // end of resetCalender


//Add reset button to the bottom of the calender
//create button element
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset Calender';
//add an addEventListener to call resetCalender
resetButton.addEventListener('click', resetCalender);

// place the button on the page
// grab the footer
const footer = document.querySelector('footer');
//add the button to the footer after the opening footer tag
footer.insertAdjacentElement('afterbegin',resetButton);
// afterbegin, beforebegin, beforeend, afterend

// add a little style
footer.style.textAlign = 'center';
footer.style.paddingTop = '20px';
