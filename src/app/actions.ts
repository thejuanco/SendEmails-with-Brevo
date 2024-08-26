"use server"

export async function sendEmail(formData: FormData){ //El form data hace referencia a los elementos dentro del formulario

    //Extrayendo los valores del formulario
    const title = formData.get("title")
    const to = formData.get("to")
    const content = formData.get("content")

    //Validacion
    if (!title ||!to ||!content) {
      return console.log('Todos los campos son obligatorios')
    }

    console.log({title, content, to})
  }