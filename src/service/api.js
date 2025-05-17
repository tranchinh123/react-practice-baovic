import axios from "axios";
import { API } from "../constants/api";

const get = async (endPoint) => {
  try {
    const response = await axios.get(`${API.BASE_URL}${endPoint}`);
    return response.data;
  } catch (error) {
    // Nếu có response từ server (ví dụ lỗi 4xx, 5xx)
    if (error.response) {
      console.error("📡 Server responded with an error:", {
        status: error.response.status,
        data: error.response.data,
      });

      throw new Error(
        error.response.data?.message || `Lỗi server: ${error.response.status}`
      );
    }

    // Nếu request gửi đi nhưng không có phản hồi (ví dụ lỗi mạng)
    if (error.request) {
      console.error("📡 No response received from server:");
      throw new Error("Không nhận được phản hồi từ máy chủ. Vui lòng thử lại.");
    }

    console.error("❌ Unknown error during GET request:", error.message);
    throw new Error("Đã xảy ra lỗi không xác định. Vui lòng thử lại.");
  }
};

const getById = async (endPoint, subPath, id) => {
  try {
    const response = await axios.get(
      `${API.BASE_URL}${endPoint}/${subPath}/${id}`
    );
    return response.data;
  } catch (error) {
    // Nếu có response từ server (ví dụ lỗi 4xx, 5xx)
    if (error.response) {
      console.error("📡 Server responded with an error:", {
        status: error.response.status,
        data: error.response.data,
      });

      throw new Error(
        error.response.data?.message || `Lỗi server: ${error.response.status}`
      );
    }

    // Nếu request gửi đi nhưng không có phản hồi (ví dụ lỗi mạng)
    if (error.request) {
      console.error("📡 No response received from server:");
      throw new Error("Không nhận được phản hồi từ máy chủ. Vui lòng thử lại.");
    }

    console.error("❌ Unknown error during GET request:", error.message);
    throw new Error("Đã xảy ra lỗi không xác định. Vui lòng thử lại.");
  }
};

const post = async (endPoint, data, config) => {
  try {
    const response = await axios.post(
      `${API.BASE_URL}${endPoint}`,
      data,
      config
    );
    return response.data; // Trả về dữ liệu phản hồi từ server
  } catch (error) {
    // Nếu có response từ server (ví dụ lỗi 4xx, 5xx)
    if (error.response) {
      console.error("📡 Server responded with an error:", {
        status: error.response.status,
        data: error.response.data,
      });

      throw new Error(
        error.response.data?.message || `Lỗi server: ${error.response.status}`
      );
    }

    // Nếu request gửi đi nhưng không có phản hồi (ví dụ lỗi mạng)
    if (error.request) {
      console.error("📡 No response received from server:");
      throw new Error("Không nhận được phản hồi từ máy chủ. Vui lòng thử lại.");
    }

    console.error("❌ Unknown error during POST request:", error.message);
    throw new Error("Đã xảy ra lỗi không xác định. Vui lòng thử lại.");
  }
};

export { get, getById, post };
