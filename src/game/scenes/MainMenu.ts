import { GameObjects, Scene } from 'phaser';

import { EventBus } from '../EventBus';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(512, 270, 'cover').setDisplaySize(760, 427);

        this.title = this.add.text(512, 560, '出口易新人通关局', {
            fontFamily: 'Microsoft YaHei',
            fontSize: 42,
            color: '#ffffff',
            stroke: '#0d3d7c',
            strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        EventBus.emit('current-scene-ready', this);
    }
    
    changeScene ()
    {
        this.scene.start('Game');
    }

    moveLogo (vueCallback: ({ x, y }: { x: number, y: number }) => void)
    {
        if (vueCallback)
        {
            vueCallback({
                x: Math.floor(this.background.x),
                y: Math.floor(this.background.y)
            });
        } 
    }
}
