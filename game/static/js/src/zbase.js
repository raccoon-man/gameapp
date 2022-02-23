export class SpxGame{
    constructor(id, AcWingOS){
        this.id = id;
        this.$spx_game = $('#'+id);
        this.AcWingOS = AcWingOS;
        this.settings = new Settings(this);
        this.menu = new SpxGameMenu(this);
        this.playground = new SpxGamePlayground(this);

        this.start();
    }
    start(){

    }
}
