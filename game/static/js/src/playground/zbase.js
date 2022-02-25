class SpxGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div class="spx-game-playground"></div>`);
        this.hide();
        this.root.$spx_game.append(this.$playground); 
        this.start();
    }

    start() {
        let outer = this;
        $(window).resize(function(){
            outer.resize();
        });
    }
    get_random_color(){
        let colors = ["blue", "red", "pink", "grey", "green"];
        return colors[Math.floor(5 * Math.random())]
    }
    resize(){
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        let unit = Math.min(this.width / 16, this.height / 9);
        this.width = unit * 16;
        this.height = unit * 9;
        this.scale = this.height;

        if(this.game_map) this.game_map.resize();
    }
    show() {  // 打开playground界面
        this.$playground.show();
        this.resize();
        this.width = this.$playground.width();
        this.height = this.$playground.height();
        this.game_map = new GameMap(this);
        this.players = [];
        this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, "white", 0.15, true));

        for(let i = 0; i < 5; i ++ ){
            this.players.push(new Player(this, this.width / 2 / this.scale, 0.5, 0.05, this.get_random_color(), 0.15, false))

        }
    }

        hide() {  // 关闭playground界面
            this.$playground.hide();
        }
    }

