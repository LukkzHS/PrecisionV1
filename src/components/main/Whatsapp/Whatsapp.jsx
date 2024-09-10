import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Whatsapp() {
  return (
    <>
    <FloatingWhatsApp 
    accountName="Precision" 
    statusMessage="Online" 
    chatMessage="Olá, como podemos ajudar?" 
    placeholder="Mensagem"/>
    </>
  )
}

export default Whatsapp