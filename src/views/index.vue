<route lang="yaml">
name: home
meta:
  title: 主页
  icon: ant-design:home-twotone
</route>

<script lang="ts" setup>
const inputValue = ref<string>('')

const radioValue = ref<number>(1)

const datePickerValue1 = ref('')
const datePickerValue2 = ref('')
const datePickerValue3 = ref('')
const datePickerValue4 = ref('')
const datePickerValue5 = ref('')

const rateValue = ref<number>(2)

const selectValue1 = ref('lucy')
const selectValue2 = ref('lucy')
const selectValue3 = ref('lucy')
const selectOptions1 = ref([
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'disabled', label: 'Disabled', disabled: true },
  { value: 'yiminghe', label: 'Yiminghe' },
])
const selectOptions2 = ref([
  { value: 'lucy', label: 'Lucy' },
])
const selectOptions3 = ref([
  { value: 'lucy', label: 'Lucy' },
])

const sliderValue1 = ref<number>(0)
const sliderValue2 = ref<[number, number]>([20, 50])

const switchChecked = ref<boolean>(false)

const activeRowType = ref<any>('single')
const hover = ref(false)
const tableData = getTableData()
const columns = [
  { colKey: 'applicant', title: '申请人', width: '100' },
  { colKey: 'channel', title: '签署方式' },
  { colKey: 'detail.email', title: '邮箱地址', ellipsis: true },
  { colKey: 'createTime', title: '申请时间' },
]
watch([activeRowType], ([activeRowType]) => {
  if (!activeRowType) {
    hover.value = true
  }
})
function getTableData(total = 5) {
  const data = []
  for (let i = 0; i < total; i++) {
    data.push({
      key: i + 1,
      applicant: ['贾明', '张三', '王芳'][i % 3],
      status: i % 3,
      channel: ['电子签署', '纸质签署', '纸质签署'][i % 3],
      detail: {
        email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
      },
      matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
      time: [2, 3, 1, 4][i % 4],
      createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
    })
  }
  return data
}
</script>

<template>
  <div>
    <page-header>
      <template #title>
        <div class="flex items-center gap-4">
          欢迎使用 Fantastic-admin
        </div>
      </template>
      <template #content>
        <div class="text-sm/6">
          本演示站基于 Fantastic-admin 源码开发，将 Element Plus 替换为 TDesign ，详细操作步骤请阅读官方文档。
        </div>
      </template>
    </page-header>
    <page-main>
      <t-space size="24px">
        <t-button variant="base">
          填充按钮
        </t-button>
        <t-button variant="outline">
          描边按钮
        </t-button>
        <t-button variant="dashed">
          虚框按钮
        </t-button>
        <t-button variant="text">
          文字按钮
        </t-button>
      </t-space>
    </page-main>
    <page-main>
      <t-space direction="vertical">
        <t-input />
        <t-input v-model="inputValue" placeholder="请输入内容（有默认值）" />
      </t-space>
    </page-main>
    <page-main>
      <t-radio-group v-model="radioValue">
        <t-radio :value="1">
          A
        </t-radio>
        <t-radio :value="2">
          B
        </t-radio>
        <t-radio :value="3">
          C
        </t-radio>
        <t-radio :value="4">
          D
        </t-radio>
      </t-radio-group>
    </page-main>
    <page-main>
      <t-space direction="vertical" :size="12">
        <t-date-picker v-model="datePickerValue1" mode="date" />
        <t-date-picker v-model="datePickerValue2" mode="week" />
        <t-date-picker v-model="datePickerValue3" mode="month" />
        <t-date-picker v-model="datePickerValue4" mode="quarter" />
        <t-date-picker v-model="datePickerValue5" mode="year" />
      </t-space>
    </page-main>
    <page-main>
      <t-rate v-model="rateValue" />
    </page-main>
    <page-main>
      <t-space>
        <t-select v-model="selectValue1" :options="selectOptions1" />
        <t-select v-model="selectValue2" disabled :options="selectOptions2" />
        <t-select v-model="selectValue3" loading :options="selectOptions3" />
      </t-space>
    </page-main>
    <page-main>
      <t-slider v-model="sliderValue1" />
      <t-slider v-model="sliderValue2" range />
    </page-main>
    <page-main>
      <t-switch v-model="switchChecked" />
    </page-main>
    <page-main>
      <t-space direction="vertical">
        <t-space align="center">
          <t-radio-group v-model="activeRowType" variant="default-filled">
            <t-radio-button value="">
              不高亮
            </t-radio-button>
            <t-radio-button value="single">
              单行高亮
            </t-radio-button>
            <t-radio-button value="multiple">
              多行高亮
            </t-radio-button>
          </t-radio-group>
          <t-checkbox v-model="hover">
            显示悬浮效果
          </t-checkbox>
        </t-space>
        <t-table
          row-key="key"
          :data="tableData"
          :columns="columns"
          :active-row-type="activeRowType"
          :hover="hover"
          lazy-load
        />
      </t-space>
    </page-main>
  </div>
</template>
