export class SpxGame{
    constructor(id){
        this.id = id;
        console.log("Zbase");
        this.$spx_game = $('#'+id);
        //this.menu = new SpxGameMenu(this);
        this.playground = new SpxGamePlayground(this);

        this.start();
    }
    start(){

    }
}
