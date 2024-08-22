import { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';

// Destructure Layout components
const { Header, Sider } = Layout;

function App() {
  // State to manage theme (dark or light) and sidebar collapse state
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  // Retrieve color background for the header from Ant Design theme tokens
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Layout>
        {/* Sidebar (Sider) */}
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className="sidebar"
        >
          {/* Logo component */}
          <Logo />
          
          {/* MenuList component with theme prop */}
          <MenuList darkTheme={darkTheme} />
          
          {/* Button to toggle the theme */}
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        
        <Layout>
          {/* Header with dynamic background color */}
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {/* Button to collapse or expand the sidebar */}
            <Button
              type="text"
              className="toggle"
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
          </Header>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
