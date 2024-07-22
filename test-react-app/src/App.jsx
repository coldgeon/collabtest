import React from 'react';
import styled from 'styled-components';
import Nav from './components/Nav';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import EighthSection from './components/EighthSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <AppContainer>
      <Nav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection>
      </EighthSection>
      <Footer />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  position: relative;
`;