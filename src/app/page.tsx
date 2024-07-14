export default function HomePage() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/3 m-6 border border-gray-300 rounded-lg px-8 py-6">
        <h2 className="font-semibold text-2xl">Enviar correo electrónico</h2>
        <p className="text-gray-500 text-sm">Ingresa los detalles del correo electronico que deseas enviar</p>
        <form action="" className="flex flex-col mt-8">
          <div className="space-y-3">
          <input type="text" placeholder="Titulo del correo" className="p-2 rounded-lg w-full border border-gray-300"/>
          <input type="email" placeholder="Dirigido a" className="p-2 rounded-lg w-full border border-gray-300"/>

          <textarea name="content" className="rounded-lg p-2 w-full border border-gray-300" placeholder="Escribe tu correo aquí..."></textarea>
          </div>
          <button className="bg-gray-800 text-white p-2 rounded-3xl my-3">Send</button>
        </form>
      </div>
    </div>
  );
}
