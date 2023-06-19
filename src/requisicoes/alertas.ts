import { toastController } from "@ionic/core";

export async function exibirToast(mensagem: string, duracao: number, cor: any){
    const toast = await toastController.create({
      message: mensagem,
      duration: duracao,
      color: cor,
      position: 'top'
    })
    toast.present()
  }
