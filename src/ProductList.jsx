export default function ProductList() {
    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name} - ${product.price} - {product.discription}
                </li>
            ))}
        </ul>
    );
}