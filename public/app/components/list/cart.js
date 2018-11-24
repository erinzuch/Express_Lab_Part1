"use strict";
const cart = {
    template: `
    <button ng-click="$ctrl.getAllItems();"></button>
    <ul>
        <li ng-repeat="obj in $ctrl.items;">
            <p>Product: {{obj.product}}</p> 
            <p>Price: {{obj.price}}</p>
            <p>Quantity: {{obj.quantity}}</p>
        </li>
    </ul>

`,
    controller: ["CartService", function (CartService) {
        const vm = this;
        function updateItems(result) {
            vm.getAllItems = result.data; 
        }
        CartService.getAllItems().then((updateItems));

        // vm.getAllItems = () => {
        //     CartService.getAllItems().then((response) => {
        //         vm.items = response.data;
        //         console.log(vm.items);
        //     })
        vm.updateItem = (editedItem) => {
            MainService.updateItems().then((updateItems))
        }; 

        vm.addItem = (newItem) => {
            MainService.addItem().then((updateItems))
        };

        vm.deleteItem = (id) => {
            MainService.deleteItem().then((updateItems))
        }; 

        }

    ]};

angular
    .module("App")
    .component("cart", cart)