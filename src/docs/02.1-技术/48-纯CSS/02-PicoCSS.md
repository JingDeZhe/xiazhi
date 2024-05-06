# PicoCSS

[官网](https://picocss.com/docs)

PicoCSS 是一个简单的样式库，争取以以最少的类实现统一美观的页面效果，也就是说，它默认是直接修改标签样式的，常规的 CSS 库可能会这样写样式，标签上面的类名是作用范围：

```html
<button class="btn">按钮</button>
```

但在 Pico 中，这样写就好，并不需要添加类名，因为样式是直接作用于标签的：

```html
<button>按钮</button>
```

因此，我们写页面的时候不需要特别注意类名就可以写出好看的效果，以 Form 表单为例：

```html
<form>
  <fieldset>
    <label>
      First name
      <input
        name="first_name"
        placeholder="First name"
        autocomplete="given-name"
      />
    </label>
    <label>
      Email
      <input
        type="email"
        name="email"
        placeholder="Email"
        autocomplete="email"
      />
    </label>
  </fieldset>

  <input type="submit" value="Subscribe" />
</form>
```

我们没写任何的类就能得到下面的结果：

<my-iframe src="libs/picocss/index.html"></my-iframe>

## 优缺点

样式直接作用于标签对于新开的页面比较好用，但不适合改造已有页面或者和其它 UI 框架配合使用，因此，Pico 对自身的定位就是基础简单页面的样式优化，不适用于复杂和已存在其余样式的页面，这点需要特别注意。

### 优点

1. 非常小，只有几 Kb，引入毫无负担；
2. 支持主题切换，且内置丰富的颜色类；
3. 基本支持常见标签，如布局、按钮、表单、Table、Loading、进度条等；
4. 支持和 Sass、Less 搭配使用；

### 缺点

1. 样式会影响其它的 UI 框架，因此不直接适用于和其它 UI 框架搭配使用；

:::info [Conditional styling](https://picocss.com/docs/conditional)
如果不想全局应用 PicoCSS 的样式，可以使用<em c>Conditional styling</em>，让样式仅在`.pico`类下生效以做兼容性处理。
:::
