import 'babel-register';
import getConfig from 'hjs-webpack';
import toHtml from 'vdom-to-html';
import app from './src/views/app';

export default getConfig({
  in: 'src/main.js',
  out: 'public',
  clearBeforeBuild: true,
  html (context) {
    function render (state) {
      return context.defaultTemplate({ html: toHtml(app(state)) });
    }

    return {
      'about.html': render({url: '/about', count: 0}),
      'index.html': render({url: '/', count: 0})
    };
  }
});
