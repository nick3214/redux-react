const product_controller = require('./controllers/productController')

module.exports = (app) => {

    app.get("/api/product",                         product_controller.getData);
    app.post("/api/product/save",                   product_controller.saveData);
    app.put("/api/product/update/:id",              product_controller.updateData);
    app.delete("/api/product/delete/:id",           product_controller.deleteData);
}