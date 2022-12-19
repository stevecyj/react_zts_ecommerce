import { List } from '@douyinfe/semi-ui';

const FooterList = () => {
  const data = [
    {
      title: '登入',
    },
    {
      title: '註冊',
    },
  ];
  return (
    <>
      <div style={{}}>
        <List
          dataSource={data}
          layout="horizontal"
          renderItem={(item) => (
            <List.Item
              main={
                <div>
                  <span
                    style={{
                      color: 'var(--semi-color-text-0)',
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              }
              split={false}
            />
          )}
        />
      </div>
    </>
  );
};

export default FooterList;
