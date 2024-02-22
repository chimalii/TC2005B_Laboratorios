let productosDiferentes = new Set();

function addToCart(product, price) {
  const quantityInput = document.getElementById(`${product}-quantity`);
  const quantity = parseInt(quantityInput.value);
  if (isNaN(quantity) || quantity < 0) {
    alert("Por favor ingresa una cantidad válida.");
    return;
  }

  const total = quantity * price;
  const iva = total * 0.16;

  const totalContainer = document.getElementById("total-container");
  const totalPriceElement = document.getElementById("total-price");
  const ivaElement = document.getElementById("iva");
  const discountInfo = document.getElementById("discount-info");
  const discountAmount = document.getElementById("discount-amount");

  let totalProductos = 0;

  // Actualizar precio e IVA
   if (!productosDiferentes.has(product)) {
    productosDiferentes.add(product);
  }

  if (quantity > 0) {
    totalProductos += productosDiferentes.size;
  } else {
    productosDiferentes.delete(product);
    totalProductos = productosDiferentes.size;
  }

  let discount = 0;

  totalPriceElement.textContent = parseInt(totalPriceElement.textContent) + total;
  ivaElement.textContent = parseInt(ivaElement.textContent) + iva;

  // Aplicar descuento si se compran los tres productos diferentes
  if (totalProductos === 3) {
    discount = parseInt(totalPriceElement.textContent) * 0.25;
    discountInfo.textContent = "¡25% de descuento aplicado!";
    discountAmount.textContent = `Descuento: $${discount}`;
  } else {
    discountInfo.textContent = "";
    discountAmount.textContent = "";
  }

  totalContainer.scrollIntoView();
}
