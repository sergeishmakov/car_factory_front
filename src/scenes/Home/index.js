import { ContentLayout } from '../../components/ContentLayout';
import { Cards } from './components/Cards';
import { Banner } from './components/Banner';
import { Container, Header, Title, Content } from './styles';

export default function Home() {
  return (
    <ContentLayout>
      <Container>
        <Header>
          <Title>Autovito - продажа автомобилей</Title>
        </Header>
        <Content>
          <Banner />
          <Cards />
        </Content>
      </Container>
    </ContentLayout>
  );
}
