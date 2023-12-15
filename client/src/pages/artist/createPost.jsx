import { useState } from "react";
import { useNavigate } from "react-router";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebasejsx";
import axios from "axios";
import { v4 } from 'uuid';


const CreatePost = ({ user }) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [image, setImage] = useState();
    const [imgUrl, setImgUrl] = useState();
    const [imageIdentifier, setImageIdentifier] = useState(v4());
    const [isSubmitting, setIsSubmitting] = useState(false);

    console.log(imgUrl, desc, title, user);

    const uploadImage = async () => {
        const imageRef = ref(storage, `/postImages/${imageIdentifier}`);

        try {
            await uploadBytes(imageRef, image);
            const downloadURL = await getDownloadURL(imageRef);
            console.log("Image uploaded successfully:", downloadURL);
            setImgUrl(downloadURL);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const makePost = async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            await uploadImage();

            if (!imgUrl || !desc || !title) return;

            const data = await axios.post('http://localhost:8080/post/create', {
                title,
                img: imgUrl,
                description: desc,
                aritstId: user,
            });
         window.location.reload()
            console.log(data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsSubmitting(false);
            
        }
    };

    return (
        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    id="large-input"
                    className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div className="mb-5">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="base-input"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input
                    onChange={(e) => setDesc(e.target.value)}
                    type="text"
                    id="large-input"
                    className="block w-full h-16 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <button
                onClick={makePost}
                type="button"
                disabled={isSubmitting}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Post
            </button>
        </form>
    );
};

export default CreatePost;
