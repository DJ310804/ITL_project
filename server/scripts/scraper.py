# server/scraper.py
import requests
from lxml import html

def scrape_products():
    url = 'http://localhost:5173/consumer/home'
    response = requests.get(url)
    tree = html.fromstring(response.content)

    # Example XPATH selectors
    product_names = tree.xpath('//div[@class="product-name"]/text()')
    product_prices = tree.xpath('//span[@class="product-price"]/text()')

    products = [{'name': name, 'price': price} for name, price in zip(product_names, product_prices)]
    return products
