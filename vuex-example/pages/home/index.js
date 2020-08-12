import { Info, List, Cart } from '../components/Shop/';
Page({
  name: "Home",

  data() {
    return {
      isLogined: false,
      userInfo: {}
    };
  },
  methods: {
    navigateToMore() {
      qh.navigateTo({ url: "/pages/more/index" });
    }
  },
  components: {
    ShopList: List,
    ShopInfo: Info,
    ShopCart: Cart
  }
});
