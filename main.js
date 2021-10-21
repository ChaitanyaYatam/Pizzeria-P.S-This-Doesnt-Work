menu_list_array = ["A Menu","Veg Margherita Pizza","Margherita Pizza","Spicy Chicken Pizza","Veg Mania Pizza","Corn Chicken Pizza","Double Cheese"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        
}

function add_item(){
var htmlidata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
        htmlidata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmlidata=htmlidata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmlidata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
