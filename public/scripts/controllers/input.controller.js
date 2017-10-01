myApp.controller('InputController', ['HomeService', function(HomeService) {
    console.log('in input controller');
    var vm = this;

    vm.addListing = function(){
        console.log('in add listing');
        var listObj = {
            cost: vm.costIn,
            rent: vm.rentIn,
            sqft: vm.sqftIn,
            city: vm.cityIn
        };
        HomeService.postListing(listObj);
        clear();
    }

    var clear = function() {
        vm.rentIn = null;
        vm.costIn = null;
        vm.sqftIn = null;
        vm.cityIn = null;        
    };
     
 }]);