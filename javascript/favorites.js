let favorites = JSON.parse(window.localStorage.getItem("favorites"));
const numberWithCommas = (x) => {
  return "$ " + x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
};

// eslint-disable-next-line no-unused-vars
const handleFavorites = () => {
  let toDelete = JSON.parse(window.localStorage.getItem("delete"));
  toDelete.sort(function (a, b) {
    return parseInt(b.split("/")[1]) - parseInt(a.split("/")[1]);
  });
  let favorites = JSON.parse(window.localStorage.getItem("favorites"));
  let newfavorites = [...favorites];
  toDelete.forEach((idPos) => {
    let pos = parseInt(idPos.split("/")[1]);
    newfavorites.splice(pos, 1);
  });

  window.localStorage.setItem("delete", JSON.stringify([]));
  window.localStorage.setItem("favorites", JSON.stringify(newfavorites));
  window.location.reload();
};
const handleAvailability = () => {
  let toDelete = JSON.parse(window.localStorage.getItem("delete"));

  if (toDelete && toDelete.length > 0) {
    document.getElementById("deleteFavorites").disabled = false;
  } else {
    document.getElementById("deleteFavorites").disabled = true;
  }
};

// eslint-disable-next-line no-unused-vars
const allFavoritesToDelete = () => {
  let toDelete = JSON.parse(window.localStorage.getItem("delete"));
  let toDelete2 = [];
  if (toDelete.length !== favorites.length) {
    favorites.forEach(({ id }, i) => {
      toDelete2.push(`${id}/${i}`);
    });
  }
  window.localStorage.setItem("delete", JSON.stringify(toDelete2));
  window.localStorage.setItem("all", JSON.stringify(toDelete2));


  window.location.reload();
};

let html = "";
// eslint-disable-next-line no-unused-vars
const handleFav = (param) => {
  let toDelete = JSON.parse(window.localStorage.getItem("delete"));
  if (toDelete) {
    let newDelete = toDelete.filter((id) => id !== param);
    if (toDelete.length === newDelete.length) {
      window.localStorage.setItem("delete", JSON.stringify([...toDelete, param]));
    } else {
      window.localStorage.setItem("delete", JSON.stringify(newDelete));
    }
  } else {
    window.localStorage.setItem("delete", JSON.stringify([param]));
  }
  window.location.reload();
};

handleAvailability();
const ischeckedAll = () => {
  let toDelete = JSON.parse(window.localStorage.getItem("delete"));
  toDelete.length === favorites.length && favorites.length > 0
    ? (document.getElementById("flexCheckDefault").checked = true)
    : (document.getElementById("flexCheckDefault").checked = false);
};
ischeckedAll();
const ischecked = (param) => {
  let toDelete = JSON.parse(window.localStorage.getItem("delete"));
  if (toDelete && toDelete.length > 0) {
    let exist = toDelete.find((id) => id == param);
    if (exist) {
      return "checked";
    } else {
      return "";
    }
  } else {
    return "";
  }
};

favorites.forEach((item, i) => {
  html += `<div class="favoriteItem">
    <div class="form-check">
      <input ${ischecked(`${item.id}/${i}`)} onClick="handleFav('${
  item.id
}/${i}')" class="form-check-input" type="checkbox" value="${item.id}" id="puto">
    </div>
    <img style="width: 180px; height: 180px;" src="${item.picture}" class="item" alt="holiwis">
    <div class="favoriteDetail">
      <div class="faovoritePrice">${numberWithCommas(item.price.amount)}
      ${
  item.free_shipping
    ? // eslint-disable-next-line quotes
    '<img style="width: 20px; height: 20px;" src="./Assets/Rectangle 4.png" class="item" alt="holiwis"/>'
    : ""
}      
      </div>
      <div class="favoriteName">${item.title}</div>
    </div>
    <a class="navig" href="itemDetail.html#${item.id}">
    <button  class="favoritePink">Ver articulo</button>
    </a>  
  </div>
</div>`;
});

document.getElementById("favoriteContainer").innerHTML = html;
ischecked();
