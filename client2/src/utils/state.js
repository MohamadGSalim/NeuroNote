import { useNavigate } from 'react-router-dom';

const Store = {
  user: null,
  token: '',
};

export function State() {
  const navigate = useNavigate();

  const set = (key, value) => {
    Store[key] = value;
    localStorage.setItem('data', JSON.stringify(Store));
  };

  const get = (key) => {
    if (key in Store) return Store[key];
    else return null;
  };

  const getData = () => {
    return JSON.parse(localStorage.getItem('data') || '{}');
  };

  const reload = () => {
    navigate('/login', { replace: true });
  };

  const clear = () => {
    localStorage.removeItem('data');
  };

  return { set, get, getData, reload, clear };
}
