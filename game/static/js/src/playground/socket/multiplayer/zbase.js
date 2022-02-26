class MultiPlayerSocket{
    constructor(playground){
        this.playground = playground;
        this.ws = new WebSocket("wss://app1603.acapp.acwing.com.cn/wss/multiplayer/"); //建立连接,创建或者加入房间，返回所有players的信息
        this.start();
    }
    start(){
        this.receive();
    }
    receive(){
        let outer = this;
        this.ws.onmessage = function(e){
            let data = JSON.parse(e.data);
            let uuid = data.uuid;
            if(uuid === outer.uuid)  return false;
            let event = data.event;
            if(event === "create_player"){
                outer.receive_create_player(uuid, data.username, data.photo);
            }
        };
    }
    send_create_player(username, photo){
        let outer = this;
        this.ws.send(JSON.stringify({
            'event':"create_player",
            'uuid': outer.uuid,
            'username':username,
            'photo':photo,
        }));
    }
    receive_create_player(uuid, username, photo){
        let playground = this.playground;
        let player = new Player(playground, playground.width / 2 / playground.scale, 0.5, 0.05, "white", 0.15, "enemy", username,photo);
        player.uuid = uuid;
        playground.players.push(player);
    }

}
