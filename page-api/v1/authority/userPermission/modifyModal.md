# 用户与许可 - 修改

## 权限

> **read,authority-userPermission-modifyModal-read**

> **read-my-department,authority-userPermission-modifyModal-read-my-department**

> **read-my,authority-userPermission-modifyModal-read-my**

## 路径

[./authority/userPermission/modifyModal.json](../../../../authority/userPermission/modifyModal.json)

## 类型

HTTP GET

## 输入示例

```
{
  "id": "test",
  "token": "test"
}
```

## 输入说明

字段名|可为空|类型及范围|说明
---|---|---|---
id|false|String|主键
token|false|String|授权认证码

## 输出示例
```
{
  "beginDate": null,
  "createdByCode": null,
  "createdDate": null,
  "dataStateCode": null,
  "departmentCode": null,
  "endDate": null,
  "flagCode": null,
  "lastModifiedByCode": null,
  "lastModifiedDate": null,
  "orgCode": null,
  "permissionCode": null,
  "permissionCodes": null,
  "roleCodes": null,
  "stateCode": null,
  "userCode": null,
  "userPermissionId": null,
  "version": null,
  "wfId": null
}
```

## 输出说明

字段名|可为空|类型及范围|说明
---|---|---|---
beginDate|true|Date|开始时间
createdByCode|true|String|创建人代码
createdDate|true|Date|创建时间
dataStateCode|true|String|数据状态代码
departmentCode|true|String|部门代码
endDate|true|Date|结束时间
flagCode|true|String|标记代码
lastModifiedByCode|true|String|最后修改人代码
lastModifiedDate|true|Date|最后修改时间
orgCode|true|String|组织代码
permissionCode|true|String|许可代码
permissionCodes|true|String|许可代码集合
roleCodes|true|String|角色代码集合
stateCode|true|String|状态代码
userCode|true|String|用户代码
userPermissionId|true|String|用户与许可标识
version|true|Long|版本
wfId|true|String|工作流标识
