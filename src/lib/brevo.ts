import brevo from "@getbrevo/brevo"

//Creando una instancia de brevo
const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string 
)

