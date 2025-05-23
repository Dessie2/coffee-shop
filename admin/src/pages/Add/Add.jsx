import React, { useState} from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Coffee",
    price: "",
  });


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);  
    const response = await axios.post(`${url}/api/food/add`,formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        category: "Coffee",
        price: "",
      })
      setImage(false);
      toast.success(response.data.message) /* para que salga el mensaje de "add" */
    }
    else{
      toast.error(response.data.message) /* para que salga el mensaje de "error" */

    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        {/* Upload Image */}
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Preview"
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Product Name */}
        <div className='add-product-name flex-col'>
          <p>Product name</p>
          <input
            type="text"
            name='name'
            value={data.name}
            onChange={onChangeHandler}
            placeholder='Type here'
            required
          />
        </div>

        {/* Product Description */}
        <div className="add-product-description flex-col"> 
          <p>Product description</p>
          <textarea
            name="description"
            rows="6"
            placeholder='Write content here'
            value={data.description}
            onChange={onChangeHandler}
            required
          />
        </div>

        {/* Category and Price */}
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select
              name='category'
              value={data.category}
              onChange={onChangeHandler}
              required
            >
              <option value="Coffee">Coffee</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Salad">Salad</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              type="number"
              name='price'
              value={data.price}
              onChange={onChangeHandler}
              placeholder='$20'
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
