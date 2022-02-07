import styled from 'styled-components';

export const ImageControlBox = styled.div.attrs({} as { url: string })`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: '""';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ url }) => url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(8px) brightness(0.8);
  }

  img {
    position: relative;
    z-index: 5;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
