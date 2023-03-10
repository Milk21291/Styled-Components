import styled from 'styled-components'
import { theme } from '../Theme'
import ButtonStyled from './Button'

export const StyledButton = styled.button`
/* ...colocar nossos estilos */
background-color: ${(prop) => prop.backgroundColor};
width: 100px;
height: ${({ theme }) => theme.size.xxl};
border-radius: 10px;
cursor: pointer;

&:hover {
    background-color: blue;
    transition: 1s;
}

&:active {
    background-color: green;
    transition: 1s; 
}
`

export const StyledButtonBlue = styled.button`
/* ...colocar nossos estilos */
background-color: ${({ theme }) => theme.colors.primary};
width: 100px;
height: 60px;
border-radius: 10px;
cursor: pointer;

&:hover {
    background-color: red;
    transition: 1s;
}

&:active {
    background-color: green;
    transition: 1s; 
}
`

export const Button2 = styled(ButtonStyled)`
background-color: lightblue;
width: 100px;
height: 60px;
border-radius: 10px;
cursor: pointer;

&:hover {
    background-color: red;
    transition: 1s;
}

&:active {
    background-color: green;
    transition: 1s; 
}
`