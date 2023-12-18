const Enviroment = () => {
  if (process.env.NODE_ENV === "development") {
    console.log("Đây là môi trường phát triển");
    return `http://localhost:3333`;
  } else if (process.env.NODE_ENV === "production") {
    console.log("Đây là môi trường sản phẩm");
    return "https://duantotnghiep-gsy4.onrender.com";
  } else {
    return "https://duantotnghiep-gsy4.onrender.com";
  }
};

module.exports = { Enviroment };
