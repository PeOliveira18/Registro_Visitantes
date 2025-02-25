import styled from "styled-components"
import React from "react"
import Home from "./assets/pages/home"

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  max-width: 100%;
`

function App() {

  return (
    <AppContainer>
      <Home/>
    </AppContainer>
  )
}

export default App
