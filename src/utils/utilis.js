export const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

 export function calculateDiscount(price, discount, discountType) {
  let discountPrice;
  if (discountType == "price") {
    discountPrice = price - discount;
    return discountPrice;
  } else {
    discountPrice = Math.round(price * (discount / 100));
    return Math.round(price - discountPrice);
  }
}