exports.getDate = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
  };
  return today.toLocaleDateString("en-IN", options);
};
exports.getDay = function () {
  let today = new Date();
  let options = {
    weekday: "long",
  };
  return today.toLocaleDateString("en-IN", options);
};
