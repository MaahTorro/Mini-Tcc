import { Component } from '@angular/core';
import { logarFirebase } from 'src/requisicoes/login'
import { exibirToast } from 'src/requisicoes/alertas';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  email: any;
  senha: any;

  constructor(public router: Router) {}

  async logar(){
    const entrar = await logarFirebase(this.email, this.senha)

    if(entrar == 'erro'){
      exibirToast('Credencias incorretas', 3000, 'danger')
    }else{
      console.log('Deu certo')
      this.router.navigate(['../telainicial'])
    }

  }
}
