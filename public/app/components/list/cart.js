"use strict";
const cart = {
    template: `
    <button ng-click="$ctrl.getAllItems();"></button>
    <ul>
        <li ng-repeat="obj in $ctrl.items;">{{obj.text}} </li>
    </ul>

`,
    controller: ["CartService", function(CartService) {
        const vm = this; 
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                console.log(response); 
                vm.items = response.data; 
            })
        }
    }]


};

angular
    .module("App")
    .component("cart", cart)