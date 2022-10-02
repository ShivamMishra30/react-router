import { useRouteError } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
        <MainNavigation/>
        <main>
            <h1>{error.message}</h1>
        </main>
        </>
    )
}

export default ErrorPage