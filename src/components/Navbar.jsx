import styled from 'styled-components'
import logo from '../../public/img/jisadevlogo.svg'

const Section = styled.div`
  display: flex;
  justify-content: center;
  scroll-snap-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
const Container = styled.div`
  width:1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Logo = styled.img`
  width: 10%;
  height: 10%;

  @media only screen and (max-width: 768px) {
    width:25%;
    height:20% ;
  }
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`
const ListItem = styled.li`
  cursor: pointer;
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;

`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2 ;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`


const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={ logo } alt="logo"/>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar