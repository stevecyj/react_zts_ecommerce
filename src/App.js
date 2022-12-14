import { Button, Toast } from '@douyinfe/semi-ui';
import MarketplacePage from './pages/MarketplacePage';

function App() {
  return (
    <>
      <Button onClick={() => Toast.warning({ content: 'welcome' })}>
        Hello Semi
      </Button>
      <MarketplacePage></MarketplacePage>
    </>
  );
}

export default App;
