
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { createFormField } from '../../utils/create-form-field';
import { Container, Dropzone, Input } from './styles';
import { isValid } from '../../utils/is-valid';
import { useFileUploader } from '../../hooks/use-file-uploader';
import { FilesList } from './components/FilesList';

export function FileUploader(props){

const {onChange, className, placeholder, isMultiple, name, value, onBlur} = props
const { deleteFile, upload, uploadedFiles } = useFileUploader(value, isMultiple)

  const onDrop = useCallback(async acceptedFiles => {
   const files = await upload(acceptedFiles);
    onChange(files)
    onBlur();
  }, [onBlur, upload, onChange])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <Container>
    <Dropzone valid={isValid(props)} {...getRootProps({className})}>
      <Input {...getInputProps({multiple: isMultiple, name})} />
      {isDragActive ?
          <p>Отпустите файлы здесь...</p> :
          <p>
            {placeholder}
          </p>}
      </Dropzone>
      <FilesList onRemove={deleteFile} files={uploadedFiles}/>
    </Container>
  )
}




export const FormFileUploader = createFormField(FileUploader);