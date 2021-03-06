# 国际化信息 - 搜索

## 权限

> **read,configuration-i18nInfo-index-read**

> **read-my-department,configuration-i18nInfo-index-read-my-department**

> **read-my,configuration-i18nInfo-index-read-my**

## 路径

[./configuration/i18nInfo/index.json](../../../../configuration/i18nInfo/index.json)

## 类型

HTTP GET

## 输入示例

```
{
  "token": "test"
}
```

## 输入说明

字段名|可为空|类型及范围|说明
---|---|---|---
token|false|String|授权认证码

## 输出示例

```
{
  "permission_add": true,
  "permission_modify": true,
  "permission_delete": true,
  "permission_impData": true,
  "permission_expData": true
}
```

## 输出说明

字段名|可为空|类型及范围|说明
---|---|---|---
permission_add|true|boolean|是否可以新增
permission_modify|true|boolean|是否可以修改
permission_delete|true|boolean|是否可以删除
permission_impData|true|boolean|是否可以导入
permission_expData|true|boolean|是否可以导出