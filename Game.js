let fallHeight = -135
let jumpHeight = 55
document.addEventListener('DOMContentLoaded', function() {
    const character = document.querySelector('.character')
    const grid = document.querySelector('.grid')
    const status = document.getElementById('status')
    const startBut = document.getElementById('startBut')
    const startScreen = document.getElementById('startScreen')
    const homeBut = document.getElementById('home')
    const replayBut = document.getElementById('replay')
    let position = -80
    let gravity = 0.9
    let isJumping = false
    let isGameOver = false
    let obstacleInterval = 3000
    let speed = 10
    
    function replayButtonHandler(){
        isGameOver = false
        position = -80
        isJumping = false
        speed = 10
        obstacleInterval = 3000
        status.innerHTML = ''
        homeBut.style.display = 'none'
        replay.style.display = 'none'
        character.style.display = 'block'
        obstacle.style.display = 'block'
        startGame()
    }

    replayBut.addEventListener('click', replayButtonHandler)

    

    function startButtonHandler(){
        startScreen.style.display = 'none'
        character.style.display = 'block'
        dessert.style.display = 'block'
        startGame()
    }
    startBut.addEventListener('click', startButtonHandler)

    function homeButtonHandler() {
        startScreen.style.display = 'flex'
        dessert.style.display = 'none'
        isGameOver = false
        position = -80
        isJumping = false
        speed = 10
        obstacleInterval = 3000
        status.innerHTML = ''
        homeBut.style.display = 'none'
        replay.style.display = 'none'
    }

    homeBut.addEventListener('click', homeButtonHandler)

    

    function startGame(){
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space' && !isJumping) {
                jump()
            }
        });

        
        function jump(){
            isJumping = true;
            let count = 0
            let timerId = setInterval(function() { //setinterval repeadetly executes the callback function at specified itnervals
                if(count >= 15){ //when reach desired height it stops the setinterval frome xecuting ie 20ms * 15
                    clearInterval(timerId) //cancels the jumping movement
                    fall()
                }
                else{
                    position -= jumpHeight
                    count ++
                    position = position*gravity //gravity effect
                    character.style.top = position + 'px'
                }
            },20)
            
            
        }

        function fall(){
            let downTimerId = setInterval(function(){
                    position +=18  
                    character.style.top = position + 'px'
                    if(position >= fallHeight){ //bc we subtracted 55 from -80
                        clearInterval(downTimerId)
                        isJumping = false
                }


                        

                    },20)
                }
            
        

        function genObstacles(){
            if (isGameOver) return
            let obstaclePosition = 2500
            const obstacle = document.createElement('div')
            obstacle.classList.add('obstacle')
            grid.append(obstacle)
            obstacle.style.left= obstaclePosition + 'px'

            let timerId = setInterval(function(){ //animate it moving left
                if(obstaclePosition > -150 && obstaclePosition < 70 //horizontal check 
                    && position >= fallHeight && position <= -30){ //vertical check
                
                    clearInterval(timerId)
                    status.innerHTML = 'Game Over!'
                    replay.style.display = 'block'
                    isGameOver = true;
                    homeBut.style.display = 'block'
                    character.style.display = 'none'
                    obstacle.style.display = 'none'
                    clearTimeout(hardMode1)
                    clearTimeout(hardMode2)
                    clearTimeout(hardMode3)
/*
                    while(grid.firstChild){ //removing all children on grid
                        grid.removeChild(grid.lastChild)
                        //keep removing last child as long as first child exists 
                        //everything removed from grid so i have to add them all back!!
                        //bc when game first starts they are already there
                    } */
                } 
                obstaclePosition -= speed
                obstacle.style.left = obstaclePosition + 'px'

                if (obstaclePosition <= -150) {
                    clearInterval(timerId);
                    grid.removeChild(obstacle);
                }

                
                
                
            }, 20)

        
            if(!isGameOver){
                setTimeout(genObstacles, obstacleInterval)
                
                
                
            }
            
        }
    
            genObstacles()

            //hard mode 1
            hardMode1 = setTimeout(function(){
                if(!isGameOver){
                    speed = 12 
                    genObstacles()
                }
            
            },10000)

            //hardmode 2
            hardMode2 = setTimeout(function(){
                if(!isGameOver){
                    speed = 15
                    genObstacles()
                }
            
            },20000)

            //hard mode 3
            hardMode3 = setTimeout(function(){
                if(!isGameOver){
                    obstacleInterval = 3500
                    speed = 16
                    genObstacles()
                }
            
            },20000)
            
    }

    
})