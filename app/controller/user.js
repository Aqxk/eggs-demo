const { Controller } = require('egg');

/**
 * @controller 用户管理
 * 
 */
class UserController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = {
    //     name: 'jerry',
    //     age: 19
    // }
    // 使用service获取 处理复杂业务逻辑
    let data = await ctx.service.user.getAll();
    console.log(data[0].createdAt);
    ctx.body = {
      msg: "数据成功",
      data: data,
      code: 10000
    }
  }
  /**
   * @summary 创建用户
   * @description 创建用户, 记录用户名称
   * @router post /addUser 
   * @request body createUserRequest  *body
   * @response 200 baseResponse 创建成功
   */
  async addUser() {
    const { ctx } = this;
    // 校验参数 规则自定义 
    ctx.validate(ctx.rule.createUserRequest);
    const result = await ctx.model.User.create({
      name: ctx.query.name
    });
    ctx.body = {
      code: 10000,
      msg: '添加成功'
    }
  }
}
module.exports = UserController;
