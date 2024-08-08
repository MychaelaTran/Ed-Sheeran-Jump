document.addEventListener('DOMContentLoaded', function() {
    const chooseEdBut = document.getElementById('chooseEd') 
    const divCharSelection = document.getElementById('selectEd')
    const character = document.querySelector('.character')
    const home2But = document.getElementById('home2')
    const annie = document.getElementById('selAnnie')
    const ginger = document.getElementById('selGinger')
    const panda = document.getElementById('selPanda')
    const heart = document.getElementById('selHeart')

    function selectedChar() {
        // Hide all buttons initially
        annieBut.style.display = 'none';
        edHeartBut.style.display = 'none';
        gingerBut.style.display = 'none';
        pandaBut.style.display = 'none';
    
        const bgImage = character.style.backgroundImage;
    
        if (bgImage.includes('annie.png')) {
            annieBut.style.display = 'block';
        } else if (bgImage.includes('edHeart.png')) {
            edHeartBut.style.display = 'block';
        } else if (bgImage.includes('character.png')) {
            gingerBut.style.display = 'block';
        } 
        else if(bgImage.includes('panda.png')) {
            pandaBut.style.display = 'block';
        } 
    }
    
    

    const ogCharacterCSS = {
        backgroundImage: 'url("character.png")',
        height: '300px',
        width: '275px',
        position: 'absolute',
        top: '-130px',
        transform: 'scale(0.67)'
    }

    function resetCharacterCSS(){ //this is so when changing the char values for each characer, we are changing them from the same values and it stays constatnt
        character.style.height = ogCharacterCSS.height
        character.style.width = ogCharacterCSS.width
        character.style.top = ogCharacterCSS.top
        character.style.transform = ogCharacterCSS.transform
        character.style.display = 'block';
        character.style.left = 'auto'
        character.style.right = 'auto'
        character.style.bottom = 'auto'
        fallHeight = -135
        jumpHeight = 55

       

    }

    chooseEdBut.addEventListener('click', function(){
        startScreen.style.display = 'none'
        divCharSelection.style.display = 'block'
        home2But.style.display = 'block'
    })

    home2But.addEventListener('click', function(){
        divCharSelection.style.display = 'none'
        startScreen.style.display = 'flex'
    })

    annie.addEventListener('click', function(){
        resetCharacterCSS()
        character.style.backgroundImage = 'url("annie.png")'
        character.style.height = '400px'
        character.style.transform ='scale(0.6)'
        character.style.top = '-200px'
        fallHeight = -210
        jumpHeight = 60
        selectedChar()
    
    })

    panda.addEventListener('click', function(){
        resetCharacterCSS()
        character.style.backgroundImage = 'url("panda.png")'
        character.style.transform = 'scale(1.05)'
        character.style.width = '180px'
        character.style.left = '50px'
        selectedChar()
        
    
    })

    ginger.addEventListener('click', function(){
        resetCharacterCSS()
        character.style.backgroundImage = 'url("character.png")'
        selectedChar()
    
    })

    heart.addEventListener('click', function(){
        resetCharacterCSS()
        character.style.backgroundImage = 'url("edHeart.png")'
        character.style.height = '680px'
        character.style.transform = 'scale(0.4)'
        character.style.top = '-350px'
        fallHeight = -350
        jumpHeight = 70
        selectedChar()
    })
    


})