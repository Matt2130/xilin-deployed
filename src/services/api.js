const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getProductos = async () => {
  try {
    // 3. Hacemos la petición usando la URL base.
    const response = await fetch(`${API_BASE_URL}/productos`);
    
    // 4. Manejamos errores en caso de que la API falle.
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    
    // 5. Devolvemos los datos en formato JSON.
    return await response.json();
  } catch (error) {
    console.error(error);
    // Podríamos devolver un array vacío o lanzar el error para que el componente lo maneje.
    return []; 
  }
};

export const getProductoById = async (id) => {
  // Lógica similar para obtener un producto por su ID...
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