myApp.controller('SaleController', ['HomeService', function(HomeService) {
    console.log('in sale controller');

    var vm = this; 

    vm.saleObj = HomeService.saleObj

    HomeService.getHomes();
     
 }]);