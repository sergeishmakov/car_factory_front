import { useState } from 'react';
import { useLocation } from 'react-router';

import { Tab } from './components/Tab';
import { Content, Container, Header } from './styles';

export function Nootebook({ tabs, tabsContent }) {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <Container>
      <Header>
        {tabs.map((tab, index) => (
          <Tab key={index} tab={tab} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        ))}
      </Header>
      <Content>{renderContent(currentTab, tabsContent)}</Content>
    </Container>
  );
}

function renderContent(tab, content) {
  return content[tab];
}
