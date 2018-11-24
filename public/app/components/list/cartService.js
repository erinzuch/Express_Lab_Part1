"use strict";
function CartService($http) {
    const self = this; 
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/items"
        });
    };
    self.postItems = (newItem) => {
        return $http({
            url: "/items",
            method: "POST",
            data: newItem 
        });
    };
    self.deleteItems = (id) => {
        return $http({
            url: `/items${id}`,
            method: "DELETE"
        }); 
    };
    self.updateItems = (editedItem) => {
        return $http({
            url: `/phrases/${editedItem.id}`,
            method: "PUT",
            data: editedItem
        })
    }
    
    
}


angular
.module("App")
.service("CartService", CartService)