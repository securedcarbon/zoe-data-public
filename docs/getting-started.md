# Getting Started with ZOE API

**Zone Opportunity Engine (ZOE)** provides location-based data for battery energy storage system (BESS) project planning.

---

## Free Tier Quick Start

### 1. Access Sample Data via CDN

No authentication required. Use jsDelivr CDN to fetch sample datasets:

```javascript
const url = 'https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/samples/census/tracts-ca-sample.json';
const tracts = await fetch(url).then(r => r.json());

console.log(`Loaded ${tracts.length} census tracts`);
```

### 2. Understand the Schema

Validate your usage with JSON schemas:

```javascript
const schemaUrl = 'https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/schemas/tract.schema.json';
const schema = await fetch(schemaUrl).then(r => r.json());
```

### 3. Explore Available Data

Free tier includes:
- **Census Tracts:** ~100 California tracts
- **Demographics:** California only
- **ITC Rates:** Current year federal tax credits
- **State Incentives:** Current SGIP step (California)
- **ISO Markets:** Major CAISO pricing nodes

See [Data Dictionary](data-dictionary.md) for field definitions.

---

## Upgrade to Pro

### Why Upgrade?

| Feature | Free | Pro ($79/mo) |
|---------|------|--------------|
| Census Tracts | 100 (CA) | 85,000+ (all US) |
| Demographics | CA only | All states |
| ITC Rates | Current year | Full history |
| State Incentives | Current step | All programs, all states |
| ISO Markets | Major nodes | All nodes + real-time |
| Utility Rates | 10 utilities | 500+ utilities |
| Updates | Annual | Monthly |

### Get API Key

1. Visit [https://securedcarbon.com/zoe/pricing](https://securedcarbon.com/zoe/pricing)
2. Select Pro tier
3. Receive API key via email
4. Update your code:

```javascript
const response = await fetch('https://zoe.securedcarbon.com/v1/census/tracts?state=CA', {
  headers: {
    'Authorization': `Bearer YOUR_API_KEY`
  }
});
const tracts = await response.json();
```

---

## Next Steps

- [API Endpoints](endpoints.md) - Full API reference
- [Data Dictionary](data-dictionary.md) - Field definitions
- [Integration Examples](../examples/) - Code samples

---

## Support

**Free Tier:** Community support via [GitHub Issues](https://github.com/securedcarbon/zoe-data-public/issues)

**Pro/Team/Enterprise:** Email support@securedcarbon.com
