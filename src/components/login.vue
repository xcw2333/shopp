<template>
  <div class="login_continer">
    <div class="login_box">
      <div class="img_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form ref="loginFromRef" class="login_form" :mode="loginFrom">
        <!-- 用户名 -->
        <el-form-item>
          <el-input
            prefix-icon="iconfont icon-user"
            v-model="loginFrom.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input
            prefix-icon="iconfont icon-3702mima"
            type="password"
            v-model="loginFrom.password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button :plain="true" @click="deng" type="primary">登陆</el-button>
          <el-button @click="resetLoginFrom" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单登陆数据
      loginFrom: {
        username: "admin",
        password: "123456",
      },
    };
  },
  methods: {
    //重置
    resetLoginFrom() {
      this.loginFrom.username = "";
      this.loginFrom.password = "";
    },
    deng() {
      let zh = true;
      let mi = true;
      new Promise((re) => {
        if (this.loginFrom.username == "") {
          zh = false;
          re();
          this.$message("不可以输入空账号");
        } else {
          re();
        }
      })
        .then(() => {
          return new Promise((re) => {
            if (this.loginFrom.password == "") {
              mi = false;
              this.$message("不可以输入空密码");
            } else {
              re();
            }
          });
        })
        .then(() => {
          if (mi && zh) {
            this.$axios
              .post("login", {
                username: this.loginFrom.username,
                password: this.loginFrom.password,
              })
              .then(async (res) => {
                const { data: login_data } = await res;
                console.log(this.loginFrom);
                if (login_data.meta.status != 200) {
                  this.$message("账号或者密码错误");
                } else {
                  this.$message("账号登陆成功");
                  window.sessionStorage.setItem("tokin", login_data.data.token);
                  this.$router.push({ path: "/home" });
                }
              })
              .catch((err) => {
                this.$message = "登陆失败请重新尝试";
              });
          }
        });
    },
  },
  created() {
    // console.log(this.$axios);
  },
};
</script>


<style lang='less' scoped>
.login_continer {
  width: 100%;
  background: #2b4b6b;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_box {
  position: relative;
  width: 450px;
  height: 300px;
  background: white;
}
.img_box {
  height: 130px;
  width: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 0 10px #ddd;
  position: absolute;
  left: 50%;
  background: #fff;
  transform: translate(-50%, -50%);
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>