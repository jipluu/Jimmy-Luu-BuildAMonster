class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = { sprite: {} };

        this.bodyX = 300;
        this.bodyY = 350;
        this.moveSpeed = 2;
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        document.getElementById('description').innerHTML =
            '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>';
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
        my.sprite.arm2.flipX = true;

        // Eyes
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_red.png");

        // Mouths
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouthA.png");
        my.sprite.mouthFangs = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthFangs.visible = false;

        // Accessories (Add 2 or more)
        my.sprite.antennaRight = this.add.sprite(this.bodyX + 40, this.bodyY - 100, "monsterParts", "detail_yellow_antenna_large.png");
        my.sprite.antennaLeft = this.add.sprite(this.bodyX - 40, this.bodyY - 100, "monsterParts", "detail_yellow_antenna_large.png");
        my.sprite.antennaLeft.flipX = true;        

        my.sprite.HornRight = this.add.sprite(this.bodyX + 60, this.bodyY - 70, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.HornLeft = this.add.sprite(this.bodyX - 60, this.bodyY - 70, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.HornLeft.flipX = true;        

        // Input
        this.keys = this.input.keyboard.addKeys("S,F,A,D");
    }

    update() {
        let my = this.my;

        // Mouth switching
        if (Phaser.Input.Keyboard.JustDown(this.keys.S)) {
            my.sprite.mouthSmile.visible = true;
            my.sprite.mouthFangs.visible = false;
        } else if (Phaser.Input.Keyboard.JustDown(this.keys.F)) {
            my.sprite.mouthSmile.visible = false;
            my.sprite.mouthFangs.visible = true;
        }

        // Movement
        if (this.keys.A.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x -= this.moveSpeed;
            }
        } else if (this.keys.D.isDown) {
            for (let part in my.sprite) {
                my.sprite[part].x += this.moveSpeed;
            }
        }
