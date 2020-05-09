import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip } from 'antd';
import { connect, FormattedMessage } from 'umi';
import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const CreateForm = props => {
    const { submitting,resetting } = props;
    const [form] = Form.useForm();
    const [showPublicUsers, setShowPublicUsers] = React.useState(false);
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 7,
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
                span: 24,
                offset: 0,
            },
            sm: {
                span: 10,
                offset: 7,
            },
        },
    };

    const onFinish = values => {
        const { dispatch } = props;
        dispatch({
            type: 'formAndbasicForm/submitRegularForm',
            payload: values,
        });
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    // const onValuesChange = changedValues => {
        // const { publicType } = changedValues;
        // if (publicType) setShowPublicUsers(publicType === '2');
    // };
    //重置表单
    const handleReSetForm = ReSetForm => {
        form.resetFields();
    };
    return (
        <PageHeaderWrapper content='表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。'>
            <Card bordered={false}>
                <Form
                    hideRequiredMark
                    style={{
                        marginTop: 8,
                    }}
                    form={form}
                    name="basic"
                    initialValues={{
                        public: '1',
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // onValuesChange={onValuesChange}
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
                        {...formItemLayout}
                        label='所属考种'
                        name="subject"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "请选择所属考种",
                            },
                        ]}
                    >
                        <Select placeholder="选一个考种吧">
                            <Option value="china">China</Option>
                            <Option value="usa">U.S.A</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='所属科目'
                        name="categories"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "请选择所属科目",
                            },
                        ]}
                    >
                        <Select placeholder="选一个科目吧">
                            <Option value="china">China</Option>
                            <Option value="usa">U.S.A</Option>
                        </Select>
                    </FormItem>
                    {/*<FormItem*/}
                    {/*    {...formItemLayout}*/}
                    {/*    label='起止日期'*/}
                    {/*    name="date"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: '请选择起止日期',*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <RangePicker*/}
                    {/*        style={{*/}
                    {/*            width: '100%',*/}
                    {/*        }}*/}
                    {/*        placeholder={['开始日期', '结束日期']}*/}
                    {/*    />*/}
                    {/*</FormItem>*/}
                    {/*<FormItem*/}
                    {/*    {...formItemLayout}*/}
                    {/*    label='目标'*/}
                    {/*    name="goal"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: '请输入目标描述',*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <TextArea*/}
                    {/*        style={{*/}
                    {/*            minHeight: 32,*/}
                    {/*        }}*/}
                    {/*        placeholder='请输入你的阶段性工作目标'*/}
                    {/*        rows={4}*/}
                    {/*    />*/}
                    {/*</FormItem>*/}
                    {/*<FormItem*/}
                    {/*    {...formItemLayout}*/}
                    {/*    label='标准'*/}
                    {/*    name="standard"*/}
                    {/*    rules={[*/}
                    {/*        {*/}
                    {/*            required: true,*/}
                    {/*            message: '衡量标准',*/}
                    {/*        },*/}
                    {/*    ]}*/}
                    {/*>*/}
                    {/*    <TextArea*/}
                    {/*        style={{*/}
                    {/*            minHeight: 32,*/}
                    {/*        }}*/}
                    {/*        placeholder='请输入衡量标准'*/}
                    {/*        rows={4}*/}
                    {/*    />*/}
                    {/*</FormItem>*/}
                  {/*      <FormItem*/}
                  {/*          {...formItemLayout}*/}
                  {/*          label={*/}
                  {/*              <span>*/}
                  {/*      客户*/}
                  {/*  <em className={styles.optional}>*/}
                  {/*    （选填）*/}
                  {/*    <Tooltip title={<FormattedMessage id="formandbasic-form.label.tooltip" />}>*/}
                  {/*      <InfoCircleOutlined*/}
                  {/*          style={{*/}
                  {/*              marginRight: 4,*/}
                  {/*          }}*/}
                  {/*      />*/}
                  {/*    </Tooltip>*/}
                  {/*  </em>*/}
                  {/*</span>*/}
                  {/*          }*/}
                  {/*          name="client"*/}
                  {/*      >*/}
                  {/*          <Input*/}
                  {/*              placeholder='请描述你服务的客户，内部客户直接 @姓名／工号'*/}
                  {/*          />*/}
                  {/*      </FormItem>*/}
                  {/*  <FormItem*/}
              {/*          {...formItemLayout}*/}
              {/*          label={*/}
              {/*              <span>*/}
              {/*  邀评人*/}
              {/*  <em className={styles.optional}>*/}
              {/*   （选填）*/}
              {/*  </em>*/}
              {/*</span>*/}
              {/*          }*/}
              {/*          name="invites"*/}
              {/*      >*/}
              {/*          <Input*/}
              {/*              placeholder='请直接 @姓名／工号，最多可邀请 5 人'*/}
              {/*          />*/}
              {/*      </FormItem>*/}
              {/*      <FormItem   {...formItemLayout}*/}
              {/*          label={  <span>权重<em className={styles.optional}>（选填）</em></span> }*/}
              {/*          name="weight">*/}
              {/*          <InputNumber*/}
              {/*              min={0}*/}
              {/*              max={100}*/}
              {/*              formatter={value => `${value}%`}*/}
              {/*              parser={value => value.replace('%', '')}*/}
              {/*          />*/}
              {/*      </FormItem>*/}
                    <FormItem
                        {...formItemLayout}
                        label='难易程度'
                        name="publicType"
                    >
                        {/*<div>*/}
                            <Radio.Group>
                                <Radio value="1">
                                    容易
                                </Radio>
                                <Radio value="2" checked>
                                    中等
                                </Radio>
                                <Radio value="3">
                                    较难
                                </Radio>
                            </Radio.Group>
                            {/*<FormItem*/}
                            {/*    style={{*/}
                            {/*        marginBottom: 0,*/}
                            {/*    }}*/}
                            {/*    name="publicUsers"*/}
                            {/*>*/}
                            {/*    <Select*/}
                            {/*        mode="multiple"*/}
                            {/*        placeholder='公开给'*/}
                            {/*        style={{*/}
                            {/*            margin: '8px 0',*/}
                            {/*            display: showPublicUsers ? 'block' : 'none',*/}
                            {/*        }}*/}
                            {/*    >*/}
                            {/*        <Option value="1">*/}
                            {/*            同事甲*/}
                            {/*        </Option>*/}
                            {/*        <Option value="2">*/}
                            {/*            同事乙*/}
                            {/*        </Option>*/}
                            {/*        <Option value="3">*/}
                            {/*            同事丙*/}
                            {/*        </Option>*/}
                            {/*    </Select>*/}
                            {/*</FormItem>*/}
                        {/*</div>*/}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='重要程度'
                        name="categoriesw"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "请选择重要程度",
                            },
                        ]}
                    >
                        <Select placeholder="选一个重要程度吧">
                            <Option value="first">一星</Option>
                            <Option value="second">二星</Option>
                            <Option value="third">三星</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='是否为考点'
                        name="test"
                    >
                        {/*<div>*/}
                        <Radio.Group>
                            <Radio value="1">
                                是
                            </Radio>
                            <Radio value="2" checked>
                                否
                            </Radio>
                        </Radio.Group>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='年份'
                        name="categoriesw4"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: "请选择重要程度",
                            },
                        ]}
                    >
                        <Select placeholder="选一个重要程度吧">
                            <Option value="first">一星</Option>
                            <Option value="second">二星</Option>
                            <Option value="third">三星</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...submitFormLayout}
                        style={{
                            marginTop: 32,
                        }}
                    >
                        <Button onClick={handleReSetForm}>
                            重置
                        </Button>
                        <Button type="primary" htmlType="submit" loading={submitting}  style={{
                            marginLeft: 8,
                        }}>
                            提交
                        </Button>
                    </FormItem>
                </Form>
            </Card>
        </PageHeaderWrapper>
    );
};

export default connect(({ loading }) => ({
    submitting: loading.effects['formAndbasicForm/submitRegularForm'],
}))(CreateForm);
