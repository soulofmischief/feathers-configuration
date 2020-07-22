import feathers from '@feathersjs/feathers'
import o from 'ospec'
import { array, deep } from './_var'


let app, configuration, scopedApp


o.spec( 'tests', () => {
  o.before( async () => {
    process.env.NODE_CONFIG_DIR = './tests/config'

    configuration = ( await import( '../src' )).default

    app = feathers().configure( configuration())
    scopedApp = feathers().configure( configuration( 'scoped' ))
  })

  o( 'initializes with default.js', () => {
    o( app.get( 'port' )).equals( 3030 )
    o( app.get( 'array' )).deepEquals( array )
    o( app.get( 'deep' )).deepEquals( deep )
    o( app.get( 'nullish' )).equals( null )
  })

  o( 'initializes with scoped configuration', () => {
    o( scopedApp.get( 'port' )).equals( 8080 )
    o( scopedApp.get( 'path' )).equals( undefined )
  })

  o( 'works when called directly', () => {
    const c = configuration()()

    o( c.port ).equals( 3030 )
  })
})

