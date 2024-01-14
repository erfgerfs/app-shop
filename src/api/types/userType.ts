export type loginParamsType = {
  /**
   * 登录账号
   */
  account: string;
  /**
   * 登录密码
   */
  password: string;
};

//登录返回
export interface loginReturn {
  avatar: string;
  /**
   * 生日
   */
  birthday: string;
  /**
   * 城市编码
   */
  cityCode: string;
  /**
   * 性别，男、女、未知
   */
  gender: string;
  /**
   * 用户ID
   */
  id: number;
  /**
   * 手机号
   */
  mobile: string;
  nickname: string;
  /**
   * 职业
   */
  profession: string;
  /**
   * 省份编码
   */
  provinceCode: string;
  token: string;
}


// 轮播图的返回

export interface SwitchReturn {
  /**
   * 跳转链接
   */
  hrefUrl: string;
  /**
   * id
   */
  id: string;
  /**
   * banner链接
   */
  imgUrl: string;
  /**
   * 跳转类型1、页面2、H5 3、小程序（小程序使用）
   */
  type: number;
}

//前台份分类返回数据
export interface MutliReturn {
  /**
   * 展示图标
   */
  icon: string;
  /**
   * id
   */
  id: string;
  /**
   * 分类名称
   */
  name: string;
}

//热门推荐返回的数据

export interface hotReturn {
  /**
   * 推荐说明
   */
  alt: string;
  /**
   * id
   */
  id: string;
  /**
   * 图片集合
   */
  pictures: string[];
  /**
   * 跳转地址
   */
  target: string;
  /**
   * 推荐标题
   */
  title: string;
  /**
   * 推荐类型
   */
  type: string;
}
//猜你喜欢的参数
export interface loveModel {
  /**
   * 页码默认值1
   */
  page?: number;
  /**
   * 页大小默认是10
   */
  pageSize?: number;
}

export interface loveReturn {
  /**
   * 总条数
   */
  counts: number;
  /**
   * 当前页数据
   */
  items: Item[];
  /**
   * 当前页数
   */
  page: number;
  /**
   * 总页数
   */
  pages: number;
  /**
   * 每页条数
   */
  pageSize: number;
}

export interface Item {
  /**
   * 商品描述
   */
  desc: string;
  /**
   * 商品折扣
   */
  discount: number;
  /**
   * id
   */
  id: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 商品已下单数量
   */
  orderNum: number;
  /**
   * 商品图片
   */
  picture: string;
  /**
   * 商品价格
   */
  price: number;
}
