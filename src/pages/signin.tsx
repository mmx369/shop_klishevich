import classes from './signin.module.css'

import { providers, signIn, getCsrfToken } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Button, Grid } from '@mui/material'

import Layout from '../components/layout/layout'

export interface ISignInProps {
  // providers: IProvider | undefined
  // csrfToken: string | undefined
  providers: any
  csrfToken: string | undefined
}

export interface IProvider {
  name: string
  id: string
  signinUrl: string
}

export default function SignIn({ providers, csrfToken }: ISignInProps) {
  const newProvider = Object.values(providers).filter(
    (el: any) => el.id != 'email'
  )

  const {
    query: { callbackUrl },
  }: any = useRouter()

  return (
    <>
      <Layout title='Sign in'>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {newProvider.map((provider: any) => (
                <div key={provider.name}>
                  <div className={classes.block}>
                    <a
                      href={provider.signinUrl}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Button
                        fullWidth
                        color='primary'
                        variant='contained'
                        onClick={() =>
                          signIn(provider.id, {
                            callbackUrl,
                          })
                        }
                      >
                        Войти с помощью {provider.name}
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
              <div className={classes.block}>
                <form
                  method='post'
                  action='/api/auth/signin/email'
                  style={{ boxShadow: 'none' }}
                >
                  <input
                    name='csrfToken'
                    type='hidden'
                    defaultValue={csrfToken}
                  />
                  <label>
                    Эл.почта
                    <input
                      className={classes.input}
                      type='email'
                      id='email'
                      name='email'
                    />
                  </label>
                  <Button type='submit' color='primary' variant='contained'>
                    Получить ссылку для входа
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </>
  )
}
export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context)
  return { props: { providers: await providers(), csrfToken } }
}
