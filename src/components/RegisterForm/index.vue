<script setup lang="ts">
import type { FormRules } from 'tdesign-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'

defineOptions({
  name: 'RegisterForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onRegister: [account: string]
}>()

const loading = ref(false)

const formRef = ref()
const form = ref({
  account: props.account ?? '',
  captcha: '',
  password: '',
  checkPassword: '',
})
const rules = ref<FormRules>({
  account: [
    { required: true, trigger: 'blur', message: '请输入用户名' },
  ],
  captcha: [
    { required: true, trigger: 'blur', message: '请输入验证码' },
  ],
  password: [
    { required: true, trigger: 'blur', message: '请输入密码' },
    { min: 6, max: 18, trigger: 'blur', message: '密码长度为6到18位' },
  ],
  checkPassword: [
    { required: true, trigger: 'blur', message: '请再次输入密码' },
    {
      validator: value => value === form.value.password,
      message: '两次输入的密码不一致',
    },
  ],
})
function handleRegister() {
  MessagePlugin.info('注册模块仅提供界面演示，无实际功能，需开发者自行扩展')
  formRef.value?.validate().then((res: any) => {
    if (res === true) {
      // 这里编写业务代码
      emits('onRegister', form.value.account)
    }
  })
}
</script>

<template>
  <TForm ref="formRef" :data="form" :rules="rules" label-align="top" :required-mark="false" class="min-h-500px w-full flex-col-stretch-center p-12">
    <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
      探索从这里开始! 🚀
    </h3>
    <TFormItem name="account">
      <TInput v-model="form.account" size="large" placeholder="用户名" tabindex="1">
        <template #prefix>
          <SvgIcon name="ri:user-3-fill" />
        </template>
      </TInput>
    </TFormItem>
    <TFormItem name="captcha">
      <TInput v-model="form.captcha" size="large" placeholder="验证码" tabindex="2">
        <template #prefix>
          <SvgIcon name="ic:baseline-verified-user" />
        </template>
        <template #suffix>
          <TButton theme="default" size="small">
            发送验证码
          </TButton>
        </template>
      </TInput>
    </TFormItem>
    <TFormItem name="password">
      <TInput v-model="form.password" type="password" size="large" placeholder="密码" tabindex="3">
        <template #prefix>
          <SvgIcon name="ri:lock-2-fill" />
        </template>
      </TInput>
    </TFormItem>
    <TFormItem name="checkPassword">
      <TInput v-model="form.checkPassword" type="password" size="large" placeholder="确认密码" tabindex="4">
        <template #prefix>
          <SvgIcon name="ri:lock-2-fill" />
        </template>
      </TInput>
    </TFormItem>
    <TButton :loading="loading" size="large" style="width: 100%; margin-top: 20px;" @click="handleRegister">
      注册
    </TButton>
    <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
      已经有帐号?
      <TLink theme="primary" @click="emits('onLogin', form.account)">
        去登录
      </TLink>
    </div>
  </TForm>
</template>
