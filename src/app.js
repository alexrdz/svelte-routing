import App from "./app.html";
import store from './store';

const app = new App({
    target : document.body,
    store,
    data   : {
        page : false,
    },
});

export default app;
