document.addEventListener('DOMContentLoaded', function() {
    const chooseEdBut = document.getElementById('chooseEd') 
    const divCharSelection = document.getElementById('selectEd')
    const character = document.querySelector('.character')
    const home2But = document.getElementById('home2')
    const annie = document.getElementById('selAnnie')
    const ginger = document.getElementById('selGinger')
    const panda = document.getElementById('selPanda')
    const heart = document.getElementById('selHeart')


    chooseEdBut.addEventListener('click', function(){
        startScreen.style.display = 'none'
        selectEd.style.display = 'block'
        home2But.style.display = 'block'
    })

    home2But.addEventListener('click', function(){
        divCharSelection.style.display = 'none'
        startScreen.style.display = 'flex'
    })

    annie.addEventListener('click', function(){
        character.style.backgroundImage = 'url("annie.png")'
        character.style.height = '400px'
        character.style.transform ='scale(0.6)'
        character.style.top = '-200px'
        fallHeight = -210
        jumpHeight = 60
    
    })


})