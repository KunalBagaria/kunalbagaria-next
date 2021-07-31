import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#FAFAFA',
    text: 'black',
}

export const darkTheme = {
    body: 'black',
    text: '#FAFAFA',
    imageInvert: true
}

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all 0.50s linear;
    }
    img {
        -webkit-filter: ${({ theme }) => theme.imageInvert ? 'invert(1)' : 'none'};
        filter: ${({ theme }) => theme.imageInvert ? 'invert(1)' : 'none'};
    }
    #button {
        border: 1px solid ${({ theme }) => theme.text};
    }
    #button:hover {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
    }
`