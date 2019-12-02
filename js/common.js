// 购物车右上角气泡显示商品数
let arr = kits.loadData('cartListData');// 先读取本地数据中的数据，然后动态的生成列表结构
let total = 0;
arr.forEach(e => {
    total += e.number;
})
$('.count').text(total);