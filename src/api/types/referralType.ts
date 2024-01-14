export interface referralcs {
  /**
   * 分页页码
   */
  page?: number;
  /**
   * 分页数据每页条数
   */
  pageSize?: number;
  /**
   * Tab 项的 id，默认查询全部 Tab 项的第 1 页数据
   */
  subType?: string;
}

export interface referralReturn {
  /**
   * 活动图片
   */
  bannerPicture: string;
  /**
   * id信息
   */
  id: string;
  /**
   * 子类选项集合
   */
  subTypes: SubType[];
  /**
   * 活动标题
   */
  title: string;
  [property: string]: any;
}

/**
 * 子类选项
 */
export interface SubType {
  goodsItems: GoodsItem[];
  /**
   * 子类选项id
   */
  id: string;
  /**
   * 子类选项名称
   */
  title: string;
  [property: string]: any;
}

export interface GoodsItem {
  /**
   * 总数量
   */
  counts: string;
  /**
   * 商品集合
   */
  items: Item[];
  /**
   * 页码
   */
  page: string;
  /**
   * 总页数
   */
  pages: string;
  /**
   * 页容量
   */
  pageSize: string;
}

/**
 * 商品项
 */
export interface Item {
  /**
   * 商品描述
   */
  desc: string;
  /**
   * 商品id
   */
  id: string;
  /**
   * 商品名称
   */
  name: string;
  /**
   * 商品图片
   */
  picture: string;
  /**
   * 商品价格
   */
  price: number;
}
