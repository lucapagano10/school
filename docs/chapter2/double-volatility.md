---
label: "Double Volatility and More"
icon: alert
order: 240
---

# Why This Matters: Double Volatility and More

1. Collateral Volatility
   - In the normal world: If you deposit $10,000 as margin, that generally stays $10,000, ignoring small fluctuations in stablecoins.
   - In the BTC world: Your 1 BTC margin could be worth $100,000 on Monday, $102,000 on Tuesday, $98,000 on Wednesday... you get the idea. If BTC's value plunges, your margin's USD value also plunges. This can tighten your available margin and potentially trigger margin calls or liquidations more quickly.

2. Relative Performance Matters
With SPX/BTC, you're effectively trading the ratio of SPX to BTC. Even if SPX goes up in USD terms, if BTC pumps more aggressively, you might end up on the losing side of the ratio.

- Example:
   - Let's say SPX jumps +5% in USD terms over a week. Normally, that'd be a sweet profit if you were long.
   - But if BTC pumps +10% in that same week, the SPX/BTC ratio actually drops, because you now need fewer BTC to buy the same SPX.
   - If you were long SPX/BTC, you could lose BTC in that scenario, even though SPX's USD price went up.

3. BTC as the Denominator
This single shift (from USD to BTC as the denominator) flips a lot of the usual thinking on its head. For instance, if you short SPX/BTC, you're essentially betting that BTC will outperform SPX, that it'll take fewer BTC to buy 1 SPX unit in the future.

4. Funding Rates in BTC
As with normal perps, there will be a funding rate. But it'll be based on the SPX/BTC ratio. If demand is heavily one-sided (say everyone is short SPX/BTC), the funding rate could get skewed, and those short-sellers would have to pay a premium to the longs, or vice versa. Not only do you have to watch the ratio, you have to watch how the market is leaning in BTC terms.
