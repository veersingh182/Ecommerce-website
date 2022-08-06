import styled from "styled-components"

const Container = styled.div`
    height : 3rem;
    background-color: #008080;
    color : white;
    display: flex;
    display: flex;
    align-items: center; // vertically center
    justify-content: center; //horizontal center
`
const Announcements = () => {
  return (
    <Container>
        Super Deal! free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcements