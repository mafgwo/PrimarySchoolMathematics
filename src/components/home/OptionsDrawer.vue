<template>
  <el-drawer v-model="currentVisible" size="60%" title="其他程序参数设置" :before-close="handleClose">
    <ElForm ref="refForm" :model="formData" :rules="formRules">
      <ElFormItem label="题型设置">
        <el-radio-group v-model="formData.whereIsResult">
          <el-radio-button v-for="o in whereIsResultOptions" :label="o.key" :disabled="o.disabled">{{ o.label
          }}</el-radio-button>
        </el-radio-group>
      </ElFormItem>

      <ElFormItem label="启用括号()">
        <ElCheckbox v-model="formData.enableBrackets" />
      </ElFormItem>

      <ElFormItem label="启用标题序号">
        <ElCheckbox v-model="formData.enableTitleNo" />
      </ElFormItem>

      <ElFormItem label="启用题目序号">
        <ElCheckbox v-model="formData.enableQuestionNo" />
      </ElFormItem>

      <ElFormItem label="口算题题目行距(倍)">
        <el-input-number v-model="formData.lineSpaceNum" :precision="1" :step="0.1" :max="10" />
      </ElFormItem>

      <ElFormItem label="加法设置">
        <el-radio-group v-model="formData.carry">
          <el-radio-button label="1">随机进位</el-radio-button>
          <el-radio-button label="2">加法进位</el-radio-button>
          <el-radio-button label="3">没有进位</el-radio-button>
        </el-radio-group>
      </ElFormItem>

      <el-form-item label="减法设置">
        <el-radio-group v-model="formData.abdication">
          <el-radio-button label="1">随机退位</el-radio-button>
          <el-radio-button label="2">减法退位</el-radio-button>
          <el-radio-button label="3">没有退位</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="除法设置">
        <el-radio-group v-model="formData.remainder">
          <el-radio-button v-for="o in remainderOptions" :label="o.key" :disabled="o.disabled">{{ o.label
          }}</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="解题方式">
        <el-radio-group v-model="formData.solution">
          <el-radio-button label="0">用口算解题</el-radio-button>
          <el-radio-button label="1">用竖式解题</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-row :gutter="20">
          <el-col :span="9">
            <ElFormItem prop="numberOfPapers">
              <el-input v-model.number="formData.numberOfPapers">
                <template #prepend>生成的卷子数量</template>
              </el-input>
            </ElFormItem>
          </el-col>
          <el-col :span="8">
            <ElFormItem prop="numberOfPagerColumns">
              <el-input v-model.number="formData.numberOfPagerColumns">
                <template #prepend>口算题列数</template>
              </el-input>
            </ElFormItem>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="文件名生成规则" prop="fileNameGeneratedRule">
        <el-radio-group v-model="formData.fileNameGeneratedRule">
          <el-radio-button v-for="o in fileNameGeneratedRuleOptions" :label="o.key">{{ o.label }}</el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="paperTitle">
        <el-row :gutter="8">
          <el-col :span="24">
            <el-input v-model="formData.paperTitle">
              <template #prepend>卷子标题</template>
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item prop="paperSubTitle">
        <el-input v-model="formData.paperSubTitle">
          <template #prepend>卷子副标题</template>
        </el-input>
      </el-form-item>
    </ElForm>
  </el-drawer>
</template>

<script setup>
import { ref, computed } from 'vue';
import { fileNameGeneratedRuleEnum } from '@/utils/enum.js';

const fileNameGeneratedRuleOptions = computed(() => {
  return Object.entries(fileNameGeneratedRuleEnum).map(([, { key, text }]) => {
    return { key, label: text }
  })
})

const props = defineProps({
  visible: {
    type: Boolean
  },
  formulasFormData: {
    type: Object
  }
})

const emit = defineEmits(['update:visible', 'update:formulasFormData'])

const currentVisible = computed({
  get() {
    return props.visible
  },
  set(val) {
    emit('update:visible', val)
  }
})

const formData = computed({
  get() {
    return props.formulasFormData
  },
  set(val) {
    emit('update:formulasFormData', val)
  }
})

const formRules = ref({
  numberOfPapers: [
    { required: true, message: '请填写卷子数量' },
    { type: 'number', message: '请填写数字' }
  ],
  numberOfPagerColumns: [
    { required: true, message: '请填写卷子列数' },
    { type: 'number', message: '请填写数字' }
  ],
  paperTitle: [
    { required: true, message: '请填写卷子标题' }
  ],
  paperSubTitle: [
    { required: true, message: '请填写卷子副标题' }
  ]
})

const refForm = ref(null)

const whereIsResultOptions = computed(() => {
  // 题型设置为求算数项时不能有余数
  const disabled = formData.value.remainder == '3'
  return [
    { key: '0', label: "求结果", disabled: false },
    { key: '1', label: "求算数项", disabled }
  ]
})

const remainderOptions = computed(() => {
  // 题型设置为求算数项时不能有余数
  // 多步运算时不能有余数
  const disabled = formData.value.whereIsResult == '1' || formData.value.step > 1
  return [
    { key: '1', label: "随机余数", disabled: false },
    { key: '2', label: "结果整除", disabled: false },
    { key: '3', label: "结果余数", disabled }
  ]
})

/**
 * 
 * @param {Function} done 
 */
const handleClose = (done) => {
  refForm?.value?.validate((valid) => {
    if (!valid) return

    done()
  })

}
</script>

<style lang="scss" scoped></style>