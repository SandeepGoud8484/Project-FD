import { useRouteError } from "react-router-dom"

const ErrorPage = ()=> {

    let{ status , statusText } = useRouteError();

    return(
        <div>
            <h1>{status}</h1>
            <h1>{statusText}</h1>
        </div>
    )
}

export default ErrorPage ;