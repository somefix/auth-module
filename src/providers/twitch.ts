import type { ProviderOptions, ProviderPartialOptions } from '../types'
import type { Oauth2SchemeOptions } from '../schemes'
import { assignDefaults, addAuthorize } from '../utils/provider'

export interface TwitchProviderOptions
  extends ProviderOptions,
    Oauth2SchemeOptions {}

export function twitch(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  nuxt: any,
  strategy: ProviderPartialOptions<TwitchProviderOptions>
): void {
  const DEFAULTS: typeof strategy = {
    scheme: 'oauth2',
    endpoints: {
      authorization: 'https://id.twitch.tv/oauth2/authorize',
      token: 'https://id.twitch.tv/oauth2/token',
      userInfo: 'https://id.twitch.tv/oauth2/userinfo',
      logout: false
    },
    grantType: 'authorization_code',
    scope: ['user_read']
  }

  assignDefaults(strategy, DEFAULTS)

  addAuthorize(nuxt, strategy, true)
}
