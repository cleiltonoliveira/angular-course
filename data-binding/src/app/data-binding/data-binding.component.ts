import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://loiane.com";
  cursoAngular: boolean = true;
  urlImage: string = "http://lorempixel.com/400/200/nature/"
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string ='Angular';
  valorInicial: number = 15;

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  clickedButton() {
    alert("Botao clicado");
  }

  onKeyUp(evento: KeyboardEvent) {
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(evento) {
    this.valorSalvo = evento;
  }

  onMouseOverAndOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event) {
    console.log(event.novoValor);
  }

}
