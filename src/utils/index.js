export function currency(number) {
  return new Intl.NumberFormat("de-DE", {
    currency: "VND",
  }).format(number);
}
