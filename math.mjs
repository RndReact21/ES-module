// add 2 variable
export const add = (var1, var2) => {
  return var1 + var2;
};
// difference between 2 variable
export const diffrecence = (var1, var2) => {
  return var1 > var2 ? var1 - var2 : var2 - var1;
};

export default {
  add,
  diffrecence,
};
