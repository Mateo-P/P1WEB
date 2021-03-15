let { href } = window.location;
let itemId = href.split("#")[1];
let items = JSON.parse(window.localStorage.getItem("items"));
let itemdetail = items.find((item) => item.id === itemId);

const numberWithCommas = (x) => {
  return "$ " + x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
};
const breadCrumbs = () => {
  let breadCrumb = "";
  itemdetail.categories.map((cat, i) => {
    if (i < itemdetail.categories.length - 1) {
      breadCrumb += cat + ">";
    } else {
      breadCrumb += cat;
    }
  });
  return breadCrumb;
};

const statusQuantitysell = () => {
  let condition = itemdetail.condition === "new" ? "Nuevo" : "Usado";
  return condition + " | " + itemdetail.sold_quantity;
};
const handleFavorites = () => {
  let currentfavorites = JSON.parse(window.localStorage.getItem("favorites"));
  let newFavorites = [];
  if (currentfavorites) {
    newFavorites = [...currentfavorites, itemdetail];
  } else {
    newFavorites.push(itemdetail);
  }
  window.localStorage.setItem("favorites", JSON.stringify(newFavorites));
};
let html = `
<div class="itemdetailcard">
<div class="breadCrumb">${breadCrumbs()}</div>
<img style="width: 563px; height: 520px;" src="
  ${itemdetail.picture}" class="itemdetailpicture" alt="holiwis">
<div class="itemdetaildescription">Descripción del producto</div>
<div class="itemdetailinfo" style="height: 170px;">${itemdetail.description}</div>
<div class="itemdetailstatus">
<div class="itemSell">${statusQuantitysell()}</div>
<div class="itemdetailname">
  <div class="longname">${itemdetail.title}</div>
  <div class="itemdetailprice">${numberWithCommas(itemdetail.price.amount)}</div>
  <button class="pink" type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#exampleModalCenter">Comprar</button>
  <button onClick="${handleFavorites()}" class="purple">Añadir a favoritos</button>
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Comprar pai XD
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>
`;

document.getElementById("containerItemDetail").innerHTML = html;
