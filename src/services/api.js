const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProductos = async (params = {}) => {
  try {
    const queryString = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}/productos${queryString ? `?${queryString}` : ''}`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error al obtener los productos');
    return await response.json();
  } catch (error) {
    console.error("Error fetching productos:", error);
    return [];
  }
};

export const getProductoById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/productos/${id}`);
    if (!response.ok) {
        if (response.status === 404) throw new Error('Producto no encontrado');
        throw new Error('Error al obtener el producto');
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error; 
  }
};

export const createSolicitud = async (solicitudData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/solicitudes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(solicitudData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al enviar la solicitud');
    }

    return await response.json();
  } catch (error) {
    console.error("Error en createSolicitud:", error);
    throw error;
  }
};

export const getCategorias = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/categorias`);
    if (!response.ok) throw new Error('Error al obtener las categorías');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFeaturedProductos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/productos/featured`);
    if (!response.ok) throw new Error('Error al obtener los productos destacados');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getBlogPosts = async (page = 1) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs?page=${page}`);
    if (!response.ok) throw new Error('Error al obtener los posts del blog');
    return await response.json();
  } catch (error) {
    console.error(error);
    return { posts: [], totalPages: 1, currentPage: 1 };
  }
};

export const getBlogPostById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) throw new Error('Post no encontrado');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null; 
  }
};