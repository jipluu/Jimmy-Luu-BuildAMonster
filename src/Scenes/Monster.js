class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;
    
        // Base body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_whiteB.png");
    
        // Legs
        my.sprite.leg1 = this.add.sprite(this.bodyX + 80, this.bodyY + 130, "monsterParts", "leg_redD.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 80, this.bodyY + 130, "monsterParts", "leg_redD.png");
        my.sprite.leg2.flipX = true;
        // Arms
        my.sprite.arm1 = this.add.sprite(this.bodyX + 110, this.bodyY + 10, "monsterParts", "arm_redE.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX - 110, this.bodyY + 10, "monsterParts", "arm_redE.png");
        my.sprite.arm2.flipX = true; // Mirror for symmetry
    
        // Eyes
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_red.png");
    
        // Mouth (start with smile)
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouthA.png");
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthFangs.visible = false; // Hide fangs initially
    
        // Accessories
    }    

}