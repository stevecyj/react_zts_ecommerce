import { Layout } from '@douyinfe/semi-ui';

const MarketplaceLayout = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className='components-layout-demo'>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MarketplaceLayout;