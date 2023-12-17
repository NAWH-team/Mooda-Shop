import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from "../../firebasejsx";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const ArtistEdit = ({ artist,id }) => {
    const [name, setName] = useState(artist.name || "");
    const [lastName, setLastName] = useState(artist.lastName || "");
    const [img, setImg] = useState(artist.img);
    const [bio,setBio]= useState(artist.bio || "")
    const [cover,setCover]= useState(artist.cover)
    const [coverUrl,setCoverUrl]= useState()
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
            
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const uploadCover = async () => {
        if (!cover) return;

        const imageRef = ref(storage, `/artistImages/${artist.id}_${cover.name}`);

        try {
            await uploadBytes(imageRef, cover);
            const url = await getDownloadURL(imageRef);
            setCoverUrl(url);
            
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
    
        try {
            const response = await axios.put('http://localhost:8080/artist/update', {
                name,
                img: downloadUrl,
                lastName,
                id,
                cover: coverUrl,
                bio
            });
    
            if (response && response.data) {
                const newToken = response.data;
    
              await  window.localStorage.setItem('User', JSON.stringify({ Token: newToken, id: id }));
                 window.location.reload()
                console.log("Artist updated successfully!");
            } else {
                console.error("Invalid response format from the server");
            }
        } catch (err) {
            console.error("Error updating artist:", err);
            console.error("Error response from the server:", err.response ? err.response.data : "No response data");
        }
    };
    
    

    return (
        <section class="bg-red-900   lg:w-[710px] lg:relative lg:left-60">
        <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update your Profile</h2>
            <form action="#">
                <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                  
                    <div class="w-full">
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input defaultValue={artist.name} onChange={
                            (e)=>setName(e.target.value)
                        } type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    </div>
                    <div class="w-full">
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">lastName</label>
                        <input defaultValue={artist.lastName} onChange={
                            (e)=>setLastName(e.target.value)
                        } type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  required=""/>
                    </div>
                 
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo</label>
                        <input onChange={
                            (e)=>setImg(e.target.files[0])
                        } 
                         type="file"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="Ex. 12" required=""/>
                          <button onClick={ async()=>{
                            await uploadImage()
                            
                          }} type="button" class=" m-2   text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                        Submit Profile Picture
                    </button>
                    </div> 
                    <div>
                        <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover</label>
                        <input onChange={
                            (e)=>setCover(e.target.files[0])
                        } 
                         type="file"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="Ex. 12" required=""/>
                          <button onClick={ async()=>{
                            await uploadCover()
                            
                          }} type="button" class=" m-2 lg:relative      text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                        Submit Cover Picture
                    </button>
                    </div> 
                    <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                       
                     <textarea 
                      onChange={(e)=>setBio(e.target.value)}
                      id="description" rows="8" class=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a product description here...">
                        </textarea>
                     
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button onClick={handleSubmit} type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Update Profile
                    </button>
                    <button onClick={handleSubmit}></button>
                   

                </div>
            </form>
        </div>
      </section>
        );
    };

export default ArtistEdit;