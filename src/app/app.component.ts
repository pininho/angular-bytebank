import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bytebank';
  transferencias: any[] = [];

  //destino: number;
  //valor: number;

  transferir($event) {
    console.log($event);
    //this.destino = $event.destino;
    //this.valor = $event.valor;
    this.transferencias.push($event);
  }
}
