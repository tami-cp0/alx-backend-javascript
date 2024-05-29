import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((responses) => responses.map((response) => ({
      status: response.status,
      value: response.message,
    })))
    .catch((error) => [{
      status: 'failed',
      value: error.message,
    }]);
}
