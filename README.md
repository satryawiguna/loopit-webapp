# loopit-webapp

## Project setup
```
npm install
```

## Adjust BaseURL on main.ts and vue.config.js
```
axios.defaults.baseURL = 'http://localhost:8000/api';
proxy: 'http://localhost:8000/api'

Recommend to use localhost:8000 if the backend application running by php artisan serve
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
