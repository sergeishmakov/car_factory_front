import { useFieldValue } from "../../../../../../hooks/use-field-value";
import { ImageBase, Icon } from './styles';

export function Image(){
   const fieldValue = useFieldValue('image');
   const pictureUrl = fieldValue[0]?.fileUrl;

return <ImageBase src={pictureUrl}>{pictureUrl ? null : <Icon />}</ImageBase>;
}