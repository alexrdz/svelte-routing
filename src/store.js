import {Store} from 'svelte/store';

class AppStore extends Store {}

export default new AppStore({
  name: 'Justo',
});