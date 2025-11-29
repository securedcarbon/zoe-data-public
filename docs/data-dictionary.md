# ZOE Data Dictionary

Field definitions for all ZOE data types.

---

## Census Tract

Schema: `schemas/tract.schema.json`

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `geoid` | string | 11-digit FIPS code | "06037260100" |
| `state` | string | 2-letter state code | "CA" |
| `county` | string | County name | "Los Angeles" |
| `geometry` | GeoJSON | Tract boundary polygon | {...} |

---

## Demographics

Schema: `schemas/demographics.schema.json`

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `geoid` | string | 11-digit FIPS code | "06037260100" |
| `population` | number | Total population | 4235 |
| `median_income` | number | Median household income ($) | 68500 |
| `poverty_rate` | number | Poverty rate (0-1) | 0.12 |

---

## State Incentive

Schema: `schemas/incentive.schema.json`

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `program_id` | string | Unique program identifier | "CA-SGIP-2024" |
| `state` | string | 2-letter state code | "CA" |
| `program_name` | string | Display name | "SGIP Equity Budget" |
| `rate` | number | Incentive rate ($/kWh) | 0.85 |
| `eligible_sectors` | array | Sectors allowed | ["residential", "commercial"] |

---

## ITC Rates

Schema: `schemas/itc-rate.schema.json`

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `year` | number | Tax year | 2024 |
| `base_rate` | number | Base ITC rate (0-1) | 0.30 |
| `bonus_eligible` | boolean | Eligible for bonus credit | true |
| `energy_community_bonus` | number | Energy community adder (0-1) | 0.10 |

---

## ISO Market (LMP)

Schema: `schemas/lmp.schema.json`

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `node_id` | string | Pricing node identifier | "CAPTJCK_7_N001" |
| `iso` | string | ISO market | "CAISO" |
| `node_name` | string | Human-readable name | "Captain Jack" |
| `latitude` | number | Latitude | 34.0522 |
| `longitude` | number | Longitude | -118.2437 |

---

## Energy Community

Schema: `schemas/energy-community.schema.json`

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `geoid` | string | 11-digit FIPS code | "06037260100" |
| `is_energy_community` | boolean | Qualifies as energy community | true |
| `criteria` | array | Qualifying criteria met | ["coal_closure", "brownfield"] |
| `bonus_credit` | number | Available bonus credit (0-1) | 0.10 |

---

For complete schema definitions, see the `schemas/` directory.
