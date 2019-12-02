var kits = {};
/**
 * @description 该方法是用于求随机整数的
 * @param { number } n 随机数的下限
 * @param { number } m 随机数的上限
 * @returns Number
 */

kits.randomInt = function(n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};

// 获取数据
kits.loadData = function (key) {
    let json = localStorage.getItem(key);
    return JSON.parse(json) || [];
}
 
/**
 * @description 把复杂数据转换为json格式存储到本地数据里面的封装
 * @param { string } key
 * @param { Array || Object } data
 * @returns undefined
 */

// 存储数据
kits.saveData = function (key) {
    let json = JSON.stringify(data);
    localStorage.setItem(key,json);
 }