import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import {Button, Divider, Dropdown, Menu, message, Input, Table} from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import {connect,routerRedux} from 'dva'

@connect(({auth_user, loading}) => ({
    auth_user,
    loading: loading.effects['auth_user/handleListData'],
    listData: auth_user.listData,
    pagination: auth_user.pagination,
    // msg: auth_user.msg,
    // searchAdvanceStatus: auth_user.searchAdvanceStatus,
    // searchStatus: auth_user.searchStatus,
    // dealStatus: auth_user.dealStatus,
    searchParams: auth_user.searchParams,
}))

class TableList extends React.Component {

    componentDidMount() {
        //初始化拉取表格数据
        this.handleGetListData({pageSize: 10, current: 1});
    }
    //获取基本数据列表
    handleGetListData = (params) => {
        const {dispatch} = this.props;
        dispatch({
            type: 'auth_user/handleListData',
            payload: params,//page、current都表示当前页，但是laravel框架需要用page
        });
    };

    modifyItem = (record) => {
        const {dispatch} = this.props;
        dispatch(routerRedux.push({
            pathname: `/basic/knowledge/CreateForm`,
        }))
    };

    handleUpdate = (record) => {
        const {dispatch} = this.props;
        dispatch(routerRedux.push({
            pathname: `/basic/knowledge/UpdateForm`,
            query:record
        }))
    };

    render() {
        const columns = [
                {
                    title: '知识点ID：',
                    dataIndex: 'channelId',
                    rules: [
                        {
                            required: true,
                            message: '规则名称为必填项',
                        },
                    ],
                },
                {
                    title: '项目名称',
                    dataIndex: 'desc',
                    valueType: 'textarea',
                },
                {
                    title: '科目名称',
                    dataIndex: 'callNo',
                    sorter: true,
                    hideInForm: true,
                    renderText: val => `${val} 万`,
                },
                {
                    title: '知识点名称',
                    dataIndex: 'updatedAt',
                    sorter: true,
                    hideInForm: true,
                    renderText: val => `${val} 万`,
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    hideInForm: true,
                    valueEnum: {
                        0: {
                            text: '关闭',
                            status: 'Default',
                        },
                        1: {
                            text: '运行中',
                            status: 'Processing',
                        },
                        2: {
                            text: '已上线',
                            status: 'Success',
                        },
                        3: {
                            text: '异常',
                            status: 'Error',
                        },
                    },
                },
                {
                    title: '操作',
                    dataIndex: 'option',
                    valueType: 'option',
                    render: (_, record) => (
                        <>
                            <a
                                onClick={() => {
                                    this.handleUpdate (record);
                                }}
                            >
                                编辑属性
                            </a>
                        </>
                    ),
                },
            ];
        const {searchStatus, dealStatus, loading, pagination, listData} = this.props;
        function onShowSizeChange(current, pageSize) {
            console.log(current, pageSize);
        }

        const {sorter, setSorter, actionRef} = this.props;
        //分页配置
        const paginationParams = {
            onShowSizeChange:onShowSizeChange,
            pageSize: pagination.pageSize,
            total: pagination.total,
            current: pagination.current,
            showSizeChanger: true,
            showQuickJumper: true,
            position:['bottomCenter']
        };

        return (
            <PageHeaderWrapper>
                <ProTable
                    dataSource={listData}
                    // search={false}
                    headerTitle="知识点列表"
                    actionRef={actionRef}
                    rowKey="channelId"
                    onChange={(_, _filter, _sorter) => {
                        const sorterResult = _sorter;

                        if (sorterResult.field) {
                            setSorter(`${sorterResult.field}_${sorterResult.order}`);
                        }
                    }}
                    params={{
                        sorter,
                    }}
                    toolBarRender={(action, {selectedRows}) => [

                        selectedRows && selectedRows.length > 0 && (
                            <Dropdown
                                overlay={
                                    <Menu
                                        onClick={async e => {
                                            if (e.key === 'remove') {
                                                await handleRemove(selectedRows);
                                                action.reload();
                                            }
                                        }}
                                        selectedKeys={[]}
                                    >
                                        <Menu.Item key="remove">批量删除</Menu.Item>
                                        <Menu.Item key="approval">批量审批</Menu.Item>
                                    </Menu>
                                }
                            >
                                <Button>
                                    批量操作 <DownOutlined/>
                                </Button>
                            </Dropdown>
                        ),
                        <Button type="primary" onClick={() => this.modifyItem()}>
                            <PlusOutlined/>新建
                        </Button>
                    ]}
                    tableAlertRender={({selectedRowKeys, selectedRows}) => (
                        <div>
                            已选择{' '}
                            <a
                                style={{
                                    fontWeight: 600,
                                }}
                            >
                                {selectedRowKeys.length}
                            </a>{' '}
                            项&nbsp;&nbsp;
                            <span>
                  服务调用次数总计 {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} 万
                </span>
                        </div>
                    )}
                    // request={params => this.handleGetListData(params)}
                    // request={async (params = {}) => {
                    //     const data = await this.handleGetListData(
                    //         'https://api.github.com/repos/ant-design/ant-design-pro/issues',
                    //             {
                    //                 params: {
                    //                     ...params,
                    //                     page: params.current,
                    //                     per_page: params.pageSize,
                    //                 },
                    //             },
                    //     );
                    //     return {
                    //         data,
                    //         page: params.current,
                    //         success: true,
                    //         total: ((totalObj[0] || { number: 0 }).number - 56) as number,
                    //     };
                    // }}
                    columns={columns}
                    rowSelection={{}}
                    pagination={paginationParams}
                />
            </PageHeaderWrapper>
        );
    }
}

export default TableList;




