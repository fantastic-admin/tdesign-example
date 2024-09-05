<script setup lang="ts">
import type { FormRules } from 'tdesign-vue-next'
import useUserStore from '@/store/modules/user'

defineOptions({
  name: 'LoginForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onRegister: [account: string]
  onResetPassword: [account: string]
}>()

const userStore = useUserStore()

const title = import.meta.env.VITE_APP_TITLE
const loading = ref(false)

// 登录方式，default 账号密码登录，qrcode 扫码登录
const type = ref('default')
const formRef = ref()
const form = ref({
  account: props.account ?? localStorage.login_account ?? '',
  password: '',
  remember: !!localStorage.login_account,
})
const rules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
})
function handleLogin() {
  formRef.value?.validate().then((res: any) => {
    if (res === true) {
      loading.value = true
      userStore.login(form.value).then(() => {
        loading.value = false
        if (form.value.remember) {
          localStorage.setItem('login_account', form.value.account)
        }
        else {
          localStorage.removeItem('login_account')
        }
        emits('onLogin', form.value.account)
      }).finally(() => {
        loading.value = false
      })
    }
  })
}

function testAccount(account: string) {
  form.value.account = account
  form.value.password = '123456'
  handleLogin()
}
</script>

<template>
  <TForm ref="formRef" :data="form" :rules="rules" label-align="top" :required-mark="false" class="min-h-500px w-full flex-col-stretch-center p-12">
    <div class="mb-6">
      <HTabList
        v-model="type" :options="[
          { label: '账号密码登录', value: 'default' },
          { label: '扫码登录', value: 'qrcode' },
        ]"
      />
    </div>
    <template v-if="type === 'default'">
      <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
        欢迎使用 {{ title }} ! 👋🏻
      </h3>
      <TFormItem name="account">
        <TInput v-model="form.account" size="large" placeholder="用户名" tabindex="1">
          <template #prefix>
            <SvgIcon name="ri:user-3-fill" />
          </template>
        </TInput>
      </TFormItem>
      <TFormItem name="password">
        <TInput v-model="form.password" type="password" size="large" placeholder="密码" tabindex="2">
          <template #prefix>
            <SvgIcon name="ri:lock-2-fill" />
          </template>
        </TInput>
      </TFormItem>
      <div class="mb-4 flex-center-between">
        <TCheckbox v-model:checked="form.remember">
          记住我
        </TCheckbox>
        <TLink theme="primary" @click="emits('onResetPassword', form.account)">
          忘记密码了?
        </TLink>
      </div>
      <TButton :loading="loading" size="large" style="width: 100%;" @click="handleLogin">
        登录
      </TButton>
      <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
        还没有帐号?
        <TLink theme="primary" @click="emits('onRegister', form.account)">
          创建新帐号
        </TLink>
      </div>
    </template>
    <template v-else-if="type === 'qrcode'">
      <div class="flex-col-center">
        <img src="https://s2.loli.net/2024/04/26/GsahtuIZ9XOg5jr.png" class="h-[250px] w-[250px]">
        <div class="mt-2 op-50">
          请使用微信扫码登录
        </div>
      </div>
    </template>
    <div class="mt-4 text-center -mb-4">
      <TDivider>演示账号一键登录</TDivider>
      <TSpace>
        <TButton size="small" @click="testAccount('admin')">
          admin
        </TButton>
        <TButton theme="default" size="small" @click="testAccount('test')">
          test
        </TButton>
      </TSpace>
    </div>
  </TForm>
</template>
