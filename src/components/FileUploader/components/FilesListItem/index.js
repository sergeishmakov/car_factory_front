
import { useCallback } from 'react';
import {Container, Label, Controls, DownloadButton, RemoveButton} from './styles';

export function FilesListItem({item, onRemove}){
  const { file, fileUrl } = item;

  const handleClick = useCallback(()=>{
    onRemove(fileUrl);
  }, [onRemove, fileUrl]);

  return <Container>
    <Label>{file.name}</Label>
    <Controls>
      <DownloadButton downloadUrl={fileUrl} />
      <RemoveButton  onClick={handleClick} />
    </Controls>
  </Container>
}