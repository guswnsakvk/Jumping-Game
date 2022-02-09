const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth - 100
canvas.height = window.innerHeight - 150

let player = {
  x: 300,
  y: 200,
  width: 50,
  height: 50,
  draw(){
    ctx.fillStyle = 'green'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

class obstacle{
  constructor(){
    this.x = 1000
    this.y = 200
    this.width = 50
    this.height = 50
  }
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

let obstacleList = []
let timer = 0
let jump = false
let jumping = false
let animation

function moveObstacle(){
  animation = requestAnimationFrame(moveObstacle)
  timer++
  ctx.clearRect(0,0, canvas.width, canvas.height)

  if(timer % 100 == 0){
    let newObstacle = new obstacle()
    obstacleList.push(newObstacle)
  }

  obstacleList.forEach((obstacle, i, o)=>{
    if(obstacle.x < 300){
      o.splice(i,1)
    }
    else{
      obstacle.x--
    }
    collision(player, obstacle)
    obstacle.draw()
  })
  
  if(jump == true && player.y > 100){
    player.y -= 2
  } else{
    jump = false
      if(player.y < 200){
        player.y += 2
      }
      else if(player.y == 200){
        jumping = false
      }
  }

  player.draw()
}

moveObstacle()

function playerJump(){
  window.addEventListener('keydown', function(e){
    if(jumping == false){
      if(e.code === 'Space'){
        jump = true
      }
    }
    jumping = true
  })
}

playerJump()

function collision(player, obstacle){
  let defX = obstacle.x - (player.x + player.width)
  let defY = obstacle.y - (player.y + player.height)
  if(defX < 0 && defY < 0){
    cancelAnimationFrame(animation)
  }
}