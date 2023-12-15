import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebasejsx";
import axios from "axios";
const ArtistEdit = ({ artist,id }) => {
    const [name, setName] = useState(artist.name || "");
    const [lastName, setLastName] = useState(artist.lastName || "");
    const [img, setImg] = useState(artist.img);
    const [downloadUrl, setDownloadUrl] = useState(artist.img || ""); // Initial value set to the existing image URL if available
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImg(file);
    };

    const uploadImage = async () => {
        if (!img) return;

        const imageRef = ref(storage, `/artistImages/${artist.id}_${img.name}`);

        try {
            await uploadBytes(imageRef, img);
            const url = await getDownloadURL(imageRef);
            setDownloadUrl(url);
            console.log("Image uploaded successfully:", url);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleSubmit = async () => {
        await uploadImage();
       
         axios.put('http://localhost:8080/artist/update',{
            name,
            img: downloadUrl,
            lastName,
            id
         }).then((res)=>{
            console.log(res);
         })
       
    };

    return (
        <div className="relative bottom-[800px] left-16 bg-opacity-40 bg-red-400 w-80">
            <form className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="image-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change Profile Picture</label>
                    <input
                        type="file"
                        id="image-input"
                        onChange={handleImageChange}
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="last-name-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName</label>
                    <input
                        defaultValue={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        id="last-name-input"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    Submit changes
                </button>
            </form>
        </div>
    );
};

export default ArtistEdit;
