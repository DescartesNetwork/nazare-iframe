import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src={'https://www.nazare.so/vaults/'}
      wallet={window.sentre.solana}
    />
  )
}

export default View
