import { Link } from "react-router-dom";
import { Nav, Avatar, Dropdown, Icon, Col, Row } from "@douyinfe/semi-ui";
import styled from "@emotion/styled";
import OIcon from "@/assets/images/o-svg.js";
import SearchInput from "@/components/Navigate/SearchInput";
import SwitchModeButton from "@/components/Navigate/SwitchModeButton";
import FooterList from "@/components/Navigate/FooterList";

const SNav = styled(Nav)`
  margin-bottom: 10px;

  & .semi-navigation-sub-wrap .semi-navigation-sub-title,
  .semi-navigation-item {
    font-size: 16px;
  }

  & ::placeholder {
    color: var(--semi-color-text-0) !important;
  }

  & li:nth-child(4) {
    background: linear-gradient(90deg, #1199fa, #11d0fa);
    border-radius: 4px;
    line-height: 22px;
    padding: 8px 24px;
  }

  & li:nth-child(4):hover {
    cursor: pointer;
  }

  & .semi-navigation-list-wrapper {
    margin-left: 10px;
  }

  & .semi-navigation-footer {
    padding: 15px 0;
    margin-right: 20px;
  }
`;

const AppNav = () => {
  return (
    <div className="grid">
      <Row>
        <Col lg={{ span: 24 }}>
          <div style={{ width: "100%" }}>
            <SNav
              renderWrapper={({ itemElement, isSubNav, isInSubNav, props }) => {
                const routerMap = {
                  marketplace: "/marketplace",
                  drop: "/drop",
                };
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={routerMap[props.itemKey]}
                  >
                    {itemElement}
                  </Link>
                );
              }}
              mode={"horizontal"}
              items={[
                { itemKey: "marketplace", text: "市場" },
                { itemKey: "drop", text: "Drop" },
                {
                  itemKey: "brand",
                  text: "品牌",
                  items: [
                    "AVer",
                    {
                      itemKey: "operation-management",
                      text: "运营管理",
                      items: ["人员管理", "人员变更"],
                    },
                    "Phillips 86ers",
                    "Aston Martin F2",
                    "Lega Serie B",
                    "DRESSY",
                    "LIGHT METAL",
                    "LA Queens",
                    "Taichung Saint-Germain",
                    "FFC",
                    "Devil City FC",
                    "Otpycr.com",
                    "DeFi The Movie",
                    "Visa",
                  ],
                },
                {
                  text: "創作",
                  itemKey: "create",
                },
              ]}
              onSelect={(key) => console.log(key)}
              style={{ color: "var(--semi-color-text-0)" }}
              header={{
                logo: <Icon svg={<OIcon />} />,
                text: "otpyrc",
                link: "/nft",
                children: <SearchInput></SearchInput>,
              }}
              footer={
                <>
                  <FooterList />
                  <Dropdown
                    position="bottomRight"
                    render={
                      <Dropdown.Menu>
                        <Dropdown.Item>详情</Dropdown.Item>
                        <Dropdown.Item>退出</Dropdown.Item>
                      </Dropdown.Menu>
                    }
                  >
                    <Avatar
                      size="small"
                      color="light-blue"
                      style={{ margin: 4 }}
                    >
                      BD
                    </Avatar>
                    <span style={{ marginRight: 10 }}>Bytedancer</span>
                  </Dropdown>
                  <SwitchModeButton></SwitchModeButton>
                </>
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppNav;
