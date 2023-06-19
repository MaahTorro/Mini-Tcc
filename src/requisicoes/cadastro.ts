import { auth } from "src/config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

function errosFirebase(error:any){
    var mensagem = '';
    switch(error.code){
    case AuthErrorCodes.EMAIL_EXISTS:
        mensagem = 'Esse email esta em uso';
        break;
    case AuthErrorCodes.INVALID_EMAIL:
        mensagem = 'Email inválido';
        break;
    case AuthErrorCodes.WEAK_PASSWORD:
        mensagem = 'A senha precisa ter 6 digitos';
        break;
    default:
        mensagem = 'Erro desconhecido'
    }
    return mensagem;
}

export async function cadastrar(email:any, senha:any, confirmarSenha:any){
    const entrar = await createUserWithEmailAndPassword(auth, email, senha)
    .then((dadosUsuario) => {
      console.log('Usuario cadastrado')
      return 'sucesso'
    })
    .catch((error) => {
        return errosFirebase(error)
    })

    return entrar
  }



