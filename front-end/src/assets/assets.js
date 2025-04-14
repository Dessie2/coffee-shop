import basket_icon from './basket_icon.png'
import logo from './log.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_12121 from './menu_12121.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import expreso_1 from './expreso_1.png'
import capp_2 from './capp_2.png'
import lat_3 from './lat_3.png'
import cold_4 from './cold_4.png'
import food_5 from './food_5.png'
import food_6 from './food_6.png'
import food_7 from './food_7.png'
import food_8 from './food_8.png'
import food_9 from './food_9.png'
import food_10 from './food_10.png'
import food_11 from './food_11.png'
import food_12 from './food_12.png'
import food_13 from './food_13.png'
import food_14 from './food_14.png'
import food_15 from './food_15.png'
import food_16 from './food_16.png'
import food_17 from './food_17.png'
import food_18 from './food_18.png'
import food_19 from './food_19.png'
import food_20 from './food_20.png'
import food_1 from './food_1.png'
import food_2 from './food_2.png'
import food_3 from './food_3.png'
import food_4 from './food_4.png'
import food_25 from './food_25.png'
import food_26 from './food_26.png'
import food_27 from './food_27.png'
import food_28 from './food_28.png'
import food_29 from './food_29.png'
import food_30 from './food_30.png'
import food_31 from './food_31.png'
import food_32 from './food_32.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
}

export const menu_list = [
    {
        menu_name: "Coffee",
        menu_image: menu_12121
    },
    {
        menu_name: "Desserts",
        menu_image: menu_3
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]

export const food_list = [
      // Coffee Items
    {
        _id: "1",
        name: "Espresso",
        image: expreso_1,
        price: 3.50,
        description: "Intense and aromatic, our premium espresso made with selected beans",
        category: "Coffee"
      },
      {
        _id: "2",
        name: "Cappuccino",
        image: capp_2,
        price: 4.50,
        description: "Perfect combination of espresso, steamed milk and creamy foam",
        category: "Coffee"
      },
      {
        _id: "3",
        name: "Latte Art",
        image: lat_3,
        price: 5.00,
        description: "Smooth espresso with steamed milk and beautiful latte art",
        category: "Coffee"
      },
      {
        _id: "4",
        name: "Cold Brew",
        image: cold_4,
        price: 4.80,
        description: "Cold-steeped for 12 hours for a smooth, less acidic flavor",
        category: "Coffee"
      },
    
      // Desserts
      {
        _id: "10",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 5.50,
        description: "Creamy ice cream with fresh fruit toppings",
        category: "Desserts"
      },
      {
        _id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 6.00,
        description: "Artisanal ice cream served in cute mason jars",
        category: "Desserts"
      },
      {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: food_12,
        price: 4.50,
        description: "Classic vanilla bean ice cream with rich flavor",
        category: "Desserts"
      },
      {
        _id: "9",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 5.50,
        description: "Swirled ice cream with fruit or chocolate ripples",
        category: "Desserts"
      },
    
      // Rolls
      {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 8.50,
        description: "Italian-inspired lasagna rolled with cheese and herbs",
        category: "Rolls"
      },
      {
        _id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 7.50,
        description: "Spicy peri peri chicken in warm flatbread",
        category: "Rolls"
      },
      {
        _id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 8.00,
        description: "Tender chicken with vegetables in soft wrap",
        category: "Rolls"
      },
      {
        _id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 6.50,
        description: "Fresh vegetables and hummus in whole wheat wrap",
        category: "Rolls"
      },
    
      // Sandwiches
      {
        _id: "13",
        name: "Chicken Sandwich",
        image: food_13,
        price: 9.00,
        description: "Grilled chicken with lettuce and special sauce",
        category: "Sandwich"
      },
      {
        _id: "14",
        name: "Vegan Sandwich",
        image: food_14,
        price: 8.50,
        description: "Plant-based patty with vegan mayo and veggies",
        category: "Sandwich"
      },
      {
        _id: "15",
        name: "Grilled Sandwich",
        image: food_15,
        price: 7.50,
        description: "Toasted sandwich with melted cheese and vegetables",
        category: "Sandwich"
      },
      {
        _id: "16",
        name: "Bread Sandwich",
        image: food_16,
        price: 6.00,
        description: "Classic sandwich with your choice of fillings",
        category: "Sandwich"
      },
      // Cakes
      {
        _id: "17",
        name: "Cup Cake",
        image: food_17,
        price: 4.00,
        description: "Moist cupcakes with buttercream frosting",
        category: "Cake"
      },
      {
        _id: "18",
        name: "Vegan Cake",
        image: food_18,
        price: 5.00,
        description: "Delicious plant-based cake with dairy-free icing",
        category: "Cake"
      },
      {
        _id: "19",
        name: "Butterscotch Cake",
        image: food_19,
        price: 6.00,
        description: "Rich butterscotch flavor with caramel drizzle",
        category: "Cake"
      },
      {
        _id: "20",
        name: "Sliced Cake",
        image: food_20,
        price: 5.50,
        description: "Assorted cake slices perfect for individual servings",
        category: "Cake"
      },
      //salad
      {
        _id: "1",
        name: "Greek salad",
        image: food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
      // Pastas
      {
        _id: "25",
        name: "Cheese Pasta",
        image: food_25,
        price: 10.50,
        description: "Creamy cheese sauce with al dente pasta",
        category: "Pasta"
      },
      {
        _id: "26",
        name: "Tomato Pasta",
        image: food_26,
        price: 9.50,
        description: "Classic marinara sauce with fresh basil",
        category: "Pasta"
      },
      {
        _id: "27",
        name: "Creamy Pasta",
        image: food_27,
        price: 11.00,
        description: "Rich cream sauce with mushrooms and herbs",
        category: "Pasta"
      },
      {
        _id: "28",
        name: "Chicken Pasta",
        image: food_28,
        price: 12.00,
        description: "Grilled chicken strips with penne in white wine sauce",
        category: "Pasta"
      },
      // Noodles
      {
        _id: "29",
        name: "Butter Noodles",
        image: food_29,
        price: 9.00,
        description: "Simple buttery noodles with parmesan cheese",
        category: "Noodles"
      },
      {
        _id: "30",
        name: "Veg Noodles",
        image: food_30,
        price: 8.50,
        description: "Stir-fried vegetables with egg noodles",
        category: "Noodles"
      },
      {
        _id: "31",
        name: "Somen Noodles",
        image: food_31,
        price: 10.00,
        description: "Japanese cold noodles with dipping sauce",
        category: "Noodles"
      },
      {
        _id: "32",
        name: "Cooked Noodles",
        image: food_32,
        price: 8.00,
        description: "Traditional noodles with your choice of broth",
        category: "Noodles"
      }
    ]