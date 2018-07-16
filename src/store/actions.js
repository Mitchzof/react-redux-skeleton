/*
  Redux Actions
*/

//Preloading action for SSR
export const preload = (data) => ({
  type: "PRELOAD_DATA",
  data: data
});
