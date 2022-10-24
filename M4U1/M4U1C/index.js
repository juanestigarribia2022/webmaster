const moment = require('moment');
moment.locale('es');
console.log('Naci '+ moment('07/06/1982','DD/MM/YYYY').fromNow());
