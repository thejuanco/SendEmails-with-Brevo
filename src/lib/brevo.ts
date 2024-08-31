import * as brevo from "@getbrevo/brevo"

//Creando una instancia de brevo
const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string
)

//Cofigurando el SMTP
const smtpEmail = new brevo.SendSmtpEmail()

interface Params{
    subject: string
    to: {email: string, name: string}[]
    htmlContent: string
}

export async function sendEmail({subject, to, htmlContent}: Params) {
    try {
        smtpEmail.subject = subject
        smtpEmail.to = to
        smtpEmail.htmlContent = `<html><body>${htmlContent}</body></html>`
        smtpEmail.sender = { name: "Juan Manuel Cruz", email: "210373@utxicotepec.edu.mx" }

        await apiInstance.sendTransacEmail(smtpEmail)
    } catch (error) {
        console.log(error)
    }
}