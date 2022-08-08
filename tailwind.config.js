module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./src/pages/**/*.tsx', './src/components/**.tsx', './src/layouts/**.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'login-bck':
          "url('https://91trial.oss-cn-shanghai.aliyuncs.com/91trialTest/ec558793343043658767f5329affc05f.jpg')",
      },
    },
  },
}
