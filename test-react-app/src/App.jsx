import Nav from './components/Navar';
import FirstSection from './pages/FirstSection';
import SecondSection from './pages/SecondSection';
import ThirdSection from './pages/ThirdSection';
import FourthSection from './pages/FourthSection';
import FifthSection from './pages/FifthSection';
import SixthSection from './pages/SixthSection';
import SeventhSection from './pages/SeventhSection';
import EighthSection from './pages/EighthSection';
import Footer from './components/Footer';

import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Nav />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
//아래와 같은 방식으로 폰트와 컬러 사용하시면 됩니다!
const H1 = styled.h1`
  ${({ theme }) => theme.fonts.sansita_one};
  color: ${({ theme }) => theme.colors.pc1};
`;

const AppContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
  position: relative;
`;
