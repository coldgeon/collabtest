import React from 'react';
import styled from 'styled-components';
import img3 from '../assets/img3.png';
import mascot2 from '../assets/mascot2.png';

function ThirdSection() {
  return (
    <SectionContainer>
      <LeftContent>
        <PhoneImageContainer>
        <StyledImage src={img3} alt="image3" className='left' />
        <StyledImage src={img3} alt="image3" className='right' />
        <StyledImg src={mascot2} alt="mascot2" className="left" />
        </PhoneImageContainer>
       
      </LeftContent>
      <RightContent>
        <SmallText>"농장에서 식탁까지 무료 배송"</SmallText>
        <LargeTitle>알뜰하게 집에서 장보기</LargeTitle>
        <MediumText>더 이상 발로 뛰지 않고 모바일로 편하게 집에서 장보기 완료!</MediumText>
        <FeatureList>
          <FeatureListItem>소상공인들과의 직접적인 농산물 거래.</FeatureListItem>
          <FeatureListItem>농산물 직거래 기능으로, 최소값으로 구매 가능.</FeatureListItem>
        </FeatureList>
        <CTAButton>설치하기</CTAButton>
      </RightContent>
    </SectionContainer>
  );
};

export default ThirdSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  margin-top:100px;
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 1;
  padding-left: 50px;
`;

const SmallText = styled.p`
  font-weight: 900;
  font-size: 24px;
  color: black;
  
`;

const LargeTitle = styled.h2`
  font-size: 40px;
  line-height: 55px;
  font-weight: 900;
  color: #333;
  margin-bottom: 20px;
`;

const MediumText = styled.p`
  font-size: 15px;
  color: #666;
  margin-bottom: 70px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  margin-bottom: 30px;
  max-width: 450px;
`;

const FeatureListItem = styled.li`
  ${({ theme }) => theme.fonts.roboto_medium};
  color: ${({ theme }) => theme.colors.pc1};
  font-size: 14px;
  
  padding-left: 30px;
  position: relative;
  background: #FFFFFF;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  width: 100%; /* 동일한 width 설정 */
  box-sizing: border-box; /* padding과 border를 width에 포함시키기 위해 설정 */
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    color: #4CAF50;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CTAButton = styled.button`
  background-color: #10A36B;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  
  margin-top: 20px;
  padding-left: 30px;
  position: relative;  
  border-radius: 10px;
  margin-bottom: 20px;
  max-width: 450px;
  width: 100%; /* 동일한 width 설정 */
  box-sizing: border-box; 

  &:hover {
    background-color: #45a049;
  }
`;

const PhoneImageContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 나란히 배열하고 간격을 자동으로 조정 */
  align-items: center;
  position: relative;
  width: 600px; /* 컨테이너 너비를 조정 */
  height: 500px;
`;


const StyledImage = styled.img`
  width: 230px;
  height: 440px;
  border-radius: 20px;
  
  margin-right: -1px;
  &.left {
    margin-left: 160px;
    bottom: 20px;
    z-index: 1;
  }

`;


const StyledImg = styled.img`
  width: 180px;
  height: auto;
  position: absolute;
  bottom: 0;

  &.left {
    right: 380px;
    bottom: 20px;
    z-index: 1;
  }

`;