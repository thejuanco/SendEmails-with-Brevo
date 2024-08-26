import brevo from "@getbrevo/brevo"

//Creando una instancia de brevo
const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string 
)

//Cofigurando el SMTP
const smtpEmail = new brevo.SendSmtpEmail()

export async function sendEmail() {
    smtpEmail.subject = "Hello World"
    smtpEmail.to = [
        { email: "juanffo874@gmail.com", name: "Juanco" }
    ]
    smtpEmail.htmlContent = '<html><body><h1>Hola mundo</h1></body></html>'
    smtpEmail.sender = { name: "Juan Cruz", email: "210373@utxicotepec.edu.mx" }

    await apiInstance.sendTransacEmail(smtpEmail)
}