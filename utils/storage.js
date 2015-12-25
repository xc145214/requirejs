/**
 * Created by Administrator on 2015/12/24.
 */

"use strict";

/**
 * 使用localStorage作为存储
 * 典型面向对象
 */
define([], function () {

    function Storage() {
    };

    Storage.prototype.put = function (id, data) {
        localStorage.setItem(id, JSON.stringify(data));
    };

    Storage.prototype.get = function (id) {
        return JSON.parse(localStorage.getItem(id) || '[]');
    };

    Storage.prototype.clean = function (id) {
        this.put(id, []);
    };

    return new Storage();
});