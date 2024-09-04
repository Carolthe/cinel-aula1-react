

function App() {
 
  const produto = {
    "relogio":"https://dionamite.academy/watch-diogo.png",
    "name": "GARNIER",
    "descricao": "Garrie Pure Active Micellar Cleansing Water. 125ml",
    "preço": "$60",
    "carrinho": "ADD TO CART"
  }

  return (
    <div className='card'>
    <img src={produto.relogio} />
    <h1 className='name' >{produto.name}</h1>
   <p className='discription'>{produto.descricao}</p> 
    <p className='price'>{produto.preço}</p>
   <button className='button'> {produto.carrinho} </button>

    </div>
  )
}

export default App
