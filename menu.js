var item5 = {
    name: "Ragu pasta",
    type: "pasta",
    course: "main",
    description: "Ragu meat tomato sauce pasta",
    price: "10$"
};

var item6 = new Object(); 
item6.name = "Chicken pasta";
item6.type = "pasta";
item6.course =  "main";
item6.description = "Pasta with chicken"
item6.price = 10;

const fish_item = {
    type: "fish",
    course: "main"
};

var item7 = Object.create(fish_item);
item7.name = "Grilled seabass";
item7.description = "Tasty grilled seabass";
