// Menu data imported from menu.xlsx
// Fresh appealing icons applied

const menuData = {
    "burger": {
        "title": "Burger",
        "sizes": "",
        "items": [
            {
                "name": "Cheeseburger",
                "ingredients": "Ground Beef, Tomatoes, Lettuce, Pickled Cucumbers, Onions, Cheddar Cheese, Bread",
                "description": "Delicious Cheeseburger made with Ground Beef, Tomatoes, Lettuce, Pickled Cucumbers, Onions, Cheddar Cheese, Bread.",
                "price": "$15.99"
            }
        ],
        "icon": "<i class=\"fas fa-hamburger\"></i>"
    },
    "steak": {
        "title": "Steak",
        "sizes": "",
        "items": [
            {
                "name": "Ribeye Steak",
                "ingredients": "Beef, Rice Pilav, Tomatoes",
                "description": "Delicious Ribeye Steak made with Beef, Rice Pilav, Tomatoes.",
                "price": "$15.99",
            },
            {
                "name": "T-Bone Steak",
                "ingredients": "Beef, Rice Pilav, Tomatoes",
                "description": "Delicious T-Bone Steak made with Beef, Rice Pilav, Tomatoes.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-drumstick-bite\"></i>"
    },
    "bbq": {
        "title": "Bbq",
        "sizes": "",
        "items": [
            {
                "name": "Adana Wrap",
                "ingredients": "Ground Beef And Lamb, Lavash, Tomatoes, Onion, Bell Peppers, Parsley, Sumac, Tomato Sauce, Pickled Peppers, Salt, Red Chili Flakes, Ground Pepper",
                "description": "Delicious Adana Wrap made with Ground Beef And Lamb, Lavash, Tomatoes, Onion, Bell Peppers, Parsley, Sumac, Tomato Sauce, Pickled Peppers, Salt, Red Chili Flakes, Ground Pepper.",
                "price": "$15.99",
            },
            {
                "name": "Lamb Wrap",
                "ingredients": "Lamb Meat, Lavash, Tomatoes, Onion, Bell Peppers, Parsley, Sumac, Tomato Sauce, Pickled Peppers, Salt, Red Chili Flakes, Ground Pepper",
                "description": "Delicious Lamb Wrap made with Lamb Meat, Lavash, Tomatoes, Onion, Bell Peppers, Parsley, Sumac, Tomato Sauce, Pickled Peppers, Salt, Red Chili Flakes, Ground Pepper.",
                "price": "$15.99",
            },
            {
                "name": "Chicken Wrap",
                "ingredients": "Chicken Meat, Lavash, Tomatoes, Onion, Bell Peppers, Parsley, Sumac, Tomato Sauce, Pickled Peppers, Salt, Red Chili Flakes, Ground Pepper",
                "description": "Delicious Chicken Wrap made with Chicken Meat, Lavash, Tomatoes, Onion, Bell Peppers, Parsley, Sumac, Tomato Sauce, Pickled Peppers, Salt, Red Chili Flakes, Ground Pepper.",
                "price": "$15.99",
            },
            {
                "name": "Adana Kebab(Spicy)",
                "ingredients": "Groiund Beef And Lamb, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash",
                "description": "Delicious Adana Kebab(Spicy) made with Groiund Beef And Lamb, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash.",
                "price": "$25.99",
            },
            {
                "name": "Chicken Adana",
                "ingredients": "Ground Chicken Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash",
                "description": "Delicious Chicken Adana made with Ground Chicken Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash.",
                "price": "$23.95",
            },
            {
                "name": "Chicken Shish Kebab",
                "ingredients": "Chicken Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash",
                "description": "Delicious Chicken Shish Kebab made with Chicken Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash.",
                "price": "$22.95",
            },
            {
                "name": "Lamb Shish Kebab",
                "ingredients": "Lamb Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash",
                "description": "Delicious Lamb Shish Kebab made with Lamb Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash.",
                "price": "$24.95",
            },
            {
                "name": "Ali Nazik Kebab",
                "ingredients": "Lamb Meat, Eggplant, Yogurt, Garlic, Tomato Sauce, Butter, Bread, Bell Peppers, Tomatoes, Parsley",
                "description": "Delicious Ali Nazik Kebab made with Lamb Meat, Eggplant, Yogurt, Garlic, Tomato Sauce, Butter, Bread, Bell Peppers, Tomatoes, Parsley.",
                "price": "$22.99",
            },
            {
                "name": "Yogurt Kebab",
                "ingredients": "Yogurt, Beef And Lamb Minced Meat, Tomatoes, Bell Peppers, Parsley, Tomato Sauce, Butter, Bread",
                "description": "Delicious Yogurt Kebab made with Yogurt, Beef And Lamb Minced Meat, Tomatoes, Bell Peppers, Parsley, Tomato Sauce, Butter, Bread.",
                "price": "$22.99",
            },
            {
                "name": "Chicken Wing Kebab",
                "ingredients": "Chicken Wings, Tomatoes, Bell Peppers, Onion, Lavash",
                "description": "Delicious Chicken Wing Kebab made with Chicken Wings, Tomatoes, Bell Peppers, Onion, Lavash.",
                "price": "$21.99",
            },
            {
                "name": "Lamb Chop Kebab",
                "ingredients": "Lamb Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash",
                "description": "Delicious Lamb Chop Kebab made with Lamb Meat, Tomatoes, Bell Peppers, Onions, Rice Pilav, Lavash.",
                "price": "$31.95",
            },
            {
                "name": "Sivas Kofte",
                "ingredients": "Beef Mince, French Fries, Onions, Bell Peppers, Tomatoes",
                "description": "Delicious Sivas Kofte made with Beef Mince, French Fries, Onions, Bell Peppers, Tomatoes.",
                "price": "$15.99",
            },
            {
                "name": "Tomato Kebab",
                "ingredients": "Beef And Lamb Mince, Tomatoes, Bell Peppers, Dill, Rice Pilav, Lavash",
                "description": "Delicious Tomato Kebab made with Beef And Lamb Mince, Tomatoes, Bell Peppers, Dill, Rice Pilav, Lavash.",
                "price": "$22.99",
            },
            {
                "name": "Beyti Sarma Kebab",
                "ingredients": "Beef And Lamb Mince, Tomatoes, Bell Peppers, Lavash, Mozzarella Cheese, Yogurt",
                "description": "Delicious Beyti Sarma Kebab made with Beef And Lamb Mince, Tomatoes, Bell Peppers, Lavash, Mozzarella Cheese, Yogurt.",
                "price": "$21.99",
            },
            {
                "name": "Single Serving Mixed",
                "ingredients": "Beef And Lamb Mince, Chicken Meat, Lamb Meat, Kofte, Rice Pilav, Tomatoes, Peppers, Onions",
                "description": "Delicious Single Serving Mixed made with Beef And Lamb Mince, Chicken Meat, Lamb Meat, Kofte, Rice Pilav, Tomatoes, Peppers, Onions.",
                "price": "$15.99",
            },
            {
                "name": "Large Mixed Kebab",
                "ingredients": "Beef And Lamb Mince, Chicken Meat, Chicken Wings, Lamb Meat, Kofte, Rice Pilav, Tomatoes, Peppers, Onions",
                "description": "Delicious Large Mixed Kebab made with Beef And Lamb Mince, Chicken Meat, Chicken Wings, Lamb Meat, Kofte, Rice Pilav, Tomatoes, Peppers, Onions.",
                "price": "$89.95",
            },
            {
                "name": "Kofte Sandwich Tombik",
                "ingredients": "Tombik Bread, Beef Mince, Onions, Tomatoes, Parsley",
                "description": "Delicious Kofte Sandwich Tombik made with Tombik Bread, Beef Mince, Onions, Tomatoes, Parsley.",
                "price": "$15.99",
            },
            {
                "name": "Cheese Kofte",
                "ingredients": "Beef Mince, Mozzarella Cheese, Poptatoes, Peppers, Bread",
                "description": "Delicious Cheese Kofte made with Beef Mince, Mozzarella Cheese, Poptatoes, Peppers, Bread.",
                "price": "$15.99",
            },
            {
                "name": "Beef Lokum",
                "ingredients": "Beef, Potatoes, Tomatoes, Peppers, Bread",
                "description": "Delicious Beef Lokum made with Beef, Potatoes, Tomatoes, Peppers, Bread.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-fire\"></i>"
    },
    "seafood dishes": {
        "title": "Seafood Dishes",
        "sizes": "",
        "items": [
            {
                "name": "Salmon Fish",
                "ingredients": "Salmon, Cherry Tomatoes, Onion, Arugula, Lemon",
                "description": "Delicious Salmon Fish made with Salmon, Cherry Tomatoes, Onion, Arugula, Lemon.",
                "price": "$15.99",
            },
            {
                "name": "Sea Bass",
                "ingredients": "Sea Bass, Cherry Tomatoes, Onion, Arugula, Lemon",
                "description": "Delicious Sea Bass made with Sea Bass, Cherry Tomatoes, Onion, Arugula, Lemon.",
                "price": "$15.99",
            },
            {
                "name": "Dorado",
                "ingredients": "Dorado, Cherry Tomatoes, Onion, Arugula, Lemon",
                "description": "Delicious Dorado made with Dorado, Cherry Tomatoes, Onion, Arugula, Lemon.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-fish\"></i>"
    },
    "doner": {
        "title": "Doner",
        "sizes": "",
        "items": [
            {
                "name": "Chicken Wrap",
                "ingredients": "Chicken Meat, Lavash Bread, French Fries, Tomato, Parsley, Tomatoes Sauce",
                "description": "Delicious Chicken Wrap made with Chicken Meat, Lavash Bread, French Fries, Tomato, Parsley, Tomatoes Sauce.",
                "price": "$15.99",
            },
            {
                "name": "Beef Wrap",
                "ingredients": "Beef Meat, Lavash Bread, French Fries, Tomato, Parsley, Tomatoes Sauce",
                "description": "Delicious Beef Wrap made with Beef Meat, Lavash Bread, French Fries, Tomato, Parsley, Tomatoes Sauce.",
                "price": "$15.99",
            },
            {
                "name": "Wrap Doner Mix",
                "ingredients": "Chicken And Beef Meat, Lavash Bread, French Fries, Tomato, Parsley, Tomatoes Sauce",
                "description": "Delicious Wrap Doner Mix made with Chicken And Beef Meat, Lavash Bread, French Fries, Tomato, Parsley, Tomatoes Sauce.",
                "price": "$13.95",
            },
            {
                "name": "Tombik Doner Chicken",
                "ingredients": "Chicken Meat, Tombik Bread, French Fries, Tomato, Parsley, Tomatoes Sauce",
                "description": "Delicious Tombik Doner Chicken made with Chicken Meat, Tombik Bread, French Fries, Tomato, Parsley, Tomatoes Sauce.",
                "price": "$12.95",
            },
            {
                "name": "Tombik Doner Beef",
                "ingredients": "Beef Meat, Tombik Bread, French Fries, Tomato, Parsley, Tomatoes Sauce",
                "description": "Delicious Tombik Doner Beef made with Beef Meat, Tombik Bread, French Fries, Tomato, Parsley, Tomatoes Sauce.",
                "price": "$13.95",
            },
            {
                "name": "Tombik Doner Mix",
                "ingredients": "Chicken And Beef Meat, Tombik Bread, French Fries, Tomato, Parsley, Tomatoes Sauce",
                "description": "Delicious Tombik Doner Mix made with Chicken And Beef Meat, Tombik Bread, French Fries, Tomato, Parsley, Tomatoes Sauce.",
                "price": "$15.99",
            },
            {
                "name": "Chicken Doner Plate",
                "ingredients": "Chicken Meat, Rice Pilav, Onions, French Fries, Lavash Bread",
                "description": "Delicious Chicken Doner Plate made with Chicken Meat, Rice Pilav, Onions, French Fries, Lavash Bread.",
                "price": "$21.95",
            },
            {
                "name": "Beef Doner Plate",
                "ingredients": "Beef Meat, Rice Pilav, Onions, French Fries, Lavash Bread",
                "description": "Delicious Beef Doner Plate made with Beef Meat, Rice Pilav, Onions, French Fries, Lavash Bread.",
                "price": "$22.95",
            },
            {
                "name": "Mix Doner Plate",
                "ingredients": "Chicken And Beef Meat, Rice Pilav, Onions, French Fries, Lavash Bread",
                "description": "Delicious Mix Doner Plate made with Chicken And Beef Meat, Rice Pilav, Onions, French Fries, Lavash Bread.",
                "price": "$21.95",
            },
            {
                "name": "Iskender Chicken",
                "ingredients": "Chicken Meat, French Fries, Tomato Sauce, Tomato, Butter, Pepper, Parsley",
                "description": "Delicious Iskender Chicken made with Chicken Meat, French Fries, Tomato Sauce, Tomato, Butter, Pepper, Parsley.",
                "price": "$15.99",
            },
            {
                "name": "Iskender Beef",
                "ingredients": "Beef Meat, French Fries, Tomato Sauce, Tomato, Butter, Pepper, Parsley",
                "description": "Delicious Iskender Beef made with Beef Meat, French Fries, Tomato Sauce, Tomato, Butter, Pepper, Parsley.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-hotdog\"></i>"
    },
    "kids menu": {
        "title": "Kids Menu",
        "sizes": "",
        "items": [
            {
                "name": "Kids Sandwich",
                "ingredients": "Toast Bread, Lettuce, Tomato, Cucumber, Salami, French Fries",
                "description": "Delicious Kids Sandwich made with Toast Bread, Lettuce, Tomato, Cucumber, Salami, French Fries.",
                "price": "$15.99",
            },
            {
                "name": "Kids Meatball Soup",
                "ingredients": "Meat Broth, Ground Beef, Potato, Carrot, Dill",
                "description": "Delicious Kids Meatball Soup made with Meat Broth, Ground Beef, Potato, Carrot, Dill.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-child\"></i>"
    },
    "soups": {
        "title": "Soups",
        "sizes": "",
        "items": [
            {
                "name": "Pelmene(Dumplings)",
                "ingredients": "Beef Broth, Dough, Ground Beef, Onion, Dill",
                "description": "Delicious Pelmene(Dumplings) made with Beef Broth, Dough, Ground Beef, Onion, Dill.",
                "price": "$15.99",
            },
            {
                "name": "Lentil Soup",
                "ingredients": "Lentils, Butter, Flour, Meat Broth, Carrot, Potato, Onion, Lemon, Baked Dry Bread",
                "description": "Delicious Lentil Soup made with Lentils, Butter, Flour, Meat Broth, Carrot, Potato, Onion, Lemon, Baked Dry Bread.",
                "price": "$7.00",
            },
            {
                "name": "Chicken Soup",
                "ingredients": "Chicken Broth, Chicken Meat, Carrot, Pasta, Dill",
                "description": "Delicious Chicken Soup made with Chicken Broth, Chicken Meat, Carrot, Pasta, Dill.",
                "price": "$7.00",
            },
            {
                "name": "Lamb Soup",
                "ingredients": "Lamb Meat, Potato, Carrot, Pepper, ",
                "description": "Delicious Lamb Soup made with Lamb Meat, Potato, Carrot, Pepper, .",
                "price": "$10.00",
            },
            {
                "name": "Cheese Soup",
                "ingredients": "Mozzarella, Chicken Broth, Chicken Meat, Onion, Flour, Carrot, Cream, Dill, ",
                "description": "Delicious Cheese Soup made with Mozzarella, Chicken Broth, Chicken Meat, Onion, Flour, Carrot, Cream, Dill, .",
                "price": "$9.00",
            },
            {
                "name": "Wedding Soup",
                "ingredients": "Yogurt, Flour, Meat Broth, Lamb Meat, Butter, Ground Paprika",
                "description": "Delicious Wedding Soup made with Yogurt, Flour, Meat Broth, Lamb Meat, Butter, Ground Paprika.",
                "price": "$9.00",
            },
            {
                "name": "Head And Trotter Soup",
                "ingredients": "Lamb Meat, Yogurt, Flour, Meat Broth, Garlic, Vinegar, Lemon, Baked Spiced Bread",
                "description": "Delicious Head And Trotter Soup made with Lamb Meat, Yogurt, Flour, Meat Broth, Garlic, Vinegar, Lemon, Baked Spiced Bread.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-mug-hot\"></i>"
    },
    "salads": {
        "title": "Salads",
        "sizes": "",
        "items": [
            {
                "name": "Chicken Caesar Salad",
                "ingredients": "Chicken, Iceberg Lettuce, Baked Spiced Croutons, Cherry Tomatoes, Parmesan Cheese, Caesar Dressing, Mayonnaise, Lemon Juice, Olive Oil, Anchovies, Salt, Black Pepper",
                "description": "Delicious Chicken Caesar Salad made with Chicken, Iceberg Lettuce, Baked Spiced Croutons, Cherry Tomatoes, Parmesan Cheese, Caesar Dressing, Mayonnaise, Lemon Juice, Olive Oil, Anchovies, Salt, Black Pepper.",
                "price": "$14.99",
            },
            {
                "name": "Shrimp Caesar Salad",
                "ingredients": "Shrimp, Iceberg Lettuce, Baked Spiced Croutons, Cherry Tomatoes, Parmesan Cheese, Caesar Dressing, Mayonnaise, Lemon Juice, Olive Oil, Anchovies, Salt, Black Pepper",
                "description": "Delicious Shrimp Caesar Salad made with Shrimp, Iceberg Lettuce, Baked Spiced Croutons, Cherry Tomatoes, Parmesan Cheese, Caesar Dressing, Mayonnaise, Lemon Juice, Olive Oil, Anchovies, Salt, Black Pepper.",
                "price": "$14.99",
            },
            {
                "name": "Hot Salad With Beef",
                "ingredients": "Pan-Fried, Arugula, Green Apple, Red Onion, Olive Oil, Pomegranate Molasses, Lemon Juice",
                "description": "Delicious Hot Salad With Beef made with Pan-Fried, Arugula, Green Apple, Red Onion, Olive Oil, Pomegranate Molasses, Lemon Juice.",
                "price": "$15.99",
            },
            {
                "name": "Shrimp Arugula Salad",
                "ingredients": "Arugula, Shrimp, Red Onion, Cherry Tomatoes, Pine Nuts, Olive Oil, Lemon Juice",
                "description": "Delicious Shrimp Arugula Salad made with Arugula, Shrimp, Red Onion, Cherry Tomatoes, Pine Nuts, Olive Oil, Lemon Juice.",
                "price": "$19.95",
            },
            {
                "name": "Spicy Ezme",
                "ingredients": "Tomato, Cucumber, Parsley, Red And Green Peppers, Onion, Garlic, Tomato Paste, Pomegranate Molasses, Olive Oil, Lemon Juice, Red Pepper Flakes",
                "description": "Delicious Spicy Ezme made with Tomato, Cucumber, Parsley, Red And Green Peppers, Onion, Garlic, Tomato Paste, Pomegranate Molasses, Olive Oil, Lemon Juice, Red Pepper Flakes.",
                "price": "$15.99",
            },
            {
                "name": "Cacik",
                "ingredients": "Strained Yogurt, Cucumber, Garlic, Olive Oil, Dried Mint, Red Pepper Flakes",
                "description": "Delicious Cacik made with Strained Yogurt, Cucumber, Garlic, Olive Oil, Dried Mint, Red Pepper Flakes.",
                "price": "$15.99",
            },
            {
                "name": "Greek Salad",
                "ingredients": "Cucumber, Tomato, Red And Green Peppers, Parsley, Feta Cheese, Black Olives, Lemon, Olive Oil, Lemon Juice",
                "description": "Delicious Greek Salad made with Cucumber, Tomato, Red And Green Peppers, Parsley, Feta Cheese, Black Olives, Lemon, Olive Oil, Lemon Juice.",
                "price": "$14.95",
            },
            {
                "name": "Shepherd'S Salad",
                "ingredients": "Tomato, Cucumber, Red And Green Peppers, Parsley, Lemon, Olive Oil, Lemon Dressing",
                "description": "Delicious Shepherd'S Salad made with Tomato, Cucumber, Red And Green Peppers, Parsley, Lemon, Olive Oil, Lemon Dressing.",
                "price": "$11.95",
            },
            {
                "name": "Spicy Acucuk Salad",
                "ingredients": "Tomato, Onion, Parsley, Hot Green Pepper, Olive Oil, Lemon Juice, Red Pepper Flakes, Sumac",
                "description": "Delicious Spicy Acucuk Salad made with Tomato, Onion, Parsley, Hot Green Pepper, Olive Oil, Lemon Juice, Red Pepper Flakes, Sumac.",
                "price": "$15.99",
            },
            {
                "name": "Orange And Beetroot Salad",
                "ingredients": "Orange, Beetroot, Arugula, Pine Nuts, Cherry Tomatoes, Olive Oil, Fresh Orange Juice, Pomegranate Molasses",
                "description": "Delicious Orange And Beetroot Salad made with Orange, Beetroot, Arugula, Pine Nuts, Cherry Tomatoes, Olive Oil, Fresh Orange Juice, Pomegranate Molasses.",
                "price": "$19.95",
            },
            {
                "name": "Arugula With Smoked Beef",
                "ingredients": "Smoked Beef, Artagula, Tomato, Olive Oil, Lemopn Dressing, Pomegranate Molasses",
                "description": "Delicious Arugula With Smoked Beef made with Smoked Beef, Artagula, Tomato, Olive Oil, Lemopn Dressing, Pomegranate Molasses.",
                "price": "$19.95",
            },
            {
                "name": "Spicy Salad With Beef",
                "ingredients": "Beef, Red And Green Peppers, Cucumber, Red Onion, Tomato, Cucumber Pickles, Soy Sauce, Red Pepper Flakes, Hot Sauce",
                "description": "Delicious Spicy Salad With Beef made with Beef, Red And Green Peppers, Cucumber, Red Onion, Tomato, Cucumber Pickles, Soy Sauce, Red Pepper Flakes, Hot Sauce.",
                "price": "$19.95",
            },
            {
                "name": "Eggplant Salad With Cheese",
                "ingredients": "Fried Eggplant, Cream Cheese, Arugula, Tomato, Pine Nuts, Lemon Dressing, Olive Oil, Pomegranate Molasses",
                "description": "Delicious Eggplant Salad With Cheese made with Fried Eggplant, Cream Cheese, Arugula, Tomato, Pine Nuts, Lemon Dressing, Olive Oil, Pomegranate Molasses.",
                "price": "$19.95",
            },
            {
                "name": "Grilled Vegetables",
                "ingredients": "Eggplant, Zucchini, Mushrooms, Red And Green Peppers, Tomato, Onion",
                "description": "Delicious Grilled Vegetables made with Eggplant, Zucchini, Mushrooms, Red And Green Peppers, Tomato, Onion.",
                "price": "$15.99",
            },
            {
                "name": "Chicken Salad Bowl",
                "ingredients": "Chicken Breast, Egg, Avocado, Red Onion, Spinach Sauce, Vegetable Oil, Ground Paprika",
                "description": "Delicious Chicken Salad Bowl made with Chicken Breast, Egg, Avocado, Red Onion, Spinach Sauce, Vegetable Oil, Ground Paprika.",
                "price": "$19.95",
            },
            {
                "name": "Shrimp Salad Bowl",
                "ingredients": "Shrimp, Egg, Arugula, Avocado, Red Onion, Spinach Sauce, Walnuts, Garlic, Vegetable Oil, Nground Paprika",
                "description": "Delicious Shrimp Salad Bowl made with Shrimp, Egg, Arugula, Avocado, Red Onion, Spinach Sauce, Walnuts, Garlic, Vegetable Oil, Nground Paprika.",
                "price": "$20.95",
            },
            {
                "name": "Homemade Salad",
                "ingredients": "Cucumber, Tomato, Parsley, Red Onion, Olive Oil, Lemon Dressing",
                "description": "Delicious Homemade Salad made with Cucumber, Tomato, Parsley, Red Onion, Olive Oil, Lemon Dressing.",
                "price": "$14.95",
            },
            {
                "name": "Sarma",
                "ingredients": "Stuffed Grape Leaves, Olive Oil, Rice, Onion, Tomato, Pine Nuts, Currants, Dried Mint, Sugar, Salt, Black Pepper, Parsley, Allspice",
                "description": "Delicious Sarma made with Stuffed Grape Leaves, Olive Oil, Rice, Onion, Tomato, Pine Nuts, Currants, Dried Mint, Sugar, Salt, Black Pepper, Parsley, Allspice.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-leaf\"></i>"
    },
    "pide": {
        "title": "Pide",
        "sizes": "",
        "items": [
            {
                "name": "Spinach And Cheese Pide",
                "ingredients": "Spinach, Onion, Red Bell Pepper, Salt, Mozzarella Cheese, Butter, Egg, Dough, Sesame Seeds",
                "description": "Delicious Spinach And Cheese Pide made with Spinach, Onion, Red Bell Pepper, Salt, Mozzarella Cheese, Butter, Egg, Dough, Sesame Seeds.",
                "price": "$15.99",
            },
            {
                "name": "Closed Roast Beef Pide",
                "ingredients": "Beef, Dough, Egg, Sesame Seeds",
                "description": "Delicious Closed Roast Beef Pide made with Beef, Dough, Egg, Sesame Seeds.",
                "price": "$15.99",
            },
            {
                "name": "Closed Doner Meat Pide",
                "ingredients": "Doner Meat, Cheddar Cheese, Dough, Egg, Sesame Seeds, Pickled Pepper, Butter",
                "description": "Delicious Closed Doner Meat Pide made with Doner Meat, Cheddar Cheese, Dough, Egg, Sesame Seeds, Pickled Pepper, Butter.",
                "price": "$15.99",
            },
            {
                "name": "Pide With Roast Beef And Cheese",
                "ingredients": "Roast Beef, Cheddar Cheese, Dough, Egg, Butter",
                "description": "Delicious Pide With Roast Beef And Cheese made with Roast Beef, Cheddar Cheese, Dough, Egg, Butter.",
                "price": "$15.99",
            },
            {
                "name": "Minced Meat And Cheese Pide",
                "ingredients": "Mozzarella Cheese, Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomato Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough",
                "description": "Delicious Minced Meat And Cheese Pide made with Mozzarella Cheese, Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomato Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough.",
                "price": "$15.99",
            },
            {
                "name": "Minced Meat And Egg Pide",
                "ingredients": "Egg, Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomatp Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough",
                "description": "Delicious Minced Meat And Egg Pide made with Egg, Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomatp Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough.",
                "price": "$15.99",
            },
            {
                "name": "Chicken And Cheese Pide",
                "ingredients": "Egg, Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomatp Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough",
                "description": "Delicious Chicken And Cheese Pide made with Egg, Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomatp Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough.",
                "price": "$15.99",
            },
            {
                "name": "Lahmacun",
                "ingredients": "Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomato Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough, Lemon, Sumac",
                "description": "Delicious Lahmacun made with Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomato Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough, Lemon, Sumac.",
                "price": "$15.99",
            },
            {
                "name": "Cheese And Sucuk Pide",
                "ingredients": "Mozzarella Cheese, Sucuk, Dough, Butter",
                "description": "Delicious Cheese And Sucuk Pide made with Mozzarella Cheese, Sucuk, Dough, Butter.",
                "price": "$15.99",
            },
            {
                "name": "Cheese And Egg Pide",
                "ingredients": "Kashar Cheese, Egg, Dough, Butter, Tomato, Parsley",
                "description": "Delicious Cheese And Egg Pide made with Kashar Cheese, Egg, Dough, Butter, Tomato, Parsley.",
                "price": "$15.99",
            },
            {
                "name": "Cheese Pide",
                "ingredients": "Kashar Cheese, Dough, Butter",
                "description": "Delicious Cheese Pide made with Kashar Cheese, Dough, Butter.",
                "price": "$15.99",
            },
            {
                "name": "Diced Beef Pide",
                "ingredients": "Diced Beef, Tomato, Green Pepper, Parsley, Vegetable Oil, Salt, Black Pepper, Paprika, Dough",
                "description": "Delicious Diced Beef Pide made with Diced Beef, Tomato, Green Pepper, Parsley, Vegetable Oil, Salt, Black Pepper, Paprika, Dough.",
                "price": "$15.99",
            },
            {
                "name": "Diced Beef And Cheese Pide",
                "ingredients": "Diced Beef, Mozzarella Cheese, Tomato, Green Pepper, Parsley, Vegetable Oil, Salt, Black Pepper, Paprika, Dough",
                "description": "Delicious Diced Beef And Cheese Pide made with Diced Beef, Mozzarella Cheese, Tomato, Green Pepper, Parsley, Vegetable Oil, Salt, Black Pepper, Paprika, Dough.",
                "price": "$15.99",
            },
            {
                "name": "Ground Beef Pide",
                "ingredients": "Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomato Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough",
                "description": "Delicious Ground Beef Pide made with Ground Beef, Tomato, Onion, Parsley, Pepper, Garlic, Tomato Paste, Vegetable Oil, Salt, Black Pepper, Chili Flakes, Dough.",
                "price": "$15.99",
            },
            {
                "name": "Mixed Pide",
                "ingredients": "Mozzarella Cheese, Diced Beef, Ground Beef, Tomato, Green Pepper, Parsley, Vegetable Oil, Salt, Black Pepper, Paprika, Dough, Lemon",
                "description": "Delicious Mixed Pide made with Mozzarella Cheese, Diced Beef, Ground Beef, Tomato, Green Pepper, Parsley, Vegetable Oil, Salt, Black Pepper, Paprika, Dough, Lemon.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-bread-slice\"></i>"
    },
    "pizza": {
        "title": "Pizza",
        "sizes": "",
        "items": [
            {
                "name": "Caesar Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Chicken Meat, Parmesan Cheese, Cherry Tomatoes, Egg, Iceberg Lettuce, Garlic Sauce",
                "description": "Delicious Caesar Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Chicken Meat, Parmesan Cheese, Cherry Tomatoes, Egg, Iceberg Lettuce, Garlic Sauce.",
                "price": "$15.95",
            },
            {
                "name": "Roast Beef Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Roast Beef, Tomatoes",
                "description": "Delicious Roast Beef Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Roast Beef, Tomatoes.",
                "price": "$19.95",
            },
            {
                "name": "Mixed Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Salami, Chicken, Mushrooms, Olives, Peppers",
                "description": "Delicious Mixed Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Salami, Chicken, Mushrooms, Olives, Peppers.",
                "price": "$16.95",
            },
            {
                "name": "4 Seasons Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Salami, Chicken Meat, Mushrooms, Tomatoes",
                "description": "Delicious 4 Seasons Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Salami, Chicken Meat, Mushrooms, Tomatoes.",
                "price": "$17.95",
            },
            {
                "name": "Margherita Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Tomatoes",
                "description": "Delicious Margherita Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Tomatoes.",
                "price": "$15.95",
            },
            {
                "name": "Plain Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce",
                "description": "Delicious Plain Pizza made with Dough, Mozzarella Cheese, Pizza Sauce.",
                "price": "$15.95",
            },
            {
                "name": "Mexican Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Salami, Bell Peppers, Olives, Beans, Corn, Mushrooms, Hot Chili Peppers",
                "description": "Delicious Mexican Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Salami, Bell Peppers, Olives, Beans, Corn, Mushrooms, Hot Chili Peppers.",
                "price": "$16.95",
            },
            {
                "name": "Pastirma Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Beef Pastirma",
                "description": "Delicious Pastirma Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Beef Pastirma.",
                "price": "$15.99",
            },
            {
                "name": "Chicken Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Mushrooms, Chicken Meat",
                "description": "Delicious Chicken Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Mushrooms, Chicken Meat.",
                "price": "$16.95",
            },
            {
                "name": "Peperoni Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, Salami",
                "description": "Delicious Peperoni Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, Salami.",
                "price": "$15.99",
            },
            {
                "name": "Kids' Pizza",
                "ingredients": "Dough, Mozzarella Cheese, Pizza Sauce, French Fries, Sausages, Ketchup",
                "description": "Delicious Kids' Pizza made with Dough, Mozzarella Cheese, Pizza Sauce, French Fries, Sausages, Ketchup.",
                "price": "$14.95",
            }
        ],
        "icon": "<i class=\"fas fa-pizza-slice\"></i>"
    },
    "pastas": {
        "title": "Pastas",
        "sizes": "",
        "items": [
            {
                "name": "Spaghetti With Meat Sauce",
                "ingredients": "Ground Beef, Parmesan Cheese, Tomato Sauce, Cherry Tomatoes, Salt, Black Pepper, Paprika, Parsley",
                "description": "Delicious Spaghetti With Meat Sauce made with Ground Beef, Parmesan Cheese, Tomato Sauce, Cherry Tomatoes, Salt, Black Pepper, Paprika, Parsley.",
                "price": "$15.99",
            },
            {
                "name": "Creamy Chicken Penne Pasta",
                "ingredients": "Penne Pasta, Chicken Meat, Mushrooms, Cream Sauce, Parmesan Cheese, Tomato, Parsley, Salt, Pesto Sauce",
                "description": "Delicious Creamy Chicken Penne Pasta made with Penne Pasta, Chicken Meat, Mushrooms, Cream Sauce, Parmesan Cheese, Tomato, Parsley, Salt, Pesto Sauce.",
                "price": "$15.99",
            },
            {
                "name": "Spicy Penne Arrabbiata",
                "ingredients": "Penne Pasta, Olive Oil, Tomato, Onion, Garlic, Pickled Cucumber, Chili Pepper, Black Pepper, Paprika, Salt",
                "description": "Delicious Spicy Penne Arrabbiata made with Penne Pasta, Olive Oil, Tomato, Onion, Garlic, Pickled Cucumber, Chili Pepper, Black Pepper, Paprika, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Spaghetti With Meatballs",
                "ingredients": "Spaghetti Pasta, Beef Meatballs, French Fries, Tomato, Ketchup, Dill, Parsley",
                "description": "Delicious Spaghetti With Meatballs made with Spaghetti Pasta, Beef Meatballs, French Fries, Tomato, Ketchup, Dill, Parsley.",
                "price": "$15.99",
            },
            {
                "name": "Fettuccine With Shrimp And Mushrooms",
                "ingredients": "Shrimp, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato",
                "description": "Delicious Fettuccine With Shrimp And Mushrooms made with Shrimp, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato.",
                "price": "$15.99",
            },
            {
                "name": "Fettuccine With Chicken And Mushrooms",
                "ingredients": "Chicken Meat, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato",
                "description": "Delicious Fettuccine With Chicken And Mushrooms made with Chicken Meat, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato.",
                "price": "$15.99",
            },
            {
                "name": "Fettuccine With Salmon And Mushrooms",
                "ingredients": "Salmon, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato",
                "description": "Delicious Fettuccine With Salmon And Mushrooms made with Salmon, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato.",
                "price": "$15.99",
            },
            {
                "name": "Fettucicine With Beef And Mushrooms",
                "ingredients": "Beef, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato",
                "description": "Delicious Fettucicine With Beef And Mushrooms made with Beef, Mushrooms, Fettuccine Pasta, Cream, Parmesan, Parsley, Tomato.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-utensils\"></i>"
    },
    "chicken world": {
        "title": "Chicken World",
        "sizes": "",
        "items": [
            {
                "name": "Chicken And Mushroom Curry Sauce Fettuccine",
                "ingredients": "Chicken Meat, Mushrooms, Fettuccine Pasta, Cream, Curry Sauce, Tomato, Parsley, Salad, Salt",
                "description": "Delicious Chicken And Mushroom Curry Sauce Fettuccine made with Chicken Meat, Mushrooms, Fettuccine Pasta, Cream, Curry Sauce, Tomato, Parsley, Salad, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Creamy Chicken With Mushrooms",
                "ingredients": "Chicken Meat, Mushrooms, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt",
                "description": "Delicious Creamy Chicken With Mushrooms made with Chicken Meat, Mushrooms, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Oregano Chicken With Mushrooms",
                "ingredients": "Chicken Meat, Mushrooms, Oregano, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt",
                "description": "Delicious Oregano Chicken With Mushrooms made with Chicken Meat, Mushrooms, Oregano, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Sweet And Sour Chicken With Mushrooms",
                "ingredients": "Chicken Meat, Mushrooms, Sweet And Sour Sauce, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt",
                "description": "Delicious Sweet And Sour Chicken With Mushrooms made with Chicken Meat, Mushrooms, Sweet And Sour Sauce, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Chicken With Mushrooms In Soy Sauce",
                "ingredients": "Chicken Meat, Mushrooms, Soy Sauce, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt",
                "description": "Delicious Chicken With Mushrooms In Soy Sauce made with Chicken Meat, Mushrooms, Soy Sauce, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Spicy Chicken With Mushrooms",
                "ingredients": "Chicken Meat, Mushrooms, Spicy Sauce, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt",
                "description": "Delicious Spicy Chicken With Mushrooms made with Chicken Meat, Mushrooms, Spicy Sauce, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Chicken With Curry And Mushrooms",
                "ingredients": "Chicken Meat, Mushrooms, Curry Sauce, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt",
                "description": "Delicious Chicken With Curry And Mushrooms made with Chicken Meat, Mushrooms, Curry Sauce, Cream, Rice Pilav, French Fries, Tomato, Parsley, Salad, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Bbq Sauce Chicken",
                "ingredients": "",
                "description": "Delicious Bbq Sauce Chicken made with .",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-drumstick-bite\"></i>"
    },
    "fried foods": {
        "title": "Fried Foods",
        "sizes": "",
        "items": [
            {
                "name": "Beef Fajita",
                "ingredients": "Beef, Onion, Red, Green, Yellow Bell Peppers, Mushrooms, Soy Sauce, Cumin, Pickled Peppers, Olive Oil",
                "description": "Delicious Beef Fajita made with Beef, Onion, Red, Green, Yellow Bell Peppers, Mushrooms, Soy Sauce, Cumin, Pickled Peppers, Olive Oil.",
                "price": "$15.99",
            },
            {
                "name": "Chicken Fajita",
                "ingredients": "Chicken, Onion, Red, Green, Yellow Bell Peppers, Mushrooms, Soy Sauce, Cumin, Pickled Peppers, Olive Oil",
                "description": "Delicious Chicken Fajita made with Chicken, Onion, Red, Green, Yellow Bell Peppers, Mushrooms, Soy Sauce, Cumin, Pickled Peppers, Olive Oil.",
                "price": "$15.99",
            },
            {
                "name": "Sac Tava",
                "ingredients": "Beef, Onion, Garlic, Tomatoes, Peppers, Tomato Paste, Rice Pilav, Lavash, Bread, Parsley, Pickled Peppers, Olive Oil, Salt, Black Pepper, Paprika",
                "description": "Delicious Sac Tava made with Beef, Onion, Garlic, Tomatoes, Peppers, Tomato Paste, Rice Pilav, Lavash, Bread, Parsley, Pickled Peppers, Olive Oil, Salt, Black Pepper, Paprika.",
                "price": "$15.99",
            }
        ],
        "icon": "<i class=\"fas fa-cookie\"></i>"
    },
    "breakfast": {
        "title": "Breakfast",
        "sizes": "",
        "items": [
            {
                "name": "Sigara Borek",
                "ingredients": "Phyllo Pastry Rolls, Cheese Filling, Tomato, French Fries, Lettuce",
                "description": "Delicious Sigara Borek made with Phyllo Pastry Rolls, Cheese Filling, Tomato, French Fries, Lettuce.",
                "price": "$14.95",
            },
            {
                "name": "Sucuk Toast",
                "ingredients": "Loaf Bread, Sucuk (Turkish Sausage), Mozzarella Cheese, Cucumber, Tomato, Parsley, Black Olives",
                "description": "Delicious Sucuk Toast made with Loaf Bread, Sucuk (Turkish Sausage), Mozzarella Cheese, Cucumber, Tomato, Parsley, Black Olives.",
                "price": "$15.99",
            },
            {
                "name": "Cheese Gozleme",
                "ingredients": "Phyllo Dough ( Yufka) Cheese, Butter, Tomato, Cucumber, Lettuce, Red Cabbage",
                "description": "Delicious Cheese Gozleme made with Phyllo Dough ( Yufka) Cheese, Butter, Tomato, Cucumber, Lettuce, Red Cabbage.",
                "price": "$14.95",
            },
            {
                "name": "Simit Sandwich",
                "ingredients": "Simit With Cheese, Tomato, Cucumber, Argula, Cherry Tomatoes, Black Olives, Clotted Cream",
                "description": "Delicious Simit Sandwich made with Simit With Cheese, Tomato, Cucumber, Argula, Cherry Tomatoes, Black Olives, Clotted Cream.",
                "price": "$11.95",
            },
            {
                "name": "Turkish Menemen",
                "ingredients": "Tomatoes, Peppers, Tomato Paste, Salt, Black Pepper, Red Pepper Flakes",
                "description": "Delicious Turkish Menemen made with Tomatoes, Peppers, Tomato Paste, Salt, Black Pepper, Red Pepper Flakes.",
                "price": "$15.99",
            },
            {
                "name": "Simit With Braised Beef, Cheese And Egg",
                "ingredients": "Beef Stew, Eggs, Butter, Simit, Mozzarella Cheese, Salt",
                "description": "Delicious Simit With Braised Beef, Cheese And Egg made with Beef Stew, Eggs, Butter, Simit, Mozzarella Cheese, Salt.",
                "price": "$15.99",
            },
            {
                "name": "Fried Eggs With Beef",
                "ingredients": "Beef, Eggs, Salt, Bread",
                "description": "Delicious Fried Eggs With Beef made with Beef, Eggs, Salt, Bread.",
                "price": "$15.99",
            },
            {
                "name": "Turkish Menemen With Sucuk",
                "ingredients": "Tomatoes, Sucuk, Peppers, Tomato Paste, Salt, Black Pepper, Red Pepper Flakes",
                "description": "Delicious Turkish Menemen With Sucuk made with Tomatoes, Sucuk, Peppers, Tomato Paste, Salt, Black Pepper, Red Pepper Flakes.",
                "price": "$17.99",
            },
            {
                "name": "English Breakfast",
                "ingredients": "Egg, Salami, Sucuk, Baked Beans, Tomato, Parsley, Cheese-Filled Pastry, Lettuce",
                "description": "Delicious English Breakfast made with Egg, Salami, Sucuk, Baked Beans, Tomato, Parsley, Cheese-Filled Pastry, Lettuce.",
                "price": "$22.95",
            },
            {
                "name": "Scottish Breakfast",
                "ingredients": "2 Fried Eggs, 2 Sausages, 4 Sliceof Salami, 3 Sliceof Toasted Bread, Cucumber, Tomato, Parsley",
                "description": "Delicious Scottish Breakfast made with 2 Fried Eggs, 2 Sausages, 4 Sliceof Salami, 3 Sliceof Toasted Bread, Cucumber, Tomato, Parsley.",
                "price": "$22.95",
            },
            {
                "name": "Omelette",
                "ingredients": "",
                "description": "Delicious Omelette made with .",
                "price": "$15.99",
            },
            {
                "name": "Turkish Breakfast",
                "ingredients": "Egg, White Cheese, Cucumber, Tomato, Salami, Sucuk, Sour Cherry Jam, Black Olives, Honey, Butter, Pogaca",
                "description": "Delicious Turkish Breakfast made with Egg, White Cheese, Cucumber, Tomato, Salami, Sucuk, Sour Cherry Jam, Black Olives, Honey, Butter, Pogaca.",
                "price": "$19.95",
            },
            {
                "name": "Egg With Sucuk",
                "ingredients": "Eggs, Butter, Sucuk",
                "description": "Delicious Egg With Sucuk made with Eggs, Butter, Sucuk.",
                "price": "$13.95",
            },
            {
                "name": "Shakshuka",
                "ingredients": "Eggplant, Tomato, Onion, Garlic, Tomato Paste, Chili Flakes, 2 Sliced Of Bread",
                "description": "Delicious Shakshuka made with Eggplant, Tomato, Onion, Garlic, Tomato Paste, Chili Flakes, 2 Sliced Of Bread.",
                "price": "$10.00",
            },
            {
                "name": "Turkish Breakfast ? Iki Tane Menude",
                "ingredients": "2 Boiled Eggs, Cheddar Cheese, Sucuk, Cherry Tomatoes, Olives, 1 Sliced Of Toasted Bread, Mixed Salad.",
                "description": "Delicious Turkish Breakfast ? Iki Tane Menude made with 2 Boiled Eggs, Cheddar Cheese, Sucuk, Cherry Tomatoes, Olives, 1 Sliced Of Toasted Bread, Mixed Salad..",
                "price": "$15.99",
            },
            {
                "name": "Degirmen Breakfast For 2-3 People",
                "ingredients": "Beef & Eggs, White Cheese, Cheddar, Honey & Butter, Sour Cherry Jam, Clotted Cream, Chocolate, Spicy Sauted Eggplant, Peppers& Olives, Apple& Orange, Salami, Sucuk, Su Boregi, Bread, Tea",
                "description": "Delicious Degirmen Breakfast For 2-3 People made with Beef & Eggs, White Cheese, Cheddar, Honey & Butter, Sour Cherry Jam, Clotted Cream, Chocolate, Spicy Sauted Eggplant, Peppers& Olives, Apple& Orange, Salami, Sucuk, Su Boregi, Bread, Tea.",
                "price": "$25.95",
            },
            {
                "name": "Degirmen Breakfast For 4-6 People",
                "ingredients": "Egg With Beef, Menemem, White Cheese, Cheddar, Mozzarella, Butter, Honeycumb Honey, Chocolate, Cherry&Apricot Jam, Clotted Cream, Olives, Sucuk, Tomatp&Cucumber, Fried Peppers, Shakshuka, French Fries, Bread, Orange&Apple Slices, Teapot",
                "description": "Delicious Degirmen Breakfast For 4-6 People made with Egg With Beef, Menemem, White Cheese, Cheddar, Mozzarella, Butter, Honeycumb Honey, Chocolate, Cherry&Apricot Jam, Clotted Cream, Olives, Sucuk, Tomatp&Cucumber, Fried Peppers, Shakshuka, French Fries, Bread, Orange&Apple Slices, Teapot.",
                "price": "$99.00",
            }
        ],
        "icon": "<i class=\"fas fa-egg\"></i>"
    }
};

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = menuData;
}


