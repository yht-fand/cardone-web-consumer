# 工作流

## 权限

> **read,workflow-index-read**

> **read-my-department,workflow-index-read-my-department**

> **read-my,workflow-index-read-my**

## 路径

[./workflow/index.json](../../../workflow/index.json)

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
  "workflow_wfVariable_index": true,
  "workflow_wfVariableUser_index": true
}
```

## 输出说明

字段名|可为空|类型及范围|说明
---|---|---|---
workflow_wfVariable_index|true|boolean|是否有权限访问工作流变量
workflow_wfVariableUser_index|true|boolean|是否有权限访问工作流变量与用户
