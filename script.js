const button=document.querySelector("button");
const main1=document.getElementById('main-id');

// main1.style.backgroundImage = 'linear-gradient(to right bottom, #3fdfd4, #00b7db, #008ce2, #005bd4, #1b15a3)';
const backgroundImage=['linear-gradient(to right bottom, #3fdfd4, #00b7db, #008ce2, #005bd4, #1b15a3)',
'linear-gradient(to right bottom, #88ffd1, #66d19f, #46a56f, #267a43, #005219)','linear-gradient(to right bottom, #ee9696, #f87c79, #fe6059, #ff3f35, #fc0000)','linear-gradient(to right bottom, #83f38e, #6ff679, #59f860, #3efa41, #03fc00)'];

button.addEventListener('click', colorchanger);

function colorchanger(){
    const changeindex = parseInt(Math.random() * backgroundImage.length);
    main1.style.backgroundImage=backgroundImage[changeindex];
    
}