import React from 'react';
import styled  from 'styled-components';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import section from '../assets/section.png';

function FirstSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <LeftSection>
          <PhoneImage>
           <StyledImage src={img1} alt="image1" className="left" />
           <StyledImage src={img2} alt="image2" className="center" />
           <StyledImage src={img3} alt="image3" className="right" />
          </PhoneImage>
        </LeftSection>
        <RightSection>
          <LogoLarge>Aehopark</LogoLarge>
          <HeroTitle1>알뜰 장보기,<br /></HeroTitle1>
          <HeroTitle2>집에서 손쉽게</HeroTitle2>
          <HeroSubtitle>#심플한 가격비교 #애호박으로 최저가 장보기</HeroSubtitle>
          <CTAButton>설치하기</CTAButton>
        </RightSection>
      </ContentWrapper>
      <BackgroundPlaceholder>
       <StyledSection src={section} alt="section" />
      </BackgroundPlaceholder>
    </SectionContainer>
  );
};

export default FirstSection;

const SectionContainer = styled.div`
  position: relative;
  padding: 50px 0;
  background-color: #f0f8f0; 
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 15%;
`;

const PhoneImage = styled.div`
  width: 100%;
  max-width: 500px;
  height: 500px;
  
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const LogoLarge = styled.div`
  ${({ theme }) => theme.fonts.sansita_one};
  color: ${({ theme }) => theme.colors.pc1};
  font-size: 80px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const HeroTitle1 = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 900;
  padding-top: 30px;
`;

const HeroTitle2= styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 900;
  
 
`;
const HeroSubtitle = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 30px;
  font-weight: 500;
`;

const CTAButton = styled.button`
  background-color: #10A36B;
  color: white;
  padding: 15px 32px;
  text-align:center;
  text-decoration: none;
  display: inline-block;
  width: 350px;
  height: 50px;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #45a049;
  }
`;

const BackgroundPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #aaa;
  opacity: 0.3;
  z-index: 0;
`;

const StyledImage = styled.img`
  width: 280px;
  height: 500px;
  position: absolute;
  border-radius: 20px;
  transition: transform 0.3s ease;
 
  &.left {
    left: 214;
    z-index: 3;
    
  }

  &.center {
    z-index: 2;
    transform: translateX(120px);
  }

  &.right {
    right: 0;
    z-index: 1; /* 중앙 이미지보다 위로 올리기 위해 z-index를 3으로 설정 */
    transform: translateX(151px); /* 중앙 이미지 위로 이동시키기 위해 x축으로 -140px 이동 */
  }
`;

const StyledSection = styled.img`
  width: 100%;
  height: 100%;
`;