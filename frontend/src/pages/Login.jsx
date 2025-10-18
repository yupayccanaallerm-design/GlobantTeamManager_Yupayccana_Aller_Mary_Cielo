import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  correo: Yup.string().email('Email inválido').required('Requerido'),
  password: Yup.string().min(6,'6 o más').required('Requerido')
});

export default function Login(){
  const navigate = useNavigate();
  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <Formik initialValues={{correo:'', password:''}} validationSchema={LoginSchema}
        onSubmit={async (values, {setSubmitting, setErrors}) => {
          try {
            const res = await API.post('/login', values);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/');
          } catch (err) {
            setErrors({ general: err.response?.data?.message || 'Error' });
          } finally { setSubmitting(false); }
        }}>
        {({isSubmitting, errors}) => (
          <Form>
            <div><label>Email</label><Field name="correo" /><ErrorMessage name="correo" component="div" /></div>
            <div><label>Password</label><Field name="password" type="password" /><ErrorMessage name="password" component="div" /></div>
            {errors.general && <div>{errors.general}</div>}
            <button type="submit" disabled={isSubmitting}>Entrar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
