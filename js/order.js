async function getOrderList() {
  const listApiUrl = "https://5683-14-39-99-50.ngrok-free.app/shop/order/";

  //http method : GET
  const response = await fetch(listApiUrl);
  const orderList = await response.json();
  console.log(orderList);
  const tbody = document.querySelector("#orderListTable tbody");
  orderList.forEach((order) => {
    const tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = order.id;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = order.product.korean_name;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = order.weight;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = order.grind;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = order.created_at;
    tr.appendChild(td);

    tbody.appendChild(tr);
  });
}

/**
 * [
    {
        "id": 1,
        "weight": 200,
        "grind": "\ud640\ube48",
        "product": {
            "id": 1,
            "korean_name": "\ucf54\uc2a4\ud0c0\ub9ac\uce74 \uadf8\ub77c\ub2c8\ud1a0\uc2a4 \ub370 \uc624\ub974\ud2f0\uc2a4 2000"
        },
        "created_at": "2023-06-19T02:19:09.809Z"
    },
    {
        "id": 2,
        "weight": 200,
        "grind": "holebean",
        "product": {
            "id": 1,
            "korean_name": "\ucf54\uc2a4\ud0c0\ub9ac\uce74 \uadf8\ub77c\ub2c8\ud1a0\uc2a4 \ub370 \uc624\ub974\ud2f0\uc2a4 2000"
        },
        "created_at": "2023-06-20T12:32:35.779Z"
    },
    {
        "id": 3,
        "weight": 500,
        "grind": "holebean",
        "product": {
            "id": 2,
            "korean_name": "\uacfc\ud14c\ub9d0\ub77c \uc2e4\ubca0\ub9ac\uc624"
        },
        "created_at": "2023-06-20T12:44:40.733Z"
    },
    {
        "id": 4,
        "weight": 500,
        "grind": "\ud640\ube48",
        "product": {
            "id": 1,
            "korean_name": "\ucf54\uc2a4\ud0c0\ub9ac\uce74 \uadf8\ub77c\ub2c8\ud1a0\uc2a4 \ub370 \uc624\ub974\ud2f0\uc2a4 2000"
        },
        "created_at": "2023-06-21T01:44:41.635Z"
    }
]
 */
