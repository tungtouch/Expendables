jQuery(document).ready(function() {
  "use strict";
	var el = jQuery(".hgr_progressbar");
	jQuery(el).each(function() {
		jQuery(this).appear(function() {
			var fill = jQuery(this).find(".hgr_progressbarfill").attr("data-value");
			var filltime = parseInt(jQuery(this).find(".hgr_progressbarfill").attr("data-time"));					
			jQuery(this).find(".hgr_progressbarfill").animate({
				width: fill+"%"
			}, { duration: filltime, queue: false });
		});
	});
});