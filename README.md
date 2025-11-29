# ZOE Data Platform - Public Repository

**Zone Opportunity Engine (ZOE)** - Sample data, schemas, and documentation for the ZOE API.

---

## What is ZOE?

ZOE is a comprehensive data API providing location-based energy, financial incentive, and demographic data for battery energy storage system (BESS) project planning.

**Free Tier Access:**
- Sample datasets (100 records per category)
- Complete JSON schemas
- API documentation
- Integration examples

**Upgrade to Pro:**
- Full datasets (85,000+ census tracts)
- Monthly data refreshes
- Premium data sources
- Priority support

Learn more: [https://securedcarbon.com/zoe](https://securedcarbon.com/zoe)

---

## Repository Contents

```
zoe-data-public/
├── schemas/              # JSON schemas for all data types
├── samples/              # Sample datasets (100 records each)
│   ├── census/          # Census tract samples (CA only)
│   ├── federal/         # Federal program samples (current year)
│   ├── state-incentives/# State incentive samples
│   └── iso-markets/     # ISO market pricing samples
├── docs/                # API documentation
└── examples/            # Integration examples
```

---

## Quick Start

### Access Sample Data via jsDelivr CDN

```javascript
// Fetch California census tract sample
const url = 'https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@v2024.1/samples/census/tracts-ca-sample.json';
const data = await fetch(url).then(r => r.json());
```

### Validate Against Schemas

```javascript
// Get JSON schema for census tracts
const schema = await fetch('https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/schemas/tract.schema.json')
  .then(r => r.json());
```

---

## Data Categories

| Category | Sample Size | Full Dataset (Pro) | Update Frequency |
|----------|-------------|-------------------|------------------|
| Census Tracts | 100 (CA only) | 85,000+ (all US) | Annual → Monthly |
| Demographics | CA only | All states | Annual → Monthly |
| ITC Rates | Current year | Full history | Annual → Monthly |
| State Incentives | Current step | All programs | Annual → Weekly |
| ISO Markets | Major nodes | All nodes | Static → Real-time |
| Utility Rates | 10 utilities | 3,000+ utilities | Annual → Weekly |

---

## Schemas

All data conforms to published JSON schemas in the `schemas/` directory:

- `tract.schema.json` - Census tract geography
- `demographics.schema.json` - Population and economic data
- `incentive.schema.json` - State incentive programs
- `rate.schema.json` - Utility rate structures
- `lmp.schema.json` - ISO locational marginal pricing
- `energy-community.schema.json` - Federal energy community definitions

---

## API Access

**Free Tier:**
- Direct CDN access (jsDelivr)
- No authentication required
- Sample data only
- Annual updates

**Pro Tier ($79/month):**
- Full API access via ZOE Worker
- API key authentication
- Complete datasets
- Monthly updates

**Team Tier ($249/month):**
- Multi-user access
- Weekly updates
- Historical data archives
- Webhook notifications

**Enterprise:**
- Daily updates
- Custom integrations
- SLA guarantees
- Dedicated support

Contact: sales@securedcarbon.com

---

## Integration Examples

### JavaScript
```javascript
// See examples/javascript/fetch-incentives.js
import { ZOEClient } from '@securedcarbon/zoe-sdk';

const client = new ZOEClient({ tier: 'free' });
const tracts = await client.census.getTracts({ state: 'CA' });
```

### Python
```python
# See examples/python/fetch_incentives.py
from zoe_sdk import ZOEClient

client = ZOEClient(tier='free')
tracts = client.census.get_tracts(state='CA')
```

### cURL
```bash
# See examples/curl/fetch-incentives.sh
curl "https://cdn.jsdelivr.net/gh/securedcarbon/zoe-data-public@main/samples/census/tracts-ca-sample.json"
```

---

## Documentation

- [Getting Started](docs/getting-started.md) - First steps with ZOE API
- [Endpoints](docs/endpoints.md) - API endpoint reference
- [Data Dictionary](docs/data-dictionary.md) - Field definitions
- [Upgrade Guide](docs/upgrade-guide.md) - Migrating from Free to Pro

---

## License

- **Schemas:** MIT License (open standard)
- **Sample Data:** CC-BY 4.0 (attribution required)
- **Full Data:** Proprietary (Pro/Team/Enterprise tiers only)

See [LICENSE](LICENSE) for details.

---

## Related Repositories

- `securedcarbon/zoe-data` (private) - Full datasets for paid tiers
- `securedcarbon/bess-calculator` (private) - BESS Calculator application

---

## Support

- Free Tier: Community support via GitHub Issues
- Pro/Team/Enterprise: Email support@securedcarbon.com

---

## Versioning

Releases follow semantic versioning: `vYYYY.N`

- `v2024.1` - Initial public release (2024 data)
- `v2024.2` - Q2 update (coming soon)

---

**ZOE** - Powering location-based BESS project planning
