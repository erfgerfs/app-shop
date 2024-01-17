//获取收货地址列表

export interface addressReturn {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 省市区(县)
   */
  fullLocation: string;
  /**
   * 收货地址id
   */
  id: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
}

export interface newlycs {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
}

export interface newlyReturn {
  id: number;
}

export interface moiReturn {
  /**
   * 账号名称
   */
  account: string;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 生日
   */
  birthday: null | string;
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string;
  /**
   * 性别，男、女、未知
   */
  gender: Gender;
  /**
   * 用户Id
   */
  id: string;
  /**
   * 昵称
   */
  nickname: null | string;
  /**
   * 职业
   */
  profession: null | string;
}

/**
 * 性别，男、女、未知
 */
export enum Gender {
  女 = "女",
  未知 = "未知",
  男 = "男",
}

//修改个人信息参数
export interface moiUpcs {
  /**
   * 生日 YYYY-MM-DD
   */
  birthday?: null | string;
  /**
   * 城市编码
   */
  cityCode?: null | string;
  /**
   * 区/县编码
   */
  countyCode?: null | string;
  /**
   * 性别，男、女、未知
   */
  gender?: Gender;
  /**
   * 昵称
   */
  nickname?: null | string;
  /**
   * 职业
   */
  profession?: null | string;
  /**
   * 省份编码
   */
  provinceCode?: null | string;
}

//个人信息修改返回
export interface moiUpReturn {
  /**
   * 账号名称
   */
  account: string;
  /**
   * 头像
   */
  avatar: string;
  /**
   * 生日
   */
  birthday: string;
  /**
   * 省市区的名称：如山东省济南市里历下区
   */
  fullLocation: string;
  /**
   * 性别，男、女、未知
   */
  gender: Gender;
  /**
   * 用户Id
   */
  id: string;
  /**
   * 昵称
   */
  nickname: string;
  /**
   * 职业
   */
  profession: string;
  /**
   * token
   */
  token: string;
}

//修改收货地址

export interface upcs {
  /**
   * 详细地址
   */
  address?: string;
  /**
   * 所在城市编码
   */
  cityCode?: string;
  /**
   * 联系方式
   */
  contact?: string;
  /**
   * 所在区/县编码
   */
  countyCode?: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault?: number;
  /**
   * 所在省份编码
   */
  provinceCode?: string;
  /**
   * 收货人姓名
   */
  receiver?: string;
}


//地址详情返回
export interface xqReturn {
  /**
   * 详细地址
   */
  address: string;
  /**
   * 所在城市编码
   */
  cityCode: string;
  /**
   * 联系方式
   */
  contact: string;
  /**
   * 所在区/县编码
   */
  countyCode: string;
  /**
   * 完整行政区
   */
  fullLocation: string;
  /**
   * 收货地址id
   */
  id: string;
  /**
   * 是否为默认，1为是，0为否
   */
  isDefault: number;
  /**
   * 所在省份编码
   */
  provinceCode: string;
  /**
   * 收货人姓名
   */
  receiver: string;
  [property: string]: any;
}
