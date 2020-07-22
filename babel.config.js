

module.exports = function ( api ) {
  // Cache the returned value forever and don't call this function again.
  api.cache( true )

  const
    plugins = [],
    presets = [ '@babel/env' ]

  return { plugins, presets }
}
