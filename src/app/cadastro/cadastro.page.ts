import { Component, OnInit } from '@angular/core';
import { cadastrar } from 'src/requisicoes/cadastro';
import { Router } from '@angular/router';
import { exibirToast } from 'src/requisicoes/alertas';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(public router: Router) { }

  incorretoSenha = '';
  incorretoEmail = ''

  nome:any;
  sobrenome:any;
  tell: any;
  email: any;
  empresa: any;
  senha: any;
  confirmaSenha: any;

  placeholderTell = 'Telefone'

async cadastrar(){
  if(this.senha === this.confirmaSenha){
    const cadastro = await cadastrar(this.email, this.senha, this.confirmaSenha)
    if(cadastro == 'sucesso'){
    this.router.navigate(['../cadastrodois'])
    }else{
      exibirToast(cadastro, 3000, 'danger')
      if(cadastro == 'Esse email esta em uso' || cadastro == 'Email inválido'){
        this.incorretoEmail = 'incorreto'
      }
    }
  }else{
    console.log('Senhas não iguais');
    exibirToast('As senhas não são iguais', 2000, 'danger')
    this.incorretoSenha = 'incorreto'
  }

}

  ngOnInit() {
  }

}
