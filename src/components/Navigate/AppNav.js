import { Nav, Avatar, Dropdown, Icon } from '@douyinfe/semi-ui';
import styled from '@emotion/styled';
import OIcon from '@/assets/images/o-svg.js';
import SearchInput from '@/components/Navigate/SearchInput';
import SwitchModeButton from '@/components/Navigate/SwitchModeButton';
import FooterList from '@/components/Navigate/FooterList';

const SNav = styled(Nav)`
  margin-bottom: 100px;
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
    margin-left: 38vw;
  }
  & .semi-navigation-footer {
    padding: 15px 0;
    margin-right: 20px;
  }
`;

const AppNav = () => {
  return (
    <div style={{ width: '100%' }}>
      <SNav
        mode={'horizontal'}
        items={[
          { itemKey: 'market', text: '市場' },
          { itemKey: 'drop', text: 'Drop' },
          {
            itemKey: 'brand',
            text: '品牌',
            items: [
              'AVer',
              {
                itemKey: 'operation-management',
                text: '运营管理',
                items: ['人员管理', '人员变更'],
              },
              'Phillips 86ers',
              'Aston Martin F2',
              'Lega Serie B',
              'DRESSY',
              'LIGHT METAL',
              'LA Queens',
              'Taichung Saint-Germain',
              'FFC',
              'Devil City FC',
              'Otpycr.com',
              'DeFi The Movie',
              'Visa',
            ],
          },
          {
            text: '創作',
            itemKey: 'create',
          },
        ]}
        onSelect={(key) => console.log(key)}
        header={{
          logo: (
            <Icon
              style={{ color: 'var(--semi-color-text-2)' }}
              svg={<OIcon />}
            />
          ),
          text: 'otpyrc',
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
              <Avatar size="small" color="light-blue" style={{ margin: 4 }}>
                BD
              </Avatar>
              <span style={{ marginRight: 10 }}>Bytedancer</span>
            </Dropdown>
            <SwitchModeButton></SwitchModeButton>
          </>
        }
      />
    </div>
  );
};

export default AppNav;
