const MOCK_DATA = {
  products: [
    {
      id: 1,
      korean_name: "코스타리카 그라니토스 데 오르티스 2000",
      english_name: "Costa Rica Granitos de Ortiz 2000",
      image_url:
        "https://m.coffeelibre.kr/web/product/big/202210/1d0ddd2e7d5a96df86a8489b4707f8b9.jpg",
      category: "싱글오리진",
      roasting: "중약배전",
      aroma: "황도, 라즈베리, 감귤, 꿀",
      description: "엄청 맛있습니다.",
      price: 20000,
      weight: [200, 500],
      grind: ["분쇄", "홀빈"],
      delivery: "택배",
      roasting_date: "2023-06-19",
    },
    {
      id: 2,
      korean_name: "과테말라 실베리오",
      english_name: "Guatemala  Silverio",
      image_url:
        "https://coffeelibre.kr/web/product/big/202306/092be6dd1e54709edbaf10ebf0dc3c23.png",
      category: "싱글오리진",
      roasting: "중강배전",
      aroma: "오렌지, 사탕수수, 밀크초콜릿, 라운드바디",
      description: "좋은 커피입니다",
      price: 14000,
      weight: [200, 500],
      grind: ["분쇄", "홀빈"],
      delivery: "택배",
      roasting_date: "2023-06-19",
    },
  ],
};

function getProducts() {
  //const responsePromise = fetch()
  const responsePromise = Promise.resolve(MOCK_DATA);

  responsePromise.then((json) => {
    console.log(json.products);
    // 상품 목록이 들어갈 div의 id로 element를 가져와서 innerHTML을 할 예정.

    let productsHtmlArray = json.map((product) => {
      return "<div>" + product.name + "</div>";
    });
    document.getElementById("products_area").innerHTML =
      productsHtmlArray.join("");
  });
}
