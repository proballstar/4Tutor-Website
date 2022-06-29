import React from "react"

interface InputBoxProps {
    name: string
}


export default function InputBox({ name }: InputBoxProps) {
    return (
        <div>
            <label htmlFor={name}>
                name:
            </label>
            <input
                placeholder={`Enter your ${name} here`}
                name={name}
            />
        </div>
    )
}