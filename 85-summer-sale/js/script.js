function price() {}
let totalPriceNumber = 0;
let totalfinalNumber = 0;
function addtoCart(data) {
  let productName = data.childNodes[5].innerText;
  let price = parseFloat(data.childNodes[7].childNodes[0].innerText);
  let totalPriceElement = document.getElementById("total-price");
  const productList = document.getElementById("product-list");
  const total = document.getElementById("total");
  const discount = document.getElementById("total-discount");
  let newP = document.createElement("p");
  const count = productList.childElementCount;
  newP.innerHTML = `<div class="text-black font-semibold my-1">${
    count + 1
  }. ${productName}</div>`;
  productList.appendChild(newP);
  totalPriceNumber = parseFloat(price) + parseFloat(totalPriceNumber);
  totalPriceElement.innerText = totalPriceNumber.toFixed(2);
  // total.innerText = totalPriceNumber.toFixed(2);
  if (totalPriceNumber > 0) {
    var makPbtn = document.getElementById("makePerchese");
    makPbtn.disabled = false;
    makPbtn.style.backgroundColor = "#DB2777";
    if (totalPriceNumber >= 200) {
      var couponBtn = document.getElementById("couponBtn");
      couponBtn.disabled = false;
      var couponCode = document.getElementById("couponCode");
      var code = "SELL200";
      couponCode.disabled = false;
      couponBtn.style.backgroundColor = "#DB2777";
      document.getElementById("couponBtn").addEventListener("click", () => {
        if (couponCode.value === code) {
          var discountNum = (totalPriceNumber / 100) * 20;
          discount.innerText = discountNum.toFixed(2);
          let totalfinalNumber = totalPriceNumber - discountNum;
          total.innerText = totalfinalNumber.toFixed(2);
        }
      });
    }
    document.getElementById("goHome").addEventListener("click", () => {
      location.reload();
    });
  }
}
