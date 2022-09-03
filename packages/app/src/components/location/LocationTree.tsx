import React from 'react'
import { PlusOutlined, MinusOutlined, MoreOutlined, DeleteOutlined, EditOutlined, SaveOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Switch, Tree, Menu, Dropdown, Space, Form, Modal, Input } from 'antd';
import type { DataNode } from 'antd/es/tree';
import { AntTreeNodeProps } from 'antd/lib/tree';
import TenantItem from './tenant/TenantItem';

const onTreeItemClick = (e: any) => {
  e.stopPropagation()
  console.log(e)
}


const LocationTree = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };
  const onActionTrigger = (e: any) => {
    console.log("menu click===>", e)
    if (e.key == '1') {
      Modal.confirm({
        onOk: () => { form.submit() },
        title: 'Add New Location',
        content: <>{modalContent}</>,
        okText: <><SaveOutlined style={{ paddingRight: 10 }} />Save</>,
        cancelText: <><CloseCircleOutlined style={{ paddingRight: 10 }} />Cancel</>,
        centered: true,
        icon: undefined,
        className: 'location-tenant-modal'
      });
    } else if (e.key == '2') {
      Modal.confirm({
        onOk: () => { form.submit() },
        title: 'Edit Location Info',
        content: <>{modalContent}</>,
        okText: <><SaveOutlined style={{ paddingRight: 10 }} />Save</>,
        cancelText: <><CloseCircleOutlined style={{ paddingRight: 10 }} />Cancel</>,
        centered: true,
        icon: undefined,
        className: 'location-tenant-modal'
      });
    }
  }
  const menu = (
    <Menu
      onClick={onActionTrigger}
      items={[
        {
          label: 'Add',
          key: '1',
          icon: <PlusOutlined />,
        },
        {
          label: 'Edit',
          key: '2',
          icon: <EditOutlined />,
        },
        {
          label: 'Delete',
          key: '3',
          icon: <DeleteOutlined />,
        },
      ]}
    />
  );

  const mocTreeData: DataNode[] = [
    {
      title: <div className='location-tree-node'>nyc
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <MoreOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>,
      key: '0-0',
      children: [
        {
          title: <div className='location-tree-node'>titletown1
            <Dropdown overlay={menu} trigger={['click']}>
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <MoreOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>,
          key: '0-0-0'
        },
        {
          title: <div className='location-tree-node'>titletown2
            <Dropdown overlay={menu} trigger={['click']}>
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <MoreOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>,
          key: '0-0-1',
        },
        {
          title: <div className='location-tree-node'>titletown3
            <Dropdown overlay={menu} trigger={['click']}>
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <MoreOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>,
          key: '0-0-2',
        },
      ],
    },
  ];

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
    </Form>
  )

  return (
    <div style={{ padding: 5 }}>
      <TenantItem
        item={{
          website: "https://www.mlb.com/yankees",
          name: "yankees",
          address: "Ellisvile, MO"
        }}
        active={false}
        onClick={() => { console.log("") }}
        logo={false}
        onDelete={() => { console.log("") }}>
      </TenantItem>
      <Tree
        showLine={false}
        showIcon={false}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={mocTreeData}
        switcherIcon={(props: AntTreeNodeProps) => !props.expanded ? < PlusOutlined /> : <MinusOutlined />}
      />
    </div>
  )
}

export default LocationTree