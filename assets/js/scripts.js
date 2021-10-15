// Utilizing selectors inside the element instead of traversing the DOM to find a specific element

// Retrieving article elements
const questions = document.querySelectorAll('.question');

// Looping article elements with forEach
questions.forEach(function(question){
    // Here you are looking through the article element with the class question instead of looking through the DOM and selecting the btn classes question-btn
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', function(){
       
        questions.forEach(function(item){
        
            if(item !== question){
            item.classList.remove('show-text');
        }
       });
       
       question.classList.toggle('show-text');
    });

});





// Second method of traversing the DOM to execute click button action

// Retrieve all question btns
// const btns = document.querySelectorAll('.question-btn');

// Executing forEach loop for multiple button classes and add click event
// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });