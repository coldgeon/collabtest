<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>Aehopark</FooterLogo>
        <FooterText>Aehopark © 2024. All rights reserved</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`

  background-color: #2E322C;
  color: white;
  padding: 20px 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLogo = styled.h2`
 ${({ theme }) => theme.fonts.sansita_one};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
=======
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>Aehopark</FooterLogo>
        <FooterText>Aehopark © 2024. All rights reserved</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #333333;
  color: white;
  padding: 20px 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterLogo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
>>>>>>> b794e7a422abb38be30aaeb8028fc1d35454921e
`;