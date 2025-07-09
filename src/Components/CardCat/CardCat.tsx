import { FC } from "react"
import { ICat } from "../../types/ICat"

interface Props {
    cat: ICat
}


export const CardCat: FC<Props> = ({cat}) => {
  return (
    <div className="w-[280px] h-[360px] border rounded-2xl overflow-hidden m-auto">
        <div className="h-1/2 border-b bg-slate-700">
            <img src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2F0aXRvfGVufDB8fDB8fHww" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="flex flex-col justify-center text-center h-1/2 py-6">
        <p>Nombre: {cat.name}</p>
        <p>Raza: {cat.breed.name}</p>
        <p>Edad: {cat.age}</p>
        <p>Contacto: {cat.userEmail}</p>
        <button className="bg-green-500 font-bold w-8/10 m-auto rounded text-white cursor-pointer" onClick={() => window.open(`https://mail.google.com/mail/?view=cm&to=${cat.userEmail}&su=Interesado%20en%20tu%20anuncio%20de%20${cat.name}&body=Hola,%20estoy%20interesado%20en%20tu%20publicación%20de%20${cat.name}.`)}>Contactar anuncio</button>

        </div>
    </div>
  )
}
