const BASE_URL = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");
//intl
//interancionization
//1. dat formato a fechas
//2. dra fomato a monedas
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("EN", {
    style: "currency",
    currency: "GBP",
  }).format(price);
  return newPrice;
};
const obtenerNombre = async function () {
  const respuesta = await fetch(`${BASE_URL}/api/avo`);
  const respuesta2 = await respuesta.json();
  const todosLosItems = [];
  respuesta2.data.forEach((item) => {
    /* console.log(item.name); */
    //crear la image que esta en la API
    const image = document.createElement("img");
    image.src = `${BASE_URL}${item.image}`;

    //crear el titulo que esta en la API
    const title = document.createElement("h2");
    title.textContent = item.name;
    title.className = "muy-grande";
    title.className = "avocado-card__info";

    //crear el precio que esta en la API
    const price = document.createElement("div");
    price.className = "avocado-card__price";
    price.textContent = formatPrice(item.price);

    const container = document.createElement("div");
    container.className = "avocado-card";
    container.append(image, title, price);
    todosLosItems.push(container);
  });
  appNode.append(...todosLosItems);
};
obtenerNombre();
