// var _= require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'Pablo',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'zulema',
    role: 'seller'
  },
  {
    username: 'santiago',
    role: 'customer'
  }
]

const rta =_.groupBy(data, (item) => item.role )
console.log(rta);
