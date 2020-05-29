import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false;
  tamanhoFont: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
