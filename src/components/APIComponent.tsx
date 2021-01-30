import React, {useEffect, useState} from 'react';

export const APIComponent = () => {


    const [category, setCategory] = useState("character");
    const [number, setNumber] = useState(2);
    const [data, setData] = useState<null | StarWarsObject>(null);

    interface StarWarsObject {
        [key: string]: any
    }

    async function fetchStarWarsObjects(number: number, category: string) {
        const endpoint = `https://rickandmortyapi.com/api/${category}/${number}`;
        const APIdata = await (await fetch(endpoint)).json();
        
        setData(APIdata)
        // return data.results.map((question: Question) => ({
        //     ...question,
        //     answers: shuffleArray([...question.incorrect_answers, question.correct_answer,
        //     ]),
        // }));
    };

    useEffect(() => {
        fetchStarWarsObjects(2, "character")
    }, [])

    useEffect(() => {
        console.log(data);
    }, [fetchStarWarsObjects])
    


    return (
        <div>
            {data ? <p>Name: {data.name}</p> : null}
            {data ? <p>Status: {data.status}</p> : null}
            {data ? <p>Species: {data.species}</p> : null}
            {data ? <p>Origin: {data.origin.name}</p> : null}
            {data ? <p>Gender: {data.gender}</p> : null}
        </div>
    )
}