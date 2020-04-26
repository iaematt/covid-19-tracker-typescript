import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        --main-background-color: #111111;
        --text-color: #eeeeee;
        --link-color: #4285f4;
        --link-hover-color: #999999;

        --header-background-color: #222222;
        --header-link-color: #fafafa;
        --header-link-hover-color: #4285f4;

        --title-color: #dddddd;
        --title-text-color: #888888;

        --charts-title-color: #999999;

        --footer-background-color: #1e1e1e;
        --footer-text-color: #555555;
        --footer-link-color: #888888;
        --footer-link-hover-color: #4285f4;
        
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--main-background-color);
        color: var(--text-color);
        font-family: 'Roboto', sans-serif;
        font-size: 13px;
        -webkit-font-smoothing: antialiased;
        font-weight: 500;
    }

    h1,
    h2, 
    h3,
    h4,
    h5,
    h6,
    strong{
        font-weight: 700;
    }


    a {
        color: var(--link-color);
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }

    a:hover {
        color: var(--link-hover-color);
    }

`;
