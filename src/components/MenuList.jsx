import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons';

// MenuList component receives 'darkTheme' as a prop to determine the theme of the menu
const MenuList = ({ darkTheme }) => {
  return (
    // The Menu component from antd is used to create a sidebar menu.
    // The theme is set based on the 'darkTheme' prop (either 'dark' or 'light').
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar">
      
      {/* Menu Item: Home */}
      <Menu.Item key='home' icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      
      {/* Menu Item: Activity */}
      <Menu.Item key='activity' icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      
      {/* SubMenu: Tasks */}
      <Menu.SubMenu key='tasks' icon={<BarsOutlined />} title='Tasks'>
        
        {/* Task 1 */}
        <Menu.Item key='task-1'>Task 1</Menu.Item>
        
        {/* Task 2 */}
        <Menu.Item key='task-2'>Task 2</Menu.Item>
        
        {/* Nested SubMenu: Subtasks */}
        <Menu.SubMenu key='subtasks' title='Subtasks'>
          <Menu.Item key='subtasks-1'>Subtask 1</Menu.Item>
          <Menu.Item key='subtasks-2'>Subtask 2</Menu.Item>
        </Menu.SubMenu>
        
      </Menu.SubMenu>
      
      {/* Menu Item: Progress */}
      <Menu.Item key='progress' icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      
      {/* Menu Item: Payment */}
      <Menu.Item key='payment' icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      
      {/* Menu Item: Setting */}
      <Menu.Item key='setting' icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
      
    </Menu>
  );
};

export default MenuList;
