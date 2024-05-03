# 如何用 CSS 使多行列表最后一行对齐

[原文](https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/)

页面上经常会出现类似的需求，需要将 N 个对象呈多行多列方正对齐显示，一般而言，我们可以很快写下如下代码：

```scss
.t1 {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > div {
    width: 24%;
    height: 100px;
    margin-top: 10px;
  }
}
```

<style type="scss">
  .t1 {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > div {
      width: 24%;
      height: 100px;
      background-color: #2F4858;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      margin-top: 10px;
    }
  }

  .t2 {
    justify-content: initial;
    > div:not(:nth-child(4n)) {
      margin-right: calc(4% / 3)
    }
  }
</style>

<!-- <input type="range" min="1" max="12" step="1" v-model.number="cnt"> -->
<div class="jt t1">
  <div v-for="v in cnt">😊</div>
</div>

到此为止看上去还不错，但如果是 7 项而不是 8 项就会出现问题，第二行没有对齐:

<div class="jt t1">
  <div v-for="v in 7">😭</div>
</div>

上面的问题出在`justify-content: space-between;`这个属性上，因此首先可以想到不用这个属性，中间的空隙用`margin`模拟，如下:

```css
.t2 {
  justify-content: initial;
  > div:not(:nth-child(4n)) {
    margin-right: calc(4% / 3);
  }
}
```

<div class="jt t1 t2">
  <div v-for="v in 7">🤔</div>
</div>

注意到 css 中的`margin-right: calc(4% / 3);`实际上限制了列数为 4，因此，这种方式适合列为定值的情况，不只是可以定制普通块的`margin`，也可以定制最后一行最后一个元素的块的`margin`，同样可以达到对齐的效果。

更多的内容详见[原文](https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/)，要么是使用 margin 来计算空白宽度，要么使用空白占位符来撑开宽度，这样的方式可以实现目的但比较不通用，随着时代发展，现在浏览器对 Grid 也基本实现了兼容，因此多数时候直接用 Grid 还是最为方便的。

<script setup>
import { onMounted, ref, watch } from 'vue'
const cnt = ref(8)
</script>
