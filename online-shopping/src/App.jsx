import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import PageContainer from './container/PageContainer.jsx';
import Loading from './components/Loading';
import RouterConfig from './config/RouterConfig';
import Drawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { togleFunction} from './redux/basketSlice.jsx'


function App() {
  const items = useSelector((store) => store.basket.items);
  const openBasket = useSelector((store) => store.basket.openBasket);
  const dispatch = useDispatch();

  return (
    <PageContainer>
      <Drawer open={openBasket} onClose={ ()=> dispatch(togleFunction()) } anchor={'right'}>
        {
          items && items.map((item) => {
            return (
              <div key={item.id} className="basket">
                <img src={item.image} style={{width:50, height:50}} />
                <p className='title'>{item.title}</p>
                <p>{item.price}</p>
                <p>{item.count}</p>
                <button>sil</button>
              </div>
              )
          })
        }
      </Drawer>
      <Header />
      <Loading />
      <RouterConfig />
    </PageContainer>
  );
}

export default App;