---
label: "Part 2: The Three Pillars"
icon: stack
order: 120
---

# Part 2: The Three Pillars of Derivatives

A deep dive on Open Interest, Funding Rate & Leverage.

Now that you know how futures came about, let's dive into the three essential metrics you'll see on any derivatives trading platform. Master these, and you're halfway to becoming a Roxomite Derivatives Pro Trader.

## Open Interest: How Crowded Is the Party?

Open Interest (OI) is the total number of active contracts (long or short) that haven't been closed or settled. If the OI goes up, it means more new positions are opening; if OI goes down, it means traders are closing positions or getting liquidated.

### Why It Matters:

1. **Market Participation**: High OI often indicates a more liquid, possibly trend-driven market, so more people are in the game.

2. **Trend Strength**: OI rising along with the price can signal a robust trend. If price is climbing but OI is falling, the rally might be losing steam.

### Quick Example:
- If the price of BTC is rising and OI also ramps up, it means new money is jumping on the train, which could push the price momentum further.
- If OI collapses after a big move, it might indicate a wave of profit-taking or forced liquidations.

!!! Think of OI like the number of dancers on a dance floor. If more people keep joining (OI up), the party's hot. If people vanish (OI down) but the music's still playing, the vibe might die out soon, better exit before everyone's gone...
!!!

### Cheatsheet:
- If price ⬆️ and OI ⬆️ → **bullish**, new participants are entering the up trending market, fresh longs)
- If price ⬆️ and OI ⬇️ → **moderately bullish**, price is up but probably shorts closing/getting liquidated more than longs entering.
- If price ⬇️ and OI ⬆️ → **bearish**, new participants are entering the down trending market, fresh shorts)
- If price ⬇️ and OI ⬇️ → **moderately bearish**, price is down but probably longs closing/getting liquidated more than shorts entering.

## Funding Rate: Who Pays the debt?

Unique to perpetual futures, the funding rate is a periodic payment exchanged between longs and shorts:

- If the perpetual contract price is **above** the spot price, *longs pay shorts*.
- If the perpetual contract price is **below** the spot price, *shorts pay longs*.

This mechanism helps the contract price to mirror the spot market more closely.

### Why It Matters:

1. **Cost of Holding a Position**: If you're long in a positively skewed market, you'll pay funding fees, which will hurt your profits.

2. **Sentiment Tip**: A very high positive funding rate can mean the market's overheated with aggressive longs, even my mom is long, so a reversal may be just around the corner. Conversely, extremely negative funding can indicate panic selling, which may be a nice place to buy...

!!! Think of the Funding Rate (FR) as a great indicator of looking at overcrowded markets. If the FR is too high, it means that speculative degens are the ones trying to push the price (since futures price would be higher than spot price) which is not a good indication of continuation of trend. We want to see the big guys (spot buys) entering the market to keep prices green.
!!!

### Cheatsheet:
- If price ⬆️ and FR ⬇️ → **bullish**, prices are trending with spot buys in a healthy manner.
- If price ⬇️ and FR ⬇️ → **moderately bullish**, price is down but funding is cooling down as well which means that either spot buys are starting to enter, or shorts are getting too horny.
- If price ⬇️ and FR ⬆️ → **bearish**, price is down and longs are still trying to win a lost fight, probably liquidations will begin soon.
- If price ⬆️ and FR ⬆️ → **moderately bearish**, price is up but longs are getting horny which might be indicative of a wipeout soon.

## Leverage: The Good, The Bad, and The Liquidated

Leverage is like the hot sauce of trading: a little can spice things up, but drench your plate and you might ruin the meal.

### Leverage 101: What Is It?

In simple terms, leverage is using borrowed money (margin) in this case from the exchange, to make a bigger trade than your account balance would allow. For example:

- You have $1,000 in your trading account.
- You take a 10x levered position on BTC.
- You now control $10,000 worth of BTC instead of just $1,000.

**The Catch**: Any gains (or losses) are calculated on the full $10,000 position, not just your $1,000 deposit. Having a 1x or 10x leverage for taking a position of $10,000 will amount for the same PNL, what will change is your liquidation price and risk.

### Key Concepts: Margin & Liquidation

1. **Initial Margin**: The capital you need to open a leveraged position. If you're using 10x leverage, your initial margin is 1/10 of the total trade size.

2. **Maintenance Margin**: The minimum amount of equity you must maintain to keep your position open. If your losses eat into this cushion, the exchange will liquidate (close) your position automatically. Think of it as the guarantee your holding for the exchange to trust on lending you the money.

3. **Liquidation**:
   a. When your account's equity drops below the maintenance margin, the party's over. The exchange closes your trade to prevent going negative.
   b. Liquidations can happen *fast* in volatile markets, especially if you're using high leverage.

!!! Quick Catch: The higher the leverage, the closer your liquidation price is to your entry. Even a small dip against you can trigger a margin call or liquidation.
!!!

### Real-World Example: The 5% Swing

Let's put this into numbers for a BTC trade:

- **Scenario**: You have $2,000 and go 5x long on BTC, that means you're controlling a $10,000 position size.
- **If BTC Rises by 5%**:
  - Your position is now worth $10,500.
  - Your profit is $500 on a $2,000 account → a 25% gain. (*Not bad!*)
- **If BTC Falls by 5%**:
  - Your 0.5 BTC is now worth $9,500. You entered at $10,000.
  - Your loss is $500, which is 25% of your $2,000. (*Ouch!*)
- **If BTC Drops 10%?** You could be staring at a potential 50% loss, or worse. Keep going, and liquidation risk will be knocking on your door before you know it.

This is why leverage is a double-edged sword. *Small market moves become massive swings in your PnL.*

### Wrapping It Up: Handle With Care

Leverage is not the villain—*misuse* of leverage is. Used responsibly, it can:
- Optimize your capital (you don't tie up all your funds in one position).
- Boost profits on carefully planned trades.

!!! Key Takeaway: Leverage is the ultimate high-risk, high-reward tool. Master it with discipline and respect, and it can be a powerful ally. Abuse it out of greed or impatience, and it'll be your undoing, faster than you can say "margin call."
!!!

Now that we've spiced up the leverage section, take a deep breath, do a quick "risk check," and let's move on to bigger and better things in the School of Roxom.

Rock on folks, and may leverage always work in your favor.
