import styled from 'styled-components';

export const StyledArticle = styled.article`
    background-Color: #aaaaaa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .form {
        display: flex;
        flex-direction: column;
    }
    & .form label {
        font-family: 'Righteous';
    }
    & .form input.untouched {
        background-color: #151515;
        -webkit-box-shadow: 0px 0.3px 3px 2px rgba(255,255,255,0.8);
        -moz-box-shadow: 0px 0.3px 3px 2px rgba(255,255,255,0.8);
        box-shadow: 0px 0.3px 3px 2px rgba(255,255,255,0.8);
        transition: 0.5s;
    }
    & .form input.touched {
        background-color: #000000;
        color: whitesmoke;
        transition: 0.35s;
    }
    & .form label, .form input {
        padding: 0.5em;
    }
`