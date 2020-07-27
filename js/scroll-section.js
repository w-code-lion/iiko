

$(document).ready(function(){
		(function($){
			$(window).on("load",function(){
				
				/* Page Scroll to id fn call */
				$("#menu a,a[href='#top'],a[rel='m_PageScroll2id'], .top").mPageScroll2id({
					layout:"auto",
					offset:10,
					highlightSelector:"#menu a"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});
				
			});
		})(jQuery);
});
