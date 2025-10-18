import { useEffect, useState } from 'react';
import API from '../api/api';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ nombre:'', descripcion:'', estado:'planning' });

  const load = async () => {
    const res = await API.get('/projects');
    setProjects(res.data);
  };

  useEffect(()=>{ load(); }, []);

  const create = async (e) => {
    e.preventDefault();
    await API.post('/projects', form);
    setForm({ nombre:'', descripcion:'', estado:'planning' });
    load();
  };

  const remove = async (id) => {
    await API.delete(`/projects/${id}`);
    load();
  };

  return (
    <div style={{padding:20}}>
      <h2>Proyectos</h2>
      <form onSubmit={create}>
        <input placeholder="Nombre" value={form.nombre} onChange={e=>setForm({...form,nombre:e.target.value})} required />
        <input placeholder="Descripción" value={form.descripcion} onChange={e=>setForm({...form,descripcion:e.target.value})} />
        <select value={form.estado} onChange={e=>setForm({...form,estado:e.target.value})}>
          <option value="planning">planning</option>
          <option value="active">active</option>
          <option value="completed">completed</option>
          <option value="on_hold">on_hold</option>
        </select>
        <button type="submit">Crear</button>
      </form>

      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <strong>{p.nombre}</strong> — {p.estado}
            <button onClick={()=>remove(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
