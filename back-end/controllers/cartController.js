import userModel from "../models/userModel.js";
import mongoose from "mongoose";

//add items to user cart
const addToCart = async (req, res) => {
   try{
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] = 1
    }
    else{
        cartData[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: cartData });
    res.json({ success: true, message: "Item Added to Cart" });
   }catch(error){
      console.log(error);
        res.json({ success: false, message: "Error in Adding Item to Cart" });
   }
}

//remove items from user cart
const removeFromCart = async (req, res) => {
    try{
       let userData = await userModel.findById(req.body.userId)
       let cartData = await userData.cartData;
       if (cartData[req.body.itemId]>0){
          cartData[req.body.itemId] -= 1;
       }
       await userModel.findByIdAndUpdate(req.body.userId,{cartData});
       res.json({success:true, message:"Removed from cart"})
    }catch(error){
         console.log(error);
         res.json({success:false, message:"Error"})
    }

}

//fetch user cart data
const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    // Validación opcional de ObjectId
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, message: "ID de usuario inválido" });
    }

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "Usuario no encontrado" });
    }

    const cartData = userData.cartData || {};
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error en el servidor" });
  }
};

export { addToCart, removeFromCart, getCart };