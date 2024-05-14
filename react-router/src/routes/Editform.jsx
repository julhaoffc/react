import { useParams } from "react-router-dom"

export default function EditForm(){
    const { id } = useParams()
    return(
        <div>
            <p>Edição do Componente</p>
        </div>
    )
}