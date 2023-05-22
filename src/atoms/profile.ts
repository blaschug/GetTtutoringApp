import {selector} from 'recoil';
import {getIdToken} from '../services/authService';

export type Profile = {
  title: string;
};
//TODO: example of preloading data
export const ProfileAtom = selector<Profile>({
  key: 'ProfileAtom',
  get: async () => {
    const idToken = await getIdToken();
    const res = await fetch('https://dummyjson.com/products/1', {
      headers: {Authentication: `Bearer ${idToken}`},
      method: 'GET',
    });
    const profile = await res.json();

    await delay(2000);

    return profile;
  },
  set: () => undefined,
});

function delay(time: any) {
  return new Promise((resolve: any) => setTimeout(resolve, time));
}
