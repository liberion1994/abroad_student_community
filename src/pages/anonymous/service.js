import Request from '../../utils/request';

export const feeds = data => Request({
  url: '/posts',
  method: 'GET',
  data,
});

export const product = data => Request({
  url: '/product/filter',
  method: 'GET',
  data,
});
