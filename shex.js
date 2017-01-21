module.exports = {
  Parser:       require('./lib/ShExParser'),
  Util:         require('./lib/ShExUtil'),
  Validator:    require('./lib/ShExValidator'),
  Loader:       require('./lib/ShExLoader'),
  Writer:       require('./lib/ShExWriter'),
  Mapper:       require('./extensions/shex-map')
};
