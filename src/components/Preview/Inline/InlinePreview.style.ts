import styled from 'styled-components';

export const PreviewContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  height: auto;
  max-height: 150px;
  overflow-x: hidden;
  aspect-ratio: 7 / 1;
  border-width: 1px;
  border-color: ${({ theme }) => theme.grey[100]};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
`;

export const InlinePreviewBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  aspect-ratio: 7 / 1;
`;

export const InlinePreviewList = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  width: max-content;
  height: 100%;
`;

export const InlinePreviewItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  width: auto;
  height: 100%;
  background: ${({ theme }) => theme.background};
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1 / 1;

  &:nth-of-type(1) {
    margin: ${({ theme }) => theme.spacing(0.5)};
    margin-left: 0;
  }

  &:nth-of-type(n + 2) {
    margin: ${({ theme }) => theme.spacing(0.5)};
  }

  img {
    height: 100%;
    transform: scale(1.5);
  }
`;

export const PreviewButton = styled.button`
  width: max-content;
  height: 100%;
  padding: ${({ theme }) => theme.spacing(0.5)};

  background: transparent;
  border: none;
  border-style: solid;
  border-width: 1px;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  border-color: ${({ theme }) => theme.primary};
  transition: 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.primary}22;
  }

  &:active {
    filter: brightness(1.5);
  }

  svg {
    color: ${({ theme }) => theme.primary};
  }
`;
