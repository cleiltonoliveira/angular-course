import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {


    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group(
        {
          cep: [null, Validators.required],
          numero: [null, Validators.required],
          complemento: [null],
          rua: [null, Validators.required],
          bairro: [null, Validators.required],
          cidade: [null, Validators.required],
          estado: [null, Validators.required],
        }
      )
    });

  }

  onSubmit() {

    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(dados => {

        console.log(dados);

        // this.formulario.reset();
        this.resetar();
      },
        (error: any) => alert("Error"));
  }

  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailInvalido() {

    let campoEmail = this.formulario.get('email');

    if (campoEmail.errors) {

      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }
}