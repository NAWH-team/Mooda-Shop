import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebasejsx";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

const CreatePost = ({ user }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    const [imgUrl, setImgUrl] = useState("");
    const [imageIdentifier, setImageIdentifier] = useState(uuidv4());
    const [isSubmitting, setIsSubmitting] = useState(false);
     console.log(title);
    useEffect(() => {
        if (image) {
            uploadImage();
        }
    }, [image]);

    const uploadImage = async () => {
        const imageRef = ref(storage, `/postImages/${imageIdentifier}`);
        try {
            await uploadBytes(imageRef, image);
            const downloadURL = await getDownloadURL(imageRef);
            setImgUrl(downloadURL);
            console.log("Image uploaded successfully:", downloadURL);
        } catch (error) {
            console.error("Error uploading image:", error);
            // You might want to set an error state here if needed
        }
    };
    

    const makePost = async (event) => {
        event.preventDefault();
        if (!imgUrl || isSubmitting) return;

        setIsSubmitting(true);

        try {
            const data = await axios.post('http://localhost:8080/post/create', {
                title,
                img: imgUrl,
                description: desc,
                aritstId: user,
            });

            console.log(data);
            window.location.reload()
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section class= "relative bottom-[70px]  top-0  lg:relative lg:top-[-70px]  lg:left-[440px] h-[600px] bg-red-900  w-[370px]  lg:w-[400px]">
        <div class="py-8 px-4 mx-auto    lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a Post</h2>
            <form action="#">
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div class="sm:col-span-2">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Image</label>
                        <input onChange={(e)=>setImage(e.target.files[0])}  type="file" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                    </div>
                    <div class="w-full">
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input onChange={(e)=>setTitle(e.target.value)} type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                    </div>
                    
                    <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea onChange={(e)=>setDesc(e.target.value)} id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                    </div>
                </div>
                <button onClick={makePost} type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Add product
                </button>
            </form>
        </div>
      </section>
    );
};

export default CreatePost;
