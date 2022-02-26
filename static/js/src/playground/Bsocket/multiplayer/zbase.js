class MultiPlayerSocker{
    constructor(playground){
        this.playground = playground;
        this.ws = new WebSocket("wss://app1603.acapp.acwing.com.cn/wss/multiplayer/");
        this.start();
    }
    start(){

    }

}
