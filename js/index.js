// const MOCK_DATA = {
//   products: [
//     {
//       id: 1,
//       korean_name: "코스타리카 그라니토스 데 오르티스 2000",
//       english_name: "Costa Rica Granitos de Ortiz 2000",
//       image_url:
//         "https://m.coffeelibre.kr/web/product/big/202210/1d0ddd2e7d5a96df86a8489b4707f8b9.jpg",
//       category: "싱글오리진",
//       roasting: "중약배전",
//       aroma: "황도, 라즈베리, 감귤, 꿀",
//       description: "엄청 맛있습니다.",
//       price: 20000,
//       weight: [200, 500],
//       grind: ["분쇄", "홀빈"],
//       delivery: "택배",
//       roasting_date: "2023-06-19",
//     },
//     {
//       id: 2,
//       korean_name: "과테말라 실베리오",
//       english_name: "Guatemala  Silverio",
//       image_url:
//         "https://coffeelibre.kr/web/product/big/202306/092be6dd1e54709edbaf10ebf0dc3c23.png",
//       category: "싱글오리진",
//       roasting: "중강배전",
//       aroma: "오렌지, 사탕수수, 밀크초콜릿, 라운드바디",
//       description: "좋은 커피입니다",
//       price: 14000,
//       weight: [200, 500],
//       grind: ["분쇄", "홀빈"],
//       delivery: "택배",
//       roasting_date: "2023-06-19",
//     },
//   ],
// };

//"https://00dc-14-39-99-50.ngrok-free.app/shop/product/"
async function getProducts() {
  console.log("상품목록조회");
  const productListApiUrl =
    "https://5683-14-39-99-50.ngrok-free.app/shop/product/";

  //http method : GET
  const response = await fetch(productListApiUrl);
  const jsonObject = await response.json();
  const products = jsonObject.products;
  console.log("조회된 상품의 목록", products);
  console.log("조회된 상품의 목록 갯수", products.length); // 2개

  //조회된 상품 목록을 가지고 DOM을 생성해서 html에 넣기.
  const divRow = document.querySelector("#productsSection > div.row");
  console.log("row div", divRow);

  const htmlArray = products.map((product) => {
    console.log("상품 단건", product);

    return `<div class="col">
    <div class="card" style="width: 18rem">
      <img
        src="${product.image_url}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">${product.korean_name}</h5>
        <p class="card-text">
          ${product.description}
        </p>
        <a href="detail.html?product_id=${product.id}" class="btn btn-primary"
          >주문하러가기</a
        >
      </div>
    </div>
  </div>`;

    // const divCol = document.createElement("div");
    // divCol.className = "col";

    // const divCard = document.createElement("div");
    // divCard.className = "card";
    // divCard.style.width = "18rem";

    // const img = document.createElement("img");
    // img.src = product.image_url;
    // img.className = "card-img-top";

    // const cardBody = document.createElement("div");
    // cardBody.className = "card-body";

    // const h5 = document.createElement("h5");
    // h5.className = "card-title";
    // h5.innerText = product.korean_name;

    // cardBody.appendChild(h5);

    // divCard.appendChild(img);
    // divCard.appendChild(cardBody);

    // divCol.appendChild(divCard);

    // divRow.appendChild(divCol);

    /**
     * <div class="col">
  <div class="card" style="width: 18rem">
    <img
      src="img url"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">한글명</h5>
      <p class="card-text">
        설명 description
      </p>
      <a href="detail.html?product_id=1" class="btn btn-primary"
        >주문하러가기</a
      >
    </div>
  </div>
</div>
     */

    // <div class="col">코스타리카</div>
  });

  console.log("htmlArray", htmlArray);

  document.querySelector("#productsSection > div.row").innerHTML =
    htmlArray.join("");
}
