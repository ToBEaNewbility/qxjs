var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.member.user_type=1;
obj.member.member_pay_flag=1;
body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
