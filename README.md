Psuedo code lets gooooooo

    Create front end 

Navbar component {

clicky game text that when clicked triggers a new game

text to tell user how to start game 

score and top score divs displaying score


    }

    Body component {


        backround image containig text explaining how to play the game

        12 images
    }

    functionality 

    create array of images


    map the array to display all the images

add state object that has a clicked boolean, when game starts all clicked will be false, clicked turns into true if any image is clicked, if any image with clicked true is clicked again the game is over and the state is reset. compare current score to top score and keep that largest number

    onClick function{

        randomize array
        keep score
        if correct show correct if not show opposite
        for top score in the function handling the increment check if the variable that has the new top score is greater than the top score in the state then update it with the new number
    }# reactmemorygame
