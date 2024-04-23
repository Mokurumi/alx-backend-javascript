// eslint-disable-next-line no-unused-vars, no-shadow
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const a = uploadPhoto();
  const b = createUser();
  return Promise.all([a, b])
    .then((values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
