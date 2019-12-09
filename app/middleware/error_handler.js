module.exports = (Option, app) => {
    return async function (ctx, next) {
        try {
            await next();
        } catch (err) {
            // 所有异常都都在 app上触发一个error事件,框架会记录一个错误日志
            app.emit('error', err, this)
            const status = err.status || 500;
            // 生产环境 500 错误的详细错误内容不会返回客户端, 因为可能包含敏感信息
            const error = status === 500 && app.config.env === 'prod' ? "Internal Serve Error" : err.message
            // 从error 对象上读出各个属性, 设置到相应中
            ctx.body = {
                code: status,
                msg: error
            }
            if (status === 422) {
                ctx.body.detail = err.errors
            }
            ctx.status = 200;
        }
    }
}