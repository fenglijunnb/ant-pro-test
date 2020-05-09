import { Line } from '@antv/g2plot';
import {Button, Card, DatePicker, Input, Form, Radio, Select, Tabs} from 'antd';
import {connect} from 'dva'
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const { TabPane } = Tabs;
const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
let linePlot;


@connect(({auth_user, loading}) => ({
    // auth_user,
    // loading: loading.effects['auth_user/handleListData'],
    // listData: auth_user.listData,
    // pagination: auth_user.pagination,
    // // msg: auth_user.msg,
    // // searchAdvanceStatus: auth_user.searchAdvanceStatus,
    // // searchStatus: auth_user.searchStatus,
    // // dealStatus: auth_user.dealStatus,
    // searchParams: auth_user.searchParams,
}))


export default class UpdateForm extends React.Component {

    data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1',  closable: false},
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2',  closable: false},
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    componentDidMount(){
        this.formData();
        this.drawRangeMapCharts(this.data);
    }
    formData = () => {
        this.formRef.current.setFieldsValue({
            title: this.props.location.query.channelId,
            subject: 'china',
            categories: 'usa',
            publicType: '1',
            categoriesw: 'second',
            test: '2',
            categoriesw4: 'third',
        });
        console.log(this.props.location.query.channelId)
    }
    //绘制血缘关系图
    drawRangeMapCharts(data){
        linePlot = new Line(document.getElementById('container'), {
            title: {
                visible: true,
                text: '带数据点的折线图',
            },
            description: {
                visible: true,
                text: '将折线图上的每一个数据点显示出来，作为辅助阅读。',
            },
            width: 700,
            height: 463,
            forceFit: false,
            padding: 'auto',
            data,
            xField: 'year',
            yField: 'value',
            point: {
                visible: true,
            },
            label: {
                visible: true,
                type: 'point',
            },
        });
        linePlot.render();
    }
    //重置表单
    handleReSetForm = () => {
       this.formRef.current.resetFields();
    };
    onFinish = values => {
       // console.log(values);
    }
    handleDifficulty = () => {
            const data2 = [
              { year: '2016', value: '重要' },
              { year: '2017', value: '一般' },
              { year: '2018', value: '容易' },
              { year: '2019', value: '容易' },
              { year: '2020', value: '一般' },
            ];
            linePlot.destroy();
            this.drawRangeMapCharts(data2)
    }
    handleChange = () => {
        const data3 = [
          { year: '2016', value: '一星' },
          { year: '2017', value: '二星' },
          { year: '2018', value: '一星' },
          { year: '2019', value: '三星' },
          { year: '2020', value: '三星' },
        ];
        linePlot.destroy();
        this.drawRangeMapCharts(data3)
    }


    onChange = activeKey => {
        this.formRef.current.setFieldsValue({
            title: this.props.location.query.channelId,
            subject: 'china',
            categories: 'usa',
            publicType: '1',
            categoriesw: 'second',
            test: '2',
            categoriesw4: 'third',
        });
        this.setState({ activeKey });
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey,  closable: false  });
        this.setState({ panes, activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    render(){
      const { submitting,resetting } = this.props;
      const {activeKey} = this.state;
      const formItemLayout = {
        labelCol: {
          xs: {
            span: 8,
          },
          sm: {
            span: 5,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 12,
          },
          md: {
            span: 10,
          },
        },
      };
      const submitFormLayout = {
        wrapperCol: {
          xs: {
            span: 0,
            offset: 0,
          },
          sm: {
            span: 0,
            offset: 5,
          },
        },
      };
      console.log(this.formRef)
      //2、创建dom
        return(
            <PageHeaderWrapper>
                <div className={styles.divAll}>
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                        className={styles.flex}
                    >
                        {this.state.panes.map(pane => (
                            <TabPane tab={pane.title} key={pane.key} closable={pane.closable} className={styles.margin}>

                                {pane.content}
                                <Form
                                    style={{
                                        marginTop: 8,
                                    }}
                                    ref={this.formRef}
                                    name="basic"
                                    onFinish={this.onFinish}
                                    // onFinishFailed={onFinishFailed}
                                >
                                    <FormItem
                                        {...formItemLayout}
                                        label='知识点名称'
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: "请输入知识点",
                                            },
                                        ]}
                                    >
                                        <Input placeholder='给知识点起个名字'/>
                                    </FormItem>
                                    <FormItem
                                        {...submitFormLayout}
                                        style={{
                                            marginTop: 32,
                                        }}
                                    >
                                        <Button onClick={this.handleReSetForm}>
                                            重置
                                        </Button>
                                        <Button type="primary" htmlType="submit" loading={submitting}  style={{
                                            marginLeft: 8,
                                        }}>
                                            提交
                                        </Button>
                                    </FormItem>
                                </Form>
                                {/*{ activeKey == this.state.activeKey ?     :<div> </div>}*/}
                            </TabPane>
                        ))}
                    </Tabs>
                    <div id='container' className={styles.lineChart} />
                </div>
            </PageHeaderWrapper>
        );
    }
}


