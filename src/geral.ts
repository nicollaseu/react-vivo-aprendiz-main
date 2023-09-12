import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    /* para respeitar o limite de width e height */
}

body {
    /* tirando espaçamento padrão da janela */
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
}
`

    
;