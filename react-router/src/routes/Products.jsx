export default function Products(){
    const products = [
        {id: 1, name: 'Banana', price: 8},
        {id: 2, name: 'Laranja', price: 9},
        {id: 3, name: 'Melancia', price: 14}
    ]
    return (
        <div>
            {products.map((prod) => (
                <ul key={prod.id} style={{listStyle: 'nome'}}>
                    <li>Nome : {prod.name}</li>
                    <li>Preço: R$ {prod.price}</li>
                    <li><Link to={`/products/${ prod.id }/info`}>Mais informações</Link></li>
                    <li><hr /></li>
                </ul>
            ))}
        </div>
    )
}