LoadProduct();
function AddProduct(id,productName,productDescript,productDownloadLink,sourcecodeLink){
	
	document.getElementById("slist").innerHTML+="<div class=\"software_list_item\" id=\""+ id +"\">\r\n<div class=\"software_list_apptitle\">\r\n"+ productName +"\r\n</div>\r\n<div class=\"software_list_appdescription\">\r\n"+ productDescript +"\r\n</div>\r\n<div class=\"ButtonCollection\"><div class=\"Download_btn\">\r\n<a href=\""+ productDownloadLink +"\" class=\"DOWNLOADLINK\">下載</a>\r\n</div>\r\n<div class=\"Download_btn\">\r\n<a href=\""+ sourcecodeLink +"\" class=\"DOWNLOADLINK\">原始碼</a>\r\n</div>\r\n</div>\r\n</div>";
}
function LoadProduct(){
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        if (this.readyState === 4) {
            LoadJson(this.responseText);
        }
    };
    xhr.open('GET', 'Product.json', true);
    xhr.send();
}
function LoadJson(input) {
    var jsonitem = JSON.parse(input);
    
    for (i = 0; i < jsonitem.length; i++){
        var index = i;
        var Item = jsonitem[i];
        var ProductName = Item.ProductName;
        var Version = Item.Version;
        var DownloadUrl = Item.Download;
        var Description = Item.Description;
		var SourceCode = Item.SourceCode;
        AddProduct(i, ProductName.Chinese_Traditional, Description["zh-tw"], DownloadUrl,SourceCode);
    }
}
