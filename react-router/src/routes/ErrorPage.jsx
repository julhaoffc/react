import { useRouteError } from "react-router-dom"

export default function ErrorPage(){

    const error = useRouteError();

    return(
        <div>
            <h3>Erro Ocorrido!</h3>
            <p>{error.statusText}</p>
            <p>{error.error.message}</p>
        </div>
    )
}