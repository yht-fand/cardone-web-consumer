# 用户 - 修改

## 权限

> **read,usercenter-user-modifyModal-read**

> **read-my-department,usercenter-user-modifyModal-read-my-department**

> **read-my,usercenter-user-modifyModal-read-my**

## 路径

[./usercenter/user/modifyModal.json](../../../../usercenter/user/modifyModal.json)

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
  "address": null,
  "age": null,
  "areaCode": null,
  "beginDate": null,
  "birthday": null,
  "callName": null,
  "cityCode": null,
  "companyName": null,
  "countryCode": null,
  "createdByCode": null,
  "createdDate": null,
  "dataStateCode": null,
  "departmentCode": null,
  "diplomaCode": null,
  "email": null,
  "endDate": null,
  "flagCode": null,
  "folkCode": null,
  "idCardNo": null,
  "intro": null,
  "lastModifiedByCode": null,
  "lastModifiedDate": null,
  "locus": null,
  "marryStateCode": null,
  "mobilePhone": null,
  "name": null,
  "orgCode": null,
  "password": null,
  "passwordSalt": null,
  "permissionCodes": null,
  "portraitUrl": null,
  "privatePassword": null,
  "privatePasswordSalt": null,
  "professionCode": null,
  "provinceCode": null,
  "qq": null,
  "roleCodes": null,
  "sexCode": null,
  "stateCode": null,
  "telephone": null,
  "userCode": null,
  "userId": null,
  "version": null,
  "wfId": null
}
```

## 输出说明

字段名|可为空|类型及范围|说明
---|---|---|---
address|true|String|地址
age|true|Long|年龄
areaCode|true|String|区域代码
beginDate|true|Date|开始时间
birthday|true|Date|出生日期
callName|true|String|昵称
cityCode|true|String|市代码
companyName|true|String|工作单位
countryCode|true|String|国家代码
createdByCode|true|String|创建人代码
createdDate|true|Date|创建时间
dataStateCode|true|String|数据状态代码
departmentCode|true|String|部门代码
diplomaCode|true|String|学历/文凭代码
email|true|String|邮箱
endDate|true|Date|结束时间
flagCode|true|String|标记代码
folkCode|true|String|民族代码
idCardNo|true|String|身份证号码
intro|true|String|简介
lastModifiedByCode|true|String|最后修改人代码
lastModifiedDate|true|Date|最后修改时间
locus|true|String|现居住地
marryStateCode|true|String|婚姻状态代码
mobilePhone|true|String|手机
name|true|String|名称
orgCode|true|String|组织代码
password|true|String|密码
passwordSalt|true|String|密码盐
permissionCodes|true|String|许可代码集合
portraitUrl|true|String|肖像路径
privatePassword|true|String|隐私资料查看密码
privatePasswordSalt|true|String|隐私密码盐
professionCode|true|String|职业代码
provinceCode|true|String|省代码
qq|true|String|QQ号码
roleCodes|true|String|角色代码集合
sexCode|true|String|性别代码
stateCode|true|String|状态代码
telephone|true|String|联系电话
userCode|true|String|用户代码
userId|true|String|用户标识
version|true|Long|版本
wfId|true|String|工作流标识
