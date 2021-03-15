const URL =
  "https://gist.githubusercontent.com/jhonatan89/719f8a95a8dce961597f04b3ce37f97b/raw/4b7f1ac723a14b372ba6899ce63dbd7c2679e345/products-ecommerce";

const numberWithCommas = (x) => {
  return "$ " + x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
};
// eslint-disable-next-line no-unused-vars
const handleSearch = async () => {
  let cat = document.getElementById("search").value;
  let items = JSON.parse(window.localStorage.getItem("items"));
  window.localStorage.setItem("items", JSON.stringify(items));
  let filteredItems = [...items];
  if (cat) {
    filteredItems = filteredItems.filter((item) => {
      return item.categories.find((category) => category === cat) !== undefined;
    });
  }
  let html = "";
  filteredItems.forEach((item) => {
    html += `<div class="cardItem" style="width: 100%">
    <a class="navig" href="itemDetail.html#${item.id}">
    <img style="width: 180px; height: 180px;" src="${item.picture}" class="item" alt="holiwis">
    </a>
    <div class="content">
      <div class="iteminfo">
        <div class="priceitem">
          <div style="width: 150px; height: 35px;">
            ${numberWithCommas(item.price.amount)}
          </div>
          ${
  item.free_shipping
    ? // eslint-disable-next-line quotes
    '<img style="width: 20px; height: 20px;" src="./Assets/Rectangle 4.png" class="item" alt="holiwis" />'
    : ""
}
        </div>
        <div class="nameitem" style="width: 500px; height: 35px;">
          ${item.title}
        </div>
      </div>
      <div style="width: 150px; height: 35px;" class="location">
        ${item.location}
      </div>
    </div>
  </div>`;
  });

  document.getElementById("container").innerHTML = html;
};

const getItems = async (filterCategories) => {
  try {
    const resitems = await fetch(URL);
    const { items } = await resitems.json();
    window.localStorage.setItem("items", JSON.stringify(items));
    let filteredItems = [...items];
    if (filterCategories) {
      filteredItems.filter((item) => {
        item.categories.find(cat === filterCategories) !== undefined;
      });
    }
    let html = "";
    filteredItems.forEach((item) => {
      html += `<div class="cardItem" style="width: 100%">
      <a class="navig" href="itemDetail.html#${item.id}">
        <img style="width: 180px; height: 180px;" src="${item.picture}" class="item" alt="holiwis">
      </a>
      <div class="content">
        <div class="iteminfo">
          <div class="priceitem">
            <div style="width: 150px; height: 35px;">
              ${numberWithCommas(item.price.amount)}
            </div>
            ${
  item.free_shipping
    ? // eslint-disable-next-line quotes
    '<img style="width: 20px; height: 20px;" src="./Assets/Rectangle 4.png" class="item" alt="holiwis" />'
    : ""
}
          </div>
          <div class="nameitem" style="width: 500px; height: 35px;">
            ${item.title}
          </div>
        </div>
        <div style="width: 150px; height: 35px;" class="location">
          ${item.location}
        </div>
      </div>
    </div>`;
    });

    document.getElementById("container").innerHTML = html;
  } catch (err) {
    window.localStorage.setItem("error", err);
  }
};
getItems();
