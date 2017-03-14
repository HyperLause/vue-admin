//根据 主机名 来决定用 远程还是 本地路径
let host = location.hostname
//console.log(host)
let base = (host == 'localhost') ? 'http://tp5.liu/index.php/' : 'http://tp5.sseoo.com/'
//console.log(base);
export default{
	menu : base + 'api/menu',
	user : base + 'api/user',
}
