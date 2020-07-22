import config from 'config'
import Debug from 'debug'


const debug = Debug( '@soulofmischief/feathers-configuration' )


export default function( scope ) {
  return ( app ) => {
    const
      // Scope the configuration if parameter is provided.
      c = scope ? config[ scope ] : config,
      // Get node environment
      env = config.util.getEnv( 'NODE_ENV' )

    // Return configuration object if called without app.
    if ( !app ) return c

    debug( `Initializing configuration for ${env} environment.` )

    Object.entries( c ).forEach( e => {
      debug( `Setting ${e[0]} configuration value to ${e[1]}.` )
      app.set( e[0], e[1])
    })

    return c
  }
}
