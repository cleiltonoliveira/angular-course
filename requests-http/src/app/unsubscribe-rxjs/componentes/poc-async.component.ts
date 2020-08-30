import { Component, OnInit, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-poc-async',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-success">
    </app-poc-base>
  `
})
export class PocAsyncComponent implements OnInit {

  nome = 'Componente com async';
  valor: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {

  }

}