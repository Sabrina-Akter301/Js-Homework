const cursor = document.querySelector('.cursor')
const cursorSm = document.querySelector('.cursorSm')

const customMouseCursor = (event) => {

    const  {pageX: left, pageY: top} = event;
    console.log(top);
    
    cursor.style.top = top+'px'
    cursor.style.left = left+'px'
    cursorSm.style.top = top+'px'
    cursorSm.style.left = left+'px'
    
    
}


window.addEventListener('mousemove', customMouseCursor)