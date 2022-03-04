import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bytebank';

  //destino: number;
  //valor: number;

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    console.log($event);
    //this.destino = $event.destino;
    //this.valor = $event.valor;
    this.service.adicionar($event);

  }
}
