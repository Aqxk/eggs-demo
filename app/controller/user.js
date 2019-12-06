const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = {
    //     name: 'jerry',
    //     age: 19
    // }
    // 使用service获取 处理复杂业务逻辑
    let data =  await ctx.service.user.getAll();
    console.log(data[0].createdAt);
    ctx.body = {
      msg:"数据成功",
      data: data,
      code:10000
    } 
  }
  async addUser() {
    const { ctx } = this;
    const result = await ctx.model.User.create({
      name: ctx.query.name
    });
    ctx.body = {
      code:10000,
      msg: '添加成功'
    }
  }
}
module.exports = UserController;
