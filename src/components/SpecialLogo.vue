<script setup>
import anime from 'animejs'
import { onMounted } from 'vue'

const props = defineProps({
  direction: { type: String, default: 'vertical' },
})

onMounted(() => {
  const logoAnimation = anime.timeline({
    loop: true,
    direction: 'alternate',
  })
  const offsetTime = 600

  logoAnimation
    .add(
      {
        targets: '.special-logo #rl path',
        translateX: [-1000, 0],
        opacity: {
          value: [0, 1],
          duration: 100,
        },
        delay: (el, i) => offsetTime + i * 75,
        duration: 400,
        easing: 'easeOutExpo',
      },
      0
    )
    .add(
      {
        targets: '.special-logo #lr path',
        translateX: [1000, 0],
        opacity: {
          value: [0, 1],
          duration: 100,
        },
        delay: (el, i) => offsetTime + i * 75,
        duration: 400,
        easing: 'easeOutExpo',
      },
      0
    )
    .add(
      {
        targets: '.special-logo #tb path',
        translateY: [-1000, 0],
        opacity: {
          value: [0, 1],
          duration: 1000,
        },
        stroke: '#bf3553',
        delay: (el, i) => offsetTime + i * 75,
        duration: 1000,
        easing: 'easeOutExpo',
      },
      0
    )
    .add(
      {
        targets: '.special-logo #lbrt path',
        translateX: [-1000, 0],
        translateY: [1000, 0],
        opacity: {
          value: [0, 1],
          duration: 1000,
        },
        delay: (el, i) => offsetTime + i * 75,
        duration: 1000,
        easing: 'easeOutExpo',
      },
      0
    )
    .add(
      {
        targets: '.special-logo #rblt path',
        translateX: [1000, 0],
        translateY: [1000, 0],
        opacity: {
          value: [0, 1],
          duration: 1000,
        },
        delay: (el, i) => offsetTime + i * 75,
        duration: 1000,
        easing: 'easeOutExpo',
      },
      0
    )
    .add({
      duration: 1000,
    })
})
</script>

