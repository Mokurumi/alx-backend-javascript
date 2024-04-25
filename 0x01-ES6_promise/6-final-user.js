import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const resp = [];
  try {
    const user = await signUpUser(firstName, lastName);
    resp.push({ status: 'fulfilled', value: user });
    await uploadPhoto(fileName);
  }
  catch (err) {
    resp.push({ status: 'rejected', value: `Error ${fileName} cannot be processed` });
  }
  return resp;
}
