function scrapeTrendyolCoupons() {
  let coupons = [];

  // `product-badge coupon-discount` sınıfına sahip öğeleri buluyoruz
  document.querySelectorAll(".product-badge.coupon-discount .name").forEach((el) => {
    const couponText = el.textContent.trim();
    const couponValue = parseInt(couponText.replace("TL Kupon", "").trim());

    if (!isNaN(couponValue)) {
      coupons.push({
        text: couponText,
        value: couponValue
      });
    }
  });

  // Kuponları büyükten küçüğe doğru sıralıyoruz
  coupons.sort((a, b) => b.value - a.value);

  // Kuponları popup'a gönderiyoruz
  chrome.runtime.sendMessage({ action: "showCoupons", coupons: coupons });
}

scrapeTrendyolCoupons();
