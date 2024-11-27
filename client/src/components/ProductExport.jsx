// client/src/components/ProductExport.jsx
import React, { useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';

const ProductExport = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/user/scrape_products/');
                const data = await response.json();
                setProducts(data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const headers = [
        { label: 'Name', key: 'name' },
        { label: 'Price', key: 'price' }
    ];

    return (
        <div>
            {/* Displaying the products in a table */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No products available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Export button for CSV */}
            <CSVLink 
                data={products} 
                headers={headers} 
                filename={"products.csv"}
                className="btn btn-primary"
            >
                Export Products to CSV
            </CSVLink>
        </div>
    );
};

export default ProductExport;
