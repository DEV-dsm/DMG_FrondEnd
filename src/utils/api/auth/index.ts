import instance from '../../axios';
import { LoginInputType } from '../../../models/Login';

export const userLogin = async (inputsData: LoginInputType) => {
  return await instance.post('/user/login', {
    identify: inputsData.identify,
    password: inputsData.password,
  });
};