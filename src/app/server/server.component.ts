import { Component } from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online {
        color : white;
    }
    `]
})
export class ServerComponent{
    serverId:number=10;
    serverStatus:string='Offline';

    constructor(){
        this.serverStatus=Math.random()>.5? 'Online' : 'Offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus==='Online' ? 'green' : 'red';
    }
}