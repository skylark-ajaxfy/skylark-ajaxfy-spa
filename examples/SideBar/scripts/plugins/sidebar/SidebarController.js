define([
	"skylark-spa/spa",
	"skylark-utils/query",
	"text!./templates/sidebar.html"
],function(spa,$,tpl){

	return spa.PluginController.inherit({
        klassName: "SidebarController",

        routed(e) {
            var _el =  $("#sidebar");
            _el.html(tpl);
        }
	})

});
