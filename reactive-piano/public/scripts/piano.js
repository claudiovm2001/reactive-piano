function main(){
    draw();

    const body = document.querySelector("body");

    body.addEventListener("keydown", (event) => {
        let audio1 = document.getElementById('audio-key1');

        audio1.play();
    });
}

function draw() {
    var canvas = document.getElementById('key')
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.fillRect(25, 25, 50, 500);
      //ctx.clearRect(45, 45, 60, 60);
      //ctx.strokeRect(50, 50, 50, 50);
    }
}