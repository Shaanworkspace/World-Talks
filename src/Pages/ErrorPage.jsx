import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>  
            <p>An Error Occured- this is error page</p>
            {error &&
                <p>{error.data}</p>
            }

            <NavLink to="/">
                <button>
                    Go Home
                </button>
            </NavLink>

        </>
    )
}

export default ErrorPage