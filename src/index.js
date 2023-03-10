var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload,
      create
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.setBaseURL('http://labs.phaser.io');

  this.load.image('sky', 'assets/skies/space3.png');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
  this.load.image('red', 'assets/particles/red.png');
}

/**
 * Liste des actions qui vont être utilisées dans le jeu.
 * Permet d'avoir une configuration des touches pour l'utilisateur.
 * 
 * Les valeurs ci-dessous sont par défaut.
 */
const KEYS = {
  LEFT: 81,
  RIGHT: 68,
  UP: 90,
  DOWN: 83
}

function create () {
  this.input.keyboard.on('keydown', function (event) {
    /** @type {boolean} */
    const is_shift = event.shiftKey;
    /** @type {number} */
    const key = event.keyCode;

    /** @type {keyof typeof KEYS | undefined} */
    const action = Object.keys(KEYS).find(action_name => KEYS[action_name] === key);
    if (!action) return;

    // TODO: Handle action;
    console.info("[KEYS][new_action]:", action);
  });

  this.add.image(400, 300, 'sky');

  var particles = this.add.particles('red');

  var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
  });

  var logo = this.physics.add.image(400, 100, 'logo');

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}