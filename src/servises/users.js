import { rest } from './rest'

export const login = (data = {}) => rest.post('public/login', data);

export const logOut = () => rest.get('logout');

export const checkUser = () => rest.get('public/checkUser');

export const userInfo = () => rest.get('info');

export const createUser = ({firstname, lastname, email, password}) => rest.post('public/user', { firstname, lastname, email, password });
