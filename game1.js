console.log("link established");

class mainScene {
  preload() {
    this.load.image("player", "./images/bunny1.png");
    this.load.image(
      "carrot",
      "http://examples.phaser.io/assets/sprites/carrot.png"
    );
  }
  create() {
    this.player = this.physics.add.sprite(50, 125, "player");
    this.carrot = this.physics.add.sprite(770, 360, "carrot");

    this.score = 0;
    this.style = { font: "40px monospace", fill: "#fff" };
    this.scoreText = this.add.text(20, 20, "score: " + this.score);

    this.arrow = this.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.arrow.right.isDown) {
      this.player.x += 3;
    } else if (this.arrow.left.isDown) {
      this.player.x -= 3;
    }
    if (this.arrow.down.isDown) {
      this.player.y += 3;
    } else if (this.arrow.up.isDown) {
      this.player.y -= 3;
    }

    // overlap is just another example of one of the many built-in JS methods available to you.
    if (this.physics.overlap(this.player, this.carrot)) {
      this.eat();
    }
  }

  // when bunny gets carrot
  eat() {
    this.carrot.x = Phaser.Math.Between(50, 800);
    this.carrot.y = Phaser.Math.Between(125, 600);

    this.score += 1;

    this.scoreText.setText("score: " + this.score);

    // this increases players size when player and carrot overlap
    this.tweens.add({
      targets: this.player,
      duration: 700,
      scaleX: 1.7,
      scaleY: 1.7,
      yoyo: true,
    })

    // if bunny eats 5 carrots, he gets bigger.
if (this.score === 5) {
  this.tweens.add({
    targets: this.player,
    duration: 1000,
    scaleX: 2.7,
    scaleY: 2.7,
    yoyo: true,
  })
}
// if bunny eats 10 carrots he gets way bigger.
if (this.score === 10) {
  this.tweens.add({
    targets: this.player,
    duration: 1000,
    scaleX: 3.7,
    scaleY: 3.7,
    yoyo: true,
  })
}
// if bunny eats 20 carrots he gets the biggest.
if (this.score === 20) {
  this.tweens.add({
    targets: this.player,
    duration: 1000,
    scaleX: 5.7,
    scaleY: 5.7,
    yoyo: true,
  })
}



  }
}

new Phaser.Game({
  width: 800,
  height: 600,
  scene: mainScene,
  parent: "game",
  physics: { default: "arcade" },
});
