import { StyledButton, StyledButtonBlue, Button2 } from './components/Button.style'
import { Wrapper, UserName } from './components/Wrapper.style'
import { Section } from './components/Section.style'

function App() {

  return (
    <Section>
     <Wrapper>
       <StyledButtonBlue onClick={() => console.log('clicou no botão')}>Enviar</StyledButtonBlue>
       <StyledButton backgroundColor='red' onClick={() => console.log('clicou no botão')}>Enviar</StyledButton>
       <StyledButton backgroundColor='orange' onClick={() => console.log('clicou no botão')}>Enviar</StyledButton>
       <Button2>Enviar</Button2>
       <a onClick={() => console.log('clicou no link')} href='#'>Clique aqui</a>
       <UserName
       firstName='João'
       lastName='Victor' />
     </Wrapper>
    </Section>
  )
}

export default App
