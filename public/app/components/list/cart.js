"use strict";
const cart = {
    template: `
    <form ng-submit="$ctrl.postItem(newProduct)"> 
        <input ng-model="newProduct.product" placeholder="product">
        <input ng-model="newProduct.price" placeholder="price">
        <input ng-model="newProduct.quantity" placeholder="quantity">
        <button>Add</button>
    </form
    <section class="list">
    <ul>
        <li ng-repeat="obj in $ctrl.productList;">
            <p>Product: {{obj.product}}</p> 
            <p>Price: {{obj.price}}</p>
            <p>Quantity: <input ng-model="obj.quantity" ng-blur="$ctrl.updateList(obj)"></p>
            <button ng-click="$ctrl.deleteItem(obj.id)">x</button>
        </li>
    </ul>
    </section>

`,
    controller: ["CartService", function (CartService) {
        const vm = this;
        // function calls data from our service (get items)
        function updateList(result) { 
            vm.productList = result.data; 
        }
        CartService.getItems().then(updateList);

        //posts data to our service which sends to server 
        vm.postItem = (newItem) => {
            console.log(newItem);
            CartService.postItems(newItem).then(updateList); 
        }

        //delete item from our list
        vm.deleteItem = (id) => {
            CartService.deleteItems(id).then(updateList); 
        }

        //update an item from our list
        vm.updateList = (updateObject) => {
            // console.log("clicked");
            // console.log(updateObject); 
            CartService.updateItems(updateObject).then(updateList); 
        }



        // CartService.getItems().then(items);

        // function updateItems(result) {
        //     vm.getAllItems = result.data; 
        // };

        // vm.getAllItems = () => {
        //     CartService.getItems().then(updateItems);
        //     console.log(updateItems);

        // };

        // vm.updateItem = (editedItem) => {
        //     MainService.updateItems().then((updateItems))
        // }; 

        // vm.addItem = (newItem) => {
        //     MainService.addItem().then((updateItems))
        // };

        // vm.deleteItem = (id) => {
        //     MainService.deleteItem().then((updateItems))
        // }; 
    
    }]
};

angular
    .module("App")
    .component("cart", cart)