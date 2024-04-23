import uploadPhoto from './5-photo-reject';
import createUser from './4-user-promise';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
