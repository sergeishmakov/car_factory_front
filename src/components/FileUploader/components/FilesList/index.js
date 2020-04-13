import {FilesListItem} from '../FilesListItem'

export function FilesList({ files, onRemove }){
  return files.filter((f)=>!f._destroy).map((item, index) => 
   <FilesListItem key={index} onRemove={onRemove} item={item}/>
  )
}