<template>
  <div class="special-logo" :class="direction">
    <svg width="100%" height="100%" viewBox="0 0 2481 3508" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-miterlimit: 1.5;
      " v-if="direction === 'vertical'">
      <g id="tb" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <path d="M1232.02,1171.37L1232.02,1217.6" style="fill: none; stroke-width: 5.68px" />
        <path d="M1066,1217.16L1066,1387.55" style="fill: none; stroke-width: 5.68px" />
        <path d="M1397.42,1218.44L1397.42,1386.7" style="fill: none; stroke-width: 5.68px" />
        <g transform="matrix(1,0,0,1,1.29674,89.4725)">
          <path d="M1233.01,1845.94L1233.01,2065.83" style="fill: none; stroke-width: 5.68px" />
        </g>
      </g>
      <g id="lr" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <path d="M1020.24,1164.91L1445.15,1164.91" style="fill: none; stroke-width: 5.68px" />
        <g transform="matrix(1,0,0,1,1.29674,89.4725)">
          <path d="M1018.96,1687.14L1443.87,1687.14" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,1.29674,89.4725)">
          <path d="M1011.53,2067.96L1455.02,2067.96" style="fill: none; stroke-width: 5.68px" />
        </g>
      </g>
      <g id="rl" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <path d="M1079.39,1220.66L1386,1220.66" style="fill: none; stroke-width: 5.68px" />
        <path d="M1079.39,1274.71L1384.3,1274.71" style="fill: none; stroke-width: 5.68px" />
        <path d="M1079.39,1330.12L1383.62,1330.12" style="fill: none; stroke-width: 5.68px" />
        <path d="M1079.05,1386.54L1386,1386.54" style="fill: none; stroke-width: 5.68px" />
        <path d="M1151.93,1440.89L1397.85,1440.89" style="fill: none; stroke-width: 5.68px" />
        <g transform="matrix(1,0,0,1,1.29674,89.4725)">
          <path d="M1055.61,1935.17L1417.31,1935.17" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,1.29674,89.4725)">
          <path d="M1054.81,1831.34L1379.07,1831.34" style="fill: none; stroke-width: 5.68px" />
        </g>
      </g>
      <g id="lbrt" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <path d="M1181.79,1393.77L1036.13,1539.42" style="fill: none; stroke-width: 5.68px" />
        <g transform="matrix(1,0,0,1,1.29674,89.4725)">
          <path d="M1186.27,1697.23L1052.16,1831.34" style="fill: none; stroke-width: 5.68px" />
        </g>
        <path d="M1395.72,1445.14L1114.22,1667.68" style="fill: none; stroke-width: 5.68px" />
      </g>
      <g id="rblt" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <g transform="matrix(1.05711,-0.167628,0.300606,1.02724,-501.948,158.004)">
          <path d="M1146.44,1448.84L1341.33,1689.43" style="fill: none; stroke-width: 5px" />
        </g>
        <g transform="matrix(0.841362,-0.158638,-0.158638,0.841362,505.146,589.073)">
          <path d="M1295.68,1738.12L1455.55,1898" style="fill: none; stroke-width: 8.32px" />
        </g>
      </g>
    </svg>
    <svg width="100%" height="100%" viewBox="0 0 3508 2481" version="1.1" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linecap: square;
        stroke-linejoin: round;
        stroke-miterlimit: 1.5;
      " v-else>
      <g id="tb" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1232.02,1171.37L1232.02,1217.6" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1066,1217.16L1066,1387.55" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1397.42,1218.44L1397.42,1386.7" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1.01593,0,0,1.27794,464.973,-957.488)">
          <path d="M1233.01,1845.94L1233.01,2065.83" style="fill: none; stroke-width: 4.92px" />
        </g>
      </g>
      <g id="lr" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1020.24,1164.91L1445.15,1164.91" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1.01593,0,0,1.27794,464.973,-957.488)">
          <path d="M1018.96,1687.14L1443.87,1687.14" style="fill: none; stroke-width: 4.92px" />
        </g>
        <g transform="matrix(1.01593,0,0,1.27794,464.973,-957.488)">
          <path d="M1011.53,2067.96L1455.02,2067.96" style="fill: none; stroke-width: 4.92px" />
        </g>
      </g>
      <g id="rl" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1079.39,1220.66L1386,1220.66" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1079.39,1274.71L1384.3,1274.71" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1079.39,1330.12L1383.62,1330.12" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1079.05,1386.54L1386,1386.54" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1151.93,1440.89L1397.85,1440.89" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1.01593,0,0,1.27794,464.973,-957.488)">
          <path d="M1055.61,1935.17L1417.31,1935.17" style="fill: none; stroke-width: 4.92px" />
        </g>
        <g transform="matrix(1.01593,0,0,1.27794,464.973,-957.488)">
          <path d="M1054.81,1831.34L1379.07,1831.34" style="fill: none; stroke-width: 4.92px" />
        </g>
      </g>
      <g id="lbrt" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1181.79,1393.77L1036.13,1539.42" style="fill: none; stroke-width: 5.68px" />
        </g>
        <g transform="matrix(1.01593,0,0,1.27794,464.973,-957.488)">
          <path d="M1186.27,1697.23L1052.16,1831.34" style="fill: none; stroke-width: 4.92px" />
        </g>
        <g transform="matrix(1,0,0,1,-87.4554,22.094)">
          <path d="M1395.72,1445.14L1114.22,1667.68" style="fill: none; stroke-width: 5.68px" />
        </g>
      </g>
      <g id="rblt" transform="matrix(2.43057,0,0,2.43057,-1762.2,-2295.22)">
        <g transform="matrix(1.05711,-0.167628,0.300606,1.02724,-589.403,180.098)">
          <path d="M1146.44,1448.84L1341.33,1689.43" style="fill: none; stroke-width: 5px" />
        </g>
        <g transform="matrix(0.854768,-0.202729,-0.161165,1.07521,976.85,-319.03)">
          <path d="M1295.68,1738.12L1455.55,1898" style="fill: none; stroke-width: 7.21px" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style lang="scss">
.special-logo {
  height: 30rem;

  svg {
    stroke: #202020;
  }
}

.dark .special-logo {
  svg {
    stroke: #f2f2f2;
  }
}
</style>
