function init(){
    let guesses = 0;
    // Accessing elements using document.querySelector
    const guess_form = document.querySelector('#guess-form');
    const guess_input = document.querySelector('#guess_number');
    const random = document.querySelector('.random');

    const success_div = document.querySelector('#success');
    const fail_div = document.querySelector('#fail')

    const random_number = Math.round(Math.random() * 10);
    random.innerText = random_number;

    // Event Listener Start
    guess_form.addEventListener("submit", function(e){
        e.preventDefault();
        const guess_value = parseInt(guess_input.value);
        guesses++;
        if(guess_value === random_number){
            guess_form.style.display = 'none';
            success_div.style.display = 'block';
            gtag("event", "week2_guessgame_win");
        }

        else if(guess_value !== random_number && guesses === 3){
            guess_form.style.display = 'none';
            fail_div.style.display = 'block';
            gtag("event", "week2_guessgame_loss");
        }
    
    });
    // Event Listener End
}

init();


