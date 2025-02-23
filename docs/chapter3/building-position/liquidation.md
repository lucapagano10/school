---
label: "Watching Out for Liquidation"
icon: alert
order: 398
---

# Watching Out for Liquidation

The more leverage you use, the more likely you are to get liquidated if the market moves against you.

## Liquidation Price

- Longs:

  Liquidation Price = Entry Price × (1 - InitialMarginRate + MaintenanceMarginRate)

- Shorts:

  Liquidation Price = Entry Price × (1 + InitialMarginRate - MaintenanceMarginRate)

Given:
- Entry Price = 0.002 BTC
- Leverage = 10x → InitialMarginRate = 1/10 = 0.1 (10%)
- MaintenanceMarginRate = 0.05 (5%)

= 0.002 × (1 - 0.1 + 0.05) = 0.002 × 0.95 = 0.0019 BTC

So if the Mark Price drops to 0.0019 BTC, your position is in liquidation territory. That's when Roxom closes you out to protect your margin from going negative.
