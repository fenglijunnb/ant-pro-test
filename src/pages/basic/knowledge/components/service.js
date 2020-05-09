import request from 'umi-request';

export async function fakeSubmitForm(params) {
  console.log(params)
  return request('/api/forms', {
    method: 'POST',
    data: params,
  });
}
