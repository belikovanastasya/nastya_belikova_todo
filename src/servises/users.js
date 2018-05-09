import { rest } from './rest';

export const login = (data = {}) => rest.post('public/login', data);

export const logOut = () => rest.get('logout');

export const checkUser = () => rest.get('public/checkUser');

export const userInfo = () => rest.get('info');

export const createUser = ({ firstName, lastName, email, password }) => rest.post('public/user', { firstName, lastName, email, password });

export const updateUser = ({ firstName, lastName, email, password }) => rest.put('user', { firstName, lastName, email, password });
