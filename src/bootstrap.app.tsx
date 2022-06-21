import { Provider } from 'react-redux'
import {
  WalletProvider,
  UIProvider,
  MintProvider,
  AccountProvider,
} from '@sentre/senhub'

import View from 'view'

import model from 'model'
import configs from 'configs'

const {
  manifest: { appId },
} = configs

export const Page = () => {
  return (
    <MintProvider>
      <AccountProvider>
        <UIProvider appId={appId} antd>
          <WalletProvider>
            <Provider store={model}>
              <View />
            </Provider>
          </WalletProvider>
        </UIProvider>
      </AccountProvider>
    </MintProvider>
  )
}

export * from 'static.app'
