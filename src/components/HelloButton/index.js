import { Button, Toast } from '@douyinfe/semi-ui';

const HelloButton = () => {
  return (
    <>
      <Button onClick={() => Toast.warning({ content: 'welcome' })}>
        Hello Semi
      </Button>
    </>
  );
};

export default HelloButton;
