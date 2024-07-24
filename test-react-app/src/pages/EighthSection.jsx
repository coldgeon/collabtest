<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import mascot4 from '../assets/mascot4.png';

function EighthSection() {
  return (
    <SectionContainer>
      <LeftSection>
        <StyledImage src={mascot4} alt="mascot4"/>
      </LeftSection>
      <RightSection>
        <SmallText>&nbsp;대표 방유찬</SmallText>
        <SmallText>&nbsp;이메일&nbsp;:&nbsp;kdoo9350@naver.com</SmallText>
        <SmallText>&nbsp;연락처&nbsp;:&nbsp;010-9350-8862</SmallText>
        <SmallText>&nbsp;주소&nbsp;:진주시&nbsp;진주대로&nbsp;501&nbsp;508호</SmallText>
      </RightSection>
    </SectionContainer>
  );
};

export default EighthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 50px 0;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: -190px; 
  margin-right: 100px; 
`;

const SmallText = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
  text-align: right;
`;

const StyledImage = styled.img`
  width: 250px;
  height: 200px;
  margin-left: 150px; 
  margin-bottom: 300px;
`;
=======
import styled from 'styled-components';

function EighthSection() {
  return (
    <SectionContainer>
      <LeftSection>
        <PlaceholderText>[애호박 이미지]</PlaceholderText>
      </LeftSection>
      <RightSection>
        <SmallText>대표 방유찬</SmallText>
        <SmallText>이메일 : Kdoo9350@naver.com</SmallText>
        <SmallText>연락처 : 010-9350-8862</SmallText>
        <SmallText>주소 : 진주시 진주대로 501 508호</SmallText>
      </RightSection>
    </SectionContainer>
  );
}

export default EighthSection;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SmallText = styled.p`
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
`;

const PlaceholderText = styled.div`
  background-color: rgba(224, 224, 224, 0.9);
  color: #333;
  padding: 10px;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  border: 1px dashed #666;
  margin: 10px;
`;
>>>>>>> b794e7a422abb38be30aaeb8028fc1d35454921e
