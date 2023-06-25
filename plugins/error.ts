export default defineNuxtPlugin(nuxt => {
  nuxt.vueApp.config.errorHandler = res => {
    console.log('测试错误=>', res);
  };
  nuxt.hook('app:error', (..._args) => {
    console.log('app:error', _args);
  });
  nuxt.hook('vue:error', (..._args) => {
    console.log('vue:error', _args);
  });
});
