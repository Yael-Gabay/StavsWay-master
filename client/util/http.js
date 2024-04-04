import axios from "axios";
const HOST = 'https://stavs-way-server.onrender.com'
  export const GetUser = async (email, password) => {
    console.log(`pass ${password} ans emd ${email}`);

    try {
      const response = await axios.post(`${HOST}/api/user/login/`,{
        email,password
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error; // Rethrow the error to handle it in the calling code
    }
  };


export const getDonationById = async (id) => {
  try {
    const response = await axios.get(`${HOST}/api/donation/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

export const GetMealOfDonatorAxios = async (doantorId) => {

  try {
    const response = await axios.get(`${HOST}/api/donation/user/${doantorId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};


export const GetAllOpenDonations = async (doantorId) => {

  try {
    const response = await axios.get(`${HOST}/api/donation/open`);
   
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const GetAllPlacedOrderAxios = async () => {

  try {
    const response = await axios.get(`${HOST}/api/order/placed`);
    console.log("hello from GetAllPlacedOrderAxios");
   console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const GetAllOrderOfVolunteer = async (volunteerId) => {

  try {
    console.log(`voulnteer id is ${volunteerId}`)
    const response = await axios.get(`${HOST}/api/order/volunteer/${volunteerId}`);
    console.log("hello from getOrderOfVoulnteer");
   console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const UpdateOrder = async (orderId, volunteerId, statusOrderCode) => {
  console.log(`update Order is ${orderId} ${volunteerId} ${statusOrderCode}`);
  
  try {
    const response = await axios.patch(`${HOST}/api/order/${orderId}/`, {
      "volunteerId":volunteerId,
      "orderStatusCode":statusOrderCode
    });
    console.log("Update Order Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Update Order Error:", error.response ? error.response.data : error.message);
    throw error; // Rethrow the error to handle it in the calling code
  }
};
export const CreateOrderAxiosByRecipent = async (donationId,recipientId,amount) => {

  try {
    const response = await axios.post(`${HOST}/api/order/`,{
      donationId,recipientId,amount
    });
    console.log("hello from GetAllPlacedOrderAxios");
   console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

export const FetchOrdersForRecipient = async (recipientId) => {
  console.log(`hello from all FetchOrdersForRecipient first `);
  console.log(recipientId);
  try {
    const response = await axios.get(`${HOST}/api/order/recipient/${recipientId}`);
    console.log("hello from fetchOrdersForRecipient");
   console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};




export const CreateUserAxios = async (user) => {

  try {
    const response = await axios.post(`${HOST}/api/user/`,{
      ...user
    });
    return GetUser(user.email,user.password);
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to handle it in the calling code
  }
};

