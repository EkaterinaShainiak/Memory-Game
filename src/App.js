import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import CardsList from "./components/CardsList";
import cards from "./cards"

const App = () => (
  <Wrapper>
    <Title>Clicky game!</Title>
    <CardsList cards={cards} />
  </Wrapper>
);

export default App;
