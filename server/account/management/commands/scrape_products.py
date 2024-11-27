import requests
from lxml import html

def scrape_products():
    try:
        url = 'http://localhost:5173/consumer/home'
        response = requests.get(url)
        response.raise_for_status()  # Raise HTTPError for bad responses
        tree = html.fromstring(response.content)

        # Example XPATH selectors
        product_names = tree.xpath('//div[@class="product-name"]/text()')
        product_prices = tree.xpath('//span[@class="product-price"]/text()')

        # Ensure both lists are of equal length
        if len(product_names) != len(product_prices):
            print("Mismatch in product names and prices count.")
            return []

        products = []
        for name, price in zip(product_names, product_prices):
            try:
                # Clean price (remove currency symbols and spaces) and convert to float
                cleaned_price = float(price.replace('$', '').strip())
                products.append({'name': name.strip(), 'price': cleaned_price})
            except ValueError:
                # Skip products with invalid prices
                print(f"Skipping product due to invalid price: {name}, {price}")
                continue

        return products
    
    except requests.RequestException as e:
        print(f"Error fetching products: {e}")
        return []

# Example usage
if __name__ == "__main__":
    products = scrape_products()
    if products:
        for product in products:
            print(f"Name: {product['name']}, Price: ${product['price']}")
