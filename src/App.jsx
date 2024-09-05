import productData from './productData.json';
import Produto from './Produto';

function App() {
 
  return (
    <div>
      <Produto product={productData} />
    </div>
    
  )
}

export default App
