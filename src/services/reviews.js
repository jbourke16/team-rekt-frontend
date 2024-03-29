import api from "./apiConfig.js";

export const getReviews = async () => {
  try {
    const response = await api.get("/reviews");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReview = async (id) => {
  try {
    const response = await api.get(`/reviews/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createReview = async (review) => {
    try {
      const response = await api.post("/reviews", review);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const updateReview = async (id, review) => {
    try {
      const response = await api.put(`/reviews/${id}`, review);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteReview = async (id) => {
    try {
      const response = await api.delete(`/reviews/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getGameReviews = async (id) => {
    try {
      const response = await api.get(`/reviews/games/${id}`)
      return response.data
    } catch (error) {
      throw(error)
    }
  }

  export const getUserReviews = async (id) => {
    try {
      const response = await api.get(`/reviews/users/${id}`)
      return response.data
    } catch (error) {
      throw(error)
    }
  }