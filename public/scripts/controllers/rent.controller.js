myApp.controller('RentController', ['HomeService', function(HomeService) {
    console.log('in rent controller');
    var vm = this; 
    
    vm.rentObj = HomeService.rentObj
    
    HomeService.getRentalHomes();
     
 }]);