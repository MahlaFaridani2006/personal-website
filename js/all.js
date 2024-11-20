let run = false;
$(document).scroll(function () {
    // homepage--------------------------------------------
    if (!run && document.documentElement.scrollTop < 3031 && document.documentElement.scrollTop > 2121) {
        run = true;
        let counter = 0;
        let abilityValue = setInterval(function () {
            counter++;
            if (counter == 30) {
                clearInterval(abilityValue);
            }
            $('#abilityFirst h4').text(counter + 60) && $('#abilityBoxFirst').css({"width": `${counter + 60}` + "%"});
            $('#abilitySecond h4').text(counter + 55) && $('#abilityBoxSecond').css({"width": `${counter + 55}` + "%"});
            $('#abilityThird h4').text(counter + 25) && $('#abilityBoxThird').css({"width": `${counter + 25}` + "%"})
            $('#abilityFourth h4').text(counter + 55) && $('#abilityBoxFourth').css({"width": `${counter + 55}` + "%"});
            $('#abilityFifth h4').text(counter + 10) && $('#abilityBoxFifth').css({"width": `${counter + 10}` + "%"});
            $('#abilitySix h4').text(counter + 5) && $('#abilityBoxSix').css({"width": `${counter + 5}` + "%"});

        }, 20)
        //navbar for all pages-----------------------------------

    } else if ((document.documentElement.scrollTop >= 200)) {
        $('header').removeClass('bg-black');
        $('header').addClass('fixed-top bg-dark');
    }else if (document.documentElement.scrollTop <= 200) {
        $('header').removeClass('fixed-top bg-dark');
        $('header').addClass('bg-black');
    }
})

// contact page----------------------------------------------

function getFormData(event) {
    event.preventDefault();
    let email = $('#getEmail').val();
    let data = $('#getData').val();
    let formObj = {email: email, data: data};
    console.log(formObj);
    alert('Post comment is successful');

    $('#getEmail').val('') && $('#getData').val('');
}