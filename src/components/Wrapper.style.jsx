import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 50vw;
height: 50vh;
background-color: black;
border-radius: 20px;

& a {
    text-decoration: none;
text-align: center;
color: white;
cursor: pointer;

}

a:hover {
    color: #00ff00;
}
`