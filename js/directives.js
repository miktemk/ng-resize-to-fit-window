angular.module('ng').directive('ngResizeToFitWindow', function () {
	return {
		restrict: 'A',
		scope: {
			ngResizeToFitWindow: '='
		},
		link: function (scope, element, attrs) {
			var opts = $.extend({
				minHeight: 50
			}, scope.ngResizeToFitWindow);
			
			function updateHeight() {
				var hHtml = $('body').height();
				var hWin = $(window).height();
				var diff = hHtml - hWin;
				// need to shrink but already too small, so do nada
				if (diff > 0 && (element.height() <= opts.minHeight))
					return;
				var height2b = Math.max(opts.minHeight, element.height()-diff);
				element.height(height2b);
				//console.log(hHtml, hWin);
			}
			
			$(window).on('resize', function () {
				updateHeight();
			});
			
			updateHeight();
		}
	};
});