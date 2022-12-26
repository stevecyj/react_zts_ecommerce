import { Layout } from '@douyinfe/semi-ui';
import HelloButton from '@/components/Navigate/HelloButton';
import AppNav from '@/components/Navigate/AppNav';

const MarketplacePage = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (<Layout className="components-layout-demo">
    <Header>
      <AppNav></AppNav>
    </Header>
    <Layout>
      <Sider>Sider</Sider>
      <Content>
        Content
        <div>this is MarketplacePage</div>
        <HelloButton></HelloButton>
      </Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>);
};

export default MarketplacePage;
