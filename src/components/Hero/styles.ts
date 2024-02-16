import styled from 'styled-components'

export const FormHero = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`
export const HeroContainer = styled.div`
  position: relative;
`
export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: ${(props) => props.theme.corSecundaria};

  @media (max-width: 768px) {
    font-size: 26px;
  }
`
