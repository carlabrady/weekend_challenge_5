myApp.service( 'HomeService', function( $http ){

    var self=this;

    self.saleObj = {
        homes: []
    };

    self.rentObj = {
        homes: []
    };

    self.getHomes = function(){
        console.log( 'in get Homes' );
        $http({
            method: 'GET',
            url: '/realestate/sale'
        }).then( function( response ){
            console.log( 'back from get with:', response );
            self.saleObj.homes = response.data
        });
    }; 

    self.getRentalHomes = function(){
        console.log( 'in get RentalHomes' );
        $http({
            method: 'GET',
            url: '/realestate/rent'
        }).then( function( response ){
            console.log( 'back from get rent with:', response );
            self.rentObj.homes = response.data
        });
    }; 
}); // end service
