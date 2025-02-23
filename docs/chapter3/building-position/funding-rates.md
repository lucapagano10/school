---
label: "Funding Rates"
icon: sync
order: 357
---

# Funding Rates

With perpetual futures, Roxom uses a Funding Rate paid every 8 hours to keep prices aligned with the underlying:

Funding Rate = Premium Index + Interest Rate

where:

Premium Index = (Mark Price - Index Price) / Index Price,  Interest Rate = 0.1% per day (≈ 0.033% per 8 hours)

- If Mark Price > Index Price: Longs pay, Shorts receive (the market is bullish, so longs must compensate shorts for the price premium).
- If Mark Price < Index Price: Shorts pay, Longs receive (the market is bearish, so shorts compensate longs).

## Funding Payment Calculation

Funding Payment = Position Value × Funding Rate

Your "Position Value" uses the Mark Price × Number of Contracts. If it's positive funding and you're long, you're paying out. Over time, that can nibble away at your profits so be sure to keep an eye on it!

With perpetual futures, Roxom uses a Funding Rate paid every 8 hours to keep prices aligned with the underlying. Let's assume a flat 0.1% funding rate in this example:

- Funding Rate (8 hours): 0.1% = 0.001 in decimal.
- Position Value: 0.01 BTC (from above).

## Funding Payment Calculation

Funding Payment = Position Value × Funding Rate = 0.01 BTC × 0.001 = 0.00001 BTC

That's 0.00001 BTC paid (or received, depending on whether the market has you paying or earning the funding). If 1 BTC = $100k, that's roughly $1 over each 8-hour period. Multiply that by multiple days, and it can add up, so watch the funding rate closely.
