var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.adv_video_reward.get_point_valve =200;
obj.adv_video_reward.average_point_value=200;
obj.adv_video_reward.get_point_upper_limit=2000;

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改
