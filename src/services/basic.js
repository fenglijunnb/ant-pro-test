import request from '@/utils/request';

export async function queryStoreData(params) {
  //添加或编辑
  return request(`${rootPath}/user/store`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function queryDelData(params) {
  //删除用户
  return request(`${rootPath}/user/destroy`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function queryListData(params) {
  //获得用户列表
  return request(`/api/ClientGetChannels&UserId=109&State=3`, {
    method: 'POST',
    data: {
      ...params,
    }
  });
}

export async function queryProvince() {
  //获得省份列表
  return request(`${rootPath}/province`);
}

export async function queryCity(params) {
  //获得对应城市
  return request(`${rootPath}/city`, {
    method: 'POST',
    data: {
      ...params,
    }
  });
}
