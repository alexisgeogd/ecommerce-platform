export default function Admin() {
    const [products, setProducts] = useState([]);

    const handleDelete = (productId) => {
        axios.delete(`/api/admin/products/${productId}`)
            .then(() => setProducts(products.filter(p => p.id !== productId)));
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <button onClick={() => axios.post('/api/admin/products', { name: "New Product", price: 10 })}>
                Add Product
            </button>
            {products.map(product => (
                <div key={product.id}>
                    {product.name} <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
