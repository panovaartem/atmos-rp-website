import Vue from 'vue'
import SvgIcon from 'vue-svgicon';

Vue.use(SvgIcon, { tagName: 'svg-vue' });

const requireAll = requireContext => requireContext.keys().map(requireContext); 
const req = require.context('./assets/icons', true, /.svg$/); requireAll(req);