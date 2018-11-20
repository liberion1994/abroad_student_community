import Request from '../../utils/request';

export const feeds = data => Request({
  url: '/posts',
  method: 'GET',
  data,
});

export const likes = ({postId, ...data}) => Request({
  url: `/posts/${postId}/likes`,
  method: 'POST',
  data,
});
