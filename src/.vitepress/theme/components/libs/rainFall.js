export function emojiFall(options) {
  const possibleEmoji = (options && options.emoji) || ['😀', '😂', '😆', '😊']
  const delay = (options && options.delay) || 1000 // 粒子生成间隔
  let hasWrapperEl = options && options.element
  let element = hasWrapperEl || document.body

  let width = window.innerWidth
  let height = window.innerHeight
  const particles = []
  const canvImages = []
  let canvas, context, animationFrame
  let elAnchor = options.anchor

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  )

  prefersReducedMotion.onchange = () => {
    if (prefersReducedMotion.matches) {
      destroy()
    } else {
      init()
    }
  }

  function init() {
    if (prefersReducedMotion.matches) return

    // 初始化画布
    canvas = document.createElement('canvas')
    context = canvas.getContext('2d')
    canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;'
    ;(hasWrapperEl ? element : document.body).appendChild(canvas)
    resizeCanvas()

    // 初始化Emoji图片
    initEmojiCanvas()

    bindEvents()
    loop()
  }

  function initEmojiCanvas() {
    context.font = '21px serif'
    context.textBaseline = 'middle'
    context.textAlign = 'center'

    possibleEmoji.forEach((emoji) => {
      let bgCanvas = document.createElement('canvas')
      let bgContext = bgCanvas.getContext('2d')
      const metrics = context.measureText(emoji)

      bgCanvas.width = metrics.width
      bgCanvas.height = metrics.actualBoundingBoxAscent * 2

      bgContext.fillStyle = '#000'
      bgContext.font = '21px serif'
      bgContext.textAlign = 'center'
      bgContext.textBaseline = 'middle'
      bgContext.fillText(
        emoji,
        bgCanvas.width / 2,
        metrics.actualBoundingBoxAscent
      )

      canvImages.push(bgCanvas)
    })
  }

  function resizeCanvas() {
    width = hasWrapperEl ? element.clientWidth : window.innerWidth
    height = hasWrapperEl ? element.clientHeight : window.innerHeight
    canvas.width = width
    canvas.height = height
  }

  function bindEvents() {
    window.addEventListener('resize', onWindowResize)
    // 定时生成粒子
    setInterval(generateParticles, delay)
  }

  function onWindowResize() {
    resizeCanvas()
  }

  function generateParticles() {
    const el = elAnchor
    const rect = el.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    addParticle(x, y, canvImages[Math.floor(Math.random() * canvImages.length)])
  }

  function addParticle(x, y, img) {
    particles.push(new Particle(x, y, img))
  }

  function updateParticles() {
    context.clearRect(0, 0, width, height)

    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update(context)
      if (particles[i].lifeSpan <= 0) {
        particles.splice(i, 1)
      }
    }
  }

  function loop() {
    updateParticles()
    animationFrame = requestAnimationFrame(loop)
  }

  function destroy() {
    canvas.remove()
    cancelAnimationFrame(animationFrame)
    window.removeEventListener('resize', onWindowResize)
  }

  // 粒子类（修改运动方向）
  function Particle(x, y, canvasItem) {
    const lifeSpan = Math.floor(Math.random() * 60 + 80)
    this.initialLifeSpan = lifeSpan
    this.lifeSpan = lifeSpan
    this.velocity = {
      x: (Math.random() - 0.5) * 0.5, // 横向随机摆动
      y: Math.random(), // 向下运动
    }
    this.position = { x: x, y: y }
    this.canv = canvasItem

    this.update = function (context) {
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      this.lifeSpan--

      this.velocity.y += 0.01 // 模拟重力加速

      const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0)

      context.drawImage(
        this.canv,
        this.position.x - (this.canv.width / 2) * scale,
        this.position.y - this.canv.height / 2,
        this.canv.width * scale,
        this.canv.height * scale
      )
    }
  }

  init()

  return {
    destroy: destroy,
  }
}
