import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    button{       
        display: inline-block;
        outline: 0;
        cursor: pointer;
        border-radius: 6px;
        border: 2px solid #ff4742;
        color: #fff;
        background-color: #ff4742;
        padding: 8px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1.5px 0px;
        font-weight: 800;
        font-size: 16px;
        height: 42px;
        :hover{
            background: 0 0;
            color: #ff4742;
        }        
        margin: 1%;
        width: 100%;
    }
    input{     
        padding: 5px 12px;
        font-size: 14px;
        line-height: 20px;
        color: #24292e;
        vertical-align: middle;
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-position: right 8px center;
        border: 1px solid #e1e4e8;
        border-radius: 6px;
        outline: none;
        box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
        :focus{
            border-color: #0366d6;
            outline: none;
            box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
        }     
        margin: 2%;
    }

    a{
        color: #ff4742;
    }

    h1, h2, h3, p, span, a, label{
        font-family: 'Quicksand', sans-serif;
    }

    label{
        font-style: italic;
        opacity: 80%;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;
