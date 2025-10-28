import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';
import { createSolicitud } from '../../services/api'; 

import formImageUrl from '/assets/Form/FormApilador.webp'; 

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await createSolicitud(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.formSection}>
      <h2 className={styles.title}>¿ESTÁS INTERESADO EN ALGUNO DE NUESTROS EQUIPOS?</h2>
      <div className={styles.container}>
        {/* Columna de la Imagen */}
        <div className={styles.imageWrapper}>
          <img src={formImageUrl} alt="Montacargas de la serie Reach CQDH18C" />
        </div>

        {/* Columna del Formulario */}
        <div className={styles.formWrapper}>
          <p className={styles.requiredNotice}>* indica que es obligatorio</p>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            
            <div className={styles.formGroup}>
              <label htmlFor="nombre_cliente">Nombre*</label>
              <input 
                id="nombre_cliente"
                type="text"
                {...register('nombre_cliente', { required: 'El nombre es obligatorio' })}
              />
              {errors.nombre_cliente && <p className={styles.errorMessage}>{errors.nombre_cliente.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email_cliente">Correo electrónico*</label>
              <input 
                id="email_cliente"
                type="email"
                {...register('email_cliente', { 
                  required: 'El correo electrónico es obligatorio',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "El formato del correo no es válido"
                  }
                })}
              />
              {errors.email_cliente && <p className={styles.errorMessage}>{errors.email_cliente.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="telefono_cliente">Teléfono*</label>
              <input 
                id="telefono_cliente"
                type="tel"
                {...register('telefono_cliente', { required: 'El teléfono es obligatorio' })}
              />
              {errors.telefono_cliente && <p className={styles.errorMessage}>{errors.telefono_cliente.message}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="producto_cotizado">¿En qué equipo estoy interesado?*</label>
              <input 
                id="producto_cotizado"
                type="text"
                {...register('producto_cotizado', { required: 'Este campo es obligatorio' })}
              />
              {errors.producto_cotizado && <p className={styles.errorMessage}>{errors.producto_cotizado.message}</p>}
            </div>
            
             <div className={styles.formGroup}>
              <label htmlFor="nombre_empresa">Nombre de la empresa*</label>
              <input 
                id="nombre_empresa"
                type="text"
                {...register('nombre_empresa')}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="direccion_empresa">Dirección (Ciudad y Estado)*</label>
              <input 
                id="direccion_empresa"
                type="text"
                {...register('direccion_empresa')}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensaje">Tu mensaje*</label>
              <textarea 
                id="mensaje"
                rows="5"
                {...register('mensaje', { required: 'El mensaje es obligatorio' })}
              ></textarea>
              {errors.mensaje && <p className={styles.errorMessage}>{errors.mensaje.message}</p>}
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {submitStatus === 'success' && <p className={styles.successMessage}>¡Gracias! Tu solicitud ha sido enviada con éxito.</p>}
            {submitStatus === 'error' && <p className={styles.errorMessage}>Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.</p>}

          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;