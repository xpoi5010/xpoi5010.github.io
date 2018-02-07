function AddProduct(String id,String productName,String productDescript,String productDownloadLink){
	var newElement = document.createElement("div");
	newElement.innerHTML=String.Format(@"<div class=\"software_list_item\" id=\"{0}\">
			    <div class=\"software_list_apptitle\">
			     {1}
			    </div>
			    <div class=\"software_list_appdescription\">
			    {2}
			    </div>
				<div class=\"Download_btn\">
				  <a href=\"{3}\" class=\"DOWNLOADLINK\">下載</a>
				</div>
			  </div>",id,productName,productDescript,productDownloadLink);
}