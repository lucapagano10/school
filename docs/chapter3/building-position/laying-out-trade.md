---
label: "Laying Out the Trade"
icon: workflow
order: 395
---

# Laying Out the Trade

Let's say you want to go long OIL/BTC because you think oil is about to rally hard in BTC terms (maybe OPEC is cutting production and you expect BTC to remain stable).

- Current OIL/BTC Mark Price: 0.002 BTC.
- Number of Contracts: 5 (lets say ~100 barrels, but it's all wrapped into that BTC price).
- Leverage: 10x.

## Calculating Notional Value

Notional Value = Mark Price × Number of Contracts = 0.002 × 5 = 0.01 BTC

That's how much your full position is worth in BTC terms.

## Initial Margin

Initial Margin = Contract Price × Number of Contracts / Leverage = 0.002 × 5 / 10 = 0.001 BTC

You only have to put down 0.001 BTC to control 0.01 BTC worth of oil (with 10x leverage).

## Maintenance Margin

Roxom sets it at 5% (when max leverage is 10x). So:

Maintenance Margin = 0.01 BTC × 5% = 0.0005 BTC

We will soon see in detail how this plus the initial margin will determine our liquidation prices! Don't be afraid, it'll all make sense.
