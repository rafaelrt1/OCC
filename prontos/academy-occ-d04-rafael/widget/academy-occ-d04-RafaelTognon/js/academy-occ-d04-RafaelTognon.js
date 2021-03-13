define(
  ['knockout', 'ccConstants',  'ccRestClient'],
  function(ko, ccConstants, ccRestClient) {
    'use strict';
    return {
			show: ko.observable(true),
			product: ko.observable({
				displayName: "",
				listPrice: "",
        salePrice: "",
				route: "",
				image: ""
			}),
			products: ko.observableArray([]),
			sectionTitle: ko.observable("Promoção do dia!"),

			onLoad: function (widget) {
				console.log(widget)
				widget.show(false);
				widget.get_product(widget, "EdgePlus");
        widget.get_product(widget, "GalaxyS21");
        widget.get_product(widget, "iPhone12pm");
        widget.get_product(widget, "Mi10TPro");
				widget.show(true);
			},

			beforeAppear: function (widget) {
				
			},

			get_product: function (widget, id) {
				ccRestClient.request(
					ccConstants.ENDPOINT_PRODUCTS_GET_PRODUCT, {
						data: [
							'displayName',
							'listPrice',
							'salePrice',
							'route',
							'primarySourceImageURL',
						],  	
					},
					function (result) {            
						var obj = {
							displayName: widget.product().displayName,
							listPrice: widget.product().listPrice,
              salePrice: widget.product().salePrice,
							route: widget.product().route,
							image: widget.product().image
						}
						obj.displayName = result.displayName;  
						obj.listPrice = result.listPrice; 
            obj.salePrice = result.salePrice; 
						obj.route = result.route;
						obj.image = result.primarySourceImageURL; 

						widget.show(false);
						widget.products().push(obj);
						widget.show(true);
            console.log(result);
						console.log(widget);
					},
					function (error) {
						console.log(error)
					},
					id
				);
			},
		}
});