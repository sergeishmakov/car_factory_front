import { useState, useCallback } from 'react';
import has from 'lodash/has';
import { isFile } from '../utils/is-file';

export function useFileUploader(initialValue, isMultiple) {
  const [uploadedFiles, setUploadedFiles] = useState(getInitialState(initialValue));

  const upload = useCallback(
    files => {
      isFiles(files);
      const decoratedFiles = files.map(file => {
        return { file, fileUrl: URL.createObjectURL(file) };
      }); 
      const result = isMultiple ? [
        ...uploadedFiles,
        ...decoratedFiles
      ] : decoratedFiles;
      setUploadedFiles(result);
      return result;
    },
    [uploadedFiles, isMultiple]
  );

  const deleteFile = useCallback(
    url => {
      const result = uploadedFiles.map(file => {
        if (file.fileUrl === url) return { ...file, _destroy: true };
        return file;
      });

      setUploadedFiles(result);
      return result;
    },
    [uploadedFiles]
  );

  return { deleteFile, upload, uploadedFiles };
}

function isFiles(files) {
  if (!files.every(isFile)) {
    throw new Error('Данная функция работает только с файлами');
  }
}

function getInitialState(value) {
  if (Array.isArray(value)) return value;
  if (has(value, 'fileUrl')) return [value];
  return [];
}
