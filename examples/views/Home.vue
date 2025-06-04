<template>
  <div class="home py-2 flex flex-col">
    <h1 class="py-5">DEMO 合集</h1>
    <div class=" flex-1 h-0 px-10 py-2 overflow-y-auto overflow-x-hidden ">
      <el-row :gutter="20">
        <el-col :span="num" v-for="(item, index) in menuList" :key="index">
          <el-card shadow="always">
            <!-- <div class="flex-1 h-0 image" v-zoom-img="item.cover" :style="{ 'background-image': `url(${item.cover})` }" >
            </div> -->
            <div class="flex-1 h-0 image" :style="{ 'background-image': `url(${item.cover})` }" >
            </div>

            <div style="padding: 14px;" class="card-content">
              <span>{{ item.nickname }}</span>
              <div class="bottom">
                <el-button type="primary" class="button" @click="jump(item)">进入</el-button>
              </div>
          </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <div class="yiyan flex justify-center">[{{ yiyanInfo.text }}] <span class="ml-6">---{{ yiyanInfo.author }}</span>
    </div>
  </div>
</template>

<script>
import { routerMenuList } from '@/config/router.conf'
import { getYiYan } from '@/service/yiyan.service'

export default {
  name: 'Home',
  data () {
    return {
      num: 6, // 24 / 4 每行显示的卡片数目
      menuList: routerMenuList,
      currentDate: new Date(),
      yiyanInfo: {}
    }
  },
  created () {
    this.init()
  },
  methods: {
    jump (item) {
      this.$router.push(item.path)
    },

    init () {
      const yiyan = this.$storage.get('yiyan')

      const nowTime = Date.now()
      const oneDay = 1000 * 3600 * 24

      if (nowTime - yiyan.time > oneDay) { 
        getYiYan().then(res => {
          this.yiyanInfo = res
          this.$storage.add('yiyan', res.text)
          this.$storage.add('yiyan_author', res.author)
        })
      } else {
        const yiyan_author = this.$storage.get('yiyan_author')

        this.yiyanInfo = { text: yiyan.value, author: yiyan_author.value }
      }

    }
  }
}
</script>
<style lang="scss" scoped>
$yiyanH: 40px;

.home {
  box-sizing: border-box;
  height: 100%;
  padding-bottom: $yiyanH;
}

.yiyan {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: $yiyanH;
  align-items: center;
}

h1 {
  font-size: 20px;
}

.el-col {
  margin-top: 20px;

  &:nth-child(-n+4) {
    margin-top: 0
  }
}

.el-card {
  height: 300px;
  overflow: unset;

  @include deep('.el-card__body') {
    @apply flex flex-col h-full;
  }

  .image {
    width: 100%;
    margin: 0 auto;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.card-content {
  height: 100px;

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
}


.el-row {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}
</style>