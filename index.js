/**
 * Created by Administrator on 2015/12/24.
 */
require.config({
    baseUrl: './comps',
    paths: {
        jquery: "../utils/jquery",
        base: "../utils/base",
        storage: '../utils/storage',
        sTodo: '../services/sTodo'
    }
});

require(['jquery', 'msgHub', 'todoApp'], function ($, msgHub, todoApp) {
    todoApp.render($('#app'))
});