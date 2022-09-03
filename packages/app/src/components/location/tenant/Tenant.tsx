import React, { useEffect, useState } from 'react'
import {
  PlusOutlined,
  SaveOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import { Button, Modal, Space, Form, Input } from 'antd';

import TenantItem, { TenantItemType } from './TenantItem'

const mocTenantList: TenantItemType[] = [
  {
    website: "https://www.mlb.com/yankees",
    name: "yankees",
    address: "Ellisvile, MO"
  }
]
const Tenant = () => {
  const [form] = Form.useForm();

  const [tenantList, setTenantList] = useState<TenantItemType[]>(mocTenantList)
  const [activeItem, setActiveItem] = useState<TenantItemType>(mocTenantList[0])
  const [favicon, setFavicon] = useState<string>(`https://www.google.com/s2/favicons?sz=24&domain_url=${form.getFieldValue('website')}`)

  //  const favicon = value ? `https://www.google.com/s2/favicons?sz=24&domain_url=${value}` : "";

  const onClick = (item: TenantItemType) => {
    console.log(item)
    setActiveItem(item)
  }

  useEffect(() => {
    form.resetFields()
  }, [])

  const onTenantDelete = (item: TenantItemType) => {
    const idx = tenantList.findIndex(tenant => tenant.name == item.name)
    let newTenantList = [...tenantList]
    if (idx !== -1) {
      newTenantList.splice(idx, 1)
      setTenantList(newTenantList)
    }
  }

  const onFinish = (values: any) => {
    console.log('Success:', values);
    let newTenantList = [...tenantList]
    newTenantList.push(values)
    setTenantList(newTenantList)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const modalContent = (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="Name"
        name="name"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Website"
        name="website"
      >
        <Input
          onChange={(e) => { setFavicon(`https://www.google.com/s2/favicons?sz=24&domain_url=${form.getFieldValue('website')}`) }}
          suffix={
            <img src={favicon} />
          }
        />
      </Form.Item>
    </Form>
  )

  const confirm = () => {
    form.resetFields();

    Modal.confirm({
      onOk: () => { form.submit() },
      title: 'Add New Tenant',
      content: <>{modalContent}</>,
      okText: <><SaveOutlined style={{ paddingRight: 10 }} />Save</>,
      cancelText: <><CloseCircleOutlined style={{ paddingRight: 10 }} />Cancel</>,
      centered: true,
      icon: undefined,
      className: 'location-tenant-modal'
    });
  };

  return (
    <>
      <PlusOutlined className='location-tenant-btn-add' onClick={confirm} />
      {tenantList.map((tenant, idx: number) => (
        <TenantItem key={idx} item={tenant} active={tenant.name === activeItem.name} onClick={onClick} onDelete={onTenantDelete} />
      ))}
    </>
  )
}

export default Tenant