import fetch from '@/utils/fetch';

export default function getList() {
  return fetch({
    url: '/item/index'
  });
}
