chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "showCoupons" && request.coupons) {
      const couponsDiv = document.getElementById("coupons");
      couponsDiv.innerHTML = "";
  
      request.coupons.forEach(coupon => {
        const couponElement = document.createElement("div");
        couponElement.innerHTML = `
          <p><strong>Kupon:</strong> ${coupon.text}</p>
          <p><strong>Değer:</strong> ${coupon.value} TL</p>
          <hr>
        `;
        couponsDiv.appendChild(couponElement);
      });
    }
  });
  