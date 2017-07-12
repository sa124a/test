// demo.js
require('Methods, UIScreen,UIScrollView, CGPoint,inout CGPoint,UIView,FourShopTipV,MenuView,UICollectionView,UIView+Frame')

require('UIView');
defineClass('MallVC', {
            scrollViewWillEndDragging_withVelocity_targetContentOffset: function(scrollView, velocity, targetContentOffset) {
            
            
            
            if (scrollView.tag() == 3 || scrollView.tag() == 4) {
            
            if (velocity.y > 1) {
            //向上滑动隐藏导航栏
            UIView.animateWithDuration_animations(0.5, block(function() {
                                                               self.navView().setHeight(20);
                                                               self.fourShopTipV().setY(self.navView().bottom());
                                                               self.menuView().setY(self.fourShopTipV().bottom());
                                                               self.mallCollection().setY(self.menuView().bottom());
                                                               self.mallCollection().setHeight(UIScreen.mainScreen().bounds().height - self.menuView().bottom() - 49);
                                                               if (self.haveBackBtn()) {
                                                               self.mallCollection().setHeight(UIScreen.mainScreen().bounds().height - self.menuView().bottom());
                                                               }
                                                               }));
            } else if (velocity.y <= -0.5) {
            //向下滑动显示导航栏
            UIView.animateWithDuration_animations(0.5, block(function() {
                                                               self.navView().setHeight(64);
                                                               self.fourShopTipV().setY(self.navView().bottom());
                                                               self.menuView().setY(self.fourShopTipV().bottom());
                                                               
                                                               self.mallCollection().setY(self.menuView().bottom());
                                                               self.mallCollection().setHeight(UIScreen.mainScreen().bounds().height - self.menuView().bottom() - 49);
                                                               if (self.haveBackBtn()) {
                                                               self.mallCollection().setHeight(UIScreen.mainScreen().bounds().height - self.menuView().bottom());
                                                               }
                                                               }));
            }
            }
            },
            });
