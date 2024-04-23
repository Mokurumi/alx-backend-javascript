import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((values) => {
      return [
        { status: 'fulfilled', value: values[0] },
        { status: 'fulfilled', value: values[1] },
      ];
    })
    .catch((error) => {
      return [
        { status: 'rejected', value: error },
        { status: 'rejected', value: error },
      ];
    });
}
