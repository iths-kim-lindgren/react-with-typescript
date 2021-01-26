import React, { useState } from 'react';

import { StyledArticle } from './Form.styles';

const Form = () => {

    const [firstNameButtonClass, setFirstNameButtonClass] = useState("untouched")
    const [lastNameButtonClass, setLastNameButtonClass] = useState("untouched")
    const [ageButtonClass, setAgeButtonClass] = useState("untouched")
    const [emailButtonClass, setEmailButtonClass] = useState("untouched")
    const [firstNameValid, setFirstNameValid] = useState("❓")
    const [lastNameValid, setLastNameValid] = useState("❓")
    const [ageValid, setAgeValid] = useState("❓")
    const [emailValid, setEmailValid] = useState("❓")

    const stopSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    async function checkFirstNameValidity(value: string) {
        value.length > 1 && value.length < 11 ? setFirstNameValid("✔️") : setFirstNameValid("❌")
    }

    async function checkLastNameValidity(value: string) {
        value.length > 1 && value.length < 11 ? setLastNameValid("✔️") : setLastNameValid("❌")
    }

    function checkAgeValidity(value: number) {
        value !== null && value > -1 && value < 120 ? setAgeValid("✔️") : setAgeValid("❌")
    }
    function checkEmailValidity(value: string) {
        let regex = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        value.match(regex) ? setEmailValid("✔️") : setEmailValid("❌")
    }

    return (
        <StyledArticle>
            <form onSubmit={stopSubmit}>
                <article className="form">
                    <label>First name</label>
                    <input type="text" className={firstNameButtonClass}
                        placeholder="Name (2-10 characters)"
                        onFocus={() => setFirstNameButtonClass("touched")}
                        onChange={e => checkFirstNameValidity(e.target.value)}
                        onBlur={e => e.target.value ? () => setFirstNameButtonClass("untouched") : null}
                    >
                    </input>
                    <label>Last name</label>
                    <input type="text" className={lastNameButtonClass}
                        placeholder="Name (2-10 characters)"
                        onFocus={() => setLastNameButtonClass("touched")}
                        onChange={e => checkLastNameValidity(e.target.value)}
                        onBlur={e => e.target.value ? () => setLastNameButtonClass("untouched") : null}
                    >
                    </input>
                    <label>Age</label>
                    <input type="number" className={ageButtonClass}
                        placeholder="Age (0-120)"
                        onFocus={() => setAgeButtonClass("touched")}
                        onChange={e => checkAgeValidity((e.target.valueAsNumber))}
                        onBlur={e => e.target.value ? () => setAgeButtonClass("untouched") : null}
                    >
                    </input>
                    <label>Email</label>
                    <input type="text" className={emailButtonClass}
                        placeholder="Email"
                        onFocus={() => setEmailButtonClass("touched")}
                        onChange={e => checkEmailValidity((e.target.value))}
                        onBlur={e => e.target.value ? () => setEmailButtonClass("untouched") : null}
                    >
                    </input>
                </article>

                <p>{firstNameValid} First name must be between 2 and 15 characters</p>
                <p>{lastNameValid} Last name must be between 2 and 25 characters</p>
                <p>{ageValid} Age must be between 0 and 120</p>
                <p>{emailValid} Email must be correctly formatted</p>
                <button disabled={firstNameValid !== "✔️" || lastNameValid !== "✔️" || ageValid !== "✔️" || emailValid !== "✔️"}>
                    Log in
                </button>
            </form>
        </StyledArticle>
    )
}

export default Form;