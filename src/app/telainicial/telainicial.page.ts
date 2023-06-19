import { Component, OnInit } from '@angular/core';
import { doc, setDoc } from "firebase/firestore";

import { collection, addDoc } from "firebase/firestore";
import { db } from 'src/config/firebase';

@Component({
  selector: 'app-telainicial',
  templateUrl: './telainicial.page.html',
  styleUrls: ['./telainicial.page.scss'],
})
export class TelainicialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  porcentagem1 = 25 ;
  inputPorcentagem2 = 25;
  inputPorcentagem3 = 20;
  inputPorcentagem4 = 30;

  porcentagem2 = this.porcentagem1 + this.inputPorcentagem2 ;
  porcentagem3 = this.porcentagem2 + this.inputPorcentagem3 ;
  porcentagem4 = this.porcentagem3 + this.inputPorcentagem4 ;

  grafico = 'background: conic-gradient( #0038FF 0% ' + this.porcentagem1 + '%' + ' , #3564E5 ' + this.porcentagem1 + '% ' + this.porcentagem2 +'%, #2DB4FC ' + this.porcentagem2 + '% ' + this.porcentagem3 +  '%, #2AF5EE ' + this.porcentagem3 + '% ' + this.porcentagem4 + '% );';

  async addProduto(){
    // Add a new document in collection "cities"
    await setDoc(doc(db, "usuarios", 'teste'), {
      nome: "Los Angeles",
    });
  }
}