// <FormItem
//     {...formItemLayout}
//     label='所属考种'
//     name="subject"
//     hasFeedback
//     rules={[
//         {
//             required: true,
//             message: "请选择所属考种",
//         },
//     ]}
// >
//     <Select placeholder="选一个考种吧">
//         <Option value="china">China</Option>
//         <Option value="usa">U.S.A</Option>
//     </Select>
// </FormItem>
// <FormItem
//     {...formItemLayout}
//     label='所属科目'
//     name="categories"
//     hasFeedback
//     rules={[
//         {
//             required: true,
//             message: "请选择所属科目",
//         },
//     ]}
// >
//     <Select placeholder="选一个科目吧">
//         <Option value="china">China</Option>
//         <Option value="usa">U.S.A</Option>
//     </Select>
// </FormItem>
// <FormItem
//     {...formItemLayout}
//     label='难易程度'
//     name="publicType"
// >
//     <Radio.Group onChange={this.handleDifficulty} >{/*onChange={this.handleDifficulty}*/}
//         <Radio value="1">
//             容易
//         </Radio>
//         <Radio value="2" checked>
//             中等
//         </Radio>
//         <Radio value="3">
//             较难
//         </Radio>
//     </Radio.Group>
// </FormItem>
// <FormItem
//     {...formItemLayout}
//     label='重要程度'
//     name="categoriesw"
//     hasFeedback
//     rules={[
//         {
//             required: true,
//             message: "请选择重要程度",
//         },
//     ]}
// >
//     <Select placeholder="选一个重要程度吧" onChange={this.handleChange}>
//         <Option value="first">一星</Option>
//         <Option value="second">二星</Option>
//         <Option value="third">三星</Option>
//     </Select>
// </FormItem>
// <FormItem
//     {...formItemLayout}
//     label='是否为考点'
//     name="test"
// >
//     <Radio.Group>
//         <Radio value="1">
//             是
//         </Radio>
//         <Radio value="2" checked>
//             否
//         </Radio>
//     </Radio.Group>
// </FormItem>
// <FormItem
//     {...formItemLayout}
//     label='年份'
//     name="categoriesw4"
//     hasFeedback
//     rules={[
//         {
//             required: true,
//             message: "请选择重要程度",
//         },
//     ]}
// >
//     <Select placeholder="选一个重要程度吧">
//         <Option value="first">一星</Option>
//         <Option value="second">二星</Option>
//         <Option value="third">三星</Option>
//     </Select>
// </FormItem>
// <FormItem
//     {...submitFormLayout}
//     style={{
//         marginTop: 32,
//     }}
// >
//     <Button onClick={this.handleReSetForm}>
//         重置
//     </Button>
//     <Button type="primary" htmlType="submit" loading={submitting}  style={{
//         marginLeft: 8,
//     }}>
//         提交
//     </Button>
// </FormItem>