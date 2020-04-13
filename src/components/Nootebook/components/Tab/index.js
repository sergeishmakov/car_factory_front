import { useCallback } from 'react';

import { Container } from './styles';

export function Tab({ tab, currentTab, setCurrentTab }) {
  const { id, title } = tab;

  const handleClick = useCallback(() => {
    setCurrentTab(id);
  });

  return (
    <Container checked={id === currentTab} onClick={handleClick}>
      {title}
    </Container>
  );
}
