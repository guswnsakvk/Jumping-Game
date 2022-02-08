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

function moveObstacle(){
  requestAnimationFrame(moveObstacle)
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
    obstacle.draw()
  })
  
  player.draw()
}

moveObstacle()