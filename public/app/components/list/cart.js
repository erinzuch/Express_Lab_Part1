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
    controller: ["CartService", function(CartService) {
        const vm = this; 
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                console.log(response); 
                vm.items = response.data; 
                console.log(vm.items);
            })
        }
    }]


};

angular
    .module("App")
    .component("cart", cart)