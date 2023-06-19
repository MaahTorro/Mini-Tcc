
import { signInWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { auth } from "src/config/firebase";

export async function logarFirebase(email:any, senha: any) {
    const entrar = await signInWithEmailAndPassword(auth, email, senha)
    .then((dadosUsuario) =>{
        console.log('Usuario logado')
        return 'sucesso'
    })
    .catch((error)=>{
        console.log(error)
        return 'erro'
    })
    return entrar
}
