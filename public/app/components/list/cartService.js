"use strict";
function CartService($http) {
    const self = this; 
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/items"
        });
    };
}


angular
.app("App")
.service("CartService", CartService)