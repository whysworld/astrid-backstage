import React from 'react'
import { PlusOutlined, MinusOutlined, MoreOutlined } from '@ant-design/icons';
import { Switch, Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import { AntTreeNodeProps } from 'antd/lib/tree';

const { TreeNode } = Tree;

const LocationTree = () => {

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <div style={{ padding: 5 }}>
      <Tree
        showLine={false}
        showIcon={false}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        blockNode
        selectable
        switcherIcon={(props: AntTreeNodeProps) => !props.expanded ? < PlusOutlined /> : <MinusOutlined />}
      >
        <TreeNode title="parent 1" key="0-0">
          <TreeNode title="parent 1-0" key="0-0-0">
            <TreeNode title={<div className='location-tree-node'>item00<MoreOutlined /></div>} key="0-0-0-0" />
            <TreeNode title="leaf" key="0-0-0-1" />
            <TreeNode title="leaf" key="0-0-0-2" />
          </TreeNode>
          <TreeNode title="parent 1-1" key="0-0-1">
            <TreeNode title="leaf" key="0-0-1-0" />
          </TreeNode>
          <TreeNode title="parent 1-2" key="0-0-2">
            <TreeNode title="leaf" key="0-0-2-0" />
            <TreeNode title="leaf" key="0-0-2-1" />
          </TreeNode>
        </TreeNode>
      </Tree>
    </div>
  )
}

export default LocationTree