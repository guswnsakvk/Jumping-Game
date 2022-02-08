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
player.draw()

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

const abc = new obstacle()
abc.draw()