import axios from "axios";

export const getAllCategories = async () => {
    const res = await axios.get("/categories");
    console.log("res :",res)
    return await res.data.data;
};


export const postCategories = async (categoriesData) => {
    const result = await axios.post(`/categories`,  categoriesData )
    return result
}

export const putCategories = async (categoriesData) => {
    const result = await axios.put(`/categories`,  categoriesData )
    return result
}

export const  deleteCategories = async (categoriesID) => {
    const result = await axios.delete(`/categories`, categoriesID)
    return result
}