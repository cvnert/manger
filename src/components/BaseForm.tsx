import React from "react";
import { Form } from "antd";

function BaseForm(props: any) {
  console.log("props", props);

  const { formItem, onFinish, config, form, btnGroup } = props;
  return (
    <div>
      <Form onFinish={onFinish} form={form} labelAlign="left">
        {formItem.map((item: any) => (
          <div key={item.id}>
            <Form.Item name={item.id} label={item.label} {...config}>
              {item.ele}
            </Form.Item>
          </div>
        ))}
        <Form.Item>{btnGroup}</Form.Item>
      </Form>
    </div>
  );
}

export default BaseForm;
