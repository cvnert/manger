import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import React from "react";
import BaseForm from "../../components/BaseForm";
import "./index.css";
function index() {
  const formItem = [
    {
      label: <span>用户名</span>,
      name: "username",
      id: "username",
      ele: <Input className="first" placeholder="请输入" allowClear />,
    },
    {
      label: <span>密码</span>,
      name: "password",
      id: "password",
      ele: <Input placeholder="请输入" allowClear />,
    },
  ];
  const config = {
    labelCol: {
      xs: { span: 2 },
      sm: { span: 2 },
    },
  };
  const onFinish = (val: any) => {
    console.log(val);
  };
  const formOption = {
    formItem,
    config,
    onFinish: onFinish,
    btnGroup: (
      <Row>
        <Col span={15} style={{ textAlign: "right" }}>
          <Button
            className="btn"
            type="primary"
            htmlType="submit"
            style={{ marginRight: 50 }}
          >
            登录
          </Button>
          <Button className="btn" type="primary">
            注册
          </Button>
        </Col>
      </Row>
    ),
  };

  return (
    <div className="main">
      <div className="header">
        <h3>寡妇管理系统</h3>
      </div>
      <BaseForm {...formOption}></BaseForm>
    </div>
  );
}

export default index;
