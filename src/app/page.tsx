export default function HomePage() {

  async function sendEmail(formData: FormData){ //El form data hace referencia a los elementos dentro del formulario
    "use server"

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

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/3 m-6 border border-gray-300 rounded-lg px-8 py-6">
        <h2 className="font-semibold text-2xl">Enviar correo electrónico</h2>
        <p className="text-gray-500 text-sm">
          Ingresa los detalles del correo electronico que deseas enviar
        </p>

        <form action={sendEmail} method="POST" className="flex flex-col mt-8">
          <div className="space-y-3">
            <input
              name="title"
              type="text"
              placeholder="Titulo del correo"
              className="p-2 rounded-lg w-full border border-gray-300"
            />

            <input
              name="to"
              type="email"
              placeholder="Dirigido a"
              className="p-2 rounded-lg w-full border border-gray-300"
            />

            <textarea
              name="content"
              className="rounded-lg p-2 w-full border border-gray-300"
              placeholder="Escribe tu correo aquí..."
            ></textarea>
          </div>
          <button className="bg-gray-800 text-white p-2 rounded-3xl my-3">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
