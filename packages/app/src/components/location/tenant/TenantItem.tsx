import React from 'react'
import {
  MoreOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';
import type { MenuProps } from 'antd';

export interface TenantItemType {
  website: string;
  name: string;
  address: string;
}

interface Props {
  item: TenantItemType;
  active?: boolean;
  onClick: (item: TenantItemType) => void;
  onDelete: (item: TenantItemType) => void;
  logo?: boolean
}

const prefix = 'location-tenant';

const TenantItem: React.FC<Props> = ({ item, active = false, onClick, onDelete, logo = true }) => {

  console.log("website===>", item.website)
  const onTenantDelete: MenuProps['onClick'] = e => {
    onDelete(item)
  };

  const menu = (
    <Menu
      onClick={onTenantDelete}
      items={[
        {
          label: 'Delete',
          key: '1',
          icon: <DeleteOutlined />,
        },
      ]}
    />
  );
  return (
    <>
      <div className={active ? `active location-tenant` : `location-tenant`} onClick={() => onClick(item)}>
        <div className='location-tenant-content'>
          {logo && (
            <div className={`${prefix}-logo`}>
              <img src={`https://www.google.com/s2/favicons?sz=24&domain_url=${item.website}`} />
            </div>
          )}
          <div className={`${prefix}-title`}>
            {item.name}
          </div>
        </div>
        <div className={`${prefix}-action`}>
          <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                <MoreOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default TenantItem