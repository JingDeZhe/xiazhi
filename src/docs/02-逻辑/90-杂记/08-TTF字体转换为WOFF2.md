# TTF 字体转换为 WOFF2

## 安装依赖

```shell
# brotli是为了字体压缩
pip install fonttools brotli
```

## 转换

常规的中文字体文件由于包含了简繁体等字体通常相对比较大，但对于寻常的网站，只需要简体就好，因此这里需要一个文字编码表用以过滤文字范围以减小体积：

<my-a href="/data/sc_unicode.txt" download="sc_unicode.txt">sc_unicode.txt</my-a>

有了编码表之后，便可以结合原始 TTF 文件和编码表生成子集的 woff2 文件：

```shell
pyftsubset LXGWWenKaiGBScreen.ttf --unicodes-file=sc_unicode.txt --with-zopfli --flavor=woff2
```

如此一来，便能减少不小的体积，以上述的*落霞孤鹜文楷*字体为例：

| 字体       | 大小  |
| ---------- | ----- |
| 原始字体   | 18.5M |
| 子集 TTF   | 3.36M |
| 子集 WOFF2 | 1.74M |

## 附件

<my-a href="/data/sc_unicode.txt" download="sc_unicode.txt">sc_unicode.txt</my-a>
<br>
<my-a href="/fonts/LXGWWenKaiGBScreen.woff2" download="LXGWWenKaiGBScreen.woff2">LXGWWenKaiGBScreen.woff2</my-a>
