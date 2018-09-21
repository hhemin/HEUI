<template>
  <div class="he-switch">
    <span><slot></slot></span>
    <div :class="`border item ${(btnstate == true ? 'open':'close')}`" @click="switchValue">
       <div class="btn"></div>
    </div>
    <input
      type="checkbox"
      @change="switchValue"
      :true-value="activeValue"
      :false-value="inactiveValue"
      :disabled="disabled"
      :value="value"
    >
  </div>
</template>

<script>
  export default {
    name:'HeSwitch',
    props: {
      // 传过来的值
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      // oppen 状态
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      // close 状态
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      // 是否存在 禁止切换按钮状态
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {}
    },
    computed:{
      btnstate() {
         return this.value === this.activeValue
      },
      switchDisabled() {
        return this.disabled
      }
    },
    methods: {
      switchValue() {
        !this.switchDisabled && this._chageState();
      },
      _chageState() {
        this.$emit('input', !this.btnstate ? this.activeValue : this.inactiveValue);
      },
    }
  }
</script>

<style scoped>
.he-switch {
  display: flex;
}
.he-switch span {
  padding-right: 10px;
}
.item {
  border-radius: 10px;
  width:40px;
  height: 20px;
}
.border {
  border:1px solid #b0b0b0;
}
.open {
  display: flex;
  justify-content: flex-end;
  background-color: #03a9f4;
}
.open.border {
  border:1px solid #03a9f4;
}
.open>.btn {
  box-shadow: -1px 0px 7px 0px #000000b5;
}
.btn {
  width: 20px;
  height: 20px;
  background:#fff;
  box-shadow: 1px 0px 7px 0px #000000b5;
  border-radius: 50%;
}


input {
  display: none
}
</style>