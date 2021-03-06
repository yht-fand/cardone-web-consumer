define(['backbone'], function () {
    'use strict';
    return Backbone.Model.extend({
        url: C1.apiUrlRoot + '/v1/authority/userRole/u0001.json',
        validate: function (attrs, options) {
            if (!attrs.code || $.trim(attrs.code) === '') {
                return '用户与角色编码不能为空值';
            }
        }
    });
});