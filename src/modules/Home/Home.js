import { apiService } from '../Main/api';

export const Home = () => {
  const getUsers = async () => {
    const { data: users } = await apiService.get('api/user');
    console.log(users);
  };
  return (<div><button onClick={getUsers}>get users</button>HOME PAGE!</div>);
}