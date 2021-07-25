import React from 'react'
import { Layout } from './layout/Layout'
import { Alert } from './utils/Alert'

export const Home = () => {
    return (
        <Layout>
          <h1>Clientes</h1>

          <div className="p-10 flex flex-col space-y-3">

            <Alert 
              type='info'
              msg='hola'
              />
            <Alert 
              type='success'
              msg='OK!'
              />
            <Alert 
              type='error'
              msg='Error'
            />
          </div>

        </Layout>
    )
}
