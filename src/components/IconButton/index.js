import { useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Container, InvisibleLink } from './styles';

export function IconButton({ icon, onClick, disabled, type, className, children, downloadUrl }) {
  const linkRef = useRef();

  const handleClick = useCallback(
    e => {
      if (downloadUrl) return linkRef?.current?.click();
      return onClick(e);
    },
    [downloadUrl, onClick]
  );

  return (
    <Container>
      <Button className={className} disabled={disabled} type={type} onClick={handleClick}>
        {icon ? <FontAwesomeIcon icon={icon} /> : <div />}
      </Button>
      {children}
      <InvisibleLink ref={linkRef} href={downloadUrl} download />
    </Container>
  );
}
