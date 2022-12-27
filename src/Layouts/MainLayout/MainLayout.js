import { Outlet } from "react-router-dom";
import { Layout } from "@douyinfe/semi-ui";
import HelloButton from "@/components/Navigate/HelloButton";
import AppNav from "@/components/Navigate/AppNav";

const Root = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Layout className="">
      <Header>
        <AppNav></AppNav>
      </Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <div>
            <Outlet />
          </div>
          <HelloButton></HelloButton>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Root;
