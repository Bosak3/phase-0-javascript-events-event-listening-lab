
// const input = document.getElementById("input");
// const mainClick = document.getElementById('main');
// // const newDiv = document.createElement('div');

// const addEventListener = ('click', () => {
//     alert('I was clicked')
// })


// input.addEventListener('click', addEventListener);

// function addEventListener (){

//         alert('I was click!');
    
// }

// mainClick.addEventListener('click', addEventListener)

// document.body.append(newDiv);

// newDiv.id = ('newNew')
// newDiv.textContent = ('Click me!')

// newDiv.addEventListener('click', addEventListener)

function addingEventListener(){
    const input = document.getElementById('input')
    input.addEventListener('click', () => {
        alert('I was clicked')
    })
}

addingEventListener();