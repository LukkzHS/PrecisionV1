import { FloatingWhatsApp } from 'react-floating-whatsapp'

function Whatsapp() {
  return (
    <>
    <FloatingWhatsApp 
    phoneNumber='+5534999615745'
    accountName="Precision" 
    statusMessage="Online" 
    chatMessage="Olá, como podemos ajudar?" 
    placeholder="Mensagem"
    avatar='precision.jpeg'/>
    </>
  )
}

export default Whatsapp