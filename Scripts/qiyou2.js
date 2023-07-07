var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.POINT_MEMBER=true,
obj.AVERT_EXTERNAL_ADV=true,
obj.PC_PAYMENT_MEMBER=true,
obj.UNLIMITED_SPEEDUP=true,
obj.ACTIVITY_CENTERobj. : true,
obj.ALONE_MEMBER=true,
obj.MB_PAYMENT_MEMBER=true,
obj.PRIORITY_RECEPTION=true

obj.member.user_type=1;
obj.member.member_pay_flag=1;
body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
