const fs = require('fs');
const path = require('path');

// 生成 demo.html 文件
function generateDemoHtml() {
  const demoContent = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HiaUi demo</title>
  <!-- 引入 Vue -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js"></script>
  <!-- 引入 Element UI -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/theme-chalk/index.css">
  <script src="https://cdn.jsdelivr.net/npm/element-ui@2.15.13/lib/index.js"></script>
  <!-- 引入 HiaUi -->
  <script src="./HiaUi.umd.js"></script>
  <link rel="stylesheet" href="./HiaUi.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      color: #333;
      text-align: center;
    }
    h2 {
      color: #666;
      margin-top: 30px;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    .demo-section {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div id="app">
    <h1>HiaUi 组件库演示</h1>
    
    <!-- 按钮演示 -->
    <div class="demo-section">
      <h2>按钮组件</h2>
      <hia-button type="primary">主要按钮</hia-button>
      <hia-button>默认按钮</hia-button>
      <hia-button type="success">成功按钮</hia-button>
      <hia-button type="warning">警告按钮</hia-button>
      <hia-button type="danger">危险按钮</hia-button>
    </div>
    
    <!-- 表单演示 -->
    <div class="demo-section">
      <h2>表单组件</h2>
      <hia-form v-model="form" :conf="formConf" style="width: 400px;"></hia-form>
      <br>
      <hia-button @click="submitForm" type="primary">提交</hia-button>
      <hia-button @click="resetForm">重置</hia-button>
    </div>
    
    <!-- 单选框演示 -->
    <div class="demo-section">
      <h2>单选框组件</h2>
      <hia-radio-group v-model="radioValue" :options="radioOptions"></hia-radio-group>
    </div>
    
    <!-- 多选框演示 -->
    <div class="demo-section">
      <h2>多选框组件</h2>
      <hia-checkbox-group v-model="checkboxValue" :options="checkboxOptions"></hia-checkbox-group>
    </div>
    
    <!-- 上传组件演示 -->
    <div class="demo-section">
      <h2>上传组件</h2>
      <hia-upload v-model="uploadFile"></hia-upload>
    </div>
  </div>

  <script>
  console.log('HiaUi', HiaUi)
  
  // 注册 HiaUi 组件
  Vue.use(HiaUi)
  
  new Vue({
    el: '#app',
    data() {
      return {
        form: {
          name: '',
          text2: ''
        },
        formConf: [
          {
            type: 'text',
            prop: 'name',
            label: '文本输入框',
            rules: { required: true, message: '请输入', trigger: 'blur' }
          },
          {
            type: 'textarea',
            prop: 'text2',
            label: '文本域输入框',
            rules: { required: true, message: '请输入', trigger: 'blur' }
          }
        ],
        radioValue: '1',
        radioOptions: [
          { label: '选项1', value: '1' },
          { label: '选项2', value: '2' }
        ],
        checkboxValue: ['A'],
        checkboxOptions: [
          { label: '选项A', value: 'A' },
          { label: '选项B', value: 'B' },
          { label: '选项C', value: 'C' }
        ],
        uploadFile: []
      }
    },
    methods: {
      submitForm() {
        alert('表单提交：' + JSON.stringify(this.form))
      },
      resetForm() {
        this.form = {
          name: '',
          text2: ''
        }
      }
    }
  })
  </script>
</body>
</html>`;

  const libDir = path.join(__dirname, 'lib');
  const demoPath = path.join(libDir, 'demo.html');
  
  // 确保 lib 目录存在
  if (!fs.existsSync(libDir)) {
    fs.mkdirSync(libDir, { recursive: true });
  }
  
  // 写入 demo.html 文件
  fs.writeFileSync(demoPath, demoContent);
  console.log('✓ demo.html 生成成功');
}

// 执行生成
if (require.main === module) {
  generateDemoHtml();
}

module.exports = generateDemoHtml;