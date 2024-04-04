import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const SaveDonationWithImage = async (
  donatorId,
  allergies,
  amount,
  createdOn,
  description,
  dishName,
  expriedDate,
  image,
  kosher,
  mealType,
  updatedOn,
  selectedImage
) => {
  try {
    console.log("hello from axios");

    // Adjust the Axios endpoint as needed
    const HOST = 'https://stavs-way-server.onrender.com'
    const axiosEndpoint = `${HOST}/api/donation`;
    // Make sure 'donationData' is defined. I'm assuming it's supposed to be the data you're sending in the request.
    if (!image){
      image = '';
    }
    const donationData = {
      donatorId,
      allergies,
      amount,
      createdOn,
      description,
      dishName,
      expriedDate,
      image,
      kosher,
      mealType,
      updatedOn,
    };

    // Send the initial POST request to create the donation
    const axiosResponse = await axios.post(axiosEndpoint, donationData);
    console.log(axiosResponse)
    const donationId = axiosResponse.data.id;
    console.log(`the donation id is ${donationId}`);

    // // Initialize Firebase with your config
    // const firebaseConfig = {
    //   apiKey: "AIzaSyAyNMc0fOTo02hJedhTE2XOEngLAcHSQEA",
    //   authDomain: "stavway-66280.web.app",
    //   projectId: "stavway-66280",
    //   storageBucket: "stavway-66280.appspot.com",
    //   messagingSenderId: "184437133040",
    //   appId: "1:184437133040:android:6251463118988f69bf3c35",
    // };

    // // Initialize the Firebase app
    // initializeApp(firebaseConfig);

    // // Upload the image to Firebase Storage
    // const storage = getStorage();
    // const imageFileName = `donation_images/${Date.now()}_${donationId}_${donatorId}_${dishName}.jpg`;
    // const imageRef = ref(storage, imageFileName);

    // // Handle the file directly
    // const blob =
    //   selectedImage instanceof File
    //     ? selectedImage
    //     : await fetch(selectedImage).then((res) => res.blob());

    // await uploadBytes(imageRef, blob);
    // const imageUrl = await getDownloadURL(imageRef);

    // // Save the Donation data with the image URL
    // const donationWithImageUrl = {
    //   ...donationData,
    //   image: imageUrl,
    // };

    // // Use PATCH request to update the donation with the image URL
    // const axiosResponsePatch = await axios.patch(
    //   `${axiosEndpoint}/${donationId}`,
    //   donationWithImageUrl
    // );
  } catch (error) {
    console.error("Error saving donation with image:", error);

    // Log the entire error object, including the server response
    if (error.serverResponse) {
      console.error("Server Response:", error.serverResponse);
    }

    throw error;
  }
};

export default SaveDonationWithImage;
