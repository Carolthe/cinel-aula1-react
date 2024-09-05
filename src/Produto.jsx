export default function Produto ({product}){
    return(
        <div className='card'>
    <img src={product.relogio} />
    <h1 className='name' >{product.name}</h1>
   <p className='discription'>{product.descricao}</p> 
    <p className='price'>{product.preço}</p>
   <button className='button'> {product.carrinho} </button>
    </div>
    )
}