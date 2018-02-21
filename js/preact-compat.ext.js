/**
 * @type {!Object}
 * @const
 */
var preactCompat = {};

// Preact-compat publishes the same vars under window as React & ReactDOM.
// Defined here under preactCompat object to prevent name clashes in externs.
preactCompat.React = {};
preactCompat.ReactDOM = {};

/**
 * @type {string}
 * @const
 */
preactCompat.version;

/**
 * @type {Object}
 * @const
 */
preactCompat.DOM = {};

/**
 * @typedef {
 *   boolean|number|string|preactCompat.Component|
 *   Array.<boolean>|Array.<number>|Array.<string>|Array.<preactCompat.Component>
 * }
 */
preactCompat.ChildrenArgument;

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.a = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.abbr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.address = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.area = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.article = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.aside = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.audio = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.b = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.base = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.bdi = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.bdo = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.big = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.blockquote = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.body = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.br = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.button = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.canvas = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.caption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.circle = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.cite = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.clipPath = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.code = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.col = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.colgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.data = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.datalist = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.dd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.defs = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.del = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.details = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.dfn = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.dialog = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.div = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.dl = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.dt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.ellipse = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.em = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.embed = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.fieldset = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.figcaption = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.figure = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.footer = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.form = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.g = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.h1 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.h2 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.h3 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.h4 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.h5 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.h6 = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.head = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.header = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.hr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.html = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.i = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.iframe = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.image = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.img = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.input = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.ins = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.kbd = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.keygen = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.label = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.legend = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.li = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.line = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.linearGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.link = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.main = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.map = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.mark = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.mask = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.menu = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.menuitem = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.meta = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.meter = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.nav = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.noscript = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.object = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.ol = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.optgroup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.option = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.output = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.p = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.param = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.path = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.pattern = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.picture = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.polygon = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.polyline = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.pre = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.progress = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.q = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.radialGradient = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.rect = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.rp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.rt = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.ruby = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.s = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.samp = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.script = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.section = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.select = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.small = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.source = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.span = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.stop = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.strong = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.style = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.sub = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.summary = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.sup = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.svg = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.table = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.tbody = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.td = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.text = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.textarea = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.tfoot = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.th = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.thead = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.time = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.title = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.tr = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.track = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.tspan = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.u = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.ul = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.var = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.video = function(props, children) {};

/**
 * @param {Object=} props
 * @param {...preactCompat.ChildrenArgument} children
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.DOM.wbr = function(props, children) {};

/**
 * @type {Object}
 */
preactCompat.Children;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 * @return {Object|undefined} Object containing the ordered map of results.
 */
preactCompat.Children.map;

/**
 * @param {Object} children Children tree container.
 * @param {function(*, number)} mapFunction
 * @param {*=} mapContext Context for mapFunction.
 */
preactCompat.Children.forEach;

/**
 * @param {Object} children Children tree container.
 * @return {Object|undefined}
 */
preactCompat.Children.only;

/**
 * @param {preactCompat.ReactComponent} container
 * @param {Element} mountPoint
 * @param {Function=} opt_callback
 * @return {preactCompat.ReactComponent}
 */
preactCompat.render = function(container, mountPoint, opt_callback) {};

preactCompat.createElement = function(type, props) {};
preactCompat.createClass = function(specification) {};
preactCompat.createFactory = function(reactClass) {};

preactCompat.cloneElement = function(element, props) {};

/**
 * @param {?Object} object
 * @return {boolean} True if `object` is a valid component.
 */
preactCompat.isValidElement = function(object) {};

/**
 * @param {preactCompat.ReactComponent} component
 * @return {Element}
 */
preactCompat.findDOMNode = function(component) {};

/**
 * @param {Element} container
 * @return {boolean}
 */
preactCompat.unmountComponentAtNode = function(container) {};

/**
 * Renders a React component into the DOM in the supplied `container`.
 *
 * If the React component was previously rendered into `container`, this will
 * perform an update on it and only mutate the DOM as necessary to reflect the
 * latest React component.
 *
 * @param {preactCompat.ReactComponent} parentComponent The conceptual parent of this render tree.
 * @param {preactCompat.ReactElement} nextElement Component element to render.
 * @param {Element} container DOM element to render into.
 * @param {Function=} opt_callback function triggered on completion
 * @return {preactCompat.ReactComponent} Component instance rendered in `container`.
 */
preactCompat.unstable_renderSubtreeIntoContainer = function(parentComponent, nextElement, container, opt_callback) {};

/**
 * @interface
 */
preactCompat.Component = function() {};

/**
 * @type {Object}
 */
preactCompat.Component.prototype.props;

/**
 * @type {Object}
 */
preactCompat.Component.prototype.state;

/**
 * @type {Object}
 */
preactCompat.Component.prototype.refs;

/**
 * @type {Object}
 */
preactCompat.Component.prototype.context;

/**
 * @type {Object}
 * @protected
 */
preactCompat.Component.prototype.propTypes;

/**
 * @type {Object}
 * @protected
 */
preactCompat.Component.prototype.contextTypes;

/**
 * @type {Object}
 */
preactCompat.Component.prototype.mixins;

/**
 * @return {Object}
 */
preactCompat.Component.prototype.getInitialState = function() {};

/**
 * @return {Object}
 */
preactCompat.Component.prototype.getDefaultProps = function() {};

/**
 * @return {Object}
 */
preactCompat.Component.prototype.getChildContext = function() {};

/**
 * @param {preactCompat.Component} targetComponent
 * @return {preactCompat.Component}
 */
preactCompat.Component.prototype.transferPropsTo = function(targetComponent) {};

/**
 * @param {Function=} callback
 */
preactCompat.Component.prototype.forceUpdate = function(callback) {};

/**
 * @return {boolean}
 */
preactCompat.Component.prototype.isMounted = function() {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
preactCompat.Component.prototype.setState = function(nextState, callback) {};

/**
 * @param {Object} nextState
 * @param {Function=} callback
 */
preactCompat.Component.prototype.replaceState = function(nextState, callback) {};

/**
 * @protected
 */
preactCompat.Component.prototype.componentWillMount = function() {};

/**
 * @param {Element} element
 * @protected
 */
preactCompat.Component.prototype.componentDidMount = function(element) {};

/**
 * @param {Object} nextProps
 * @protected
 */
preactCompat.Component.prototype.componentWillReceiveProps = function(
  nextProps) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @return {boolean}
 * @protected
 */
preactCompat.Component.prototype.shouldComponentUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} nextProps
 * @param {Object} nextState
 * @protected
 */
preactCompat.Component.prototype.componentWillUpdate = function(
  nextProps, nextState) {};

/**
 * @param {Object} prevProps
 * @param {Object} prevState
 * @param {Element} rootNode
 * @protected
 */
preactCompat.Component.prototype.componentDidUpdate = function(
  prevProps, prevState, rootNode) {};

/**
 * @protected
 */
preactCompat.Component.prototype.componentWillUnmount = function() {};

/**
 * @return {preactCompat.Component}
 * @protected
 */
preactCompat.Component.prototype.render = function() {};

/**
 * @extends {preactCompat.Component}
 */
preactCompat.PureComponent = function() {};

/**
 * @type {boolean}
 */
preactCompat.PureComponent.prototype.isPureReactComponent;
