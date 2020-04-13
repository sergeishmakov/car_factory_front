import styled from 'styled-components';
import { ToastContainer as Toast } from 'react-toastify';
import styles from 'react-toastify/dist/ReactToastify.css';

export const ToastContainer = styled(Toast).attrs({ position: 'top-center', autoClose: 3000 })`
  ${styles}
`;
