// app.js
const meals = [
    // Mains (10)
    {
        id: 1, title: "Grilled Salmon Asparagus", category: "Mains", price: 24.50,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.",
        ingredients: [
            { name: "Salmon", desc: "Fresh catch", removable: false, price: 0, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Asparagus", desc: "Roasted greens", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Extra Lemon", desc: "Fresh wedges", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 2, title: "Wagyu Beef Burger", category: "Mains", price: 18.90,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.",
        ingredients: [
            { name: "Wagyu Patty", desc: "100% Premium", removable: false, price: 0, img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?ixlib=rb-4.0.3" },
            { name: "Bacon", desc: "Crispy smoked", removable: true, price: 2.50, img: "https://images.unsplash.com/photo-1606851094655-b25cb88b8e04?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 27, title: "Ribeye Steak", category: "Mains", price: 34.00,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.",
        ingredients: [
            { name: "Garlic Butter", desc: "House blend", removable: true, price: 0, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3" },
            { name: "Rosemary", desc: "Fresh sprigs", removable: true, price: 0, img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3" },
            { name: "Pepper Sauce", desc: "Creamy peppercorn", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 28, title: "Truffle Mushroom Risotto", category: "Mains", price: 21.00,
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.",
        ingredients: [
            { name: "Arborio Rice", desc: "Italian classic", removable: false, price: 0, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Wild Mushrooms", desc: "Sautéed medley", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Truffle Paste", desc: "Black truffle", removable: true, price: 3.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 29, title: "Chicken Fettuccine Alfredo", category: "Mains", price: 19.50,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.",
        ingredients: [
            { name: "Fettuccine", desc: "Fresh pasta", removable: false, price: 0, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Grilled Chicken", desc: "Juicy breast slice", removable: true, price: 0, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3" },
            { name: "Extra Cheese", desc: "Aged Parmigiano", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 30, title: "Pan-Seared Sea Bass", category: "Mains", price: 28.00,
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.",
        ingredients: [
            { name: "Sea Bass", desc: "Fresh fillet", removable: false, price: 0, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Lemon Herb Glaze", desc: "Tangy sauce", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Cherry Tomatoes", desc: "Sautéed sweet", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 31, title: "Vegetarian Buddha Bowl", category: "Mains", price: 16.50,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.",
        ingredients: [
            { name: "Quinoa", desc: "Organic grain", removable: false, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Roasted Chickpeas", desc: "Crunchy seasoned", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Tahini Drizzle", desc: "Sesame dressing", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 32, title: "Slow-Cooked Lamb Shanks", category: "Mains", price: 29.50,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.",
        ingredients: [
            { name: "Lamb Shank", desc: "Braised tender", removable: false, price: 0, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Mashed Potatoes", desc: "Creamy buttered", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Red Wine Jus", desc: "Rich reduction", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 33, title: "Spiced Duck Breast", category: "Mains", price: 27.00,
        image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.",
        ingredients: [
            { name: "Duck Breast", desc: "Crispy skin", removable: false, price: 0, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Cherry Reduction", desc: "Sweet tart glaze", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Orange Zest", desc: "Fresh citrus hint", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 34, title: "Lobster Thermidor", category: "Mains", price: 42.00,
        image: "img/Lobster Thermidor.jpg",
        desc: "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.",
        ingredients: [
            { name: "Lobster", desc: "Fresh whole tail", removable: false, price: 0, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Mustard Cognac Sauce", desc: "Rich cream sauce", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Gruyere Cheese", desc: "Melted golden", removable: true, price: 3.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },

    // Starters (10)
    {
        id: 5, title: "Crispy Calamari", category: "Starters", price: 14.00,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Lightly fried calamari rings served with lemon wedge and tartare sauce.",
        ingredients: [
            { name: "Tartare Sauce", desc: "House made", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 10, title: "Garlic Herb Bread", category: "Starters", price: 6.50,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Toasted artisan bread brushed with house garlic herb butter and parsley.",
        ingredients: [
            { name: "Garlic Butter", desc: "House blend", removable: true, price: 0, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3" },
            { name: "Extra Cheese", desc: "Melted mozzarella", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 11, title: "Bruschetta al Pomodoro", category: "Starters", price: 8.90,
        image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Crispy grilled sourdough with chopped Roma tomatoes, fresh garlic, basil, and olive oil.",
        ingredients: [
            { name: "Tomatoes", desc: "Fresh diced", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Basil", desc: "Fresh leaves", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Balsamic Glaze", desc: "Sweet reduction", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 12, title: "Truffle Parmesan Fries", category: "Starters", price: 9.50,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Golden crispy fries tossed in black truffle oil, freshly grated Parmesan, and chopped parsley.",
        ingredients: [
            { name: "Parmesan", desc: "Aged cheese", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Truffle Oil", desc: "Premium aroma", removable: true, price: 0, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3" },
            { name: "Aioli Sauce", desc: "Garlic mayo", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 13, title: "Stuffed Mushrooms", category: "Starters", price: 11.00,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Baked mushroom caps filled with creamy garlic herb filling and crispy breadcrumbs.",
        ingredients: [
            { name: "Cream Cheese", desc: "Rich filling", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Herbs", desc: "Parsley & Thyme", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Bacon Bits", desc: "Smoked crispy", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1606851094655-b25cb88b8e04?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 14, title: "Buffalo Chicken Wings", category: "Starters", price: 13.50,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.",
        ingredients: [
            { name: "Buffalo Sauce", desc: "Classic hot", removable: false, price: 0, img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3" },
            { name: "Blue Cheese Dip", desc: "Cooling dip", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Celery Sticks", desc: "Crunchy sides", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 15, title: "Caprese Salad", category: "Starters", price: 12.00,
        image: "img/carprese.jpg",
        desc: "Slices of ripe vine tomatoes, fresh mozzarella, and sweet basil drizzled with olive oil.",
        ingredients: [
            { name: "Mozzarella", desc: "Fresh buffalo milk", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Pesto Sauce", desc: "Basil pine nut", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Olive Oil", desc: "Extra virgin", removable: true, price: 0, img: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 16, title: "Pan-Seared Scallops", category: "Starters", price: 18.00,
        image: "img/pan-seared scallops.jpg",
        desc: "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.",
        ingredients: [
            { name: "Garlic Butter", desc: "Pan glaze", removable: true, price: 0, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3" },
            { name: "Microgreens", desc: "Delicate garnish", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 17, title: "Crispy Vegetable Spring Rolls", category: "Starters", price: 8.00,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Hand-rolled crispy wrapper filled with cabbage, carrots, mushrooms, served with sweet chili sauce.",
        ingredients: [
            { name: "Sweet Chili Sauce", desc: "Sweet heat dip", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Sesame Seeds", desc: "Toasted garnish", removable: true, price: 0, img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 18, title: "Shrimp Cocktail", category: "Starters", price: 15.00,
        image: "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Chilled jumbo tiger shrimp hanging over a glass, served with home-style cocktail sauce.",
        ingredients: [
            { name: "Cocktail Sauce", desc: "Zesty horseradish", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Lemon Wedge", desc: "Fresh citrus", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },

    // Breakfast (10)
    {
        id: 3, title: "Avocado Toast", category: "Breakfast", price: 12.00,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.",
        ingredients: [
            { name: "Avocado", desc: "Hass avocado", removable: true, price: 0, img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3" },
            { name: "Poached Egg", desc: "Free range", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 4, title: "Fluffy Pancakes", category: "Breakfast", price: 10.50,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.",
        ingredients: [
            { name: "Maple Syrup", desc: "100% Pure", removable: true, price: 0, img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3" },
            { name: "Berries", desc: "Mixed fresh", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 19, title: "Eggs Benedict", category: "Breakfast", price: 15.50,
        image: "img/eggbenedict.jpg",
        desc: "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.",
        ingredients: [
            { name: "Hollandaise Sauce", desc: "Butter egg glaze", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Smoked Salmon", desc: "Upgrade to Royale", removable: true, price: 3.50, img: "https://images.unsplash.com/photo-1574781330855-d0db8ce60179?ixlib=rb-4.0.3" },
            { name: "Spinach", desc: "Sautéed greens", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 20, title: "French Toast Sticks", category: "Breakfast", price: 11.00,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.",
        ingredients: [
            { name: "Powdered Sugar", desc: "Sweet dusting", removable: true, price: 0, img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3" },
            { name: "Maple Syrup", desc: "Pure golden", removable: true, price: 0, img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3" },
            { name: "Cinnamon Butter", desc: "Whipped blend", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 21, title: "Belgian Waffles", category: "Breakfast", price: 11.50,
        image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.",
        ingredients: [
            { name: "Whipped Cream", desc: "Sweet vanilla", removable: true, price: 0, img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3" },
            { name: "Strawberries", desc: "Fresh cut", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3" },
            { name: "Chocolate Drizzle", desc: "Dark syrup", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 22, title: "Classic Omelette", category: "Breakfast", price: 13.00,
        image: "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.",
        ingredients: [
            { name: "Cheddar", desc: "Melted cheese", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Mushrooms", desc: "Sautéed wild", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Bell Peppers", desc: "Fresh tri-color", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 23, title: "Acai Berry Bowl", category: "Breakfast", price: 12.50,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.",
        ingredients: [
            { name: "Granola", desc: "Oat & Honey crunch", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3" },
            { name: "Chia Seeds", desc: "High protein", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3" },
            { name: "Honey Drizzle", desc: "Organic sweet", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 24, title: "Smoked Salmon Bagel", category: "Breakfast", price: 14.50,
        image: "img/smokedsalmon.jpg",
        desc: "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.",
        ingredients: [
            { name: "Cream Cheese", desc: "Creamy smear", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Capers", desc: "Salted pickly", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3" },
            { name: "Red Onion", desc: "Thinly sliced", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 25, title: "Full English Breakfast", category: "Breakfast", price: 16.50,
        image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.",
        ingredients: [
            { name: "Sausage", desc: "Grilled link", removable: true, price: 0, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3" },
            { name: "Baked Beans", desc: "In tomato sauce", removable: true, price: 0, img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3" },
            { name: "Grilled Mushroom", desc: "Button mushroom", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 26, title: "Breakfast Burrito", category: "Breakfast", price: 12.00,
        image: "img/burrito.jpg",
        desc: "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.",
        ingredients: [
            { name: "Scrambled Eggs", desc: "Fluffy eggs", removable: false, price: 0, img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3" },
            { name: "Chorizo", desc: "Spicy sausage", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3" },
            { name: "Salsa Verde", desc: "Tangy green sauce", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },

    // Cocktails (10)
    {
        id: 6, title: "Classic Mojito", category: "Cocktails", price: 11.00,
        image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Refreshing rum cocktail with fresh mint, lime juice, and soda.",
        ingredients: [
            { name: "Extra Mint", desc: "Fresh leaves", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 35, title: "Espresso Martini", category: "Cocktails", price: 12.50,
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.",
        ingredients: [
            { name: "Espresso", desc: "Double shot", removable: false, price: 0, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3" },
            { name: "Coffee Liqueur", desc: "Kahlua style", removable: false, price: 0, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3" },
            { name: "Vodka", desc: "Premium Triple Distilled", removable: false, price: 0, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 36, title: "Passion Fruit Margarita", category: "Cocktails", price: 13.00,
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.",
        ingredients: [
            { name: "Tequila", desc: "100% Agave", removable: false, price: 0, img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3" },
            { name: "Passion Fruit Pulp", desc: "Seedless fresh pulp", removable: true, price: 0, img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3" },
            { name: "Lime", desc: "Zesty rim & juice", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 37, title: "Old Fashioned", category: "Cocktails", price: 12.00,
        image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.",
        ingredients: [
            { name: "Bourbon", desc: "Barrel aged", removable: false, price: 0, img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3" },
            { name: "Angostura Bitters", desc: "Spiced tincture", removable: false, price: 0, img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3" },
            { name: "Orange Peel", desc: "Expressed oils", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 38, title: "Whiskey Sour", category: "Cocktails", price: 11.50,
        image: "img/whiskey.jpg",
        desc: "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.",
        ingredients: [
            { name: "Whiskey", desc: "Sour mash", removable: false, price: 0, img: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-4.0.3" },
            { name: "Lemon Juice", desc: "Fresh squeezed", removable: false, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Egg White", desc: "Silky meringue layer", removable: true, price: 0, img: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 39, title: "Aperol Spritz", category: "Cocktails", price: 10.50,
        image: "img/Aperol Spritz.jpg",
        desc: "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.",
        ingredients: [
            { name: "Aperol", desc: "Gentian liqueur", removable: false, price: 0, img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3" },
            { name: "Prosecco", desc: "Sparkling dry", removable: false, price: 0, img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3" },
            { name: "Soda Water", desc: "Fizzy finish", removable: true, price: 0, img: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 40, title: "Pina Colada", category: "Cocktails", price: 12.00,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.",
        ingredients: [
            { name: "Coconut Cream", desc: "Sweet dairy free", removable: false, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" },
            { name: "Pineapple Juice", desc: "100% Juice", removable: false, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" },
            { name: "Rum", desc: "White caribbean", removable: false, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 41, title: "Negroni", category: "Cocktails", price: 11.00,
        image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.",
        ingredients: [
            { name: "Gin", desc: "Botanical dry", removable: false, price: 0, img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3" },
            { name: "Campari", desc: "Bitter orange", removable: false, price: 0, img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3" },
            { name: "Sweet Vermouth", desc: "Red herb wine", removable: false, price: 0, img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 42, title: "Strawberry Daiquiri", category: "Cocktails", price: 11.50,
        image: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.",
        ingredients: [
            { name: "Strawberries", desc: "Sweet blended", removable: false, price: 0, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3" },
            { name: "White Rum", desc: "Premium rum", removable: false, price: 0, img: "https://images.unsplash.com/photo-1551751299-1b51cab2694c?ixlib=rb-4.0.3" },
            { name: "Lime", desc: "Zesty balance", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 43, title: "Moscow Mule", category: "Cocktails", price: 11.00,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.",
        ingredients: [
            { name: "Vodka", desc: "Triple filtered", removable: false, price: 0, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3" },
            { name: "Ginger Beer", desc: "Spicy carbonated", removable: false, price: 0, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3" },
            { name: "Mint", desc: "Fresh sprig", removable: true, price: 0, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3" }
        ]
    },

    // Smoothies (10)
    {
        id: 7, title: "Berry Smoothie", category: "Smoothies", price: 7.50,
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Blend of mixed berries, yogurt, and a touch of honey.",
        ingredients: [
            { name: "Protein Powder", desc: "Whey or Plant", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 44, title: "Tropical Mango Smoothie", category: "Smoothies", price: 7.50,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Golden blend of sweet mango, pineapple juice, and coconut water.",
        ingredients: [
            { name: "Mango", desc: "Haden puree", removable: false, price: 0, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3" },
            { name: "Pineapple", desc: "Sweet chunks", removable: true, price: 0, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3" },
            { name: "Chia Seeds", desc: "Organic seeds", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 45, title: "Green Detox Smoothie", category: "Smoothies", price: 8.00,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Healthy green smoothie loaded with baby spinach, crisp cucumber, apple, and ginger.",
        ingredients: [
            { name: "Spinach", desc: "Organic baby greens", removable: false, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" },
            { name: "Green Apple", desc: "Granny smith tart", removable: true, price: 0, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3" },
            { name: "Ginger", desc: "Spicy zesty root", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 46, title: "Peanut Butter Banana Smoothie", category: "Smoothies", price: 8.50,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Thick creamy blend of peanut butter, banana, honey, and high-protein Greek yogurt.",
        ingredients: [
            { name: "Banana", desc: "Ripe sweet banana", removable: false, price: 0, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3" },
            { name: "Peanut Butter", desc: "All natural creamy", removable: false, price: 0, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3" },
            { name: "Almond Milk", desc: "Unsweetened plant milk", removable: true, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 47, title: "Avocado Honey Smoothie", category: "Smoothies", price: 8.50,
        image: "img/avocadohoney.jpg",
        desc: "Super creamy avocado shake blended with organic wild honey and whole milk.",
        ingredients: [
            { name: "Avocado", desc: "Rich healthy fats", removable: false, price: 0, img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3" },
            { name: "Honey", desc: "Raw organic honey", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Yogurt", desc: "Plain probiotic", removable: true, price: 0, img: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 48, title: "Chocolate Protein Smoothie", category: "Smoothies", price: 9.00,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Satisfying blend of organic cocoa, protein powder, banana, and almond butter.",
        ingredients: [
            { name: "Cocoa Powder", desc: "Rich dark chocolate", removable: false, price: 0, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3" },
            { name: "Protein Powder", desc: "Vanilla whey isolate", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3" },
            { name: "Almond Butter", desc: "Premium nut spread", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 49, title: "Pineapple Coconut Smoothie", category: "Smoothies", price: 7.80,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Refreshing coconut milk blended with fresh pineapple chunks, mint garnish.",
        ingredients: [
            { name: "Pineapple", desc: "Tropical fruit", removable: false, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" },
            { name: "Coconut Milk", desc: "Creamy liquid", removable: false, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" },
            { name: "Mint", desc: "Fresh leaf garnish", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 50, title: "Citrus Power Smoothie", category: "Smoothies", price: 7.50,
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Zesty immunity boost blend of orange slices, pink grapefruit, and lemon juice.",
        ingredients: [
            { name: "Orange", desc: "Sunkist fruit", removable: false, price: 0, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3" },
            { name: "Grapefruit", desc: "Ruby red tart", removable: true, price: 0, img: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3" },
            { name: "Lemon", desc: "Freshly squeezed juice", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 51, title: "Strawberry Banana Smoothie", category: "Smoothies", price: 7.50,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "The classic duo: sweet red strawberries blended with bananas and rolled oats.",
        ingredients: [
            { name: "Strawberries", desc: "Local harvest", removable: false, price: 0, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3" },
            { name: "Banana", desc: "Chiquita banana", removable: false, price: 0, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3" },
            { name: "Oats", desc: "Rolled organic oats", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 52, title: "Matcha Green Smoothie", category: "Smoothies", price: 8.50,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Earthy matcha powder blended with frozen banana, coconut milk, and baby spinach.",
        ingredients: [
            { name: "Matcha", desc: "Ceremonial green tea", removable: false, price: 0, img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?ixlib=rb-4.0.3" },
            { name: "Banana", desc: "Sweet frozen", removable: false, price: 0, img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3" },
            { name: "Spinach", desc: "Iron rich leaves", removable: true, price: 0, img: "https://images.unsplash.com/photo-1512621846451-f10f5d51d102?ixlib=rb-4.0.3" }
        ]
    },

    // Kids Meal (10)
    {
        id: 8, title: "Dino Chicken Nuggets", category: "Kids Meal", price: 8.00,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Crispy dinosaur-shaped chicken nuggets with a side of fries.",
        ingredients: [
            { name: "Fries", desc: "Crinkle cut", removable: false, price: 0, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3" },
            { name: "Extra Ketchup", desc: "Heinz", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 53, title: "Mac and Cheese", category: "Kids Meal", price: 7.50,
        image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Creamy macaroni elbow pasta baked in house-made cheddar sauce, crispy top crumbs.",
        ingredients: [
            { name: "Cheddar", desc: "Melted cheese sauce", removable: false, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Breadcrumbs", desc: "Crunchy topping", removable: true, price: 0, img: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3" },
            { name: "Bacon Bits", desc: "Smoked meat bits", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1606851094655-b25cb88b8e04?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 54, title: "Mini Burger Slider", category: "Kids Meal", price: 8.50,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Two bite-sized beef patties inside brioche slider buns with cheddar cheese, fries.",
        ingredients: [
            { name: "Beef Patty", desc: "Grilled slider size", removable: false, price: 0, img: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?ixlib=rb-4.0.3" },
            { name: "Cheese", desc: "Melted cheddar", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Fries", desc: "Shoestring cut", removable: true, price: 0, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 55, title: "Dino Pizza", category: "Kids Meal", price: 8.00,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Fun dinosaur shaped personal pizza crust loaded with marinara sauce and mozzarella.",
        ingredients: [
            { name: "Mozzarella", desc: "Melted cheese pull", removable: false, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Tomato Sauce", desc: "Sweet tomato base", removable: false, price: 0, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3" },
            { name: "Pepperoni", desc: "Slices of mild salami", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 56, title: "Mini Hot Dog", category: "Kids Meal", price: 7.00,
        image: "img/minihotdog.jpg",
        desc: "Grilled kid-friendly frankfurter in a soft hot dog bun, served with fries.",
        ingredients: [
            { name: "Sausage", desc: "Mild pork or beef", removable: false, price: 0, img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3" },
            { name: "Ketchup", desc: "Sweet tomato condiment", removable: true, price: 0, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3" },
            { name: "Mustard", desc: "Mild yellow", removable: true, price: 0, img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 57, title: "Fish and Chips Junior", category: "Kids Meal", price: 9.00,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "One golden battered fish fillet served with fresh lemon, tartare sauce, and fries.",
        ingredients: [
            { name: "Fried Fish", desc: "Crispy cod or haddock", removable: false, price: 0, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3" },
            { name: "Fries", desc: "Thick cut chips", removable: true, price: 0, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3" },
            { name: "Tartare Sauce", desc: "Mild herb mayo", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 58, title: "Spaghetti Meatballs", category: "Kids Meal", price: 8.50,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Classic kids spaghetti tossed in mild tomato sauce with two beef meatballs.",
        ingredients: [
            { name: "Spaghetti", desc: "Al dente pasta", removable: false, price: 0, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3" },
            { name: "Meatballs", desc: "100% Beef meatballs", removable: false, price: 0, img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3" },
            { name: "Parmesan Cheese", desc: "Grated hard cheese", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 59, title: "Chicken Tenders", category: "Kids Meal", price: 8.00,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Three breaded chicken breast tenders fried golden, served with honey mustard and fries.",
        ingredients: [
            { name: "Chicken Tenders", desc: "All white meat", removable: false, price: 0, img: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3" },
            { name: "Honey Mustard", desc: "Sweet dip sauce", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Fries", desc: "Crinkle fries", removable: true, price: 0, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 60, title: "Fruit Salad Cup", category: "Kids Meal", price: 5.50,
        image: "img/fruitsaladcup.jpg",
        desc: "Fresh cup filled with seasonal melon, pineapple, grapes, and sweet berries.",
        ingredients: [
            { name: "Mixed Fruits", desc: "Assorted sliced fruit", removable: false, price: 0, img: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-4.0.3" },
            { name: "Honey", desc: "Glaze on top", removable: true, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 61, title: "Cheese Quesadilla", category: "Kids Meal", price: 7.00,
        image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Folded toasted flour tortilla filled with gooey melted Monterey Jack cheese.",
        ingredients: [
            { name: "Cheddar", desc: "Cheese filling", removable: false, price: 0, img: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3" },
            { name: "Sour Cream", desc: "Cool dipping cream", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Guacamole", desc: "Rich avocado mash", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3" }
        ]
    },

    // Desserts (10)
    {
        id: 9, title: "Matcha Panna Cotta", category: "Desserts", price: 8.50,
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Silky matcha infused Italian dessert topped with fresh berries.",
        ingredients: [
            { name: "Berries", desc: "Mixed fresh", removable: true, price: 2.00, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 62, title: "Molten Chocolate Lava Cake", category: "Desserts", price: 9.50,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Decadent warm chocolate cake with a rich liquid fudge center, served with ice cream.",
        ingredients: [
            { name: "Vanilla Ice Cream", desc: "French bean gelato", removable: true, price: 0, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3" },
            { name: "Chocolate Lava", desc: "Liquid center", removable: false, price: 0, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 63, title: "Classic Tiramisu", category: "Desserts", price: 9.00,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Layers of espresso-soaked ladyfingers and whipped mascarpone cream, dusted with cocoa.",
        ingredients: [
            { name: "Mascarpone", desc: "Sweet italian cheese", removable: false, price: 0, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3" },
            { name: "Espresso", desc: "Coffee dip", removable: false, price: 0, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3" },
            { name: "Cocoa", desc: "Powder dusting", removable: true, price: 0, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 64, title: "New York Cheesecake", category: "Desserts", price: 9.50,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Rich and creamy baked cheesecake on a buttery graham cracker crust.",
        ingredients: [
            { name: "Cream Cheese", desc: "Smooth baked layer", removable: false, price: 0, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3" },
            { name: "Strawberry Compote", desc: "Sweet glazed topping", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 65, title: "Creme Brulee", category: "Desserts", price: 10.00,
        image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Rich custard base topped with a contrasting layer of texturally hard caramelized sugar.",
        ingredients: [
            { name: "Custard", desc: "Egg and cream blend", removable: false, price: 0, img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3" },
            { name: "Caramelized Sugar", desc: "Burnt crust", removable: false, price: 0, img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 66, title: "Chocolate Fudge Brownie", category: "Desserts", price: 8.00,
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Warm chocolate brownie packed with fudge, served with hot chocolate sauce.",
        ingredients: [
            { name: "Brownie", desc: "Dense chocolate cake", removable: false, price: 0, img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3" },
            { name: "Hot Fudge", desc: "Warm drizzle", removable: true, price: 0, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3" },
            { name: "Walnuts", desc: "Crunchy nut topping", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 67, title: "Apple Tarte Tatin", category: "Desserts", price: 10.50,
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Upside-down pastry in which apples are caramelized in butter and sugar before baking.",
        ingredients: [
            { name: "Caramelized Apples", desc: "Soft glazed apples", removable: false, price: 0, img: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3" },
            { name: "Puff Pastry", desc: "Crispy base", removable: false, price: 0, img: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3" },
            { name: "Vanilla Gelato", desc: "Cold ice cream scoop", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 68, title: "Lemon Meringue Tart", category: "Desserts", price: 8.50,
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Shortcrust pastry shell filled with tangy lemon curd, topped with toasted fluffy meringue.",
        ingredients: [
            { name: "Lemon Curd", desc: "Zesty custard", removable: false, price: 0, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Meringue", desc: "Sweet whipped whites", removable: true, price: 0, img: "https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 69, title: "Churros with Chocolate", category: "Desserts", price: 8.00,
        image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Fried dough pastry dusted with cinnamon sugar, served with a cup of warm chocolate sauce.",
        ingredients: [
            { name: "Cinnamon Sugar", desc: "Sweet spice coat", removable: true, price: 0, img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3" },
            { name: "Chocolate Dip", desc: "Belgian warm fudge", removable: false, price: 0, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3" },
            { name: "Caramel Sauce", desc: "Creamy dulce de leche", removable: true, price: 1.00, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 70, title: "Red Velvet Cupcake", category: "Desserts", price: 6.00,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Moist red velvet sponge cake topped with luxurious whipped cream cheese frosting.",
        ingredients: [
            { name: "Cream Cheese Frosting", desc: "Sweet whipped icing", removable: false, price: 0, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3" },
            { name: "Sprinkles", desc: "Festive decorations", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3" }
        ]
    },

    // Drinks (10)
    {
        id: 71, title: "Fresh Orange Juice", category: "Drinks", price: 5.50,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Freshly squeezed Valencia oranges served chilled over ice.",
        ingredients: [
            { name: "Orange", desc: "100% Citrus juice", removable: false, price: 0, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3" },
            { name: "Ice", desc: "Crushed ice cubes", removable: true, price: 0, img: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 72, title: "Iced Caramel Latte", category: "Drinks", price: 6.00,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Espresso shot over iced milk of choice, drizzled with sweet buttery caramel sauce.",
        ingredients: [
            { name: "Espresso", desc: "Arabica bean shot", removable: false, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" },
            { name: "Caramel Syrup", desc: "Sweet caramel ribbon", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" },
            { name: "Oat Milk", desc: "Nut free plant milk", removable: true, price: 0, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 73, title: "English Breakfast Tea", category: "Drinks", price: 4.50,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Traditional rich black tea blend served hot with a side of milk and honey.",
        ingredients: [
            { name: "Tea Bag", desc: "Twinings blend", removable: false, price: 0, img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3" },
            { name: "Milk", desc: "Whole dairy splash", removable: true, price: 0, img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3" },
            { name: "Honey", desc: "Sweet honey packet", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 74, title: "Sparkling Water", category: "Drinks", price: 4.00,
        image: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Crisp carbonated natural spring mineral water served over ice.",
        ingredients: [
            { name: "Lime Wedge", desc: "Citrus garnish", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Ice", desc: "Whole ice cubes", removable: true, price: 0, img: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 75, title: "Hot Chocolate", category: "Drinks", price: 5.00,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Steamed milk whisked with rich premium cocoa powder, topped with marshmallows.",
        ingredients: [
            { name: "Cocoa", desc: "Earthy milk chocolate", removable: false, price: 0, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3" },
            { name: "Whipped Cream", desc: "Rich fluffy cream", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3" },
            { name: "Marshmallows", desc: "Sweet mini fluff", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 76, title: "Lemon Iced Tea", category: "Drinks", price: 5.00,
        image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Refreshing cold brewed iced tea with lemon extract and fresh mint leaves.",
        ingredients: [
            { name: "Ice", desc: "Chilled cubes", removable: true, price: 0, img: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3" },
            { name: "Lemon Wedge", desc: "Fresh citrus", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" },
            { name: "Mint", desc: "Extra fresh leaves", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 77, title: "Cappuccino", category: "Drinks", price: 5.00,
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Rich espresso topped with a thick layer of steamed milk foam and cocoa powder dust.",
        ingredients: [
            { name: "Cocoa Powder", desc: "Chocolate dust topping", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3" },
            { name: "Extra Shot", desc: "Espresso boost", removable: true, price: 1.50, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 78, title: "Double Espresso", category: "Drinks", price: 4.00,
        image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Two concentrated shots of full-bodied dark roast espresso, served hot.",
        ingredients: [
            { name: "Extra Sugar", desc: "Raw brown packet", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 79, title: "Ginger Ale", category: "Drinks", price: 4.50,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Sweet and bubbly carbonated soft drink flavored with ginger root extracts.",
        ingredients: [
            { name: "Ice", desc: "Crushed cubes", removable: true, price: 0, img: "https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3" },
            { name: "Lime", desc: "Fresh lime wedge squeeze", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    },
    {
        id: 80, title: "Matcha Latte", category: "Drinks", price: 6.00,
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        desc: "Earthy ceremonial grade stone-ground green tea whisked with warm almond milk.",
        ingredients: [
            { name: "Almond Milk", desc: "Creamy plant milk", removable: false, price: 0.50, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3" },
            { name: "Honey", desc: "Sweet organic sweetener", removable: true, price: 0.50, img: "https://images.unsplash.com/photo-1590502593747-4229879f7625?ixlib=rb-4.0.3" }
        ]
    }
];

let cart;
let currentLocation;
let currentCategory;
let currentSearch;

try {
    cart = JSON.parse(localStorage.getItem('papomotto_cart') || '[]');
    currentLocation = localStorage.getItem('papomotto_location') || '';
    currentCategory = localStorage.getItem('papomotto_category') || 'All';
    currentSearch = localStorage.getItem('papomotto_search') || '';
} catch (e) {
    cart = [];
    currentLocation = '';
    currentCategory = 'All';
    currentSearch = '';
}

/* ── Offers / Specials ── */
const offers = [
  {
    id: 'off-1',
    type: 'combo',
    title: 'Breakfast Combo',
    subtitle: 'Pancakes + Coffee = $12',
    discount: 'Save 20%',
    bgLinear: 'linear-gradient(135deg, #718355 0%, #97A97C 100%)',
  },
  {
    id: 'off-2',
    type: 'percent',
    title: 'Happy Hour',
    subtitle: '50% off all cocktails · 4–7PM',
    discount: '50% OFF',
    bgLinear: 'linear-gradient(135deg, #87986A 0%, #718355 100%)',
  },
  {
    id: 'off-3',
    type: 'new',
    title: 'New Dish',
    subtitle: 'Lobster Thermidor is here',
    discount: 'Try Now',
    bgLinear: 'linear-gradient(135deg, #97A97C 0%, #718355 100%)',
  },
];

function renderOffers() {
  const strip = document.getElementById('offers-section');
  if (!strip) return;
  if (!offers.length) { strip.style.display = 'none'; return; }

  strip.innerHTML = offers.map(off => `
    <div class="offer-card" style="background-image: ${off.bgLinear}; background-color: var(--primary);">
      <span class="offer-badge-off">${off.discount}</span>
      <span class="off-eyebrow">${off.type === 'combo' ? 'COMBO DEAL' : off.type === 'percent' ? 'PROMO' : 'JUST ARRIVED'}</span>
      <span class="off-title">${off.title}</span>
      <span class="off-sub">${off.subtitle}</span>
    </div>
  `).join('');
  strip.style.display = 'flex';
}

/* ── State ── */

function saveState() {
    localStorage.setItem('papomotto_cart', JSON.stringify(cart));
    localStorage.setItem('papomotto_location', currentLocation);
    localStorage.setItem('papomotto_category', currentCategory);
    localStorage.setItem('papomotto_search', currentSearch);
}

let activeModalItem = null;
let activeModalQty = 1;
let activeModalCustoms = [];

// Navigation Functions
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
    window.scrollTo(0,0);
}

function simulateScan(location) {
    currentLocation = location;
    saveState();
    // Update all elements showing location
    document.getElementById('current-location').innerText = location;
    document.querySelectorAll('.current-location-display').forEach(el => el.innerText = location);
    document.getElementById('success-location').innerText = location;

    switchScreen('categories-screen');
}

function goToMenu(category) {
    // If we want to show a specific category, we can set it.
    // If 'All', it shows all. Let's just set the filter.
    filterCategory(category);
    switchScreen('menu-screen');
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
}

// Localization & Settings Configuration
const translations = {
    en: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Scan a QR code at your table to view our menu and order.",
        scan_table: "Scan Table 4",
        scan_room: "Scan Room 205",
        scan_patio: "Scan Patio 2",
        craving: "What are you craving?",
        search_placeholder: "Search for meals...",
        customize_add: "Customize & Add",
        ingredients_header: "Ingredients & Extras",
        add: "Add",
        your_order: "Your Order",
        order_notes_label: "Order Notes (e.g., less salt, allergies)",
        notes_placeholder: "Add any special requests here...",
        subtotal: "Subtotal",
        tax: "Tax (10%)",
        total: "Total",
        submit_order: "Submit Order",
        order_placed: "Order Placed!",
        order_success_desc: "Your order has been sent to the kitchen. It will be delivered to {location} shortly.",
        new_order: "Start New Order",
        toast_added: "{title} added to order!",
        settings_title: "Settings",
        language: "Language",
        currency: "Currency",
        theme: "Theme",
        light_mode: "Light",
        dark_mode: "Dark",
        auto_detected: "Auto-detected from region",
        close: "Close",
        "No": "No",
        "All": "All",
        "Starters": "Starters",
        "Breakfast": "Breakfast",
        "Mains": "Mains",
        "Cocktails": "Cocktails",
        "Smoothies": "Smoothies",
        "Kids Meal": "Kids Meal",
        "Desserts": "Desserts",
        "Drinks": "Drinks",
        "Popular": "Popular",
        "Grilled Salmon Asparagus": "Grilled Salmon Asparagus",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.",
        "Salmon": "Salmon",
        "Fresh catch": "Fresh catch",
        "Asparagus": "Asparagus",
        "Roasted greens": "Roasted greens",
        "Extra Lemon": "Extra Lemon",
        "Fresh wedges": "Fresh wedges",
        "Wagyu Beef Burger": "Wagyu Beef Burger",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.",
        "Wagyu Patty": "Wagyu Patty",
        "100% Premium": "100% Premium",
        "Bacon": "Bacon",
        "Crispy smoked": "Crispy smoked",
        "Avocado Toast": "Avocado Toast",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.",
        "Avocado": "Avocado",
        "Hass avocado": "Hass avocado",
        "Poached Egg": "Poached Egg",
        "Free range": "Free range",
        "Fluffy Pancakes": "Fluffy Pancakes",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.",
        "Maple Syrup": "Maple Syrup",
        "100% Pure": "100% Pure",
        "Berries": "Berries",
        "Mixed fresh": "Mixed fresh",
        "Crispy Calamari": "Crispy Calamari",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Lightly fried calamari rings served with lemon wedge and tartare sauce.",
        "Tartare Sauce": "Tartare Sauce",
        "House made": "House made",
        "Classic Mojito": "Classic Mojito",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Refreshing rum cocktail with fresh mint, lime juice, and soda.",
        "Extra Mint": "Extra Mint",
        "Fresh leaves": "Fresh leaves",
        "Berry Smoothie": "Berry Smoothie",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Blend of mixed berries, yogurt, and a touch of honey.",
        "Protein Powder": "Protein Powder",
        "Whey or Plant": "Whey or Plant",
        "Dino Chicken Nuggets": "Dino Chicken Nuggets",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Crispy dinosaur-shaped chicken nuggets with a side of fries.",
        "Fries": "Fries",
        "Crinkle cut": "Crinkle cut",
        "Extra Ketchup": "Extra Ketchup",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Matcha Panna Cotta",
        "Silky matcha infused Italian dessert topped with fresh berries.": "Silky matcha infused Italian dessert topped with fresh berries.",
        "Ribeye Steak": "Ribeye Steak",
        "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.": "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.",
        "Garlic Butter": "Garlic Butter",
        "House blend": "House blend",
        "Rosemary": "Rosemary",
        "Fresh sprigs": "Fresh sprigs",
        "Pepper Sauce": "Pepper Sauce",
        "Creamy peppercorn": "Creamy peppercorn",
        "Truffle Mushroom Risotto": "Truffle Mushroom Risotto",
        "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.": "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.",
        "Arborio Rice": "Arborio Rice",
        "Italian classic": "Italian classic",
        "Wild Mushrooms": "Wild Mushrooms",
        "Sautéed medley": "Sautéed medley",
        "Truffle Paste": "Truffle Paste",
        "Black truffle": "Black truffle",
        "Chicken Fettuccine Alfredo": "Chicken Fettuccine Alfredo",
        "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.": "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.",
        "Fettuccine": "Fettuccine",
        "Fresh pasta": "Fresh pasta",
        "Grilled Chicken": "Grilled Chicken",
        "Juicy breast slice": "Juicy breast slice",
        "Extra Cheese": "Extra Cheese",
        "Aged Parmigiano": "Aged Parmigiano",
        "Pan-Seared Sea Bass": "Pan-Seared Sea Bass",
        "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.": "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.",
        "Sea Bass": "Sea Bass",
        "Fresh fillet": "Fresh fillet",
        "Lemon Herb Glaze": "Lemon Herb Glaze",
        "Tangy sauce": "Tangy sauce",
        "Cherry Tomatoes": "Cherry Tomatoes",
        "Sautéed sweet": "Sautéed sweet",
        "Vegetarian Buddha Bowl": "Vegetarian Buddha Bowl",
        "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.": "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.",
        "Quinoa": "Quinoa",
        "Organic grain": "Organic grain",
        "Roasted Chickpeas": "Roasted Chickpeas",
        "Crunchy seasoned": "Crunchy seasoned",
        "Tahini Drizzle": "Tahini Drizzle",
        "Sesame dressing": "Sesame dressing",
        "Slow-Cooked Lamb Shanks": "Slow-Cooked Lamb Shanks",
        "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.": "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.",
        "Lamb Shank": "Lamb Shank",
        "Braised tender": "Braised tender",
        "Mashed Potatoes": "Mashed Potatoes",
        "Creamy buttered": "Creamy buttered",
        "Red Wine Jus": "Red Wine Jus",
        "Rich reduction": "Rich reduction",
        "Spiced Duck Breast": "Spiced Duck Breast",
        "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.": "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.",
        "Duck Breast": "Duck Breast",
        "Crispy skin": "Crispy skin",
        "Cherry Reduction": "Cherry Reduction",
        "Sweet tart glaze": "Sweet tart glaze",
        "Orange Zest": "Orange Zest",
        "Fresh citrus hint": "Fresh citrus hint",
        "Lobster Thermidor": "Lobster Thermidor",
        "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.": "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.",
        "Lobster": "Lobster",
        "Fresh whole tail": "Fresh whole tail",
        "Mustard Cognac Sauce": "Mustard Cognac Sauce",
        "Rich cream sauce": "Rich cream sauce",
        "Gruyere Cheese": "Gruyere Cheese",
        "Melted golden": "Melted golden",
        "Garlic Herb Bread": "Garlic Herb Bread",
        "Toasted artisan bread brushed with house garlic herb butter and parsley.": "Toasted artisan bread brushed with house garlic herb butter and parsley.",
        "Buffalo Chicken Wings": "Buffalo Chicken Wings",
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.": "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.",
        "Buffalo Sauce": "Buffalo Sauce",
        "Classic hot": "Classic hot",
        "Blue Cheese Dip": "Blue Cheese Dip",
        "Cooling dip": "Cooling dip",
        "Celery Sticks": "Celery Sticks",
        "Crunchy sides": "Crunchy sides",
        "Pan-Seared Scallops": "Pan-Seared Scallops",
        "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.": "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.",
        "Microgreens": "Microgreens",
        "Delicate garnish": "Delicate garnish",
        "Eggs Benedict": "Eggs Benedict",
        "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.": "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.",
        "Hollandaise Sauce": "Hollandaise Sauce",
        "Butter egg glaze": "Butter egg glaze",
        "Smoked Salmon": "Smoked Salmon",
        "Upgrade to Royale": "Upgrade to Royale",
        "Spinach": "Spinach",
        "Sautéed greens": "Sautéed greens",
        "French Toast Sticks": "French Toast Sticks",
        "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.": "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.",
        "Powdered Sugar": "Powdered Sugar",
        "Sweet dusting": "Sweet dusting",
        "Cinnamon Butter": "Cinnamon Butter",
        "Whipped blend": "Whipped blend",
        "Belgian Waffles": "Belgian Waffles",
        "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.": "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.",
        "Whipped Cream": "Whipped Cream",
        "Sweet vanilla": "Sweet vanilla",
        "Strawberries": "Strawberries",
        "Fresh cut": "Fresh cut",
        "Chocolate Drizzle": "Chocolate Drizzle",
        "Dark syrup": "Dark syrup",
        "Classic Omelette": "Classic Omelette",
        "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.": "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.",
        "Cheddar": "Cheddar",
        "Melted cheese": "Melted cheese",
        "Mushrooms": "Mushrooms",
        "Sautéed wild": "Sautéed wild",
        "Bell Peppers": "Bell Peppers",
        "Fresh tri-color": "Fresh tri-color",
        "Acai Berry Bowl": "Acai Berry Bowl",
        "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.": "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.",
        "Granola": "Granola",
        "Oat & Honey crunch": "Oat & Honey crunch",
        "Chia Seeds": "Chia Seeds",
        "High protein": "High protein",
        "Honey Drizzle": "Honey Drizzle",
        "Organic sweet": "Organic sweet",
        "Smoked Salmon Bagel": "Smoked Salmon Bagel",
        "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.": "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.",
        "Capers": "Capers",
        "Salted pickly": "Salted pickly",
        "Red Onion": "Red Onion",
        "Thinly sliced": "Thinly sliced",
        "Full English Breakfast": "Full English Breakfast",
        "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.": "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.",
        "Sausage": "Sausage",
        "Grilled link": "Grilled link",
        "Baked Beans": "Baked Beans",
        "In tomato sauce": "In tomato sauce",
        "Grilled Mushroom": "Grilled Mushroom",
        "Button mushroom": "Button mushroom",
        "Breakfast Burrito": "Breakfast Burrito",
        "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.": "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.",
        "Scrambled Eggs": "Scrambled Eggs",
        "Fluffy eggs": "Fluffy eggs",
        "Chorizo": "Chorizo",
        "Spicy sausage": "Spicy sausage",
        "Salsa Verde": "Salsa Verde",
        "Tangy green sauce": "Tangy green sauce",
        "Espresso Martini": "Espresso Martini",
        "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.": "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.",
        "Espresso": "Espresso",
        "Double shot": "Double shot",
        "Coffee Liqueur": "Coffee Liqueur",
        "Kahlua style": "Kahlua style",
        "Vodka": "Vodka",
        "Premium Triple Distilled": "Premium Triple Distilled",
        "Passion Fruit Margarita": "Passion Fruit Margarita",
        "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.": "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.",
        "Tequila": "Tequila",
        "100% Agave": "100% Agave",
        "Passion Fruit Pulp": "Passion Fruit Pulp",
        "Seedless fresh pulp": "Seedless fresh pulp",
        "Lime": "Lime",
        "Zesty rim & juice": "Zesty rim & juice",
        "Old Fashioned": "Old Fashioned",
        "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.": "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.",
        "Bourbon": "Bourbon",
        "Barrel aged": "Barrel aged",
        "Angostura Bitters": "Angostura Bitters",
        "Spiced tincture": "Spiced tincture",
        "Orange Peel": "Orange Peel",
        "Expressed oils": "Expressed oils",
        "Whiskey Sour": "Whiskey Sour",
        "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.": "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.",
        "Whiskey": "Whiskey",
        "Sour mash": "Sour mash",
        "Lemon Juice": "Lemon Juice",
        "Fresh squeezed": "Fresh squeezed",
        "Egg White": "Egg White",
        "Silky meringue layer": "Silky meringue layer",
        "Aperol Spritz": "Aperol Spritz",
        "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.": "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.",
        "Aperol": "Aperol",
        "Gentian liqueur": "Gentian liqueur",
        "Prosecco": "Prosecco",
        "Sparkling dry": "Sparkling dry",
        "Soda Water": "Soda Water",
        "Fizzy finish": "Fizzy finish",
        "Pina Colada": "Pina Colada",
        "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.": "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.",
        "Coconut Cream": "Coconut Cream",
        "Sweet dairy free": "Sweet dairy free",
        "Pineapple Juice": "Pineapple Juice",
        "100% Juice": "100% Juice",
        "Rum": "Rum",
        "White caribbean": "White caribbean",
        "Negroni": "Negroni",
        "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.": "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.",
        "Gin": "Gin",
        "Botanical dry": "Botanical dry",
        "Campari": "Campari",
        "Bitter orange": "Bitter orange",
        "Sweet Vermouth": "Sweet Vermouth",
        "Red herb wine": "Red herb wine",
        "Strawberry Daiquiri": "Strawberry Daiquiri",
        "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.": "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.",
        "White Rum": "White Rum",
        "Premium rum": "Premium rum",
        "Moscow Mule": "Moscow Mule",
        "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.": "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.",
        "Ginger Beer": "Ginger Beer",
        "Spicy carbonated": "Spicy carbonated",
        "Mint": "Mint",
        "Fresh sprig": "Fresh sprig",
        "Tropical Mango Smoothie": "Tropical Mango Smoothie",
        "Golden blend of sweet mango, pineapple juice, and coconut water.": "Golden blend of sweet mango, pineapple juice, and coconut water.",
        "Mango": "Mango",
        "Haden puree": "Haden puree",
        "Pineapple": "Pineapple",
        "Sweet chunks": "Sweet chunks",
        "Green Detox Smoothie": "Green Detox Smoothie",
        "Healthy green smoothie loaded with baby spinach, crisp cucumber, apple, and ginger.": "Healthy green smoothie loaded with baby spinach, crisp cucumber, apple, and ginger.",
        "Green Apple": "Green Apple",
        "Granny smith tart": "Granny smith tart",
        "Ginger": "Ginger",
        "Spicy zesty root": "Spicy zesty root",
        "Peanut Butter Banana Smoothie": "Peanut Butter Banana Smoothie",
        "Thick creamy blend of peanut butter, banana, honey, and high-protein Greek yogurt.": "Thick creamy blend of peanut butter, banana, honey, and high-protein Greek yogurt.",
        "Banana": "Banana",
        "Ripe sweet banana": "Ripe sweet banana",
        "Peanut Butter": "Peanut Butter",
        "All natural creamy": "All natural creamy",
        "Almond Milk": "Almond Milk",
        "Unsweetened plant milk": "Unsweetened plant milk",
        "Avocado Honey Smoothie": "Avocado Honey Smoothie",
        "Super creamy avocado shake blended with organic wild honey and whole milk.": "Super creamy avocado shake blended with organic wild honey and whole milk.",
        "Honey": "Honey",
        "Raw organic honey": "Raw organic honey",
        "Yogurt": "Yogurt",
        "Plain probiotic": "Plain probiotic",
        "Chocolate Protein Smoothie": "Chocolate Protein Smoothie",
        "Satisfying blend of organic cocoa, protein powder, banana, and almond butter.": "Satisfying blend of organic cocoa, protein powder, banana, and almond butter.",
        "Cocoa Powder": "Cocoa Powder",
        "Rich dark chocolate": "Rich dark chocolate",
        "Vanilla whey isolate": "Vanilla whey isolate",
        "Almond Butter": "Almond Butter",
        "Premium nut spread": "Premium nut spread",
        "Pineapple Coconut Smoothie": "Pineapple Coconut Smoothie",
        "Refreshing coconut milk blended with fresh pineapple chunks, mint garnish.": "Refreshing coconut milk blended with fresh pineapple chunks, mint garnish.",
        "Coconut Milk": "Coconut Milk",
        "Creamy liquid": "Creamy liquid",
        "Citrus Power Smoothie": "Citrus Power Smoothie",
        "Zesty immunity boost blend of orange slices, pink grapefruit, and lemon juice.": "Zesty immunity boost blend of orange slices, pink grapefruit, and lemon juice.",
        "Orange": "Orange",
        "Sunkist fruit": "Sunkist fruit",
        "Grapefruit": "Grapefruit",
        "Ruby red tart": "Ruby red tart",
        "Strawberry Banana Smoothie": "Strawberry Banana Smoothie",
        "The classic duo: sweet red strawberries blended with bananas and rolled oats.": "The classic duo: sweet red strawberries blended with bananas and rolled oats.",
        "Chiquita banana": "Chiquita banana",
        "Oats": "Oats",
        "Rolled organic oats": "Rolled organic oats",
        "Matcha Green Smoothie": "Matcha Green Smoothie",
        "Earthy matcha powder blended with frozen banana, coconut milk, and baby spinach.": "Earthy matcha powder blended with frozen banana, coconut milk, and baby spinach.",
        "Matcha": "Matcha",
        "Ceremonial green tea": "Ceremonial green tea",
        "Iron rich leaves": "Iron rich leaves",
        "Mac and Cheese": "Mac and Cheese",
        "Creamy macaroni elbow pasta baked in house-made cheddar sauce, crispy top crumbs.": "Creamy macaroni elbow pasta baked in house-made cheddar sauce, crispy top crumbs.",
        "Cheddar": "Cheddar",
        "Melted cheese sauce": "Melted cheese sauce",
        "Breadcrumbs": "Breadcrumbs",
        "Crunchy topping": "Crunchy topping",
        "Bacon Bits": "Bacon Bits",
        "Smoked meat bits": "Smoked meat bits",
        "Mini Burger Slider": "Mini Burger Slider",
        "Two bite-sized beef patties inside brioche slider buns with cheddar cheese, fries.": "Two bite-sized beef patties inside brioche slider buns with cheddar cheese, fries.",
        "Beef Patty": "Beef Patty",
        "Grilled slider size": "Grilled slider size",
        "Cheese": "Cheese",
        "Melted cheddar": "Melted cheddar",
        "Dino Pizza": "Dino Pizza",
        "Fun dinosaur shaped personal pizza crust loaded with marinara sauce and mozzarella.": "Fun dinosaur shaped personal pizza crust loaded with marinara sauce and mozzarella.",
        "Mozzarella": "Mozzarella",
        "Melted cheese pull": "Melted cheese pull",
        "Tomato Sauce": "Tomato Sauce",
        "Sweet tomato base": "Sweet tomato base",
        "Pepperoni": "Pepperoni",
        "Slices of mild salami": "Slices of mild salami",
        "Mini Hot Dog": "Mini Hot Dog",
        "Grilled kid-friendly frankfurter in a soft hot dog bun, served with fries.": "Grilled kid-friendly frankfurter in a soft hot dog bun, served with fries.",
        "Sausage": "Sausage",
        "Mild pork or beef": "Mild pork or beef",
        "Ketchup": "Ketchup",
        "Sweet tomato condiment": "Sweet tomato condiment",
        "Mustard": "Mustard",
        "Mild yellow": "Mild yellow",
        "Fish and Chips Junior": "Fish and Chips Junior",
        "One golden battered fish fillet served with fresh lemon, tartare sauce, and fries.": "One golden battered fish fillet served with fresh lemon, tartare sauce, and fries.",
        "Fried Fish": "Fried Fish",
        "Crispy cod or haddock": "Crispy cod or haddock",
        "Tartare Sauce": "Tartare Sauce",
        "Mild herb mayo": "Mild herb mayo",
        "Spaghetti Meatballs": "Spaghetti Meatballs",
        "Classic kids spaghetti tossed in mild tomato sauce with two beef meatballs.": "Classic kids spaghetti tossed in mild tomato sauce with two beef meatballs.",
        "Spaghetti": "Spaghetti",
        "Al dente pasta": "Al dente pasta",
        "Meatballs": "Meatballs",
        "100% Beef meatballs": "100% Beef meatballs",
        "Parmesan Cheese": "Parmesan Cheese",
        "Grated hard cheese": "Grated hard cheese",
        "Chicken Tenders": "Chicken Tenders",
        "Three breaded chicken breast tenders fried golden, served with honey mustard and fries.": "Three breaded chicken breast tenders fried golden, served with honey mustard and fries.",
        "Chicken Tenders": "Chicken Tenders",
        "All white meat": "All white meat",
        "Honey Mustard": "Honey Mustard",
        "Sweet dip sauce": "Sweet dip sauce",
        "Fruit Salad Cup": "Fruit Salad Cup",
        "Fresh cup filled with seasonal melon, pineapple, grapes, and sweet berries.": "Fresh cup filled with seasonal melon, pineapple, grapes, and sweet berries.",
        "Mixed Fruits": "Mixed Fruits",
        "Assorted sliced fruit": "Assorted sliced fruit",
        "Cheese Quesadilla": "Cheese Quesadilla",
        "Folded toasted flour tortilla filled with gooey melted Monterey Jack cheese.": "Folded toasted flour tortilla filled with gooey melted Monterey Jack cheese.",
        "Cheddar": "Cheddar",
        "Cheese filling": "Cheese filling",
        "Sour Cream": "Sour Cream",
        "Cool dipping cream": "Cool dipping cream",
        "Guacamole": "Guacamole",
        "Rich avocado mash": "Rich avocado mash",
        "Molten Chocolate Lava Cake": "Molten Chocolate Lava Cake",
        "Decadent warm chocolate cake with a rich liquid fudge center, served with ice cream.": "Decadent warm chocolate cake with a rich liquid fudge center, served with ice cream.",
        "Vanilla Ice Cream": "Vanilla Ice Cream",
        "French bean gelato": "French bean gelato",
        "Chocolate Lava": "Chocolate Lava",
        "Liquid center": "Liquid center",
        "Classic Tiramisu": "Classic Tiramisu",
        "Layers of espresso-soaked ladyfingers and whipped mascarpone cream, dusted with cocoa.": "Layers of espresso-soaked ladyfingers and whipped mascarpone cream, dusted with cocoa.",
        "Mascarpone": "Mascarpone",
        "Sweet italian cheese": "Sweet italian cheese",
        "Cocoa": "Cocoa",
        "Powder dusting": "Powder dusting",
        "New York Cheesecake": "New York Cheesecake",
        "Rich and creamy baked cheesecake on a buttery graham cracker crust.": "Rich and creamy baked cheesecake on a buttery graham cracker crust.",
        "Cream Cheese": "Cream Cheese",
        "Smooth baked layer": "Smooth baked layer",
        "Strawberry Compote": "Strawberry Compote",
        "Sweet glazed topping": "Sweet glazed topping",
        "Creme Brulee": "Creme Brulee",
        "Rich custard base topped with a contrasting layer of texturally hard caramelized sugar.": "Rich custard base topped with a contrasting layer of texturally hard caramelized sugar.",
        "Custard": "Custard",
        "Egg and cream blend": "Egg and cream blend",
        "Caramelized Sugar": "Caramelized Sugar",
        "Burnt crust": "Burnt crust",
        "Chocolate Fudge Brownie": "Chocolate Fudge Brownie",
        "Warm chocolate brownie packed with fudge, served with hot chocolate sauce.": "Warm chocolate brownie packed with fudge, served with hot chocolate sauce.",
        "Brownie": "Brownie",
        "Dense chocolate cake": "Dense chocolate cake",
        "Hot Fudge": "Hot Fudge",
        "Warm drizzle": "Warm drizzle",
        "Walnuts": "Walnuts",
        "Crunchy nut topping": "Crunchy nut topping",
        "Apple Tarte Tatin": "Apple Tarte Tatin",
        "Upside-down pastry in which apples are caramelized in butter and sugar before baking.": "Upside-down pastry in which apples are caramelized in butter and sugar before baking.",
        "Caramelized Apples": "Caramelized Apples",
        "Soft glazed apples": "Soft glazed apples",
        "Puff Pastry": "Puff Pastry",
        "Crispy base": "Crispy base",
        "Vanilla Gelato": "Vanilla Gelato",
        "Cold ice cream scoop": "Cold ice cream scoop",
        "Lemon Meringue Tart": "Lemon Meringue Tart",
        "Shortcrust pastry shell filled with tangy lemon curd, topped with toasted fluffy meringue.": "Shortcrust pastry shell filled with tangy lemon curd, topped with toasted fluffy meringue.",
        "Lemon Curd": "Lemon Curd",
        "Zesty custard": "Zesty custard",
        "Meringue": "Meringue",
        "Sweet whipped whites": "Sweet whipped whites",
        "Churros with Chocolate": "Churros with Chocolate",
        "Fried dough pastry dusted with cinnamon sugar, served with a cup of warm chocolate sauce.": "Fried dough pastry dusted with cinnamon sugar, served with a cup of warm chocolate sauce.",
        "Cinnamon Sugar": "Cinnamon Sugar",
        "Sweet spice coat": "Sweet spice coat",
        "Chocolate Dip": "Chocolate Dip",
        "Belgian warm fudge": "Belgian warm fudge",
        "Caramel Sauce": "Caramel Sauce",
        "Creamy dulce de leche": "Creamy dulce de leche",
        "Red Velvet Cupcake": "Red Velvet Cupcake",
        "Moist red velvet sponge cake topped with luxurious whipped cream cheese frosting.": "Moist red velvet sponge cake topped with luxurious whipped cream cheese frosting.",
        "Cream Cheese Frosting": "Cream Cheese Frosting",
        "Sweet whipped icing": "Sweet whipped icing",
        "Sprinkles": "Sprinkles",
        "Festive decorations": "Festive decorations",
        "Fresh Orange Juice": "Fresh Orange Juice",
        "Freshly squeezed Valencia oranges served chilled over ice.": "Freshly squeezed Valencia oranges served chilled over ice.",
        "Ice": "Ice",
        "Crushed ice cubes": "Crushed ice cubes",
        "Iced Caramel Latte": "Iced Caramel Latte",
        "Espresso shot over iced milk of choice, drizzled with sweet buttery caramel sauce.": "Espresso shot over iced milk of choice, drizzled with sweet buttery caramel sauce.",
        "Caramel Syrup": "Caramel Syrup",
        "Sweet caramel ribbon": "Sweet caramel ribbon",
        "Oat Milk": "Oat Milk",
        "Nut free plant milk": "Nut free plant milk",
        "Sparkling Water": "Sparkling Water",
        "Crisp carbonated natural spring mineral water served over ice.": "Crisp carbonated natural spring mineral water served over ice.",
        "Lime Wedge": "Lime Wedge",
        "Citrus garnish": "Citrus garnish",
        "Whole ice cubes": "Whole ice cubes",
        "Hot Chocolate": "Hot Chocolate",
        "Steamed milk whisked with rich premium cocoa powder, topped with marshmallows.": "Steamed milk whisked with rich premium cocoa powder, topped with marshmallows.",
        "Whipped Cream": "Whipped Cream",
        "Rich fluffy cream": "Rich fluffy cream",
        "Marshmallows": "Marshmallows",
        "Sweet mini fluff": "Sweet mini fluff",
        "Lemon Iced Tea": "Lemon Iced Tea",
        "Refreshing cold brewed iced tea with lemon extract and fresh mint leaves.": "Refreshing cold brewed iced tea with lemon extract and fresh mint leaves.",
        "Extra fresh leaves": "Extra fresh leaves",
        "Cappuccino": "Cappuccino",
        "Rich espresso topped with a thick layer of steamed milk foam and cocoa powder dust.": "Rich espresso topped with a thick layer of steamed milk foam and cocoa powder dust.",
        "Chocolate dust topping": "Chocolate dust topping",
        "Extra Shot": "Extra Shot",
        "Espresso boost": "Espresso boost",
        "Double Espresso": "Double Espresso",
        "Two concentrated shots of full-bodied dark roast espresso, served hot.": "Two concentrated shots of full-bodied dark roast espresso, served hot.",
        "Extra Sugar": "Extra Sugar",
        "Raw brown packet": "Raw brown packet",
        "Ginger Ale": "Ginger Ale",
        "Sweet and bubbly carbonated soft drink flavored with ginger root extracts.": "Sweet and bubbly carbonated soft drink flavored with ginger root extracts.",
        "Crushed cubes": "Crushed cubes",
        "Fresh lime wedge squeeze": "Fresh lime wedge squeeze",
        "Matcha Latte": "Matcha Latte",
    },
    es: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Escanee el código QR en su mesa para ver nuestro menú y ordenar.",
        scan_table: "Escanear Mesa 4",
        scan_room: "Escanear Habitación 205",
        scan_patio: "Escanear Terraza 2",
        craving: "¿Qué le apetece?",
        search_placeholder: "Buscar platos...",
        customize_add: "Personalizar y añadir",
        ingredients_header: "Ingredientes y extras",
        add: "Añadir",
        your_order: "Su Pedido",
        order_notes_label: "Notas del pedido (ej. menos sal, allergies)",
        notes_placeholder: "Añada peticiones especiales aquí...",
        subtotal: "Subtotal",
        tax: "Impuesto (10%)",
        total: "Total",
        submit_order: "Confirmar Pedido",
        order_placed: "¡Pedido Enviado!",
        order_success_desc: "Su pedido ha sido enviado a la cocina. Se entregará en {location} en breve.",
        new_order: "Iniciar nuevo pedido",
        toast_added: "¡{title} añadido al pedido!",
        settings_title: "Configuración",
        language: "Idioma",
        currency: "Moneda",
        theme: "Tema",
        light_mode: "Claro",
        dark_mode: "Oscuro",
        auto_detected: "Detectado automáticamente",
        close: "Cerrar",
        "No": "Sin",
        "All": "Todos",
        "Starters": "Entrantes",
        "Breakfast": "Desayuno",
        "Mains": "Principales",
        "Cocktails": "Cócteles",
        "Smoothies": "Batidos",
        "Kids Meal": "Menú Infantil",
        "Desserts": "Postres",
        "Drinks": "Bebidas",
        "Popular": "Popular",
        "Grilled Salmon Asparagus": "Salmón a la plancha con espárragos",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Salmón fresco a la plancha servido con espárragos asados y salsa de mantequilla al limón.",
        "Salmon": "Salmón",
        "Fresh catch": "Captura fresca",
        "Asparagus": "Espárragos",
        "Roasted greens": "Verduras asadas",
        "Extra Lemon": "Limón extra",
        "Fresh wedges": "Gajos frescos",
        "Wagyu Beef Burger": "Hamburguesa de ternera Wagyu",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Hamburguesa de ternera Wagyu premium con cebolla caramelizada, queso cheddar y salsa de la casa.",
        "Wagyu Patty": "Carne de Wagyu",
        "100% Premium": "100% Premium",
        "Bacon": "Bacón",
        "Crispy smoked": "Ahumado crujiente",
        "Avocado Toast": "Tostada de aguacate",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Tostada de masa madre con aguacate machacado, huevo escalfado y copos de chile.",
        "Avocado": "Aguacate",
        "Hass avocado": "Aguacate Hass",
        "Poached Egg": "Huevo escalfado",
        "Free range": "De corral",
        "Fluffy Pancakes": "Tortitas esponjosas",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Pila de tortitas esponjosas con jarabe de arce y bayas frescas.",
        "Maple Syrup": "Jarabe de arce",
        "100% Pure": "100% Puro",
        "Berries": "Bayas",
        "Mixed fresh": "Bayas frescas mixtas",
        "Crispy Calamari": "Calamar crujiente",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Anillas de calamar ligeramente fritas servidas con gajo de limón y salsa tártara.",
        "Tartare Sauce": "Salsa tártara",
        "House made": "Casera",
        "Classic Mojito": "Mojito clásico",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Refrescante cóctel de ron con menta fresca, zumo de lima y soda.",
        "Extra Mint": "Menta extra",
        "Fresh leaves": "Hojas frescas",
        "Berry Smoothie": "Batido de bayas",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Mezcla de bayas mixtas, yogur y un toque de miel.",
        "Protein Powder": "Proteína en polvo",
        "Whey or Plant": "Suero o vegetal",
        "Dino Chicken Nuggets": "Nuggets de pollo dinosaurio",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Nuggets de pollo crujientes con forma de dinosaurio y patatas fritas.",
        "Fries": "Patatas fritas",
        "Crinkle cut": "Corte ondulado",
        "Extra Ketchup": "Ketchup extra",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Panna cotta de matcha",
        "Silky matcha infused Italian dessert topped with fresh berries.": "Sedoso postre italiano infusionado con matcha y bayas frescas por encima.",
        "Ribeye Steak": "Bistec Ribeye",
        "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.": "Bistec ribeye de grado USDA a su gusto, acompañado de ramas de romero.",
        "Garlic Butter": "Mantequilla de Ajo",
        "House blend": "Mezcla de la casa",
        "Rosemary": "Romero",
        "Fresh sprigs": "Ramas frescas",
        "Pepper Sauce": "Salsa de Pimienta",
        "Creamy peppercorn": "Pimienta cremosa",
        "Truffle Mushroom Risotto": "Risotto de Trufa y Champiñones",
        "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.": "Arroz cremoso arborio cocinado con champiñones silvestres y pasta de trufa.",
        "Arborio Rice": "Arroz Arborio",
        "Italian classic": "Clásico italiano",
        "Wild Mushrooms": "Champiñones Silvestres",
        "Sautéed medley": "Mezcla salteada",
        "Truffle Paste": "Pasta de Trufa",
        "Black truffle": "Trufa negra",
        "Chicken Fettuccine Alfredo": "Pollo Fettuccine Alfredo",
        "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.": "Pechuga de pollo a la parrilla sobre fettuccine bañada en crema de ajo y parmesano.",
        "Fettuccine": "Fettuccine",
        "Fresh pasta": "Pasta fresca",
        "Grilled Chicken": "Pollo a la Parrilla",
        "Juicy breast slice": "Filete jugoso",
        "Aged Parmigiano": "Parmigiano añejo",
        "Pan-Seared Sea Bass": "Lubina a la Plancha",
        "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.": "Filete de lubina sellado a la perfección con glaseado de limón y hierbas y tomates cherry.",
        "Sea Bass": "Lubina",
        "Fresh fillet": "Filete fresco",
        "Lemon Herb Glaze": "Glaseado de Limón y Hierbas",
        "Tangy sauce": "Salsa ácida",
        "Cherry Tomatoes": "Tomates Cherry",
        "Sautéed sweet": "Salteado dulce",
        "Vegetarian Buddha Bowl": "Bol Buddha Vegetariano",
        "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.": "Base de quinoa con garbanzos tostados, aguacate, boniato y salsa de tahini.",
        "Quinoa": "Quinoa",
        "Organic grain": "Grano orgánico",
        "Roasted Chickpeas": "Garbanzos Tostados",
        "Crunchy seasoned": "Crujiente sazonado",
        "Tahini Drizzle": "Salsa de Tahini",
        "Sesame dressing": "Aliño de sésamo",
        "Slow-Cooked Lamb Shanks": "Ossobuco de Cordero",
        "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.": "Ossobuco de cordero cocinado a baja temperatura en jugo de vino tinto, servido sobre puré de patatas cremoso.",
        "Lamb Shank": "Ossobuco de Cordero",
        "Braised tender": "Estofado tierno",
        "Mashed Potatoes": "Puré de Patatas",
        "Creamy buttered": "Mantequilla cremosa",
        "Red Wine Jus": "Jugo de Vino Tinto",
        "Rich reduction": "Reducción rica",
        "Spiced Duck Breast": "Pechuga de Pato Especiada",
        "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.": "Pechuga de pato asada a la sartén con especias y reducción de cereza dulce.",
        "Duck Breast": "Pechuga de Pato",
        "Crispy skin": "Piel crujiente",
        "Cherry Reduction": "Reducción de Cereza",
        "Sweet tart glaze": "Glaseado ácido dulce",
        "Orange Zest": "Corteza de Naranja",
        "Fresh citrus hint": "Toque cítrico fresco",
        "Lobster Thermidor": "Langosta Thermidor",
        "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.": "Carne de langosta cocinada en rica salsa de crema, coñac y mostaza, cubierta de queso Gruyere.",
        "Lobster": "Langosta",
        "Fresh whole tail": "Cola entera fresca",
        "Mustard Cognac Sauce": "Salsa de Mostaza y Coñac",
        "Rich cream sauce": "Salsa cremosa rica",
        "Gruyere Cheese": "Queso Gruyere",
        "Melted golden": "Derretido dorado",
        "Garlic Herb Bread": "Pan de Ajo y Hierbas",
        "Toasted artisan bread brushed with house garlic herb butter and parsley.": "Pan artesanal tostado con mantequilla de ajo y hierbas de la casa y perejil.",
        "Buffalo Chicken Wings": "Alitas de Pollo Buffalo",
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.": "Alitas de pollo crujientes en salsa buffalo picante, servidas con apio y queso azul.",
        "Buffalo Sauce": "Salsa Buffalo",
        "Classic hot": "Clásico picante",
        "Blue Cheese Dip": "Salsa de Queso Azul",
        "Cooling dip": "Salsa fría",
        "Celery Sticks": "Palitos de Apio",
        "Crunchy sides": "Guarnición crujiente",
        "Pan-Seared Scallops": "Vieiras a la Plancha",
        "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.": "Vieiras gigantes selladas hasta dorar, terminadas con mantequilla de ajo y hierbas y microverdes.",
        "Microgreens": "Microverdes",
        "Delicate garnish": "Guarnición delicada",
        "Eggs Benedict": "Huevos Benedict",
        "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.": "Huevos escalfados sobre tostada inglesa con jamón ahumado, cubiertos de salsa holandesa.",
        "Hollandaise Sauce": "Salsa Holandesa",
        "Butter egg glaze": "Glaseado de mantequilla y huevo",
        "Smoked Salmon": "Salmón Ahumado",
        "Upgrade to Royale": "Añadir Salmón (Royale)",
        "Sautéed greens": "Verduras salteadas",
        "French Toast Sticks": "Palitos de Torrijas",
        "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.": "Palitos de brioche espeso empanados y fritos, servidos con azúcar glas y sirope de arce.",
        "Powdered Sugar": "Azúcar Glas",
        "Sweet dusting": "Espolvoreo dulce",
        "Cinnamon Butter": "Mantequilla de Canela",
        "Whipped blend": "Mezcla montada",
        "Belgian Waffles": "Gofres Belgas",
        "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.": "Gofre belga de bordes crujientes y centro esponjoso, cubierto de nata montada y sirope.",
        "Whipped Cream": "Nata Montada",
        "Strawberries": "Fresas",
        "Fresh cut": "Corte fresco",
        "Chocolate Drizzle": "Chorrito de Chocolate",
        "Classic Omelette": "Tortilla Clásica",
        "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.": "Tortilla de tres huevos con queso cheddar, champiñones y pimientos.",
        "Melted cheese": "Queso fundido",
        "Bell Peppers": "Pimientos",
        "Fresh tri-color": "Tricolor fresco",
        "Acai Berry Bowl": "Bol de Bayas de Açaí",
        "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.": "Bayas de açai congeladas trituradas cubiertas con fresas, rodajas de plátano y granola tostada.",
        "Granola": "Granola",
        "Chia Seeds": "Semillas de Chía",
        "High protein": "Alto contenido proteico",
        "Honey Drizzle": "Hilo de Miel",
        "Smoked Salmon Bagel": "Bagel con Salmón Ahumado",
        "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.": "Bagel tostado con queso crema batido, salmón ahumado premium y alcaparras.",
        "Capers": "Alcaparras",
        "Red Onion": "Cebolla Roja",
        "Thinly sliced": "Cortado en rodajas finas",
        "Full English Breakfast": "Desayuno Inglés Completo",
        "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.": "Bandeja tradicional con salchicha de cerdo, beicon crujiente, huevos fritos, alubias horneadas y tostadas.",
        "Sausage": "Salchicha",
        "Baked Beans": "Alubias al Horno",
        "Grilled Mushroom": "Champiñón a la Parrilla",
        "Breakfast Burrito": "Burrito de Desayuno",
        "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.": "Tortilla de huevos revueltos con chorizo, patatas y queso Monterey Jack.",
        "Scrambled Eggs": "Huevos Revueltos",
        "Fluffy eggs": "Huevos esponjosos",
        "Chorizo": "Chorizo",
        "Salsa Verde": "Salsa Verde",
        "Tangy green sauce": "Salsa verde ácida",
        "Espresso Martini": "Martini de Espresso",
        "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.": "Refinada mezcla de vodka premium, taza de espresso fresco y licor de café dulce.",
        "Double shot": "Doble tiro",
        "Kahlua style": "Estilo Kahlua",
        "Passion Fruit Margarita": "Margarita de Maracuyá",
        "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.": "Versión tropical del clásico con tequila plateado, Cointreau y pulpa de maracuyá.",
        "100% Agave": "100% Agave",
        "Passion Fruit Pulp": "Pulpa de Maracuyá",
        "Zesty rim & juice": "Borde ácido y zumo",
        "Old Fashioned": "Old Fashioned",
        "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.": "Bebida clásica de bourbon de centeno, angostura y una esfera de hielo gigante.",
        "Barrel aged": "Envejecido en barrica",
        "Angostura Bitters": "Bitter Angostura",
        "Orange Peel": "Corteza de Naranja",
        "Whiskey Sour": "Whisky Sour",
        "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.": "Mezcla perfecta de notas dulces y ácidas con whisky, limón fresco y espuma de clara de huevo.",
        "Sour mash": "Masa ácida",
        "Lemon Juice": "Zumo de Limón",
        "Aperol Spritz": "Aperol Spritz",
        "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.": "Aperitivo italiano brillante mezclado con prosecco, un toque de soda y una rodaja de naranja.",
        "Gentian liqueur": "Licor de genciana",
        "Sparkling dry": "Seco con gas",
        "Soda Water": "Agua con Gas",
        "Pina Colada": "Piña Colada",
        "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.": "Mezcla cremosa de crema de coco, zumo de piña y ron blanco servida en vaso alto.",
        "Coconut Cream": "Crema de Coco",
        "Pineapple Juice": "Zumo de Piña",
        "Negroni": "Negroni",
        "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.": "Cóctel seco atrevido y amargo que combina ginebra, Campari y vermut dulce.",
        "Botanical dry": "Seco botánico",
        "Strawberry Daiquiri": "Daiquiri de Fresa",
        "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.": "Bebida granizada afrutada y dulce con fresas frescas, zumo de lima y ron blanco.",
        "Premium rum": "Ron premium",
        "Moscow Mule": "Moscow Mule",
        "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.": "Cóctel burbujeante de vodka, cerveza de jengibre picante y zumo de lima, servido en jarra de cobre.",
        "Ginger Beer": "Cerveza de Jengibre",
        "Ginger Ale": "Ginger Ale",
        "Sweet and bubbly carbonated soft drink flavored with ginger root extracts.": "Refresco carbonatado dulce y burbujeante aromatizado con extractos de jengibre.",
        "Crushed cubes": "Cubitos de hielo triturados",
        "Fresh lime wedge squeeze": "Exprimido de lima fresca",
    },
    fr: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Scannez le code QR à votre table pour voir notre menu et commander.",
        scan_table: "Scanner Table 4",
        scan_room: "Scanner Chambre 205",
        scan_patio: "Scanner Terrasse 2",
        craving: "Qu'est-ce qui vous ferait plaisir ?",
        search_placeholder: "Rechercher des plats...",
        customize_add: "Personnaliser & Ajouter",
        ingredients_header: "Ingrédients & Suppléments",
        add: "Ajouter",
        your_order: "Votre Commande",
        order_notes_label: "Notes de commande (ex. moins de sel, allergies)",
        notes_placeholder: "Ajoutez des demandes spéciales aqui...",
        subtotal: "Sous-total",
        tax: "Taxe (10%)",
        total: "Total",
        submit_order: "Passer Commande",
        order_placed: "Commande Envoyée !",
        order_success_desc: "Votre commande a été envoyée en cuisine. Elle sera livrée à {location} sous peu.",
        new_order: "Nouvelle commande",
        toast_added: "{title} ajouté à la commande !",
        settings_title: "Paramètres",
        language: "Langue",
        currency: "Devise",
        theme: "Thème",
        light_mode: "Clair",
        dark_mode: "Sombre",
        auto_detected: "Détecté automatiquement",
        close: "Fermer",
        "No": "Sans",
        "All": "Tout",
        "Starters": "Entrées",
        "Breakfast": "Petit-déjeuner",
        "Mains": "Plats",
        "Cocktails": "Cocktails",
        "Smoothies": "Smoothies",
        "Kids Meal": "Menu Enfant",
        "Desserts": "Desserts",
        "Drinks": "Boissons",
        "Popular": "Populaire",
        "Grilled Salmon Asparagus": "Saumon grillé aux asperges",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Saumon frais grillé servi avec des asperges rôties et une sauce au beurre citronné.",
        "Salmon": "Saumon",
        "Fresh catch": "Pêche fraîche",
        "Asparagus": "Asperges",
        "Roasted greens": "Légumes rôtis",
        "Extra Lemon": "Citron en plus",
        "Fresh wedges": "Quartiers frais",
        "Wagyu Beef Burger": "Burger de bœuf Wagyu",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Steak de bœuf Wagyu premium avec oignons caramélisés, fromage cheddar et sauce maison.",
        "Wagyu Patty": "Steak de Wagyu",
        "100% Premium": "100% Premium",
        "Bacon": "Bacon",
        "Crispy smoked": "Fumé croustillant",
        "Avocado Toast": "Toast à l'avocat",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Pain au levain grillé avec avocat écrasé, œuf poché et flocons de piment.",
        "Avocado": "Avocat",
        "Hass avocado": "Avocat Hass",
        "Poached Egg": "Œuf poché",
        "Free range": "De plein air",
        "Fluffy Pancakes": "Pancakes moelleux",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Pile de pancakes moelleux au babeurre avec sirop d'érable et fruits rouges frais.",
        "Maple Syrup": "Sirop d'érable",
        "100% Pur": "100% Pur",
        "Berries": "Fruits rouges",
        "Mixed fresh": "Fruits rouges frais",
        "Crispy Calamari": "Calamars croustillants",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Rondelles de calmars légèrement frites servies avec quartier de citron et sauce tartare.",
        "Tartare Sauce": "Sauce tartare",
        "House made": "Maison",
        "Classic Mojito": "Mojito classique",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Cocktail rafraîchissant au rhum avec menthe fraîche, jus de citron vert et soda.",
        "Extra Mint": "Menthe en plus",
        "Fresh leaves": "Feuilles fraîches",
        "Berry Smoothie": "Smoothie aux fruits rouges",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Mélange de fruits rouges, yaourt et une touche de miel.",
        "Protein Powder": "Protéine en poudre",
        "Whey or Plant": "Lactosérum ou végétale",
        "Dino Chicken Nuggets": "Nuggets de poulet dinosaure",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Nuggets de poulet croustillants en forme de dinosaure avec frites.",
        "Fries": "Frites",
        "Crinkle cut": "Coupe ondulée",
        "Extra Ketchup": "Ketchup en plus",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Panna cotta au matcha",
        "Silky matcha infused Italian dessert topped with fresh berries.": "Dessert italien soyeux infusé au matcha avec fruits rouges frais.",
        "Ribeye Steak": "Steak de Côte",
        "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.": "Steak de côte de qualité USDA grillé selon votre goût, servi avec branches de romarin.",
        "Garlic Butter": "Beurre à l'Ail",
        "Rosemary": "Romarin",
        "Fresh sprigs": "Branches fraîches",
        "Pepper Sauce": "Sauce au Poivre",
        "Truffle Mushroom Risotto": "Risotto à la Truffe et Champignons",
        "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.": "Riz crémeux arborio cuit avec champignons sauvages et pâte de truffe.",
        "Arborio Rice": "Riz Arborio",
        "Wild Mushrooms": "Champignons Sauvages",
        "Truffle Paste": "Pâte de Truffe",
        "Chicken Fettuccine Alfredo": "Poulet Fettuccine Alfredo",
        "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.": "Poulet grillé tendre sur fettuccine enrobé de crème à l'ail et parmesan.",
        "Fettuccine": "Fettuccine",
        "Grilled Chicken": "Poulet Grillé",
        "Pan-Seared Sea Bass": "Loup de Mer à la Plancha",
        "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.": "Filet de loup de mer saisi à la perfection avec glaçage au citron et tomates cerises.",
        "Sea Bass": "Loup de Mer",
        "Lemon Herb Glaze": "Glaçage au Citron et Herbes",
        "Cherry Tomatoes": "Tomates Cerises",
        "Vegetarian Buddha Bowl": "Bol Buddha Végétarien",
        "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.": "Base de quinoa surmontée de pois chiches rôtis, avocat, patate douce et filet de tahini.",
        "Quinoa": "Quinoa",
        "Roasted Chickpeas": "Pois Chiches Rôtis",
        "Tahini Drizzle": "Filet de Tahini",
        "Slow-Cooked Lamb Shanks": "Souris d'Agneau",
        "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.": "Souris d'agneau cuite lentement dans un jus de vin rouge, servie sur purée de pommes de terre.",
        "Lamb Shank": "Souris d'Agneau",
        "Mashed Potatoes": "Purée de Pommes de Terre",
        "Red Wine Jus": "Jus de Vin Rouge",
        "Spiced Duck Breast": "Magret de Canard Épicé",
        "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.": "Magret de canard rôti à la poêle avec épices et sauce de réduction de cerise.",
        "Duck Breast": "Magret de Canard",
        "Cherry Reduction": "Réduction de Cerise",
        "Orange Zest": "Zeste d'Orange",
        "Lobster Thermidor": "Homard Thermidor",
        "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.": "Chair de homard cuite dans une riche sauce à la crème de moutarde et cognac, couverte de fromage Gruyère.",
        "Gruyere Cheese": "Fromage Gruyère",
        "Garlic Herb Bread": "Pain à l'Ail et aux Herbes",
        "Toasted artisan bread brushed with house garlic herb butter and parsley.": "Pain artisanal toasté badigeonné de beurre à l'ail et aux herbes de la maison et persil.",
        "Buffalo Chicken Wings": "Ailes de Poulet Buffalo",
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.": "Ailes de poulet croustillantes en sauce Buffalo épicée, servies avec céleri et fromage bleu.",
        "Buffalo Sauce": "Sauce Buffalo",
        "Blue Cheese Dip": "Sauce au Fromage Bleu",
        "Celery Sticks": "Bâtonnets de Céleri",
        "Pan-Seared Scallops": "Noix de Saint-Jacques à la Plancha",
        "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.": "Noix de Saint-Jacques géantes saisies jusqu'à dorure, finies au beurre d'ail et microverdes.",
        "Microgreens": "Microverdes",
        "Eggs Benedict": "Eggs Benedict",
        "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.": "Oeufs pochés sur muffin anglais grillé avec jambon fumé, recouverts de sauce hollandaise.",
        "Hollandaise Sauce": "Sauce Hollandaise",
        "Smoked Salmon": "Saumon Fumé",
        "French Toast Sticks": "Bâtonnets de Pain Perdu",
        "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.": "Bâtonnets de brioche épaisse panés et frits, servis avec sucre glace et sirop d'érable.",
        "Powdered Sugar": "Sucre Glace",
        "Cinnamon Butter": "Beurre à la Cannelle",
        "Belgian Waffles": "Gaufres Belges",
        "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.": "Gaufre belge à bords croustillants et centre moelleux, surmontée de crème fouettée et sirop.",
        "Whipped Cream": "Crème Fouettée",
        "Strawberries": "Fraises",
        "Chocolate Drizzle": "Filet de Chocolat",
        "Classic Omelette": "Omelette Classique",
        "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.": "Omelette pliée de trois œufs avec fromage cheddar, champignons et poivrons.",
        "Mushrooms": "Champignons",
        "Bell Peppers": "Poivrons",
        "Acai Berry Bowl": "Bol de Baies d'Açaí",
        "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.": "Baies d'açaï congelées mixées surmontées de fraises, tranches de banane et granola toasté.",
        "Granola": "Granola",
        "Chia Seeds": "Graines de Chia",
        "Honey Drizzle": "Filet de Miel",
        "Smoked Salmon Bagel": "Bagel au Saumon Fumé",
        "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.": "Bagel toasté avec fromage frais battu, saumon fumé premium et câpres.",
        "Capers": "Câpres",
        "Red Onion": "Oignon Rouge",
        "Full English Breakfast": "Petit-Déjeuner Anglais Complet",
        "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.": "Plateau traditionnel avec saucisse de porc, bacon croustillant, œufs au plat, haricots au four et toasts.",
        "Sausage": "Saucisse",
        "Baked Beans": "Haricots au Four",
        "Grilled Mushroom": "Champignon Grillé",
        "Breakfast Burrito": "Burrito de Petit-Déjeuner",
        "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.": "Tortilla aux œufs brouillés, chorizo, pommes de terre et fromage Monterey Jack.",
        "Scrambled Eggs": "Oeufs Brouillés",
        "Chorizo": "Chorizo",
        "Salsa Verde": "Salsa Verde",
        "Espresso Martini": "Martini Espresso",
        "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.": "Mélange sophistiqué de vodka premium, expresso frais et liqueur de café sucrée.",
        "Coffee Liqueur": "Liqueur de Café",
        "Passion Fruit Margarita": "Margarita au Fruit de la Passion",
        "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.": "Version tropicale du classique avec tequila argentée, Cointreau et pulpe de fruit de la passion.",
        "100% Agave": "100% Agave",
        "Passion Fruit Pulp": "Pulpe de Fruit de la Passion",
        "Old Fashioned": "Old Fashioned",
        "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.": "Boisson classique à base de bourbon de seigle, angostura et une boule de glace géante.",
        "Angostura Bitters": "Bitter Angostura",
        "Whiskey Sour": "Whisky Sour",
        "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.": "Mélange parfait de notes sucrées et acides avec whisky, citron frais et mousse de blanc d’œuf.",
        "Whiskey": "Whisky",
        "Lemon Juice": "Jus de Citron",
        "Egg White": "Blanc d’Œuf",
        "Aperol Spritz": "Aperol Spritz",
        "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.": "Apéritif italien orange brillant mélangé avec du prosecco pétillant, un peu de soda et une tranche d'orange.",
        "Prosecco": "Prosecco",
        "Soda Water": "Eau Gazeuse",
        "Pina Colada": "Piña Colada",
        "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.": "Mélange crémeux de crème de coco, jus d'ananas et rhum blanc servi dans un verre haut.",
        "Coconut Cream": "Crème de Coco",
        "Pineapple Juice": "Jus d'Ananas",
        "Negroni": "Negroni",
        "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.": "Cocktail sec audacieux et amer associant gin, Campari et vermouth rouge.",
        "Strawberry Daiquiri": "Daiquiri à la Fraise",
        "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.": "Granité fruité sucré avec fraises fraîches, jus de citron vert et rhum blanc.",
        "Premium rum": "Rhum premium",
        "Moscow Mule": "Moscow Mule",
        "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.": "Cocktail pétillant à la vodka, à la bière au gingembre épicée et au citron vert, servi dans un gobelet en cuivre.",
        "Ginger Beer": "Bière au Gingembre",
        "Ginger Ale": "Ginger Ale",
        "Sparkling water": "Eau pétillante",
        "Matcha Latte": "Latte au Matcha",
    },
    de: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Scannen Sie den QR-Code an Ihrem Tisch, um das Menü zu sehen und zu bestellen.",
        scan_table: "Tisch 4 scannen",
        scan_room: "Zimmer 205 scannen",
        scan_patio: "Terrasse 2 scannen",
        craving: "Worauf haben Sie Lust?",
        search_placeholder: "Gerichte suchen...",
        customize_add: "Anpassen & Hinzufügen",
        ingredients_header: "Zutaten & Extras",
        add: "Hinzufügen",
        your_order: "Ihre Bestellung",
        order_notes_label: "Bestellhinweise (z. B. weniger Salz, Allergien)",
        notes_placeholder: "Sonderwünsche hier hinzufügen...",
        subtotal: "Zwischensumme",
        tax: "MwSt. (10%)",
        total: "Gesamtsumme",
        submit_order: "Kostenpflichtig bestellen",
        order_placed: "Bestellung aufgegeben!",
        order_success_desc: "Ihre Bestellung wurde an die Küche gesendet. Sie wird in Kürze zu {location} gebracht.",
        new_order: "Neue Bestellung starten",
        toast_added: "{title} zur Bestellung hinzugefügt!",
        settings_title: "Einstellungen",
        language: "Sprache",
        currency: "Währung",
        theme: "Design",
        light_mode: "Hell",
        dark_mode: "Dunkel",
        auto_detected: "Automatisch erkannt",
        close: "Schließen",
        "No": "Ohne",
        "All": "Alle",
        "Starters": "Vorspeisen",
        "Breakfast": "Frühstück",
        "Mains": "Hauptgerichte",
        "Cocktails": "Cocktails",
        "Smoothies": "Smoothies",
        "Kids Meal": "Kindermenü",
        "Desserts": "Desserts",
        "Drinks": "Getränke",
        "Popular": "Beliebt",
        "Grilled Salmon Asparagus": "Gegrillter Lachs mit Spargel",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Frisch gegrillter Lachs serviert mit geröstetem Spargel und einer Zitronenbuttersauce.",
        "Salmon": "Lachs",
        "Fresh catch": "Frischer Fang",
        "Asparagus": "Spargel",
        "Roasted greens": "Geröstetes Gemüse",
        "Extra Lemon": "Extra Zitrone",
        "Fresh wedges": "Frische Spalten",
        "Wagyu Beef Burger": "Wagyu-Rindfleisch-Burger",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Premium-Wagyu-Rinder-Patty mit karamellisierten Zwiebeln, Cheddar-Käse und Haus-Sauce.",
        "Wagyu Patty": "Wagyu-Patty",
        "100% Premium": "100% Premium",
        "Bacon": "Speck",
        "Crispy smoked": "Knusprig geräuchert",
        "Avocado Toast": "Avocado-Toast",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Sauerteigtoast belegt mit zerdrückter Avocado, pochiertem Ei und Chiliflocken.",
        "Avocado": "Avocado",
        "Hass avocado": "Hass-Avocado",
        "Poached Egg": "Pochiertes Ei",
        "Free range": "Aus Freilandhaltung",
        "Fluffy Pancakes": "Fluffige Pfannkuchen",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Stapel fluffiger Buttermilch-Pfannkuchen mit Ahornsirup und frischen Beeren.",
        "Maple Syrup": "Ahornsirup",
        "100% Rein": "100% Rein",
        "Berries": "Beeren",
        "Mixed fresh": "Frische Beerenmischung",
        "Crispy Calamari": "Knusprige Calamari",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Leicht frittierte Tintenfischringe serviert mit Zitronenspalte und Sauce Tartare.",
        "Tartare Sauce": "Sauce Tartare",
        "House made": "Hausgemacht",
        "Classic Mojito": "Klassischer Mojito",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Erfrischender Rum-Cocktail mit frischer Minze, Limettensaft und Soda.",
        "Extra Mint": "Extra Minze",
        "Fresh leaves": "Frische Blätter",
        "Berry Smoothie": "Beeren-Smoothie",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Mischung aus Beeren, Joghurt und einem Hauch Honig.",
        "Protein Powder": "Proteinpulver",
        "Whey or Plant": "Proteinpulver",
        "Dino Chicken Nuggets": "Dino-Chicken-Nuggets",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Knusprige Hähnchen-Nuggets in Dinosaurierform mit einer Portion Pommes.",
        "Fries": "Pommes frites",
        "Crinkle cut": "Wellenschnitt",
        "Extra Ketchup": "Extra Ketchup",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Matcha-Panna-Cotta",
        "Silky matcha infused Italian dessert topped with fresh berries.": "Seidiges, mit Matcha verfeinertes italienisches Dessert mit frischen Beeren.",
        "Ribeye Steak": "Rinder-Ribeye-Steak",
        "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.": "USDA Prime-Ribeye-Steak nach Wunsch gegrillt, serviert mit Rosmarinzweigen.",
        "Garlic Butter": "Knoblauchbutter",
        "Rosemary": "Rosmarin",
        "Fresh sprigs": "Frische Zweige",
        "Pepper Sauce": "Pfeffersauce",
        "Truffle Mushroom Risotto": "Trüffel-Pilz-Risotto",
        "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.": "Cremiges Arborio-Reis mit Waldpilzen und Trüffelöl gekocht.",
        "Arborio Rice": "Arborio-Reis",
        "Wild Mushrooms": "Waldpilze",
        "Truffle Paste": "Trüffelpaste",
        "Chicken Fettuccine Alfredo": "Hähnchen-Fettuccine-Alfredo",
        "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.": "Zartes gegrilltes Hähnchenbrustfilet auf Fettuccine in reichhaltiger Knoblauch-Parmesan-Creme.",
        "Fettuccine": "Fettuccine",
        "Grilled Chicken": "Gegrilltes Hähnchen",
        "Pan-Seared Sea Bass": "Gebratene Seebarbe",
        "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.": "Seebarbenfilet perfekt angebraten mit Zitronen-Kräuter-Glasur und Kirschtomaten.",
        "Sea Bass": "Seebarbe",
        "Lemon Herb Glaze": "Zitronen-Kräuter-Glasur",
        "Cherry Tomatoes": "Kirschtomaten",
        "Vegetarian Buddha Bowl": "Vegetarisches Buddha-Bowl",
        "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.": "Quinoa-Basis mit gerösteten Kichererbsen, Avocado, Süßkartoffel und Tahini-Glasur.",
        "Quinoa": "Quinoa",
        "Roasted Chickpeas": "Geröstete Kichererbsen",
        "Tahini Drizzle": "Tahini-Glasur",
        "Slow-Cooked Lamb Shanks": "Geschmorte Lammhaxe",
        "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.": "Zarte Lammhaxe langsam in Rotwein geschmort, serviert auf cremigem Kartoffelpüree.",
        "Lamb Shank": "Lammhaxe",
        "Mashed Potatoes": "Kartoffelpüree",
        "Red Wine Jus": "Rotweinjus",
        "Spiced Duck Breast": "Gewürzte Entenbrust",
        "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.": "In der Pfanne gebratene Entenbrust mit warmem Gewürzrub und süßer Kirschreduktion.",
        "Duck Breast": "Entenbrust",
        "Cherry Reduction": "Kirschreduktion",
        "Orange Zest": "Orangenschale",
        "Lobster Thermidor": "Hummer Thermidor",
        "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.": "Hummerfleisch in reichhaltiger Cognac-Senf-Cremesauce, überbacken mit Gruyère-Käse.",
        "Gruyere Cheese": "Gruyère-Käse",
        "Garlic Herb Bread": "Knoblauch-Kräuter-Brot",
        "Toasted artisan bread brushed with house garlic herb butter and parsley.": "Geröstetes handwerkliches Brot bestrichen mit hausgemachter Knoblauch-Kräuter-Butter und Petersilie.",
        "Buffalo Chicken Wings": "Buffalo-Hähnchenflügel",
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.": "Knusprige Hähnchenflügel in würziger Buffalo-Sauce, serviert mit Sellerie und Blauschimmelkäse.",
        "Buffalo Sauce": "Buffalo-Sauce",
        "Blue Cheese Dip": "Blauschimmelkäse-Dip",
        "Celery Sticks": "Selleriestangen",
        "Pan-Seared Scallops": "Gebratene Jakobsmuscheln",
        "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.": "Jumbo-Jacobsmuscheln bis goldgelb gebraten, vollendet mit Knoblauch-Kräuter-Butter und Microgreens.",
        "Microgreens": "Microgreens",
        "Eggs Benedict": "Huevos Benedict",
        "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.": "Pochierte Eier auf gerösteten English Muffins mit warmem Räucherschinken, überzogen von Sauce Hollandaise.",
        "Hollandaise Sauce": "Sauce Hollandaise",
        "Smoked Salmon": "Räucherlachs",
        "French Toast Sticks": "French Toast Stäbchen",
        "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.": "Dicke Brioche-Toast-Stäbchen paniert und frittiert, serviert mit Puderzucker und Ahornsirup.",
        "Powdered Sugar": "Puderzucker",
        "Cinnamon Butter": "Zimtbutter",
        "Belgian Waffles": "Belgische Waffeln",
        "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.": "Belgische Waffel mit knusprigen Rändern und fluffigem Kern, belegt mit frischer Schlagsahne und Sirup.",
        "Whipped Cream": "Schlagsahne",
        "Strawberries": "Erdbeeren",
        "Chocolate Drizzle": "Schokoladendekor",
        "Classic Omelette": "Klassisches Omelett",
        "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.": "Dreier-Ei-Omelett gefaltet mit Cheddar-Käse, Champignons und Paprika.",
        "Mushrooms": "Champignons",
        "Bell Peppers": "Paprika",
        "Acai Berry Bowl": "Açaí-Beeren-Bowl",
        "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.": "Gefrorene gemixte Açaí-Beeren belegt mit Erdbeeren, Bananenscheiben und geröstetem Granola.",
        "Granola": "Granola",
        "Chia Seeds": "Chiasamen",
        "Honey Drizzle": "Honig-Glasur",
        "Smoked Salmon Bagel": "Räucherlachs-Bagel",
        "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.": "Gerösteter Bagel mit Frischkäseaufstrich, Premium-Räucherlachs und Kapern.",
        "Capers": "Kapern",
        "Red Onion": "Rote Zwiebel",
        "Full English Breakfast": "Englisches Frühstück",
        "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.": "Traditionelles Tablett mit Schweinswurst, knusprigem Speck, Spiegelei, Baked Beans und Toast.",
        "Sausage": "Wurst",
        "Baked Beans": "Baked Beans",
        "Grilled Mushroom": "Gegrillter Champignon",
        "Breakfast Burrito": "Frühstücks-Burrito",
        "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.": "Tortilla mit Rührei, Chorizo-Wurst, Kartoffeln und Monterey Jack-Käse.",
        "Scrambled Eggs": "Rührei",
        "Chorizo": "Chorizo",
        "Salsa Verde": "Salsa Verde",
        "Espresso Martini": "Espresso-Martini",
        "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.": "Anspruchsvolle Mischung aus Premium-Wodka, frischem Espresso und süßem Kaffeelikör.",
        "Coffee Liqueur": "Kaffeelikör",
        "Passion Fruit Margarita": "Maracuja-Margarita",
        "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.": "Tropische Variante des Klassikers mit Silber-Tequila, Cointreau und Maracuja-Pulpe.",
        "100% Agave": "100% Agave",
        "Passion Fruit Pulp": "Maracuja-Pulpe",
        "Old Fashioned": "Old Fashioned",
        "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.": "Klassiker aus Roggenbourbon, Angostura-Bitter und einer einzelnen riesigen Eiskugel.",
        "Angostura Bitters": "Angostura-Bitter",
        "Whiskey Sour": "Whisky Sour",
        "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.": "Perfekte Mischung aus süßen und sauren Noten mit Whisky, frischem Zitronensaft und Eischaum.",
        "Whiskey": "Whisky",
        "Lemon Juice": "Zitronensaft",
        "Egg White": "Eiweiß",
        "Aperol Spritz": "Aperol Spritz",
        "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.": "Heller italienischer Aperitif aus Aperol, prickelndem Prosecco, einem Spritzer Soda und einer Orangenscheibe.",
        "Prosecco": "Prosecco",
        "Soda Water": "Sprudelwasser",
        "Pina Colada": "Piña Colada",
        "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.": "Cremige Mischung aus Kokoscreme, Ananassaft und weißem Rum, serviert in einem hohen Glas.",
        "Coconut Cream": "Kokoscreme",
        "Pineapple Juice": "Ananassaft",
        "Negroni": "Negroni",
        "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.": "Kräftiger, bitterer Trockencocktail aus Gin, Campari und süßem Wermut.",
        "Strawberry Daiquiri": "Erdbeer-Daiquiri",
        "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.": "Fruchtiger, süßer, gemixter Slushie mit frischen Erdbeeren, Limettensaft und weißem Rum.",
        "Premium rum": "Premium-Rum",
        "Moscow Mule": "Moscow Mule",
        "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.": "Sprudelnder Cocktail aus Wodka, würzigem Ingwer-Bier und Limettensaft, serviert in einem Kupferbecher.",
        "Ginger Beer": "Ingwer-Bier",
        "Ginger Ale": "Ginger Ale",
        "Crushed cubes": "Gestoßene Eiswürfel",
        "Fresh lime wedge squeeze": "Frische Limettenscheibe",
        "Matcha Latte": "Matcha Latte",
    },
    it: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Scansiona il codice QR al tuo tavolo per vedere il menu e ordinare.",
        scan_table: "Scansiona Tavolo 4",
        scan_room: "Scansiona Camera 205",
        scan_patio: "Scansiona Terrazza 2",
        craving: "Cosa desideri?",
        search_placeholder: "Cerca piatti...",
        customize_add: "Personalizza e Aggiungi",
        ingredients_header: "Ingredienti e Extra",
        add: "Aggiungi",
        your_order: "Il Tuo Ordine",
        order_notes_label: "Note sull'ordine (es. meno sale, allergie)",
        notes_placeholder: "Aggiungi richieste speciali qui...",
        subtotal: "Subtotale",
        tax: "Tasse (10%)",
        total: "Totale",
        submit_order: "Invia Ordine",
        order_placed: "Ordine Inviato!",
        order_success_desc: "Il tuo ordine è stato inviato alla cucina. Verrà consegnato a {location} a breve.",
        new_order: "Inizia Nuovo Ordine",
        toast_added: "{title} aggiunto all'ordine!",
        settings_title: "Impostazioni",
        language: "Lingua",
        currency: "Valuta",
        theme: "Tema",
        light_mode: "Chiaro",
        dark_mode: "Scuro",
        auto_detected: "Rilevato automaticamente",
        close: "Chiudi",
        "No": "Senza",
        "All": "Tutti",
        "Starters": "Antipasti",
        "Breakfast": "Colazione",
        "Mains": "Piatti Principali",
        "Cocktails": "Cocktail",
        "Smoothies": "Frullati",
        "Kids Meal": "Menu Bimbi",
        "Desserts": "Dolci",
        "Drinks": "Bevande",
        "Popular": "Popolare",
        "Grilled Salmon Asparagus": "Salmone alla griglia con asparagi",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Salmone fresco alla griglia servito con asparagi arrostiti e salsa al burro e limone.",
        "Salmon": "Salmone",
        "Fresh catch": "Pescato del giorno",
        "Asparagus": "Asparagi",
        "Roasted greens": "Verdure arrostite",
        "Extra Lemon": "Limone Extra",
        "Fresh wedges": "Spicchi freschi",
        "Wagyu Beef Burger": "Burger di manzo Wagyu",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Polpetta di manzo Wagyu premium con cipolle caramellate, formaggio cheddar e salsa della casa.",
        "Wagyu Patty": "Polpetta Wagyu",
        "100% Premium": "100% Premium",
        "Bacon": "Bacon",
        "Crispy smoked": "Affumicato croccante",
        "Avocado Toast": "Toast all'avocado",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Toast di pane a lievitazione naturale con avocado schiacciato, uovo in camicia e fiocchi di peperoncino.",
        "Avocado": "Avocado",
        "Hass avocado": "Avocado Hass",
        "Poached Egg": "Uovo in camicia",
        "Free range": "Allevato all'aperto",
        "Fluffy Pancakes": "Pancake soffici",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Torre di pancake soffici al latticello con sciroppo d'acero e frutti di bosco freschi.",
        "Maple Syrup": "Sciroppo d'acero",
        "100% Pure": "100% Puro",
        "Berries": "Frutti di bosco",
        "Mixed fresh": "Frutti di bosco freschi misti",
        "Crispy Calamari": "Calamari croccanti",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Anelli di calamari leggermente fritti serviti con spicchio di limone e salsa tartara.",
        "Tartare Sauce": "Salsa tartara",
        "House made": "Fatta in casa",
        "Classic Mojito": "Mojito classico",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Rinfrescante cocktail al rum con menta fresca, succo di lime e soda.",
        "Extra Mint": "Menta Extra",
        "Fresh leaves": "Foglie fresche",
        "Berry Smoothie": "Frullato ai frutti di bosco",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Miscela di frutti di bosco misti, yogurt e un tocco di miele.",
        "Protein Powder": "Proteine in polvere",
        "Whey or Plant": "Siero o vegetali",
        "Dino Chicken Nuggets": "Nuggets di pollo a forma di dino",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Croccanti nuggets di pollo a forma di dinosauro con contorno di patatine fritte.",
        "Fries": "Patatine fritte",
        "Crinkle cut": "Taglio ondulato",
        "Extra Ketchup": "Ketchup Extra",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Panna cotta al matcha",
        "Silky matcha infused Italian dessert topped with fresh berries.": "Morbido dessert italiano infuso al matcha con frutti di bosco freschi.",
        "Ribeye Steak": "Bistecca di Costata",
        "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.": "Bistecca di costata di grado USDA grigliata a piacere, servita con rametti di rosmarino.",
        "Garlic Butter": "Burro all'Aglio",
        "Rosemary": "Rosmarino",
        "Fresh sprigs": "Rametti freschi",
        "Pepper Sauce": "Salsa al Pepe",
        "Truffle Mushroom Risotto": "Risotto ai Funghi Porcini e Tartufo",
        "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.": "Riso cremoso arborio cotto con funghi di bosco e pasta di tartufo.",
        "Arborio Rice": "Riso Arborio",
        "Wild Mushrooms": "Funghi di Bosco",
        "Truffle Paste": "Pasta di Tartufo",
        "Chicken Fettuccine Alfredo": "Pollo Fettuccine Alfredo",
        "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.": "Petto di pollo grigliato su fettuccine condite con ricca crema di aglio e parmigiano.",
        "Fettuccine": "Fettuccine",
        "Grilled Chicken": "Pollo Grigliato",
        "Pan-Seared Sea Bass": "Branzino alla Griglia",
        "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.": "Filetto di branzino rosolato alla perfezione con glassa al limone e aromi e pomodorini.",
        "Sea Bass": "Branzino",
        "Lemon Herb Glaze": "Glassa al Limone e Aromi",
        "Cherry Tomatoes": "Pomodorini",
        "Vegetarian Buddha Bowl": "Bowl Buddha Vegetariano",
        "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.": "Base di quinoa con ceci arrostiti, avocado, patata dolce e filo di tahini.",
        "Quinoa": "Quinoa",
        "Roasted Chickpeas": "Ceci Arrostiti",
        "Tahini Drizzle": "Salsa di Tahini",
        "Slow-Cooked Lamb Shanks": "Stinco di Agnello",
        "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.": "Stinco di agnello cotto lentamente nel sugo di vino rosso, servito su purè di patate cremoso.",
        "Lamb Shank": "Stinco di Agnello",
        "Mashed Potatoes": "Purè di Patate",
        "Red Wine Jus": "Sugo di Vino Rosso",
        "Spiced Duck Breast": "Petto di Anatra Speziato",
        "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.": "Petto di anatra arrostito in padella con mix di spezie e salsa di riduzione di ciliegie.",
        "Duck Breast": "Petto di Anatra",
        "Cherry Reduction": "Riduzione di Ciliegie",
        "Orange Zest": "Scorza d'Arancia",
        "Lobster Thermidor": "Homard Thermidor",
        "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.": "Carne di aragosta cotta in una ricca salsa alla panna, senape e cognac, coperta di formaggio Gruyère.",
        "Gruyere Cheese": "Formaggio Gruyère",
        "Garlic Herb Bread": "Pane all'Aglio e Aromi",
        "Toasted artisan bread brushed with house garlic herb butter and parsley.": "Pane artigianale tostato spennellato con burro all'aglio e aromi della casa e prezzemolo.",
        "Buffalo Chicken Wings": "Ali di Pollo Buffalo",
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.": "Ali di pollo croccanti in salsa Buffalo piccante, servite con sedano e formaggio blu.",
        "Buffalo Sauce": "Salsa Buffalo",
        "Blue Cheese Dip": "Salsa di Formaggio Blu",
        "Celery Sticks": "Bastoncini di Sedano",
        "Pan-Seared Scallops": "Capesante alla Griglia",
        "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.": "Capesante giganti rosolate fino a doratura, ultimate con burro all'aglio e microgreens.",
        "Microgreens": "Microgreens",
        "Eggs Benedict": "Uova Benedict",
        "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.": "Uova in camicia su muffin inglese tostato con prosciutto affumicato caldo, ricoperte di salsa olandese.",
        "Hollandaise Sauce": "Salsa Olandese",
        "Smoked Salmon": "Salmone Affumicato",
        "French Toast Sticks": "Bastoncini di French Toast",
        "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.": "Bastoncini di brioche spessa imbevuti e fritti, serviti con zucchero a velo e sciroppo d'acero.",
        "Powdered Sugar": "Zucchero a Velo",
        "Cinnamon Butter": "Burro alla Cannella",
        "Belgian Waffles": "Waffle Belgi",
        "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.": "Waffle belga dai bordi croccanti e centro soffice, guarnita con panna montata e sciroppo.",
        "Whipped Cream": "Panna Montata",
        "Strawberries": "Fragole",
        "Chocolate Drizzle": "Gocce di Cioccolato",
        "Classic Omelette": "Omelette Classica",
        "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.": "Omelette a tre uova ripiegata con formaggio cheddar, funghi e peperoni.",
        "Mushrooms": "Funghi",
        "Bell Peppers": "Peperoni",
        "Acai Berry Bowl": "Bowl di Bacche di Acai",
        "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.": "Bacche di acaí surgelate frullate guarnite con fragole, fette di banana e granola tostata.",
        "Granola": "Granola",
        "Chia Seeds": "Semi di Chia",
        "Honey Drizzle": "Filo di Miele",
        "Smoked Salmon Bagel": "Bagel con Salmone Affumicato",
        "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.": "Bagel tostato spalmato con formaggio cremoso montato, salmone affumicato premium e capperi.",
        "Capers": "Capperi",
        "Red Onion": "Cipolla Rossa",
        "Full English Breakfast": "Colazione Inglese Completa",
        "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.": "Piatto tradizionale con salsiccia di maiale, bacon croccante, uova al tegamino, fagioli al forno e toast.",
        "Sausage": "Salsiccia",
        "Baked Beans": "Fagioli al Forno",
        "Grilled Mushroom": "Fungo Grigliato",
        "Breakfast Burrito": "Burrito per la Colazione",
        "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.": "Tortilla con uova strapazzate, salsiccia chorizo, patate e formaggio Monterey Jack.",
        "Scrambled Eggs": "Uova Strapazzate",
        "Chorizo": "Chorizo",
        "Salsa Verde": "Salsa Verde",
        "Espresso Martini": "Martini Espresso",
        "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.": "Miscela raffinata di vodka premium, espresso fresco e liquore di caffè dolce.",
        "Coffee Liqueur": "Liquore di Caffè",
        "Passion Fruit Margarita": "Margarita al Frutto della Passione",
        "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.": "Interpretazione tropicale del classico con tequila silver, Cointreau e polpa di frutto della passione.",
        "100% Agave": "100% Agave",
        "Passion Fruit Pulp": "Polpa di Frutto della Passione",
        "Old Fashioned": "Old Fashioned",
        "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.": "Bevanda classica con bourbon di segale, angostura e una singola gigante sfera di ghiaccio.",
        "Angostura Bitters": "Bitter Angostura",
        "Whiskey Sour": "Whiskey Sour",
        "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.": "Perfetta combinazione di note dolci e acidulate con whiskey, succo di limone e schiuma di albume.",
        "Whiskey": "Whiskey",
        "Lemon Juice": "Succo di Limone",
        "Egg White": "Albume d'Uovo",
        "Aperol Spritz": "Aperol Spritz",
        "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.": "Aperitivo italiano arancione brillante miscelato con prosecco frizzante, una spruzzata di soda e una fetta d'arancia.",
        "Prosecco": "Prosecco",
        "Soda Water": "Acqua Frizzante",
        "Pina Colada": "Piña Colada",
        "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.": "Crema di cocco, succo di ananas e rum bianco serviti in un bicchiere alto.",
        "Coconut Cream": "Crema di Cocco",
        "Pineapple Juice": "Succo di Ananas",
        "Negroni": "Negroni",
        "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.": "Cocktail secco audace e amaro che unisce gin, Campari e vermut rosso.",
        "Strawberry Daiquiri": "Daiquiri alla Fragola",
        "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.": "Bevanda ghiacciata fruttata dolce con fragole fresche, succo di lime e rum bianco.",
        "Premium rum": "Rum premium",
        "Moscow Mule": "Moscow Mule",
        "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.": "Cocktail frizzante a base di vodka, ginger beer piccante e succo di lime, servito in una tazza di rame.",
        "Ginger Beer": "Ginger Beer",
        "Ginger Ale": "Ginger Ale",
        "Crushed cubes": "Cubetti di ghiaccio tritati",
        "Fresh lime wedge squeeze": "Spicchio di lime fresco",
        "Matcha Latte": "Matcha Latte",
    },
    pt: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Escaneie o código QR na sua mesa para ver o menu e fazer o pedido.",
        scan_table: "Escanear Mesa 4",
        scan_room: "Escanear Quarto 205",
        scan_patio: "Escanear Varanda 2",
        craving: "O que você está desejando?",
        search_placeholder: "Buscar pratos...",
        customize_add: "Personalizar & Adicionar",
        ingredients_header: "Ingredientes & Extras",
        add: "Adicionar",
        your_order: "Seu Pedido",
        order_notes_label: "Notas do pedido (ex. menos sal, alergias)",
        notes_placeholder: "Adicione pedidos especiais aqui...",
        subtotal: "Subtotal",
        tax: "Imposto (10%)",
        total: "Total",
        submit_order: "Enviar Pedido",
        order_placed: "Pedido Realizado!",
        order_success_desc: "Seu pedido foi enviado para a cozinha. Será entregue em {location} em breve.",
        new_order: "Iniciar Novo Pedido",
        toast_added: "{title} adicionado ao pedido!",
        settings_title: "Configurações",
        language: "Idioma",
        currency: "Moeda",
        theme: "Tema",
        light_mode: "Claro",
        dark_mode: "Escuro",
        auto_detected: "Detectado automaticamente",
        close: "Fechar",
        "No": "Sem",
        "All": "Todos",
        "Starters": "Entradas",
        "Breakfast": "Café da Manhã",
        "Mains": "Pratos Principais",
        "Cocktails": "Coquetéis",
        "Smoothies": "Batidos",
        "Kids Meal": "Menu Infantil",
        "Desserts": "Sobremesas",
        "Drinks": "Bebidas",
        "Popular": "Popular",
        "Grilled Salmon Asparagus": "Salmão grelhado com aspargos",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Salmão grelhado fresco servido com aspargos assados e molho de manteiga e limão.",
        "Salmon": "Salmão",
        "Fresh catch": "Fresquinho do dia",
        "Asparagus": "Aspargos",
        "Roasted greens": "Vegetais assados",
        "Extra Lemon": "Limão Extra",
        "Fresh wedges": "Gomos frescos",
        "Wagyu Beef Burger": "Hambúrguer de Wagyu",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Hambúrguer de Wagyu premium com cebola caramelizada, queijo cheddar e molho da casa.",
        "Wagyu Patty": "Hambúrguer de Wagyu",
        "100% Premium": "100% Premium",
        "Bacon": "Bacon",
        "Crispy smoked": "Fumado crocante",
        "Avocado Toast": "Torrada de abacate",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Torrada de fermentação natural com abacate esmagado, ovo pochê e flocos de pimenta.",
        "Avocado": "Abacate",
        "Hass avocado": "Abacate Hass",
        "Poached Egg": "Ovo pochê",
        "Free range": "Caipira",
        "Fluffy Pancakes": "Panquecas fofas",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Pilha de panquecas fofas de buttermilk com xarope de bordo e bagas frescas.",
        "Maple Syrup": "Xarope de bordo",
        "100% Pure": "100% Puro",
        "Berries": "Frutas vermelhas",
        "Mixed fresh": "Bagas frescas mistas",
        "Crispy Calamari": "Lula crocante",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Anéis de lula levemente fritos servidos com gomo de limão e molho tártaro.",
        "Tartare Sauce": "Molho tártaro",
        "House made": "Feito na casa",
        "Classic Mojito": "Mojito clássico",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Coquetel de rum refrescante com hortelã fresca, suco de limão e soda.",
        "Extra Mint": "Hortelã Extra",
        "Fresh leaves": "Folhas frescas",
        "Berry Smoothie": "Smoothie de frutas vermelhas",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Mistura de bagas mistas, iogurte e um toque de mel.",
        "Protein Powder": "Proteína em pó",
        "Whey or Plant": "Soro de leite ou vegetal",
        "Dino Chicken Nuggets": "Nuggets de frango dinossauro",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Nuggets de frango crocantes em forma de dinossauro com batatas fritas.",
        "Fries": "Batatas fritas",
        "Crinkle cut": "Corte ondulado",
        "Extra Ketchup": "Ketchup Extra",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Panna cotta de matcha",
        "Silky matcha infused Italian dessert topped with fresh berries.": "Sobremesa italiana sedosa infundida com matcha e bagas frescas por cima.",
        "Ribeye Steak": "Bife de Ancho Ribeye",
        "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.": "Bife de ancho de categoria USDA grelhado à sua escolha, servido com ramos de alecrim.",
        "Garlic Butter": "Manteiga de Alho",
        "Rosemary": "Alecrim",
        "Fresh sprigs": "Ramos frescos",
        "Pepper Sauce": "Molho de Pimenta",
        "Truffle Mushroom Risotto": "Risoto de Trufa e Cogumelos",
        "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.": "Arroz cremoso arborio cozido com cogumelos silvestres e pasta de trufa.",
        "Arborio Rice": "Arroz Arborio",
        "Wild Mushrooms": "Cogumelos Silvestres",
        "Truffle Paste": "Pasta de Trufa",
        "Chicken Fettuccine Alfredo": "Frango Fettuccine Alfredo",
        "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.": "Peito de frango grelhado sobre fettuccine em creme rico de alho e parmesão.",
        "Fettuccine": "Fettuccine",
        "Grilled Chicken": "Frango Grelhado",
        "Pan-Seared Sea Bass": "Robalo Grelhado na Frigideira",
        "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.": "Filé de robalo selado à perfeição com glace de limão e ervas e tomates cereja.",
        "Sea Bass": "Robalo",
        "Lemon Herb Glaze": "Glace de Limão e Ervas",
        "Cherry Tomatoes": "Tomates Cereja",
        "Vegetarian Buddha Bowl": "Tigela Buddha Vegetariana",
        "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.": "Base de quinoa com grão-de-bico assado, abacate, batata-doce e fio de tahini.",
        "Quinoa": "Quinoa",
        "Roasted Chickpeas": "Grão-de-Bico Assado",
        "Tahini Drizzle": "Molho de Tahini",
        "Slow-Cooked Lamb Shanks": "Pernil de Cordeiro Cozido Lentamente",
        "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.": "Pernil de cordeiro cozido lentamente em molho de vinho tinto, servido sobre purê de batata cremoso.",
        "Lamb Shank": "Pernil de Cordeiro",
        "Mashed Potatoes": "Purê de Batata",
        "Red Wine Jus": "Molho de Vinho Tinto",
        "Spiced Duck Breast": "Peito de Pato Especiado",
        "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.": "Peito de pato assado em frigideira com especiarias e molho de redução de cereja doce.",
        "Duck Breast": "Peito de Pato",
        "Cherry Reduction": "Redução de Cereja",
        "Orange Zest": "Casca de Laranja",
        "Lobster Thermidor": "Lagosta Thermidor",
        "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.": "Carne de lagosta cozida em molho cremoso de mostarda e conhaque, coberta com queijo Gruyère.",
        "Gruyere Cheese": "Queijo Gruyère",
        "Garlic Herb Bread": "Pão de Alho e Ervas",
        "Toasted artisan bread brushed with house garlic herb butter and parsley.": "Pão artesanal tostado pincelado com manteiga de alho e ervas da casa e salsa.",
        "Buffalo Chicken Wings": "Asas de Frango Buffalo",
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.": "Asas de frango crocantes em molho Buffalo picante, servidas com aipo e queijo azul.",
        "Buffalo Sauce": "Molho Buffalo",
        "Blue Cheese Dip": "Molho de Queijo Azul",
        "Celery Sticks": "Palitos de Aipo",
        "Pan-Seared Scallops": "Vieiras Seladas",
        "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.": "Vieiras gigantes seladas até dourar, finalizadas com manteiga de alho e ervas e microverdes.",
        "Microgreens": "Microverdes",
        "Eggs Benedict": "Ovos Benedict",
        "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.": "Ovos poché sobre muffins ingleses tostados com presunto defumado, cobertos com molho holandês.",
        "Hollandaise Sauce": "Molho Holandês",
        "Smoked Salmon": "Salmão Defumado",
        "French Toast Sticks": "Palitos de Rabanada",
        "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.": "Palitos de brioche espessa empanados e fritos, servidos com açúcar de confeiteiro e xarope de bordo.",
        "Powdered Sugar": "Açúcar de Confeiteiro",
        "Cinnamon Butter": "Manteiga de Canela",
        "Belgian Waffles": "Waffles Belgas",
        "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.": "Waffle belga com bordas crocantes e centro macio, coberto com creme de leite batido fresco e xarope.",
        "Whipped Cream": "Creme de Leite Batido",
        "Strawberries": "Fresas",
        "Chocolate Drizzle": "Fio de Chocolate",
        "Classic Omelette": "Omelete Clássica",
        "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.": "Omelete de três ovos dobrável com queijo cheddar, cogumelos e pimentões.",
        "Mushrooms": "Cogumelos",
        "Bell Peppers": "Pimentões",
        "Acai Berry Bowl": "Tigela de Açaí",
        "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.": "Baga de açaí congelada batida coberta com morangos, fatias de banana e granola torrada.",
        "Granola": "Granola",
        "Chia Seeds": "Sementes de Chia",
        "Honey Drizzle": "Fio de Mel",
        "Smoked Salmon Bagel": "Bagel com Salmão Defumado",
        "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.": "Bagel tostado com queijo cremoso batido, salmão defumado premium e alcaparras.",
        "Capers": "Alcaparras",
        "Red Onion": "Cebola Roxa",
        "Full English Breakfast": "Café da Manhã Inglês Completo",
        "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.": "Bandeja tradicional com linguiça de porco, bacon crocante, ovos fritos, feijão assado e torradas.",
        "Sausage": "Linguiça",
        "Baked Beans": "Feijão Assado",
        "Grilled Mushroom": "Cogumelo Grelhado",
        "Breakfast Burrito": "Burrito de Café da Manhã",
        "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.": "Tortilla com ovos mexidos, linguiça chorizo, batatas e queijo Monterey Jack.",
        "Scrambled Eggs": "Ovos Mexidos",
        "Chorizo": "Chorizo",
        "Salsa Verde": "Salsa Verde",
        "Espresso Martini": "Martini Espresso",
        "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.": "Mistura sofisticada de vodca premium, shot de espresso fresco e licor de café doce.",
        "Coffee Liqueur": "Licor de Café",
        "Passion Fruit Margarita": "Margarita de Maracujá",
        "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.": "Toque tropical do clássico com tequila prateada, Cointreau e polpa de maracujá.",
        "100% Agave": "100% Agave",
        "Passion Fruit Pulp": "Polpa de Maracujá",
        "Old Fashioned": "Old Fashioned",
        "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.": "Bebida clássica de bourbon de centeio, Angostura e uma esfera gigante de gelo.",
        "Angostura Bitters": "Bitter de Angostura",
        "Whiskey Sour": "Whisky Sour",
        "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.": "Mistura perfeita de notas doces e ácidas com whisky, suco de limão fresco e espuma de clara de ovo.",
        "Whiskey": "Whisky",
        "Lemon Juice": "Suco de Limão",
        "Egg White": "Clara de Ovo",
        "Aperol Spritz": "Aperol Spritz",
        "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.": "Aperitivo italiano laranja brilhante misturado com prosecco espumante, um toque de soda e uma fatia de laranja.",
        "Prosecco": "Prosecco",
        "Soda Water": "Água Com Gás",
        "Pina Colada": "Piña Colada",
        "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.": "Mistura cremosa de creme de coco, suco de abacaxi e rum prateado servida em copo alto.",
        "Coconut Cream": "Creme de Coco",
        "Pineapple Juice": "Suco de Abacaxi",
        "Negroni": "Negroni",
        "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.": "Coquetel seco forte e amargo que combina gin, Campari e vermute doce.",
        "Strawberry Daiquiri": "Daiquiri de Morango",
        "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.": "Bebida gelada frutada e doce com morangos frescos, suco de limão e rum branco.",
        "Premium rum": "Rum premium",
        "Moscow Mule": "Moscow Mule",
        "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.": "Coquetel efervescente de vodca, cerveja de gengibre picante e suco de limão, servido em caneca de cobre.",
        "Ginger Beer": "Cerveja de Gengibre",
        "Ginger Ale": "Ginger Ale",
        "Crushed cubes": "Cubos de gelo triturados",
        "Fresh lime wedge squeeze": "Espremedor de limão taiti fresco",
        "Matcha Latte": "Latte de Matcha",
    },
    ja: {
        papomotto: "PAPOMOTTO",
        qr_sub: "テーブルのQRコードをスキャンしてメニューを表示し、注文してください。",
        scan_table: "テーブル 4 スキャン",
        scan_room: "客室 205 スキャン",
        scan_patio: "テラス 2 スキャン",
        craving: "何を食べたいですか？",
        search_placeholder: "料理を検索...",
        customize_add: "カスタマイズして追加",
        ingredients_header: "原材料とトッピング",
        add: "追加",
        your_order: "ご注文内容",
        order_notes_label: "注文メモ（例：塩分控えめ、アレルギーなど）",
        notes_placeholder: "特別なご要望はこちらにご記入ください...",
        subtotal: "小計",
        tax: "消費税 (10%)",
        total: "合計",
        submit_order: "注文を送信",
        order_placed: "注文が送信されました！",
        order_success_desc: "注文が厨房に送信されました。間もなく {location} にお届けします。",
        new_order: "新しい注文を開始",
        toast_added: "{title} を注文に追加しました！",
        settings_title: "設定",
        language: "言語",
        currency: "通貨",
        theme: "テーマ",
        light_mode: "ライト",
        dark_mode: "ダーク",
        auto_detected: "自動検出",
        close: "閉じる",
        "No": "抜き",
        "All": "すべて",
        "Starters": "前菜",
        "Breakfast": "朝食",
        "Mains": "メイン",
        "Cocktails": "カクテル",
        "Smoothies": "スムージー",
        "Kids Meal": "キッズミール",
        "Desserts": "デザート",
        "Drinks": "ドリンク",
        "Popular": "人気商品",
        "Grilled Salmon Asparagus": "サーモングリルとアスパラガス",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "新鮮なサーモンのグリルに、ローストアスパラガスとレモンバターソースを添えて。",
        "Salmon": "サーモン",
        "Fresh catch": "新鮮なサーモン",
        "Asparagus": "アスパラガス",
        "Roasted greens": "ローストアスパラ",
        "Extra Lemon": "レモン追加",
        "Fresh wedges": "フレッシュレモン",
        "Wagyu Beef Burger": "和牛ビーフバーガー",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "極上和牛パティ、キャラメルオニオン、チェダーチーズ、ハウスソースを使用。",
        "Wagyu Patty": "和牛パティ",
        "100% Premium": "100% プレミアム和牛",
        "Bacon": "ベーコン",
        "Crispy smoked": "カリカリベーコン",
        "Avocado Toast": "アボカドトースト",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "サワードウトーストに、つぶしたアボカド、ポーチドエッグ、チリフレークをのせて。",
        "Avocado": "アボカド",
        "Hass avocado": "ハスアボカド",
        "Poached Egg": "ポーチドエッグ",
        "Free range": "放し飼い卵",
        "Fluffy Pancakes": "ふわふわパンケーキ",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "ふわふわのバターミルクパンケーキにメープルシロップ and フレッシュベリーを添えて。",
        "Maple Syrup": "メープルシロップ",
        "100% Pure": "100% ピュア",
        "Berries": "ベリー類",
        "Mixed fresh": "フレッシュベリーミックス",
        "Crispy Calamari": "クリスピーカラマリ",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "カラマリ（イカ）のリングフライに、レモンとタルタルソースを添えて。",
        "Tartare Sauce": "タルタルソース",
        "House made": "自家製",
        "Classic Mojito": "クラシックモヒート",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "新鮮なミント、ライムジュース、ソーダを合わせた爽やかなラムカクテル。",
        "Extra Mint": "ミント追加",
        "Fresh leaves": "フレッシュミント",
        "Berry Smoothie": "ベリースムージー",
        "Blend of mixed berries, yogurt, and a touch of honey.": "ミックスベリー、ヨーグルト、ハチミツをブレンド。",
        "Protein Powder": "プロテインパウダー",
        "Whey or Plant": "ホエイまたは植物性",
        "Dino Chicken Nuggets": "ダイナソーチキンナゲット",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "恐竜の形をしたサクサクのチキンナゲットとフライドポテトのセット。",
        "Fries": "フライドポテト",
        "Crinkle cut": "クリンクルカット",
        "Extra Ketchup": "ケチャップ追加",
        "Heinz": "ハインツ",
        "Matcha Panna Cotta": "抹茶パンナコッタ",
        "Silky matcha infused Italian dessert topped with fresh berries.": "なめらかな抹茶味のイタリアンデザートに、フレッシュベリーをトッピング。"
    },
    zh: {
        papomotto: "PAPOMOTTO",
        qr_sub: "扫描您桌上的二维码以查看菜单并下单。",
        scan_table: "扫描 4 号桌",
        scan_room: "扫描 205 号房间",
        scan_patio: "扫描 2 号露台",
        craving: "您想吃点什么？",
        search_placeholder: "搜索菜品...",
        customize_add: "自定义并添加",
        ingredients_header: "原料与配料",
        add: "添加",
        your_order: "您的订单",
        order_notes_label: "备注信息（如：少盐、过敏源）",
        notes_placeholder: "在此添加任何特殊要求...",
        subtotal: "小计",
        tax: "税 (10%)",
        total: "总计",
        submit_order: "提交订单",
        order_placed: "订单已提交！",
        order_success_desc: "您的订单已发送至后厨。我们将很快送达 {location}。",
        new_order: "开始新订单",
        toast_added: "{title} 已加入订单！",
        settings_title: "设置",
        language: "语言",
        currency: "货币",
        theme: "主题",
        light_mode: "浅色",
        dark_mode: "深色",
        auto_detected: "根据地区自动检测",
        close: "关闭",
        "No": "无",
        "All": "全部",
        "Starters": "前菜",
        "Breakfast": "早餐",
        "Mains": "主菜",
        "Cocktails": "鸡尾酒",
        "Smoothies": "昔果乐",
        "Kids Meal": "儿童餐",
        "Desserts": "甜点",
        "Drinks": "饮品",
        "Popular": "人气商品",
        "Grilled Salmon Asparagus": "香煎三文鱼配芦笋",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "新鲜烤三文鱼，搭配烤芦笋及柠檬黄油酱。",
        "Salmon": "三文鱼",
        "Fresh catch": "新鲜渔获",
        "Asparagus": "芦笋",
        "Roasted greens": "烤芦笋",
        "Extra Lemon": "加柠檬",
        "Fresh wedges": "鲜柠檬片",
        "Wagyu Beef Burger": "和牛汉堡",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "高品质和牛肉饼，搭配焦糖洋葱、切达干酪和秘制酱汁。",
        "Wagyu Patty": "和牛肉饼",
        "100% Premium": "100% 进口和牛",
        "Bacon": "培根",
        "Crispy smoked": "烟熏脆培根",
        "Avocado Toast": "牛油果吐司",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "酸面包吐司，抹上牛油果泥，铺上水波蛋和辣椒碎。",
        "Avocado": "牛油果",
        "Hass avocado": "哈斯牛油果",
        "Poached Egg": "水波蛋",
        "Free range": "土鸡蛋",
        "Fluffy Pancakes": "松饼",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "美式松饼塔，浇上枫糖浆，搭配新鲜浆果。",
        "Maple Syrup": "枫糖浆",
        "100% Pure": "100% 纯正",
        "Berries": "浆果",
        "Mixed fresh": "新鲜混合浆果",
        "Crispy Calamari": "酥炸鱿鱼圈",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "金黄酥脆的炸鱿鱼圈，搭配柠檬片和塔塔酱。",
        "Tartare Sauce": "塔塔酱",
        "House made": "自制",
        "Classic Mojito": "经典莫吉托",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "清爽朗姆鸡尾酒，加入新鲜薄荷、青柠汁和苏打水。",
        "Extra Mint": "加薄荷",
        "Fresh leaves": "新鲜薄荷叶",
        "Berry Smoothie": "莓果奶昔",
        "Blend of mixed berries, yogurt, and a touch of honey.": "混合莓果、酸奶和少许蜂蜜调配而成。",
        "Protein Powder": "蛋白粉",
        "Whey or Plant": "乳清或植物蛋白",
        "Dino Chicken Nuggets": "恐龙炸鸡块",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "酥脆的恐龙形状炸鸡块，搭配薯条。",
        "Fries": "薯条",
        "Crinkle cut": "波浪薯条",
        "Extra Ketchup": "加番茄酱",
        "Heinz": "亨氏番茄酱",
        "Matcha Panna Cotta": "抹茶意式奶冻",
        "Silky matcha infused Italian dessert topped with fresh berries.": "丝滑抹茶意式奶冻，表面覆以新鲜浆果。"
    },
    ko: {
        papomotto: "PAPOMOTTO",
        qr_sub: "테이블의 QR 코드를 스캔하여 메뉴를 확인하고 주문하세요.",
        scan_table: "테이블 4 스캔",
        scan_room: "객실 205 스캔",
        scan_patio: "파티오 2 스캔",
        craving: "무엇을 드시고 싶으신가요?",
        search_placeholder: "음식 검색...",
        customize_add: "맞춤 설정 후 추가",
        ingredients_header: "재료 & 토핑",
        add: "추가",
        your_order: "주문 내역",
        order_notes_label: "주문 메모 (예: 덜 짜게, 알레르기)",
        notes_placeholder: "특별 요청 사항을 여기에 입력하세요...",
        subtotal: "소계",
        tax: "세금 (10%)",
        total: "합계",
        submit_order: "주문 제출",
        order_placed: "주문이 완료되었습니다!",
        order_success_desc: "주문이 주방으로 전송되었습니다. {location}으로 곧 배달됩니다.",
        new_order: "새 주문 시작",
        toast_added: "{title}이(가) 주문에 추가되었습니다!",
        settings_title: "설정",
        language: "언어",
        currency: "통화",
        theme: "테마",
        light_mode: "밝은 모드",
        dark_mode: "어두운 모드",
        auto_detected: "지역에서 자동 감지됨",
        close: "닫기",
        "No": "제외",
        "All": "전체",
        "Starters": "에피타이저",
        "Breakfast": "아침식사",
        "Mains": "메인메뉴",
        "Cocktails": "칵테일",
        "Smoothies": "스무디",
        "Kids Meal": "키즈밀",
        "Desserts": "디저트",
        "Drinks": "음료",
        "Popular": "인기",
        "Grilled Salmon Asparagus": "그릴 연어와 아스파라거스",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "レモン バター ソースと焼きアスパラガスを添えた新鮮なグリルサーモン。",
        "Salmon": "サーモン",
        "Asparagus": "アスパラガス",
        "Roasted greens": "ローストグリーン",
        "Extra Lemon": "レモン追加",
        "Fresh wedges": "フレッシュレモン",
        "Wagyu Beef Burger": "和牛ビーフバーガー",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "キャラメル化オニオン、チェダーチーズ、ハウスソースを添えたプレミアム和牛ビーフパティ。",
        "Wagyu Patty": "和牛パティ",
        "100% Premium": "100% プレミアム",
        "Bacon": "ベーコン",
        "Crispy smoked": "カリカリスモーク",
        "Avocado Toast": "アボカドトースト",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "マッシュしたアボカド、ポーチドエッグ、チリフレークを乗せたサワードウトースト。",
        "Avocado": "アボカド",
        "Hass avocado": "ハスアボカド",
        "Poached Egg": "ポーチドエッグ",
        "Free range": "放し飼い卵",
        "Fluffy Pancakes": "ふわふわパンケーキ",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "メープルシロップとフレッシュベリーを添えたふわふわバターミルクパンケーキ。",
        "Maple Syrup": "メープルシロップ",
        "100% Pure": "100% ピュア",
        "Berries": "ベリー類",
        "Mixed fresh": "フレッシュミックスベリー",
        "Crispy Calamari": "クリスピーカラマリ",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "レモンウェッジとタルタルソースを添えた軽く揚げたカラマリリング。",
        "Tartare Sauce": "タルタルソース",
        "House made": "ハウスメイド",
        "Classic Mojito": "クラシックモヒート",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "フレッシュミント、ライムジュース、ソーダで作る爽やかなラムカクテル。",
        "Extra Mint": "ミント追加",
        "Fresh leaves": "フレッシュリーブス",
        "Berry Smoothie": "ベリースムージー",
        "Blend of mixed berries, yogurt, and a touch of honey.": "ミックスベリー、ヨーグルト、少々の蜂蜜をブレンド。",
        "Protein Powder": "プロテインパウダー",
        "Whey or Plant": "ホエイまたはプラント",
        "Dino Chicken Nuggets": "ダイナソーチキンナゲット",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "恐竜型カリカリチキンナゲットとフライドポテト。",
        "Fries": "フライドポテト",
        "Crinkle cut": "クランクルカット",
        "Extra Ketchup": "ケチャップ追加",
        "Heinz": "ハインツ",
        "Matcha Panna Cotta": "抹茶パンナコッタ",
        "Silky matcha infused Italian dessert topped with fresh berries.": "新鮮なベリーでトッピングした、なめらかな抹茶風味のイタリアンデザート。",
        "Ribeye Steak": "リブアイステーキ",
        "USDA Prime ribeye steak grilled to your liking, served with rosemary sprigs.": "USDAプライムリブアイステーキをお好みの焼き加減で、ローズマリーの枝と共に。",
        "Garlic Butter": "ガーリックバター",
        "Rosemary": "ローズマリー",
        "Fresh sprigs": "フレッシュローズマリー",
        "Pepper Sauce": "ペッパーソース",
        "Truffle Mushroom Risotto": "トリュフキノコリゾット",
        "Creamy arborio rice cooked with wild forest mushrooms and truffle oil paste.": "アロリオ米をクリーミーに、森のキノコとトリュフオイルペーストで調理。",
        "Arborio Rice": "アロリオ米",
        "Wild Mushrooms": "森のキノコ",
        "Truffle Paste": "トリュフペースト",
        "Chicken Fettuccine Alfredo": "チキンフェットチーネアルフレード",
        "Tender grilled chicken breast over fettuccine tossed in rich garlic parmesan cream.": "香ばしいガーリックパルメザンクリームと和えたフェットチーネの上に柔らかいグリルチキン。",
        "Fettuccine": "フェットチーネ",
        "Grilled Chicken": "グリルチキン",
        "Pan-Seared Sea Bass": "パンシールドシーバス",
        "Sea bass fillet seared to perfection with a lemon herb glaze and cherry tomatoes.": "レモンハーブグレイズとチェリートマトを添えた、絶妙な焼き加減のシーバスフィレ。",
        "Sea Bass": "シーバス",
        "Lemon Herb Glaze": "レモンハーブグレイズ",
        "Cherry Tomatoes": "チェリートマト",
        "Vegetarian Buddha Bowl": "ベジタリアンブッダボウル",
        "Quinoa base topped with roasted chickpeas, avocado, sweet potato, and tahini drizzle.": "キヌアベースにローストひよこ豆、アボカド、さつまいも、タヒニソース。",
        "Quinoa": "キヌア",
        "Roasted Chickpeas": "ローストひよこ豆",
        "Tahini Drizzle": "タヒニソース",
        "Slow-Cooked Lamb Shanks": "スロークックラムシャンク",
        "Tender lamb shank slow-cooked in red wine jus, served over smooth mashed potatoes.": "赤ワインソースでじっくり煮込んだ柔らかいラムシャンク、マッシュポテトに乗せて。",
        "Lamb Shank": "ラムシャンク",
        "Mashed Potatoes": "マッシュポテト",
        "Red Wine Jus": "赤ワインソース",
        "Spiced Duck Breast": "スパイスダックブレスト",
        "Pan-roasted duck breast with a warm spice rub and sweet cherry reduction sauce.": "パンローストしたダックブレストにスパイスラブとチェリーリダクションソース。",
        "Duck Breast": "ダックブレスト",
        "Cherry Reduction": "チェリーリダクション",
        "Orange Zest": "オレンジの皮",
        "Lobster Thermidor": "ロブスターテルミドール",
        "Lobster meat cooked in a rich cognac mustard cream sauce, topped with Gruyere cheese.": "コニャックマスタードクリームソースで調理したロブスターの身にグリュイエールチーズをトッピング。",
        "Gruyere Cheese": "グリュイエールチーズ",
        "Garlic Herb Bread": "ガーリックハーブブレッド",
        "Toasted artisan bread brushed with house garlic herb butter and parsley.": "自家製ガーリックハーブバターとパセリを塗ったトーストクラフトブレッド。",
        "Buffalo Chicken Wings": "バッファローチキンウィング",
        "Crispy chicken wings tossed in spicy buffalo sauce, served with celery and blue cheese.": "スパイシーバッファローソースで和えたカリカリチキンウィング、セロリとブルーチーズを添えて。",
        "Buffalo Sauce": "バッファローソース",
        "Blue Cheese Dip": "ブルーチーズディップ",
        "Celery Sticks": "セロリスティック",
        "Pan-Seared Scallops": "パンシールドホタテ",
        "Jumbo scallops seared until golden, finished with garlic herb butter and microgreens.": "黄金色になるまで焼いたジャンボホタテに、ガーリックハーブバターとマイクログリーン。",
        "Microgreens": "マイクログリーン",
        "Eggs Benedict": "エッグスベネディクト",
        "Poached eggs and warm smoked ham on toasted English muffins, coated with hollandaise sauce.": "トーストしたイングリッシュマフィンにポーチドエッグとスモークハム、オランデーズソース。",
        "Hollandaise Sauce": "オランデーズソース",
        "Smoked Salmon": "スモークサーモン",
        "French Toast Sticks": "フレンチトーストスティック",
        "Thick brioche toast sticks battered and fried, served with powdered sugar and maple syrup.": "パン粉をつけて揚げたブリオッシュフレンチトーストスティックに粉砂糖とメープルシロップ。",
        "Powdered Sugar": "粉砂糖",
        "Cinnamon Butter": "シナモンバター",
        "Belgian Waffles": "ベルギーワッフル",
        "Crispy-edged, fluffy-centered Belgian waffle topped with fresh whipped cream and syrup.": "サクサクの縁とふわふわの中心のベルギーワッフルに生クリームとシロップ。",
        "Whipped Cream": "生クリーム",
        "Strawberries": "いちご",
        "Chocolate Drizzle": "チョコレートシロップ",
        "Classic Omelette": "クラシックオムレツ",
        "Three-egg folded omelette with cheddar cheese, mushrooms, and bell peppers.": "チェダーチーズ、キノコ、ピーマンを入れた三卵オムレツ。",
        "Mushrooms": "キノコ",
        "Bell Peppers": "ピーマン",
        "Acai Berry Bowl": "アサイーボウル",
        "Frozen blended acai berries topped with strawberries, banana slices, and toasted granola.": "冷凍アサイーベリーをブレンドし、いちご、バナナ、トーストグラノーラをトッピング。",
        "Granola": "グラノーラ",
        "Chia Seeds": "チアシード",
        "Honey Drizzle": "ハニードリズル",
        "Smoked Salmon Bagel": "スモークサーモンベーグル",
        "Toasted bagel spread with whipped cream cheese, premium smoked salmon, and capers.": "ホイップクリームチーズ、プレミアムスモークサーモン、ケイパーを乗せたトーストベーグル。",
        "Capers": "ケイパー",
        "Red Onion": "赤玉ねぎ",
        "Full English Breakfast": "フルイングリッシュブレックファースト",
        "Traditional platter with pork sausage, crispy bacon, fried eggs, baked beans, and toast.": "豚ソーセージ、カリカリベーコン、目玉焼き、ベイクドビーンズ、トーストの伝統的なプレート。",
        "Sausage": "ソーセージ",
        "Baked Beans": "ベイクドビーンズ",
        "Grilled Mushroom": "グリルキノコ",
        "Breakfast Burrito": "ブレックファーストブリトー",
        "Tortilla wrapped scrambled eggs, chorizo sausage, potatoes, and Monterey Jack cheese.": "炒り卵とチョリソ、ポテト、モントレージャックチーズをトルティーヤで包んだブリトー。",
        "Scrambled Eggs": "スクランブルエッグ",
        "Chorizo": "チョリソー",
        "Salsa Verde": "サルサベルデ",
        "Espresso Martini": "エスプレッソマティーニ",
        "Sophisticated blend of premium vodka, fresh espresso shot, and sweet coffee liqueur.": "プレミアムウォッカとフレッシュエスプレッソ、スイートコーヒーリキュールの上品なブレンド。",
        "Coffee Liqueur": "コーヒーリキュール",
        "Passion Fruit Margarita": "パッションフルーツマルガリータ",
        "Tropical twist on the classic with silver tequila, Cointreau, and passion fruit pulp.": "シルバーテキーラ、コアントロー、パッションフルーツのプルペでアレンジしたトロピカルマルガリータ。",
        "100% Agave": "100% アガベ",
        "Passion Fruit Pulp": "パッションフルーツプルペ",
        "Old Fashioned": "オールドファッションデッド",
        "Classic sipping drink featuring rye bourbon, angostura bitters, and single giant ice sphere.": "ライバーボーン、アンゴストゥーラビターズ、巨大なアイススフィアを使ったクラシックスピリッツ。",
        "Angostura Bitters": "アンゴストゥーラビターズ",
        "Whiskey Sour": "ウィスキーサワー",
        "Perfect blend of sweet and sour notes with whiskey, fresh lemon juice, and egg white foam.": "ウィスキー、レモンジュース、卵白の泡を使った甘酸っぱい完璧なブレンド。",
        "Whiskey": "ウィスキー",
        "Lemon Juice": "レモンジュース",
        "Egg White": "卵白",
        "Aperol Spritz": "アペロールスプリッツ",
        "Bright orange Italian aperitif mixed with sparkling prosecco, splash of soda, and orange slice.": "スパークリングプロセッコとソーダ、オレンジを混ぜた明るいオレンジのイタリアンアペリティフ。",
        "Prosecco": "プロセッコ",
        "Soda Water": "ソーダ水",
        "Pina Colada": "ピニャコラーダ",
        "Creamy blend of coconut cream, pineapple juice, and silver rum served in a tall glass.": "ココナッツクリーム、パイナップルジュース、ホワイトラムのクリーミーなブレンド。",
        "Coconut Cream": "ココナッツクリーム",
        "Pineapple Juice": "パイナップルジュース",
        "Negroni": "ネグローニ",
        "Bold and bitter dry cocktail combining gin, Campari, and sweet vermouth.": "ジン、カンパリ、スイートベルモットを組み合わせた濃厚で苦いドライカクテル。",
        "Strawberry Daiquiri": "ストロベリーダイキリ",
        "Fruity sweet blended slushy with fresh strawberries, lime juice, and white rum.": "新鮮なイチゴ、ライムジュース、ホワイトラムで作るフルーティーで甘いブレンドスラッシー。",
        "Premium rum": "プレミアムラム",
        "Moscow Mule": "モスコミュール",
        "Fizzy cocktail made with vodka, spicy ginger beer, and lime juice, served in a copper mug.": "ウォッカ、スパイシージンジャービア、ライムジュースの炭酸カクテルを銅のマグカップで。",
        "Ginger Beer": "ジンジャービア",
        "Ginger Ale": "ジンジャーエール",
        "Crushed cubes": "刻んだ氷",
        "Fresh lime wedge squeeze": "ライムのくし切り",
        "Matcha Latte": "抹茶ラテ",
    },
    th: {
        papomotto: "PAPOMOTTO",
        search_placeholder: "ค้นหาอาหาร...",
        craving: "คุณอยากอะไร?",
        qr_sub: "สแกน QR Code ที่โต๊ะเพื่อดูเมนูและสั่งอาหาร",
        scan_table: "สแกนโต๊ะ 4",
        scan_room: "สแกนห้อง 205",
        scan_patio: "สแกน Patio 2",
        customize_add: "ปรับและเพิ่ม",
        ingredients_header: "วัตถุดิบ & เอ็กซ์ตร้า",
        add: "เพิ่ม",
        your_order: "รายการสั่งอาหาร",
        order_notes_label: "หมายเหตุ (เช่น น้อยเกลือ แพ้อาหาร)",
        notes_placeholder: "เพิ่มคำขอพิเศษที่นี่...",
        subtotal: "รวมชั่วคราว",
        tax: "ภาษี (10%)",
        total: "รวมทั้งหมด",
        submit_order: "ส่งออเดอร์",
        order_placed: "สั่งอาหารสำเร็จ!",
        order_success_desc: "รายการถูกส่งสู่ครัว จะจัดส่งถึง {location} shortly.",
        new_order: "สั่งใหม่",
        toast_added: "เพิ่ม {title} ในรายการแล้ว!",
        settings_title: "ตั้งค่า",
        language: "ภาษา",
        currency: "สกุลเงิน",
        theme: "ธีม",
        light_mode: "สว่าง",
        dark_mode: "มืด",
        auto_detected: "ตรวจพบจากภูมิภาค",
        close: "ปิด",
        "No": "ไม่มี",
        "All": "ทั้งหมด",
        "Starters": "อาหารเรียกได้",
        "Breakfast": "อาหารเช้า",
        "Mains": "อาหารหลัก",
        "Cocktails": "ค็อกเทล",
        "Smoothies": "สมูตตี้",
        "Kids Meal": "อาหารเด็ก",
        "Desserts": "ขนมหวาน",
        "Drinks": "เครื่องดื่ม",
        "Popular": "ยอดนิยม",
        "Grilled Salmon Asparagus": "แซลมอนย่างกับแซฟฟาร์จ",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "แซลมอนย่างสด เสิร์ฟกับแซฟฟาร์จย่างและซอสเนยมะนาว",
        "Salmon": "แซลมอน",
        "Fresh catch": "วัตถุดิบสด",
        "Asparagus": "แซฟฟาร์จ",
        "Roasted greens": "ผักย่าง",
        "Extra Lemon": "มะนาวเพิ่ม",
        "Fresh wedges": "มะนาวสด",
        "Wagyu Beef Burger": "เบอร์เกอร์วากิว",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "เนื้อวากิวพรีเมี่ยมกับหัวหนองคาราเมล ชีด์ชีส และซอสโฮมเมด",
        "Wagyu Patty": "เนื้อวากิว",
        "100% Premium": "100% พรีเมี่ยม",
        "Bacon": "เบคอน",
        "Crispy smoked": "คั่วกรอบ",
        "Avocado Toast": "อโวคาโดทอสต์",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "ขนมปังสเวอร์ดough ท็อปอโวคาโดบด ไข่ต้มนิ่ม และพริกป่น",
        "Avocado": "อโวคาโด",
        "Hass avocado": "อโวคาโดแฮส",
        "Poached Egg": "ไข่ต้มนิ่ม",
        "Free range": "ไข่พักพิง",
        "Fluffy Pancakes": "แพนเค้กฟูฟู",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "แพนเค้กบัตเตอร์มิลค์ฟู ๆ กับมะเปราะและเบอร์รี่สด",
        "Maple Syrup": "เมอแปล์ซีรัป",
        "100% Pure": "100% บรรจุ",
        "Berries": "เบอร์รี่",
        "Mixed fresh": "ผสมสด",
        "Crispy Calamari": "คาลามาริกกรอบ",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "แหวนปลาหมึกทอดเบา ๆ กับมะนาวและซอสตาร์ทาร์",
        "Tartare Sauce": "ซอสตาร์ทาร์",
        "House made": "ทำในร้าน",
        "Classic Mojito": "โมฮิโตคลาสสิก",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "ค็อกเทลรัมสดชื่น กับมินต์สด น้ำมะนาว และโซดา",
        "Extra Mint": "มินต์เพิ่ม",
        "Fresh leaves": "ใบสด",
        "Berry Smoothie": "สมูทตี้เบอร์รี่",
        "Blend of mixed berries, yogurt, and a touch of honey.": "ผสมเบอร์รี่ โยเกิร์ต และช้อนชา honey",
        "Protein Powder": "โปรตีนปาวเวอร์",
        "Whey or Plant": "วี หรือ พลัส",
        "Dino Chicken Nuggets": "ไก่นักเกตไดโนเสาร์",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "ไก่นักเกตรูปไดโนเสาร์กรอบ กับเฟรนซ์",
        "Fries": "เฟรนซ์",
        "Crinkle cut": "สับซอย",
        "Extra Ketchup": "เกตชัปเพิ่ม",
        "Heinz": "ไฮน์ซ์",
        "Matcha Panna Cotta": "มัทชาปั๊นนาคอตต้า",
        "Silky matcha infused Italian dessert topped with fresh berries.": "ของหวานอิตาลีรสมัทชาผสานเบอร์รี่สด"
    },
sw: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Piga QR code kwenye meza yako ili kutazama orodha yetu na kuagiza.",
        scan_table: "Piga Meza 4",
        scan_room: "Piga Chumba 205",
        scan_patio: "Piga Patio 2",
        craving: "Unataka kula nini?",
        search_placeholder: "Tafuta chakula...",
        customize_add: "Binafsisha & Ongeza",
        ingredients_header: "Viambato na Viungo vya Ziada",
        add: "Ongeza",
        your_order: "Oda Yako",
        order_notes_label: "Maoni ya Oda (k.m. chumvi kidogo, mzio wa chakula)",
        notes_placeholder: "Weka maoni maalum hapa...",
        subtotal: "Jumla ndogo",
        tax: "Kodi (10%)",
        total: "Jumla",
        submit_order: "Wasilisha Oda",
        order_placed: "Oda Imetumwa!",
        order_success_desc: "Oda yako imepelekwa jikoni. Itawasili kwake {location} hivi karibuni.",
        new_order: "Anzisha Oda Mpya",
        toast_added: "{title} imeongezwa kwenye oda!",
        settings_title: "Mipangilio",
        language: "Lugha",
        currency: "Sarafu",
        theme: "Muundo",
        light_mode: "Mwanga",
        dark_mode: "Giza",
        auto_detected: "Imegunduliwa kutoka eneo",
        close: "Funga",
        "No": "Hapana",
        "All": "Zote",
        "Starters": "Vipindi",
        "Breakfast": "Kifungu cha Asubuhi",
        "Mains": "Vyakula vikuu",
        "Cocktails": "Kokteli",
        "Smoothies": "Smooothi",
        "Kids Meal": "Chakula cha Watoto",
        "Desserts": "Mishito",
        "Drinks": "Vinywaji",
        "Popular": "Maarufu",
        "Grilled Salmon Asparagus": "Samaki Mwana Mwilini na Asparagusi",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Samaki mvuke wa mwaniki wa leo, iliyoandaliwa na asparagusi wa kukaanga na mbuzi limoni.",
        "Salmon": "Samaki Mwana",
        "Fresh catch": "Samaki wa leo",
        "Asparagus": "Asparagusi",
        "Roasted greens": "Mboga za kukaanga",
        "Extra Lemon": "Limoni ya ziada",
        "Fresh wedges": "Vipande vya limoni",
        "Wagyu Beef Burger": "Baga ya Nyama Wagyu",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Kipatti cha Wagyu bora chenye vipande vya karoti, chuma cha cheddar, na mbuzi wa nyumba.",
        "Wagyu Patty": "Kipatti Wagyu",
        "100% Premium": "100% Bora",
        "Bacon": "Bekon",
        "Crispy smoked": "Imekokotwa",
        "Avocado Toast": "Mkate wa Avocado",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Mkate wa chuma iliyopondwa na avocado, yai ya kuchemshwa, na vipyuzi vya pili.",
        "Avocado": "Avocado",
        "Hass avocado": "Avocado ya Hass",
        "Poached Egg": "Yai Iliyochemshwa",
        "Free range": "Yai ya uhai",
        "Fluffy Pancakes": "Pankeki Ndogo",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Safu ya pankeki ndogo za buttermilk zenye sirup ya maple na beri.",
        "Maple Syrup": "Sirupi ya Maple",
        "100% Pure": "100% Safi",
        "Berries": "Beri",
        "Mixed fresh": "Beri mchanganyiko",
        "Crispy Calamari": "Kalamari Kavu",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Miguu ya kalamari iliyo kukaanga kidogo, iliyoandaliwa na limoni na mbuzi tartare.",
        "Tartare Sauce": "Mbuzi Tartare",
        "House made": "Imetengenezwa nyumbani",
        "Classic Mojito": "Mojito ya Kale",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Kokteli ya rum ya kupumzika iliyo na minti mwingi, jusi ya limoni, na soda.",
        "Extra Mint": "Minti ya ziada",
        "Fresh leaves": "Majani mapya",
        "Berry Smoothie": "Smooothi ya Beri",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Mchanganyiko wa beri, yogurt, na kidogo ya asali.",
        "Protein Powder": "Unga wa Protini",
        "Whey or Plant": "Maziwa ya ng'ombe au mimea",
        "Dino Chicken Nuggets": "Kukutuma cha Kuku Dino",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Vipande vya kuku vya dinosaur vinavyo katwa vizuri, pamoja na viazi vya kukaanga.",
        "Fries": "Viazi vya kukaanga",
        "Crinkle cut": "Kwenye vipande vidogo",
        "Extra Ketchup": "Ketchup ya ziada",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Panna Cotta ya Matcha",
        "Silky matcha infused Italian dessert topped with fresh berries.": "Deserti ya Kiitaliano iliyo na matcha na beri za freshe."
    },
    luo: {
        papomotto: "PAPOMOTTO",
        qr_sub: "Kwan QR code e mesani ni mondo one menu marwa kendo okaan.",
        scan_table: "Tim Meja 4",
        scan_room: "Tim Ot 205",
        scan_patio: "Tim Patio 2",
        craving: "Ero koro ihero chiemo nadi?",
        search_placeholder: "Yen yien awet...",
        customize_add: " Lok  Nyiso & Med",
        ingredients_header: "Lisek kendo Nyise",
        add: "Med",
        your_order: "Obedi In",
        order_notes_label: "Weche e odit (kaka, nyanya moro, adwaro chiemo komach)",
        notes_placeholder: "Ket weche mag piny ka...",
        subtotal: "Piny ka dier",
        tax: "Kara (10%)",
        total: "Ji duto",
        submit_order: "Kon Oru",
        order_placed: "Obedi Ne Kik Kony!",
        order_success_desc: "Kony mari oseor e jela. Obiro ca kaa {location} ndalo matin.",
        new_order: "Obedi Oru Manyien",
        toast_added: "{title} konyo obedi ne!",
        settings_title: "Losruok",
        language: "Dho",
        currency: "Pesa",
        theme: "Ranyisi",
        light_mode: "Yien",
        dark_mode: "Owil",
        auto_detected: "Olawo keth pinje mo",
        close: "Lor",
        "No": "Ooyo",
        "All": "D gí",
        "Starters": "Madhako",
        "Breakfast": "Chiemo okinyi",
        "Mains": "Chiemo madongo",
        "Cocktails": "Kokteli",
        "Smoothies": "Smuuth",
        "Kids Meal": "Chiemo nyithindo",
        "Desserts": "Mishito",
        "Drinks": "Chupa",
        "Popular": "Ma mor",
        "Grilled Salmon Asparagus": "Salamon Iliyochomwa na Asparagus",
        "Freshly grilled salmon served with roasted asparagus and a lemon butter sauce.": "Salamon maji iliyochomwa kwa usafi, kuwa sawa na asparagus iliyochomwa na mafuta ya ndimu.",
        "Salmon": "Salamon",
        "Fresh catch": "Yien tin",
        "Asparagus": "Asparagus",
        "Roasted greens": "Mimbugi iliyochomwa",
        "Extra Lemon": "Ndimu Ga",
        "Fresh wedges": "Ndimu mayom",
        "Wagyu Beef Burger": "Baga Nyama Wagyu",
        "Premium Wagyu beef patty with caramelized onions, cheddar cheese, and house sauce.": "Aloo Wagyu ya nyama, katunguu, cheddar, na mchuzi wa nyumba.",
        "Wagyu Patty": "Wagyu Pati",
        "100% Premium": "100% Bora",
        "Bacon": "Bekon",
        "Crispy smoked": "Wacha kavu",
        "Avocado Toast": "Mkate Avocado",
        "Sourdough toast topped with smashed avocado, poached egg, and chili flakes.": "Mkate moriati, avocado iliyopondwa, yai ya kuchemshwa, vijinga vinyali.",
        "Avocado": "Avocado",
        "Hass avocado": "Avocado ya Hass",
        "Poached Egg": "Yai Iliyochemshwa",
        "Free range": "Yien thi",
        "Fluffy Pancakes": "Pankeki Nyororo",
        "Stack of fluffy buttermilk pancakes with maple syrup and fresh berries.": "Pankeki mazito mori, mazuri ya maple, na berri mapya.",
        "Maple Syrup": "Mazuri ya Maple",
        "100% Pure": "100% Lilo",
        "Berries": "Berri",
        "Mixed fresh": "Yien mbalimbali",
        "Crispy Calamari": "Kalamari Wacha",
        "Lightly fried calamari rings served with lemon wedge and tartare sauce.": "Mikono kalamari iliyofuka na ndimu na mchuzi wa tartare.",
        "Tartare Sauce": "Mchuzi wa Tartare",
        "House made": "Mie owuon",
        "Classic Mojito": "Mojito ya Kada",
        "Refreshing rum cocktail with fresh mint, lime juice, and soda.": "Kokteli ya rum kuon, minti, chungwa, soda.",
        "Extra Mint": "Minti Gao",
        "Fresh leaves": "Paja manyien",
        "Berry Smoothie": "Smuuth ya Berri",
        "Blend of mixed berries, yogurt, and a touch of honey.": "Berri mbalimbali, yogurti, kisimisi madi.",
        "Protein Powder": "Unga ya Prostix",
        "Whey or Plant": "Maziwa ng'ombe kata gii",
        "Dino Chicken Nuggets": "Nagget Kenga",
        "Crispy dinosaur-shaped chicken nuggets with a side of fries.": "Nagget kifaru, viazi vya kukaanga.",
        "Fries": "Viazi Vya Kukaanga",
        "Crinkle cut": "Kukata katika mita",
        "Extra Ketchup": "Ketchup Gao",
        "Heinz": "Heinz",
        "Matcha Panna Cotta": "Panna Cotta ya Matcha",
        "Silky matcha infused Italian dessert topped with fresh berries.": "MAMA matcha, berri manyien."
    },
};

const currencies = {
    USD: { symbol: "$", rate: 1.0, locale: "en-US" },
    EUR: { symbol: "€", rate: 0.92, locale: "de-DE" },
    GBP: { symbol: "£", rate: 0.79, locale: "en-GB" },
    JPY: { symbol: "¥", rate: 155.0, locale: "ja-JP" },
    CAD: { symbol: "C$", rate: 1.37, locale: "en-CA" },
    AUD: { symbol: "A$", rate: 1.51, locale: "en-AU" },
    CNY: { symbol: "¥", rate: 7.23, locale: "zh-CN" },
    BRL: { symbol: "R$", rate: 5.15, locale: "pt-BR" },
    MXN: { symbol: "MX$", rate: 16.60, locale: "es-MX" },
    INR: { symbol: "₹", rate: 83.30, locale: "en-IN" },
    UGX: { symbol: "USh", rate: 3700, locale: "sw-UG" }
};

let currentLang = 'en';
let currentCurrency = 'USD';
let detectedLocationName = '';
// Auto-detect language from browser settings
let browserLang = navigator.language || navigator.userLanguage || 'en-US';
let langCode = browserLang.split('-')[0];
if (translations[langCode]) {
    currentLang = langCode;
    localStorage.setItem('papomotto_lang', currentLang);
} else {
    currentLang = 'en';
}
// Auto-detect currency based on locale
let localeCurrencyMap = {
    'en-US': 'USD',
    'en-GB': 'GBP',
    'en-CA': 'CAD',
    'en-AU': 'AUD',
    'de-DE': 'EUR',
    'fr-FR': 'EUR',
    'es-ES': 'EUR',
    'pt-BR': 'BRL',
    'zh-CN': 'CNY',
    'ja-JP': 'JPY',
    'en-IN': 'INR',
    'sw-KE': 'UGX',
    'sw-TZ': 'UGX',
    'sw-UG': 'UGX'
};
let locale = navigator.language || 'en-US';
currentCurrency = localeCurrencyMap[locale] || 'USD';
localStorage.setItem('papomotto_currency', currentCurrency);

// Note: applyLocalization and renderMenu are called after DOM ready in the init section at the end
function getTranslation(key) {
    if (translations[currentLang] && translations[currentLang][key]) {
        return translations[currentLang][key];
    }
    if (translations['en'] && translations['en'][key]) {
        return translations['en'][key];
    }
    return key;
}

function formatPrice(usdPrice) {
    const cur = currencies[currentCurrency] || currencies['USD'];
    const converted = usdPrice * cur.rate;
    return new Intl.NumberFormat(cur.locale, {
        style: 'currency',
        currency: currentCurrency
    }).format(converted);
}

function toggleTheme() {
    const body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
    applyLocalization();
}

function openSettings() {
    document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettings() {
    document.getElementById('settings-modal').classList.add('hidden');
}

function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang;
        localStorage.setItem('papomotto_lang', lang);
        applyLocalization();
        showToast(getTranslation('settings_title') + " -> " + lang.toUpperCase());
    }
}

function setCurrency(currency) {
    if (currencies[currency]) {
        currentCurrency = currency;
        localStorage.setItem('papomotto_currency', currency);
        applyLocalization();
        showToast(getTranslation('settings_title') + " -> " + currency);
    }
}

function setTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
    }
    applyLocalization();
}

async function detectLocationAndLanguage() {
    // 1. Browser device settings defaults
    const deviceLang = navigator.language || 'en-US';
    const langCode = deviceLang.split('-')[0].toLowerCase();
    const regionCode = deviceLang.split('-')[1]?.toUpperCase();

    if (translations[langCode]) {
        currentLang = langCode;
    } else {
        currentLang = 'en';
    }

    if (regionCode) {
        const regionToCurrency = {
            'US': 'USD', 'GB': 'GBP', 'JP': 'JPY', 'CA': 'CAD', 'AU': 'AUD', 'CN': 'CNY', 'BR': 'BRL', 'MX': 'MXN', 'IN': 'INR', 'UG': 'UGX',
            'FR': 'EUR', 'DE': 'EUR', 'IT': 'EUR', 'ES': 'EUR', 'PT': 'EUR', 'NL': 'EUR', 'BE': 'EUR', 'IE': 'EUR', 'AT': 'EUR', 'FI': 'EUR', 'GR': 'EUR'
        };
        if (regionToCurrency[regionCode]) {
            currentCurrency = regionToCurrency[regionCode];
        }
    }

    // 2. Restore overrides from localStorage
    const savedLang = localStorage.getItem('papomotto_lang');
    const savedCurrency = localStorage.getItem('papomotto_currency');

    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    if (savedCurrency && currencies[savedCurrency]) {
        currentCurrency = savedCurrency;
    }

    // 3. Optional IP Geolocation fetch if preferences not manually set
    if (!savedLang && !savedCurrency) {
        try {
            const res = await fetch('https://freeipapi.com/api/json');
            if (res.ok) {
                const data = await res.json();
                if (data.currencyCode && currencies[data.currencyCode]) {
                    currentCurrency = data.currencyCode;
                    localStorage.setItem('papomotto_currency', currentCurrency);
                }

                const countryToLang = {
                    'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'CL': 'es',
                    'FR': 'fr', 'CA': 'en', 'JP': 'ja', 'CN': 'zh', 'TW': 'zh', 'HK': 'zh',
                    'DE': 'de', 'AT': 'de', 'CH': 'de', 'IT': 'it', 'BR': 'pt', 'PT': 'pt',
                    'KE': 'sw', 'TZ': 'sw', 'UG': 'sw'
                };
                if (data.countryCode && countryToLang[data.countryCode]) {
                    currentLang = countryToLang[data.countryCode];
                    localStorage.setItem('papomotto_lang', currentLang);
                }

                if (data.cityName || data.countryName) {
                    detectedLocationName = data.cityName ? `${data.cityName}, ${data.countryName}` : data.countryName;
                }
            }
        } catch (e) {
            console.warn("Geolocation lookup failed, using browser defaults:", e);
        }
    } else {
        detectedLocationName = "Browser Settings (Default)";
    }

    applyLocalization();
}

function applyLocalization() {
    document.documentElement.lang = currentLang;

    // Translate standard elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = getTranslation(key);
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = getTranslation(key);
    });

    // Toggle active classes on setting pills
    document.querySelectorAll('#lang-options .setting-pill').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/'([^']+)'/);
            if (match) btn.classList.toggle('active', match[1] === currentLang);
        }
    });

    document.querySelectorAll('#currency-options .setting-pill').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr) {
            const match = onclickAttr.match(/'([^']+)'/);
            if (match) btn.classList.toggle('active', match[1] === currentCurrency);
        }
    });

    const theme = document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    document.getElementById('theme-light-btn')?.classList.toggle('active', theme === 'light');
    document.getElementById('theme-dark-btn')?.classList.toggle('active', theme === 'dark');

    const infoText = document.getElementById('detection-text');
    if (infoText) {
        if (detectedLocationName) {
            infoText.innerHTML = `${getTranslation('auto_detected')}: <b>${detectedLocationName}</b>`;
        } else {
            infoText.innerText = getTranslation('auto_detected');
        }
    }

    renderMenu();
    updateCartUI();
    if (!document.getElementById('cart-screen').classList.contains('hidden')) {
        renderCartItems();
    }
    if (activeModalItem) {
        updateModalPrice();
        renderIngredients();
    }
}


// Menu Rendering
function renderMenu() {
    renderOffers();

    const container = document.getElementById('menu-items-container');
    if (!container) return;
    container.innerHTML = '';

    let filtered = meals;
    if (currentCategory !== 'All') {
        filtered = filtered.filter(m => m.category === currentCategory);
    }
    if (currentSearch) {
        filtered = filtered.filter(m => {
            const englishTitle = m.title.toLowerCase();
            const translatedTitle = getTranslation(m.title).toLowerCase();
            return englishTitle.includes(currentSearch.toLowerCase()) ||
                   translatedTitle.includes(currentSearch.toLowerCase());
        });
    }

    filtered.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'meal-card';
        card.onclick = () => openItemModal(meal.id);
        card.innerHTML = `
            <img src="${meal.image}" alt="${getTranslation(meal.title)}" class="meal-img" loading="lazy">
            <div class="meal-info">
                <div class="meal-header">
                    <h3 class="meal-title">${getTranslation(meal.title)}</h3>
                    <span class="meal-price">${formatPrice(meal.price)}</span>
                </div>
                <button class="add-btn">${getTranslation('customize_add')}</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterCategory(cat) {
    currentCategory = cat;
    saveState();
    document.querySelectorAll('.category-chip').forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-category') === cat);
    });
    renderMenu();
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.value = currentSearch;
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        saveState();
        renderMenu();
    });
}

// Modal Customization
function openItemModal(id) {
    activeModalItem = meals.find(m => m.id === id);
    if (!activeModalItem) {
        console.error('Meal not found:', id);
        return;
    }
    activeModalQty = 1;
    activeModalCustoms = (activeModalItem.ingredients || []).map(ing => ({...ing, qty: ing.removable ? 1 : 1, isAddon: ing.price > 0 && ing.removable ? 0 : 1}));

    activeModalCustoms.forEach(c => {
        if(c.price > 0) c.qty = 0;
    });

    const modalImg = document.getElementById('modal-image');
    if (modalImg) modalImg.src = activeModalItem.image;
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.innerText = getTranslation(activeModalItem.title);
    const modalDesc = document.getElementById('modal-desc');
    if (modalDesc) modalDesc.innerText = getTranslation(activeModalItem.desc);

    updateModalPrice();
    renderIngredients();

    const itemModal = document.getElementById('item-modal');
    if (itemModal) itemModal.classList.remove('hidden');
}

function closeItemModal() {
    document.getElementById('item-modal').classList.add('hidden');
    activeModalItem = null;
}

function updateModalPrice() {
    if (!activeModalItem || !activeModalCustoms) return;
    let base = activeModalItem.price;
    let extra = 0;
    activeModalCustoms.forEach(c => {
        extra += (c.price || 0) * (c.qty || 0);
    });
    let total = (base + extra) * activeModalQty;

    const btn = document.querySelector('.add-to-cart-btn');
    if (btn) {
        btn.innerHTML = `${getTranslation('add')}`;
    }
    const modalQty = document.getElementById('modal-qty');
    if (modalQty) modalQty.innerText = activeModalQty;
}

function changeModalQty(delta) {
    if (activeModalQty + delta > 0) {
        activeModalQty += delta;
        updateModalPrice();
    }
}

function renderIngredients() {
    const list = document.getElementById('ingredients-list');
    if (!list || !activeModalCustoms) return;
    list.innerHTML = '';

    activeModalCustoms.forEach((ing, index) => {
        if(!ing.removable && ing.price === 0) return;

        const item = document.createElement('div');
        item.className = 'ingredient-item';
        item.innerHTML = `
            <img src="${ing.img}" alt="${getTranslation(ing.name)}" class="ing-thumb">
            <div class="ing-info">
                <div class="ing-name">${getTranslation(ing.name)}</div>
                <div class="ing-desc">${getTranslation(ing.desc)}</div>
            </div>
            <div class="ing-controls">
                <span class="ing-price">${ing.price > 0 ? '+' + formatPrice(ing.price) : ''}</span>
                <button class="ing-btn" onclick="changeIngQty(${index}, -1)">-</button>
                <span class="ing-qty">${ing.qty || 0}</span>
                <button class="ing-btn" onclick="changeIngQty(${index}, 1)">+</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function changeIngQty(index, delta) {
    const ing = activeModalCustoms[index];
    if (ing.qty + delta >= 0 && ing.qty + delta <= 3) {
        ing.qty += delta;
        renderIngredients();
        updateModalPrice();
    }
}

// Cart Management
function addToCart() {
    if (!activeModalItem) {
        console.error('No meal selected');
        return;
    }
    let customsNotes = [];
    activeModalCustoms.forEach(c => {
        if (c.price === 0 && (c.qty || 0) === 0) customsNotes.push(`No ${c.name}`);
        if (c.price > 0 && (c.qty || 0) > 0) customsNotes.push(`${c.qty}x ${c.name}`);
    });

    let extra = 0;
    activeModalCustoms.forEach(c => extra += (c.price || 0) * (c.qty || 0));

    const cartItem = {
        id: Date.now(),
        mealId: activeModalItem.id,
        title: activeModalItem.title,
        price: activeModalItem.price + extra,
        qty: activeModalQty,
        image: activeModalItem.image,
        customs: customsNotes.join(', ')
    };

    cart.push(cartItem);
    saveState();
    updateCartUI();
    closeItemModal();
    const msg = getTranslation('toast_added').replace('{title}', getTranslation(activeModalItem.title));
    showToast(msg);
}

function updateCartUI() {
    const cartBtn = document.querySelector('.floating-cart');
    const topBadge = document.getElementById('top-cart-badge');
    if (cart.length > 0) {
        if(cartBtn) cartBtn.classList.add('visible');
        let totalItems = 0;
        let totalPriceUsd = 0;
        cart.forEach(item => {
            totalItems += item.qty;
            totalPriceUsd += item.price * item.qty;
        });
        const bottomBadge = document.getElementById('cart-badge');
        if(bottomBadge) bottomBadge.innerText = totalItems;
        const topFloat = document.getElementById('cart-total-float');
        if(topFloat) topFloat.innerText = formatPrice(totalPriceUsd);

        if(topBadge) {
            topBadge.innerText = totalItems;
            topBadge.style.display = 'block';
        }
    } else {
        if(cartBtn) cartBtn.classList.remove('visible');
        if(topBadge) topBadge.style.display = 'none';
    }
}

function openCart() {
    renderCartItems();
    switchScreen('cart-screen');
}

function closeCart() {
    switchScreen('menu-screen');
}

function renderCartItems() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;
    container.innerHTML = '';

    let subtotalUsd = 0;

    cart.forEach((item, index) => {
        subtotalUsd += (item.price || 0) * (item.qty || 0);

        let displayCustoms = '';
        if (item.customs) {
            const parts = item.customs.split(', ');
            const translatedParts = parts.map(part => {
                if (part.startsWith('No ')) {
                    const ingName = part.replace('No ', '');
                    return `${getTranslation('No') || 'No'} ${getTranslation(ingName)}`;
                } else if (part.includes('x ')) {
                    const subparts = part.split('x ');
                    const qty = subparts[0];
                    const ingName = subparts[1];
                    return `${qty}x ${getTranslation(ingName)}`;
                }
                return getTranslation(part);
            });
            displayCustoms = translatedParts.join(', ');
        }

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${getTranslation(item.title)}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.qty || 1}x ${getTranslation(item.title)}</div>
                <div class="cart-item-price">${formatPrice((item.price || 0) * (item.qty || 1))}</div>
                ${displayCustoms ? `<div class="cart-item-customs">${displayCustoms}</div>` : ''}
            </div>
            <div class="cart-item-actions">
                <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        container.appendChild(div);
    });

    const taxUsd = subtotalUsd * 0.10;
    const totalUsd = subtotalUsd + taxUsd;

    const subtotalEl = document.getElementById('cart-subtotal');
    if (subtotalEl) subtotalEl.innerText = formatPrice(subtotalUsd);
    const taxEl = document.getElementById('cart-tax');
    if (taxEl) taxEl.innerText = formatPrice(taxUsd);
    const totalEl = document.getElementById('cart-final-total');
    if (totalEl) totalEl.innerText = formatPrice(totalUsd);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveState();
    renderCartItems();
    updateCartUI();
    if(cart.length === 0) closeCart();
}

function submitOrder() {
    if(!cart || cart.length === 0) return;

    const notesEl = document.getElementById('order-notes');
    const notes = notesEl ? notesEl.value : '';
    let totalUsd = 0;
    cart.forEach(item => totalUsd += (item.price || 0) * (item.qty || 0));
    const taxUsd = totalUsd * 0.10;
    const finalTotalUsd = totalUsd + taxUsd;

    const order = {
        id: '#' + Math.floor(Math.random() * 10000),
        location: currentLocation || 'Unknown',
        items: cart,
        notes: notes,
        time: new Date().toISOString(),
        status: 'incoming',
        currency: currentCurrency || 'USD',
        totalFormatted: formatPrice(finalTotalUsd)
    };

    let orders = JSON.parse(localStorage.getItem('papomotto_orders') || '[]');
    orders.push(order);
    localStorage.setItem('papomotto_orders', JSON.stringify(orders));

    window.dispatchEvent(new Event('storage'));

    const descText = getTranslation('order_success_desc').replace('{location}', `<b>${currentLocation || 'your location'}</b>`);
    const modal = document.querySelector('#success-modal p');
    if (modal) modal.innerHTML = descText;

    const successModal = document.getElementById('success-modal');
    if (successModal) successModal.classList.remove('hidden');
}

function resetApp() {
    cart = [];
    currentLocation = '';
    currentCategory = 'All';
    currentSearch = '';
    localStorage.removeItem('papomotto_cart');
    localStorage.removeItem('papomotto_location');
    localStorage.removeItem('papomotto_category');
    localStorage.removeItem('papomotto_search');
    const notesEl = document.getElementById('order-notes');
    if (notesEl) notesEl.value = '';
    updateCartUI();
    const successModal = document.getElementById('success-modal');
    if (successModal) successModal.classList.add('hidden');
    switchScreen('qr-screen');
}

// Initialize localization
detectLocationAndLanguage();

// Restore app state after init
function restoreAppState() {
    // Restore location display
    if (currentLocation) {
        const locEl = document.getElementById('current-location');
        if (locEl) locEl.innerText = currentLocation;
        document.querySelectorAll('.current-location-display').forEach(el => el.innerText = currentLocation);
        document.getElementById('success-location').innerText = currentLocation;
    }

    // Restore category filter active state
    if (currentCategory) {
        document.querySelectorAll('.category-chip').forEach(c => {
            c.classList.toggle('active', c.getAttribute('data-category') === currentCategory);
        });
    }

    // Render menu with restored filters
    if (typeof renderMenu === 'function') {
        renderMenu();
    }

    // Update cart UI
    updateCartUI();
}

// Call after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', restoreAppState);
} else {
    restoreAppState();
}
