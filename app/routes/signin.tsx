import { GithubOutlined, GoogleOutlined } from '@ant-design/icons'
import { Button, Card, Layout, Space, Typography } from 'antd'
import { authClient } from '../lib/auth.client'

const { Title, Text } = Typography
const { Content } = Layout

export default function SignIn() {
  const signIn = async (provider: 'google' | 'github') => {
    await authClient.signIn.social({
      provider,
    })
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f5f5f5',
      }}>
      <Content style={{ width: '100%', maxWidth: '400px', padding: '0 16px' }}>
        <Card
          bordered={false}
          style={{
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            borderRadius: '12px',
            textAlign: 'center',
            padding: '24px 0',
          }}>
          <Space direction='vertical' size='large' style={{ width: '100%' }}>
            <div>
              <Title level={3} style={{ margin: 0, fontWeight: 600 }}>
                환영합니다
              </Title>
              <Text type='secondary'>
                서비스를 이용하기 위해 로그인해주세요.
              </Text>
            </div>

            <Space direction='vertical' size='middle' style={{ width: '100%' }}>
              <Button
                type='primary'
                size='large'
                icon={<GoogleOutlined />}
                onClick={() => signIn('google')}
                block
                style={{
                  height: '48px',
                  fontSize: '16px',
                  background: '#4285F4',
                  borderColor: '#4285F4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Google 계정으로 로그인
              </Button>
              <Button
                type='primary'
                size='large'
                icon={<GithubOutlined />}
                onClick={() => signIn('github')}
                block
                style={{
                  height: '48px',
                  fontSize: '16px',
                  background: '#24292e',
                  borderColor: '#24292e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                GitHub 계정으로 로그인
              </Button>
            </Space>
          </Space>
        </Card>
      </Content>
    </Layout>
  )
}
