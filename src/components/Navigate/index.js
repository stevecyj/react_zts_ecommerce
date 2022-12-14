import { Nav, Avatar, Dropdown, Icon } from '@douyinfe/semi-ui';
import {
  IconStar,
  IconUser,
  IconSetting,
  IconEdit,
} from '@douyinfe/semi-icons';
import OIcon from '@/assets/images/o-svg.js';
import SearchInput from '../Input/Search';

const AppNav = () => {
  return (
    <div style={{ width: '100%' }}>
      <Nav
        mode={'horizontal'}
        items={[
          { itemKey: 'user', text: '用户管理', icon: <IconUser /> },
          { itemKey: 'union', text: '活动管理', icon: <IconStar /> },
          {
            itemKey: 'approve-management',
            text: '审批管理',
            icon: <IconEdit />,
            items: [
              '入驻审核',
              {
                itemKey: 'operation-management',
                text: '运营管理',
                items: ['人员管理', '人员变更'],
              },
            ],
          },
          {
            text: '任务平台',
            icon: <IconSetting />,
            itemKey: 'job',
            items: ['任务管理', '用户任务查询'],
          },
        ]}
        onSelect={(key) => console.log(key)}
        header={{
          style: { marginRight: '48vw' },
          logo: <Icon svg={<OIcon />} />,
          text: 'otpyrc',
          children: <SearchInput></SearchInput>,
        }}
        footer={
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
            <span>Bytedancer</span>
          </Dropdown>
        }
      />
    </div>
  );
};

export default AppNav;
