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
        transition: .25s linear;
        -webkit-filter: ${({ theme }) => theme.imageInvert ? 'invert(1)' : 'none'};
        filter: ${({ theme }) => theme.imageInvert ? 'invert(1)' : 'none'};
    }
    #discord:hover {
        -webkit-filter: ${({ theme }) => theme.imageInvert ? 'none' : 'invert(1)'};
        filter: ${({ theme }) => theme.imageInvert ? 'none' : 'invert(1)'};
    }
    #twitter:hover {
        -webkit-filter: ${({ theme }) => theme.imageInvert ? 'none' : 'invert(1)'};
        filter: ${({ theme }) => theme.imageInvert ? 'none' : 'invert(1)'};
    }
    #github:hover {
        -webkit-filter: ${({ theme }) => theme.imageInvert ? 'none' : 'invert(1)'};
        filter: ${({ theme }) => theme.imageInvert ? 'none' : 'invert(1)'};
    }
    #button {
        border: 1px solid ${({ theme }) => theme.text};
    }
    #button:hover {
        background: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.body};
    }
`