import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Container, Content } from './styles';
import { ToastContainer } from '../ToastContainer';

export function ContentLayout({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
      <ToastContainer />
    </Container>
  );
}
