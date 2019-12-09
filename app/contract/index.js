module.exports = {
    baseRequest: {
        id: {type:'string', required: true, example: '0', description:'id 唯一主键'},
    },
    baseResponse: {
        code: {type:'integer', required: true, example: 0},
        data:{type: 'string', example: '请求成功'},
        msg:{ type: 'string', example: '请求成功'}
    }
}