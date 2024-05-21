//#region fib1
function fib1(n) {
  const memo = []

  const fn = (n) => {
    if (n === 0 || n === 1) return n
    if (memo[n]) return memo[n]
    memo[n] = fn(n - 1) + fn(n - 2)
    return memo[n]
  }

  return fn(n)
}
//#endregion fib1

//#region fib2
function fib2(n) {
  const dp = new Array(n).fill(0)
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}
//#endregion fib2

//#region fib3
function fib3(n) {
  if (n === 0 || n === 1) return n
  const dp = [0, 1]
  for (let i = 2; i < n; i++) {
    const t = dp[1]
    dp[1] = dp[0] + dp[1]
    dp[0] = t
  }
  return dp[0] + dp[1]
}
//#endregion fib3

console.log(fib1(20))
console.log(fib2(20))
console.log(fib3(20))
