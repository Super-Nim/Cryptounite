import { PausePresentationSharp } from "@material-ui/icons"
import { useState } from "react"


interface Prop {
    id: number;
}

interface DataProps<T> {
    // Never use 'any'
    props: T[];
}


export const TestProps = <T extends Prop>({ props }: DataProps<T>): React.ReactNode => {


    return (
        <>
            <ul>
                {props.map((prop) => (
                    <li key={prop.id}>{JSON.stringify(prop)}</li>
                ))}
            </ul>
        </>
    )

}