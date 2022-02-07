import styled from 'styled-components';

export const MediaGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 840px;
  height: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing()};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  border-color: ${({ theme }) => theme.grey[100]};
  border-style: solid;
  border-width: 1px;
  aspect-ratio: 1.5 / 1;
`;

export const Div = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  height: auto;
  margin: 0 auto;
`;
