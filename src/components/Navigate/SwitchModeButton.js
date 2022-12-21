import {Button} from '@douyinfe/semi-ui';
import {IconMoon} from '@douyinfe/semi-icons';

const switchMode = () => {
  const body = document.body;
  if (body.hasAttribute('theme-mode')) {
    body.removeAttribute('theme-mode');
  } else {
    body.setAttribute('theme-mode', 'dark');
  }
};

const SwitchModeButton = () => {
  return (
    <>
      <Button
        icon={
          <IconMoon
            style={{fontSize: 35, color: 'var(--semi-color-text-2)'}}
          />
        }
        theme="borderless"
        style={{marginRight: 10}}
        onClick={switchMode}
      />
    </>
  );
};

export default SwitchModeButton;
