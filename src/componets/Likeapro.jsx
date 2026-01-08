import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'  


const Likeapro = () => {
  
const validationSchema = Yup.object({
  email: Yup.string().email('Email invàlid').required('El email és obligatori'),
  password: Yup.string().min(6, 'Massa curt!').max(20, 'Massa llarg!').required('La contrasenya és obligatòria'),
  language: Yup.array().required('Selecciona un idioma'),
})

    const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      language: ''
    },
    validationSchema,
    onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <div>
        <h2>Formulari Formik i Yup</h2>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                name="email"
                value={formik.values.email}
                placeholder="Enter email"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                name="password"
                value={formik.values.password}
                placeholder="Enter password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <select
                name="language"
                value={formik.values.language}
                onChange={formik.handleChange}
                multiple={true}
                onBlur={formik.handleBlur}
            >
                <option value="">Selecciona idioma</option>
                <option value="ca">Català</option>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="en">Français</option>
            </select>
            {formik.touched.language && formik.errors.language ? (
                <div>{formik.errors.language}</div>
            ) : null}
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Likeapro