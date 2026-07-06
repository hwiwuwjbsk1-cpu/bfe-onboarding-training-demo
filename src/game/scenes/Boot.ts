import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.image('cover', 'assets/culture-adventure-cover.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
