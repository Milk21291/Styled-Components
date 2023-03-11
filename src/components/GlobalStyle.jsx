import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: calc(9px + (18 - 9) * (100vw - 180px) / (1280 - 180)); 
}

body {
    background-image: url('https://images3.alphacoders.com/103/1034504.jpg');
}
`