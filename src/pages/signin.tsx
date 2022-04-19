import { providers, signIn, getCsrfToken } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Button, Grid } from '@mui/material'
import { makeStyles, createStyles } from '@mui/styles'
import { GetServerSidePropsContext } from 'next'

import Layout from '../components/layout/layout'
import { TProviderNextAuth } from '../types/providerNextAuth'
import { getAsString } from '../lib/getAsString'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    block: {
      margin: '5px',
      textAlign: 'center',
    },
    input: {
      margin: '10px',
    },
  })
)

export interface ISignInProps {
  providers: TProviderNextAuth
  csrfToken: string | undefined
}

export interface IProvider {
  name: string
  id: string
  signinUrl: string
}

export default function SignIn({ providers, csrfToken }: ISignInProps) {
  const classes = useStyles()
  const newProvider = Object.values(providers).filter((el) => el.id != 'email')

  const {
    query: { callbackUrl },
  } = useRouter()

  const cbUrl = getAsString(callbackUrl)

  return (
    <>
      <Layout title='Вход в систему | Регистрация'>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {newProvider.map((provider) => (
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
                            cbUrl,
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
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context)
  return { props: { providers: await providers(), csrfToken } }
}
