<template>
  <form class="content" @submit.prevent="send" @keydown="clearError($event.target.name)">

    <div class="field">
      <input type="text" name="name" class="input" :placeholder="form.placeholders.name" required minlength=2 maxlength="16" v-model="form.data.name">
      <div class="icon">
        <img :src="require(`../assets/images/${form.icons.name}`)" alt="Name">
      </div>
      <small v-if="errors.name" class="small-danger">{{ errors.name[0] }}</small>
    </div>
    <div class="field">
      <input type="email" name="email" class="input" :placeholder="form.placeholders.email" required v-model="form.data.email">
      <div class="icon">
        <img :src="require(`../assets/images/${form.icons.email}`)" alt="Email">
      </div>
      <small v-if="errors.email" class="small-danger">{{ errors.email[0] }}</small>
    </div>
    <div class="field">
      <input type="tel" name="phone" class="input" :placeholder="form.placeholders.phone" required pattern="\d*" minlength=12 maxlength="12" v-model="form.data.phone">
      <div class="icon">
        <img :src="require(`../assets/images/${form.icons.phone}`)" alt="Phone">
      </div>
      <small v-if="errors.phone" class="small-danger">{{ errors.phone[0] }}</small>
    </div>
    <button class="button">{{ form.button.name }}<img :src="require(`../assets/images/${form.button.icon}`)" alt="sumit"></button>

  </form>
</template>

<script>

export default {

  data() {

    return {

      form: {
        placeholders: {
          name: "Ваше І'мя",
          email: "Email",
          phone: "Ваш телефон"
        },
        icons: {
          name: "name.svg",
          email: "email.svg",
          phone: "phone.svg"
        },
        button: {
          name: "Відправити",
          icon: "arrow-yellow.svg"
        },
        data: {
          name:'',
          email:'',
          phone:''
        }
      },

      errors:{},

    }

  },

  methods:{

    clearError(field){
      if (field) {
        delete this.errors[field];
      }
    },

    send(){
      if (!Object.keys(this.errors).length) {
        this.axios.post('/callback',this.$data.form.data)
        .then((response)=> {
          this.$parent.formData.push(response.data)
          this.$emit('sort')
          this.close()
        })
        .catch((error) => {
          if (error.response.status == 404 || error.response.status == 500) {
            alert(`Status: ${error.response.status}. Error: ${error.response.statusText}`);
          }
          else {
            this.errors = error.response.data;
          }
        })
      }
    }

  }

}

</script>

<style lang="scss" scoped>

  $input-color: #562100;
  $danger-color: #bd2130;

  .content {
    margin-top: -10px;
    align-items: center;

    .field {
      width: 184px;
      margin: 0 58px 40px 0;
      position: relative;
    }

    .input {
      width: 100%;
      height: 50px;
      background: transparent;
      box-sizing: border-box;
      border: 0;
      box-shadow: none;
      border-bottom: 1px solid $input-color;
      font-family: Gilroy;
      font-weight: 500;
      font-style: normal;
      font-size: 16px;
      line-height: 1;
      color: $input-color;
      padding: 0 10px 0 26px;
    }

    input::-webkit-input-placeholder {
      color: $input-color;
      font-size: 16px;
      opacity: 1;
    }

    input::-moz-placeholder {
      color: $input-color;
      font-size: 16px;
      opacity: 1;
    }

    input:-moz-placeholder {
      color: $input-color;
      font-size: 16px;
      opacity: 1;
    }

    input:-ms-input-placeholder {
      color:  $input-color;
      font-size: 16px;
      opacity: 1;
    }

    .button {
      -webkit-appearance: none!important;
      font-family: Gilroy;
      font-weight: 500;
      font-style: normal;
      font-size: 20px;
      padding: 0;
      margin-top: -10px;
      border: 0;
      cursor: pointer;
      background: transparent;
    }

    .icon {
      position: absolute;
      top: 40%;
      left: 0;
      width: 10px;
      height: 12px;
      display: flex;

      img {
        width: 100%;
      }

    }

    .small-danger {
      color: $danger-color;
      font-size: 12px;
      position: absolute;
      top: calc(100% + 2px);
      right: 0;
    }

  }

  @media (max-width: 1440px) {

    .content {

      .field {
        width: 150px;
        margin: 0 40px 30px 0;
      }

      .input {
        height: 40px;

        font-size: 14px;
        padding: 0 8px 0 22px;
      }

      input::-webkit-input-placeholder {
        font-size: 14px;
      }

      input::-moz-placeholder {
        font-size: 14px;
      }

      input:-moz-placeholder {
        font-size: 14px;
      }

      input:-ms-input-placeholder {
        font-size: 14px;
      }

      .button {
        font-size: 18px;
        margin-top: -10px;
      }

      .icon {
        width: 8px;
        height: 10px;
      }

    }

  }

  @media (max-width: 980px) {

    .content {
      margin-top: 0;
      flex-direction: column;

      .field {
        margin: 0 0px 30px 0;
      }

      .button {
        margin-top: 0;
      }

    }

  }

</style>
