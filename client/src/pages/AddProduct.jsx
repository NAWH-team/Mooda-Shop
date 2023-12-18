import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storage } from "../firebase.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { MyContext } from "../myContext";
import { jwtDecode } from "jwt-decode";


const AddProduct = () => {
  const {existingbrand} = JSON.parse(window.localStorage.getItem('User'))
  console.log(existingbrand);

  const id = 1
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [collection, setCollection] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState();
  const [img, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  // const {id}=useContext()
  const uploadImage = (e) => {
    e.preventDefault()
    if (img === null) return;
  console.log('doksqkod');
    const imageRef = ref(storage, "/userImages/qsdqsdqsqd");

    uploadBytes(imageRef, img)
      .then((res) => getDownloadURL(res.ref))
      .then((result) => {
        setImgUrl(result); // Set the image URL in the state
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var product = {
      name,
      price,
      description,
      category,
      quantity,
      status,
      img: imgUrl,
      collection,
      status:1,
    };
    console.log(product,'heeeeeeeere');

    try {
      await axios.post(`http://localhost:8080/brand/add/${existingbrand.id}`, product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 p-2 w-full border rounded"
              rows="4"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="mt-1 p-2 w-full border rounded"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="collection"
              className="block text-sm font-medium text-gray-600"
            >
              Collection:
            </label>
            <input
              type="text"
              id="collection"
              name="collection"
              className="mt-1 p-2 w-full border rounded"
              onChange={(e) => setCollection(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="mt-1 p-2 w-full border rounded"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-600"
            >
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="mt-1 p-2 w-full border rounded"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <input
            className="relative right-20"
            type="file"
            onChange={(event) => {
              setImg(event.target.files[0]);
            }}
          />
          <button
            className="text-indigo text-[17px] font-medium font-['Poppins']"
            onClick={uploadImage}
          >
            Add Image{" "}
          </button>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="status" name="status" className="mr-2" />
            <label
              htmlFor="status"
              className="text-sm font-medium text-gray-600"
              onChange={(e) => setStatus(e.target.checked)}
            >
              Status
            </label>
          </div>

          <button
          onClick={handleSubmit}
            type="submit"
            className="bg-indigo-500 text-white p-2 rounded w-full sm:w-auto"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
  